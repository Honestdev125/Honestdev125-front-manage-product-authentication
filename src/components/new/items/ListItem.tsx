import React, { useState, useRef, useEffect } from "react";
import styles from "./item.module.css";
import { useJsonData } from "../BlogJsonDataContext";

const ListItem = ({ item_id }: {item_id: string}) => {
    const { jsonData, setJsonData } = useJsonData();
    const [items, setItems] = useState<string[]>(['']);
    const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

    const saveJsonData = (items: any) => {
        const itemsData = Array.isArray(jsonData?.itemsData) ? jsonData.itemsData : [];
        const updatedJsonData = { ...jsonData, itemsData: [...itemsData] };
        const targetIndex = updatedJsonData.itemsData.findIndex((item: any) => item.id === item_id);
        if (targetIndex !== -1) {
            const updatedItem = {
                ...updatedJsonData.itemsData[targetIndex],
                itemData: { ...updatedJsonData.itemsData[targetIndex].itemData, lists: items }
            };
            updatedJsonData.itemsData[targetIndex] = updatedItem;
            setJsonData(updatedJsonData);
        }
    }

    const adjustHeight = (textarea: HTMLTextAreaElement) => {
        let tRows = textarea.textContent?.split(/\r|\r\n|\n/).length as number;
        if(tRows < 2){
            textarea.style.height = '46px';
        }
        else {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>, index: number) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const newItems = [...items];
            newItems.splice(index + 1, 0, '');
            setItems(newItems);

            setTimeout(() => {
                const nextTextarea = textAreaRefs.current[index + 1];
                if (nextTextarea) {
                    nextTextarea.focus();
                    adjustHeight(nextTextarea);
                }
            }, 0);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newItems = [...items];
        newItems[index] = event.target.value;
        setItems(newItems);
        saveJsonData(newItems);
        adjustHeight(event.target);
    };

    useEffect(() => {
        textAreaRefs.current.forEach(textarea => {
            if (textarea) adjustHeight(textarea);
        });
    }, [items]);

    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li key={index}>
                    <p>{index + 1}</p>
                    <textarea
                        ref={el => textAreaRefs.current[index] = el}
                        value={item}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyPress(e, index)}
                        className="w-full overflow-y-hidden text-lg resize-none border-b border-blue-gray-200 pt-2 pb-1.5 bg-transparent text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    />
                </li>
            ))}
        </ul>
    );
};

export default ListItem;
