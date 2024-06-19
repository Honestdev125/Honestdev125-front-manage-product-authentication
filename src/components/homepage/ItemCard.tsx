import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./homepage.module.css";

const ItemCard = ({ data }: any) => {
  return (
    <div className={styles["item__section--card"]}>
      <div className={styles["item__section--card-img"]}>
        <Image
          height={120}
          width={120}
          src={data.icon_url}
          alt="ポイントが貯まる・使える"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles["item__section--card-text"]}>
          <h3>ポイント機能</h3>
          <p>
            買うたびにポイントが貯まり、1ポイント=1円で利用できます。(1,000ポイント以上でAmazonギフト券と交換可)
          </p>
      </div>
    </div>
  );
};

export default ItemCard;
