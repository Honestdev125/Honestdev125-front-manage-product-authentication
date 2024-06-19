import React from "react";
import Image from "next/image";
import { useJsonData } from "../BlogJsonDataContext";

const LinkItem = ({item_id}: {item_id: string}) => {
    const { jsonData, setJsonData } = useJsonData();
    const handleChangeLinkItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const itemsData = Array.isArray(jsonData?.itemsData) ? jsonData.itemsData : [];
        const updatedJsonData = { ...jsonData, itemsData: [...itemsData] };
        const targetIndex = updatedJsonData.itemsData.findIndex((item: any) => item.id === item_id);
        if (targetIndex !== -1) {
            const updatedItem = {
                ...updatedJsonData.itemsData[targetIndex],
                itemData: { ...updatedJsonData.itemsData[targetIndex].itemData, linkText: value }
            };
            updatedJsonData.itemsData[targetIndex] = updatedItem;
            setJsonData(updatedJsonData);
        }
    };
    return (
        <div className="flex border bg-gray-50 border-gray-300">
            <Image src="/assets/front/image/newBlog/icons/link.svg" alt="link" width={24} height={24} className="mx-2"/>
            <input type="text" onChange={handleChangeLinkItem}
            className="bg-gray-50 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="文章を入力" required />
        </div>
    )
}

export default LinkItem;