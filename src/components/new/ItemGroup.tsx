import React, { use, useState, useEffect } from "react";
import ItemBox from "./ItemBox";

import {useJsonData} from './BlogJsonDataContext';
import { json } from "stream/consumers";

export type CompType = 'TEXT' | 'IMAGE' | 'TABLE' | 'LIST' | 'HEADER' | 'LINK' | 'ATTACH';

interface Item {
    id: string;
    type: CompType;
}

interface ItemsData {
    [key: string]: any;
}

const ItemGroup = () => {
    const { jsonData, setJsonData } = useJsonData();
    useEffect(() => {
        setJsonData({...jsonData, itemsData: [{ id: "firstItem", type: 'TEXT', itemData: {} }]});
      }, []);

    const saveItems = (updatedItems: ItemsData[]) => {
        setJsonData({ ...jsonData, itemsData: updatedItems })
    }

    const handleClickNewItem = (newType: CompType, index: number) => {
        const newItem = {
            id: Date.now().toString(),
            type: newType,
            itemData: {}
        };

        const updatedItems = [...jsonData?.itemsData];
        updatedItems.splice(index + 1, 0, newItem);
        saveItems(updatedItems);
    };

    const swapElement = (arr: any[], i: number, j: number) => {
        if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
            console.log("Invalid index number");
            return;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    const handleClickUpItem = (index: number) => {
        const updatedItems = [...jsonData?.itemsData];
        swapElement(updatedItems, index, index - 1);
        saveItems(updatedItems);
    };

    const handleClickDownItem = (index: number) => {
        const updatedItems = [...jsonData?.itemsData];
        swapElement(updatedItems, index, index -+ 1);
        saveItems(updatedItems);
    };

    const handleDeleteItem = (id: string) => {
        const currentItems = [...jsonData?.itemsData];
        if (currentItems.length == 1) return;
        const updatedSaveItems = currentItems.filter(item => item.id !== id)
        saveItems(updatedSaveItems);
    };

    return (
        <div className="pb-40">
            {jsonData?.itemsData?.map((item: Item, index: number) => (
                <ItemBox
                    key={item.id}
                    onClickNewItem={handleClickNewItem}
                    onDeleteItem={() => handleDeleteItem(item.id)}
                    onClickUpItem={handleClickUpItem}
                    onClickDownItem={handleClickDownItem}
                    item={item}
                    item_num={index}
                />
            ))}
        </div>
    )
}

export default ItemGroup;
