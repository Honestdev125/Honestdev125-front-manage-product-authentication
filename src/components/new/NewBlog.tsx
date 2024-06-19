"use client"
import React, { useState, createContext, useContext } from "react";
import styles from "./blog.module.css"

import ThumbnailBox from "./ThumbnailBox";
import ItemGroup from "./ItemGroup";

import { useJsonData, JsonDataProvider } from './BlogJsonDataContext';


export const NewBlog = () => {
    const { jsonData, setJsonData } = useJsonData();
    const handlePublickClick = () => {
        console.log('pulbic--', jsonData);
    } 

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setJsonData({ ...jsonData, title: value });
    }

    return (
        <div className="w-full flex justify-center bg-white py-10 min-h-[800px]">
            <div className="w-full max-w-[980px]">
                <div className={styles["thumbnail-area"]}>
                    <ThumbnailBox />
                </div>
                <div className="w-full">
                    <input onChange={handleChangeTitle}
                        type="text" id="blog_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 outline-none" placeholder="タイトルを入力" required />
                </div>
                <ItemGroup />
                <div className="flex justify-end font-NotoSans">
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        プレビュー
                    </button>
                    <button onClick={handlePublickClick}
                        type="button" className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-600">
                        公開する
                    </button>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        キャンセル
                    </button>
                </div>
            </div>
        </div>
    );
};

const NewBlogWithProvider = () => (
    <JsonDataProvider>
        <NewBlog />
    </JsonDataProvider>
);

export default NewBlogWithProvider;
