import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop";
import imageCompression from 'browser-image-compression';
import styles from './blog.module.css';
import { Range } from 'react-range';
import Modal from "./Modal";

import {useJsonData} from './BlogJsonDataContext';

const ThumbnailBox = () => {
    const { jsonData, setJsonData } = useJsonData();
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const cropSize = { width: 560, height: 300 };
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(file, options);

            const reader = new FileReader();
            reader.onload = (e: any) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(compressedFile);
            setShowModal(true);
        } catch (error) {
            console.error('Error compressing file:', error);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleZoomChange = (value: number[]) => {
        setZoom(value[0]);
    };

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.crossOrigin = 'anonymous';
            image.onload = () => resolve(image);
            image.onerror = (error) => reject(error);
        });

    const getCroppedImg = async (imageSrc: string, crop: Area): Promise<string> => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Canvas context is not available');
        }

        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.drawImage(
            image,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise<string>((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                } else {
                    reject(new Error('Canvas is empty'));
                }
            }, 'image/jpeg');
        });
    };

    const showCroppedImage = async () => {
        try {
            if (!imageSrc || !croppedAreaPixels) return;
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            setShowModal(false);
            await setCroppedImage(croppedImage);
            setJsonData({ ...jsonData, thumbnailImage: imageSrc });
        } catch (error) {
            console.error('Error cropping image:', error);
        }
    };

    return (
        <div className="App">
            {(croppedImage) ? (
                <div className={styles.dropzone} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img src={croppedImage} alt="Cropped" className={styles.previewImage} />
                </div>
            ) :
                (
                    <div className={styles.dropzone} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className={styles["dropify-form-group"]} id="dropify_image_path">
                            <div className={styles["dropify-wrapper"]}>
                                <div className="dropify-message">
                                    <p>画像をアップロード(推奨サイズ:720×378px以上)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            <div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)} onConfirm={showCroppedImage}>
                        <div className={styles["crop-modal"]}>
                            {imageSrc && (
                                <div className={styles.cropContainer}>
                                    <Cropper
                                        image={imageSrc}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={4 / 3}
                                        onCropChange={setCrop}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                        cropSize={cropSize}
                                    />
                                </div>
                            )}
                            <div className={styles.sliderContainer}>
                                <Range
                                    step={0.1}
                                    min={1}
                                    max={3}
                                    values={[zoom]}
                                    onChange={handleZoomChange}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '6px',
                                                width: '100%',
                                                backgroundColor: '#ccc',
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            key="range"
                                            style={{
                                                ...props.style,
                                                height: '20px',
                                                width: '20px',
                                                backgroundColor: '#999',
                                                borderRadius: '50%',
                                                outline: 'none',
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ThumbnailBox;
