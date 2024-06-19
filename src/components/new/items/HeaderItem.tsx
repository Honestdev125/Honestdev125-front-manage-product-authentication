import React from "react";
import styles from "./item.module.css";
import { useJsonData } from "../BlogJsonDataContext";

interface HeaderItemProps {
    item_id: string;
}

const HeaderItem = ({ item_id }: HeaderItemProps) => {
    const { jsonData, setJsonData } = useJsonData();
    const handleChangeHeaderItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const itemsData = Array.isArray(jsonData?.itemsData) ? jsonData.itemsData : [];
        const updatedJsonData = { ...jsonData, itemsData: [...itemsData] };
        const targetIndex = updatedJsonData.itemsData.findIndex((item: any) => item.id === item_id);
        if (targetIndex !== -1) {
            const updatedItem = {
                ...updatedJsonData.itemsData[targetIndex],
                itemData: { ...updatedJsonData.itemsData[targetIndex].itemData, headerText: value }
            };
            updatedJsonData.itemsData[targetIndex] = updatedItem;
            setJsonData(updatedJsonData);
        }
    };
    return (
        <div>
            <input type="text" onChange={handleChangeHeaderItem}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 outline-none" placeholder="文章を入力" required />
        </div>
    )
}

export default HeaderItem;