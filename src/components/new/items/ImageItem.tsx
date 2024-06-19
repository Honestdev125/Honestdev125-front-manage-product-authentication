import React, { useState, useEffect } from "react";
import styles from "./item.module.css";
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import { useJsonData } from "../BlogJsonDataContext";

interface FileWithPreview extends File {
    preview: string;
}

const ImageItem = ({item_id}: {item_id: String}) => {
    const { jsonData, setJsonData } = useJsonData();
    const [file, setFile] = useState<FileWithPreview | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        const acceptedFile = acceptedFiles[0];
        if (acceptedFile) {
            const fileWithPreview = Object.assign(acceptedFile, {
                preview: URL.createObjectURL(acceptedFile)
            });
            setFile(fileWithPreview);
            saveFileToJosnData(fileWithPreview);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false
    });

    const saveFileToJosnData = (updatedFile: FileWithPreview) => {
        const itemsData = Array.isArray(jsonData?.itemsData) ? jsonData.itemsData : [];
        const updatedJsonData = { ...jsonData, itemsData: [...itemsData] };
        const targetIndex = updatedJsonData.itemsData.findIndex((item: any) => item.id === item_id);
        if (targetIndex !== -1) {
            const updatedItem = {
                ...updatedJsonData.itemsData[targetIndex],
                itemData: { ...updatedJsonData.itemsData[targetIndex].itemData, imageSrc: updatedFile.preview, imageName: updatedFile.name}
            };
            updatedJsonData.itemsData[targetIndex] = updatedItem;
            setJsonData(updatedJsonData);
        }
    }

    useEffect(() => {
        return () => {
            if (file) {
                URL.revokeObjectURL(file.preview);
            }
        };
    }, [file]);

    return (
        <div>
            {(!file) ? (
                <div {...getRootProps()} className={styles.dropzone}>
                    <input {...getInputProps()} />
                    <Image src="/assets/front/image/newBlog/icons/fileUpload.svg" alt="drag and drop" width={50} height={50} />
                </div>
            ) : (
                <div {...getRootProps()} className={styles["file-preview"]}>
                    <div className={styles["file-mosaic"]}>   
                        <img src={file.preview} alt={file.name} />
                        <p>{file.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageItem;
