"use client";
import Image from "next/image";
import HeartCheckbox from "./HeartCheck";
import styles from "./main.module.css";
import MainSwiper from "./MainSwiper";

const recommended_cards = [
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
    {
        category: "ライフスタイル",
        link: "/recomm/01",
        title: "GW最終日　不安や心配になるな！楽しめ",
        image: "/assets/front/image/mainpage/rec_01.png",
        clap: 2,
        favorite: false,
        user_avatar: "/assets/front/image/mainpage/user_avatar.png",
        user_name: "sainyomisuki",
        user_access: "16時間前",
        user_link: "/sainyomisuki",
    },
]



const Main = () => {

    const handleCheckboxChange = (id: number, val: boolean) => {
        console.log("HearCheck Event : ", id, val)
    };


    return (
        <>
            <MainSwiper />
            <div className="flex justify-center font-NotoSans">
                <div className={styles["container-lg"]}>
                    <h1 className={styles["container--h1"]}>注目記事</h1>
                    <div className={styles["card-section"]}>
                        {recommended_cards.map((item: any, index: number) => (
                            <div className={styles["card-item"]} key={index}>
                                <div className={styles["card-item-top"]}>
                                    <div className={styles["card-item-top-img"]}>
                                        <Image src={item.image} height={100} width={150} alt={item.category} />
                                    </div>
                                    <div className={styles["card-item-top-category"]}>
                                        {item.category}
                                    </div>
                                    <div className={styles["card-item-top-like"]}>
                                        <HeartCheckbox onChange={(val) => handleCheckboxChange(item.id, val)} />
                                    </div>
                                </div>
                                <div className={styles["card-item-bottom"]}>
                                    <div className={styles["card-item-bottom-title"]}>
                                        {item.title}
                                    </div>
                                    <div className={styles["card-item-bottom-clap"]}>
                                        <div>
                                            <Image src="/assets/front/image/mainpage/clap.svg" alt="clap-svg" width={500} height={500} />
                                        </div>
                                        <div>
                                            {item.clap}
                                        </div>
                                    </div>
                                    <div className={styles["card-item-bottom-user"]}>
                                        <div className={styles["card-item-bottom-user-avatar"]}>
                                            <Image src={item.user_avatar} alt="avatar-0098" width={500} height={500} />
                                        </div>
                                        <div>
                                            <div className={styles["card-item-bottom-user-name"]}>
                                                {item.user_name}
                                            </div>
                                            <div className={styles["card-item-bottom-user-access"]}>
                                                {item.user_access}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className={styles["container--h1"]}>注目記事</h1>
                    <div className={styles["card-section"]}>
                        {recommended_cards.map((item: any, index: number) => (
                            <div className={styles["card-item"]} key={index}>
                                <div className={styles["card-item-top"]}>
                                    <div className={styles["card-item-top-img"]}>
                                        <Image src={item.image} height={100} width={150} alt={item.category} />
                                    </div>
                                    <div className={styles["card-item-top-category"]}>
                                        {item.category}
                                    </div>
                                    <div className={styles["card-item-top-like"]}>
                                        <HeartCheckbox onChange={(val) => handleCheckboxChange(item.id, val)} />
                                    </div>
                                </div>
                                <div className={styles["card-item-bottom"]}>
                                    <div className={styles["card-item-bottom-title"]}>
                                        {item.title}
                                    </div>
                                    <div className={styles["card-item-bottom-clap"]}>
                                        <div>
                                            <Image src="/assets/front/image/mainpage/clap.svg" alt="clap-svg" width={500} height={500} />
                                        </div>
                                        <div>
                                            {item.clap}
                                        </div>
                                    </div>
                                    <div className={styles["card-item-bottom-user"]}>
                                        <div className={styles["card-item-bottom-user-avatar"]}>
                                            <Image src={item.user_avatar} alt="avatar-0098" width={500} height={500} />
                                        </div>
                                        <div>
                                            <div className={styles["card-item-bottom-user-name"]}>
                                                {item.user_name}
                                            </div>
                                            <div className={styles["card-item-bottom-user-access"]}>
                                                {item.user_access}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className={styles["container--h1"]}>注目記事</h1>
                    <div className={styles["card-section"]}>
                        {recommended_cards.map((item: any, index: number) => (
                            <div className={styles["card-item"]} key={index}>
                                <div className={styles["card-item-top"]}>
                                    <div className={styles["card-item-top-img"]}>
                                        <Image src={item.image} height={100} width={150} alt={item.category} />
                                    </div>
                                    <div className={styles["card-item-top-category"]}>
                                        {item.category}
                                    </div>
                                    <div className={styles["card-item-top-like"]}>
                                        <HeartCheckbox onChange={(val) => handleCheckboxChange(item.id, val)} />
                                    </div>
                                </div>
                                <div className={styles["card-item-bottom"]}>
                                    <div className={styles["card-item-bottom-title"]}>
                                        {item.title}
                                    </div>
                                    <div className={styles["card-item-bottom-clap"]}>
                                        <div>
                                            <Image src="/assets/front/image/mainpage/clap.svg" alt="clap-svg" width={500} height={500} />
                                        </div>
                                        <div>
                                            {item.clap}
                                        </div>
                                    </div>
                                    <div className={styles["card-item-bottom-user"]}>
                                        <div className={styles["card-item-bottom-user-avatar"]}>
                                            <Image src={item.user_avatar} alt="avatar-0098" width={500} height={500} />
                                        </div>
                                        <div>
                                            <div className={styles["card-item-bottom-user-name"]}>
                                                {item.user_name}
                                            </div>
                                            <div className={styles["card-item-bottom-user-access"]}>
                                                {item.user_access}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Main;