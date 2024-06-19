import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import HeartIcon from "./HeartIcon";

interface HeartCheckbox {
    onChange?: (val: boolean) => void
}

const HeartCheckbox = ({
    onChange = () => { }
}: HeartCheckbox) => {
    const [filled, setFilled] = useState<boolean>(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.checked
        setFilled(val);
        onChange(val)
    }

    return (
        <Checkbox icon={<HeartIcon filled={filled} size={24} height={24} width={24} label="Heart" />} onChange={handleCheckboxChange} ></Checkbox>
    )
}

export default HeartCheckbox;