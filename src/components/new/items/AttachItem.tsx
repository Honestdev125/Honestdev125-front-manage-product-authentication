import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from "./item.module.css";
import Image from 'next/image';
import { useJsonData } from "../BlogJsonDataContext";

interface FileWithPreview extends File {
    preview: string;
}

const DropzoneComponent = ({item_id}: {item_id: string}) => {
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
    });

    const saveFileToJosnData = (updatedFile: FileWithPreview) => {
        const itemsData = Array.isArray(jsonData?.itemsData) ? jsonData.itemsData : [];
        const updatedJsonData = { ...jsonData, itemsData: [...itemsData] };
        const targetIndex = updatedJsonData.itemsData.findIndex((item: any) => item.id === item_id);
        if (targetIndex !== -1) {
            const updatedItem = {
                ...updatedJsonData.itemsData[targetIndex],
                itemData: { ...updatedJsonData.itemsData[targetIndex].itemData, imageSrc: updatedFile.preview, imageName: updatedFile.name }
            };
            updatedJsonData.itemsData[targetIndex] = updatedItem;
            setJsonData(updatedJsonData);
        }
    }

    return (
        <div>
            <div {...getRootProps()} className={styles["dropzone"]}>
                <input {...getInputProps()} />
                <Image src="/assets/front/image/newBlog/icons/fileUpload.svg" alt="drap and drop" width={50} height={50} />
            </div>

            {(!file) ? (
                <></>) : (
                <div className={styles["file-preview"]}>

                    <div className={styles["file-mosaic"]}>
                        <Image src="/assets/front/image/newBlog/icons/upload.svg" alt={file.name} width={50} height={50} />
                        <p>{file.name}</p>
                    </div>

                </div>
            )}

        </div>
    );
};

export default DropzoneComponent;
