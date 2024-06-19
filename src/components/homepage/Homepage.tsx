import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./homepage.module.css";
import ItemCard from "./ItemCard";

const service_item_lists = [
  {
    icon_url: "/assets/front/image/homepage/point.svg",
    heading: "ポイント機能",
    description:
      "買うたびにポイントが貯まり、1ポイント=1円で利用できます。(1,000ポイント以上でAmazonギフト券と交換可)",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/questionnaire.svg",
    heading: "アンケートの設置",
    description:
      "用意してあるアンケートから、購入者に聞きたいことを任意に設定することができます。",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/chat.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/pdf.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/coupon.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/period.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/present.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/url.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/seo.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/sales.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/set.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/mintyou.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/bgselect.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/fileupload.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/tips-affiliate.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
];

const member_item_lists = [
  {
    icon_url: "/assets/front/image/homepage/point.svg",
    heading: "ポイント機能",
    description:
      "買うたびにポイントが貯まり、1ポイント=1円で利用できます。(1,000ポイント以上でAmazonギフト券と交換可)",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/questionnaire.svg",
    heading: "アンケートの設置",
    description:
      "用意してあるアンケートから、購入者に聞きたいことを任意に設定することができます。",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/chat.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/pdf.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/coupon.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/period.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/present.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/url.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/seo.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/sales.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/set.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/mintyou.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/bgselect.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
  {
    icon_url: "/assets/front/image/homepage/fileupload.svg",
    heading: "",
    description: "",
    link_text: "",
    link_url: "",
  },
];

export default function HomePage() {
  return (
    <div className="font-NotoSans">
      <div className="h-[500px]">Section1</div>
      <div className={styles["step__section"]}>
        <div className={styles["container-lg"]}>
          <h2 className={styles["section2__header"]}>
            かんたん<span className="text-yellow-400">3ステップ</span>
            でスタート！
          </h2>
          <ol className="flex flex-wrap">
            <li>
              <span className={styles["top-span"]}>
                1<small>mim</small>
              </span>
              <h3>
                <span className="text-yellow-400">ユーザー登録</span>をしよう！
              </h3>
              <p>
                まずはニックネーム・メールアドレス・パスワードを登録しましょう。
              </p>
              <div className={styles["register__btn"]}>
                <Link href="/register">無料で会員登録する</Link>
              </div>
              <div className={styles["setp__number"]}>01</div>
            </li>
            <li>
              <span className={styles["top-span"]}>
                2<small>mim</small>
              </span>
              <h3>
                <span className="text-yellow-400">プロフィール登録</span>
                をしよう！
              </h3>
              <p>プロフィール画像と自己紹介を登録しましょう。</p>
              <div className={styles["profile__image"]}>
                <Image
                  style={{ width: '100%', height: 'auto' }}
                  height={0}
                  width={0}
                  src="/assets/front/image/homepage/profile.svg"
                  alt="profile"
                />
              </div>
              <div className={styles["setp__number"]}>02</div>
            </li>
            <li>
              <h3>
                記事を書いて<span className="text-yellow-400">公開</span>
                しよう！
              </h3>
              <ol className={styles["inner_list"]}>
                <li>
                  <div className={styles["setp__procress-image"]}>
                    <Image
                      style={{ width: '100%', height: 'auto' }}
                      height={80}
                      width={66}
                      src="/assets/front/image/homepage/article.svg"
                      alt="記事を作成"
                    />
                  </div>
                  <h4>記事を作成</h4>
                  <p>好きな記事を書きましょう。</p>
                </li>
                <li>
                  <div className={styles["setp__procress-image"]}>
                    <Image
                      style={{ width: '100%', height: 'auto' }}
                      height={50}
                      width={50}
                      src="/assets/front/image/homepage/setting.svg"
                      alt="公開設定"
                    />
                  </div>
                  <h4>公開設定</h4>
                  <p>
                    無料記事か有料記事を選択しましょう。
                    有料を選択すると、自分で価格を付けて販売することができます。
                  </p>
                </li>
                <li>
                  <div className={styles["setp__procress-image"]}>
                    <Image
                      style={{ width: '100%', height: 'auto' }}
                      height={50}
                      width={50}
                      src="/assets/front/image/homepage/release.svg"
                      alt="公開！"
                    />
                  </div>
                  <h4>公開！</h4>
                  <p>
                    公開設定が済んだらいよいよ公開です！
                    たくさんの人に読んでもらえると良いですね！
                  </p>
                </li>
              </ol>
              <div className="flex justify-center mt-10">
                <div className={styles["setp__link_btn"]}>
                  <Link href="/search">
                    投稿された記事を見てみる
                  </Link>
                </div>
              </div>
              <div className={styles["setp__number"]}>03</div>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles["cost__section"]}>
        <div className={styles["container-lg"]}>
          <h2>売上代金のお支払い</h2>
          <div className="flex gap-4">
            <div className={styles["cost__section-card"]}>
              <h3>販売手数料</h3>
              <span>売上代金の</span>
              <p className="card-text">
                <strong>14</strong>%
              </p>
              <p className={styles["footer__span"]}>※決済手数料込み</p>
            </div>
            <div className={styles["cost__section-card"]}>
              <h3>振込手数料</h3>
              <span>1申請毎に</span>
              <p>
                <strong>330</strong>円～
                <span className={styles["footer__span"]}>(税込)</span>
              </p>
            </div>
            <div className={styles["cost__section-card"]}>
              <h3>売上代金の支払日</h3>
              <span>出金申請日から最短</span>
              <p>
                <strong>10</strong>
                <span className={styles["footer__span"]}>営業日後</span>
              </p>
              <span className={styles["footer__span"]}>
                ※出金申請は5,000円以上から可能
              </span>
              <span className={styles["footer__span"]}>
                ※営業日とは、土日祝日を除いた平日の稼働日のことを指します
              </span>
            </div>
          </div>
          <p className="mt-4 mb-0 text-center">
            <small>
              ※初回の出金申請時のみ、通常会員・プラス会員に関わらず、売上代金の支払日は出金申請日から20営業日後（土日祝日を除く）となります。
            </small>
          </p>
        </div>
      </div>
      <div className={styles["service__section"]}>
        <div className={styles["container-lg"]}>
          <p className={styles["service__section-header"]}>SERVICE</p>
          <div className={styles["service__section-dog"]}>
            <Image
              style={{ width: '100%', height: 'auto' }}
              height={500}
              width={500}
              src="/assets/front/image/homepage/dog.svg"
              alt="dog"
            />
          </div>
          <div className={styles["service__section-boy"]}>
            <Image
              style={{ width: '100%', height: 'auto' }}
              height={500}
              width={500}
              src="/assets/front/image/homepage/boy01.svg"
              alt="boy01"
            />
          </div>
          <h2>
            <span className="text-yellow-400">便利な機能</span>が充実！
          </h2>
          <div className={styles["service__section--items-box"]}>
            {service_item_lists.map((item: any, index: number) => (
              <ItemCard key={index} data={item} />
            ))}
          </div>
          <div className={styles["register__btn"]}>
            <Link href="/register">無料で会員登録する</Link>
          </div>
        </div>
      </div>
      <div className={styles["member__section"]}>
        <div className={styles["container-lg"]}>
          <span className={styles["member__section-header"]}>
            + PLUS MEMBER
          </span>
          <div className={styles["member__section-girl"]}>
            <Image
              style={{ width: '100%', height: 'auto' }}
              height={50}
              width={50}
              src="/assets/front/image/homepage/girl01.svg"
              alt="section-girl"
            />
          </div>
          <h2>
            <span className="text-yellow-400">プラス会員</span>
            になると、さらに便利に！
          </h2>
          <div className={styles["member__section--items-box"]}>
            {member_item_lists.map((item: any, index: number) => (
              <ItemCard key={index} data={item} />
            ))}
          </div>

          <div className={styles["member__section--link-buttons"]}>
            <div className={styles["member__section--left-btn"]}>
              <Link href="/search">
                投稿された記事を見てみる
              </Link>
            </div>
            <div className={styles["member__section--right-btn"]}>
              <Link href="/plus">プラス会員に申し込む</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["ban__section"]}>
        <div className={styles["container-lg"]}>
          <h2>禁止事項</h2>
          <div className="bg-white p-4 pt-5 mt-0">
            <ul className="pl-4">
              <li>
                違法性の疑いがある、もしくはモラルに著しく欠ける内容の掲載
              </li>
              <li>外部有料コンテンツへの誘導が目的の内容の掲載</li>
              <li>アダルトコンテンツの掲載</li>
              <li>
                外部ASPを使ったアフィリエイトリンクの掲載
                <div className="lh-1">
                  <small>
                    ※過去、外部ASPのアフィリエイトリンク掲載を許可していた期間中に、Tipsプラスを登録いただいたユーザー様については、現在も一部掲載可能としておりますが、それ以外の方については掲載禁止となっております。また再開の予定はございません。
                  </small>
                </div>
              </li>
            </ul>
            <div className="pl-4 pr-4 mt-4">
              その他の禁止事項については、
              <a
                href="/u/tipsinfo/a/4woqmWNB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400"
              >
                記事公開におけるガイドライン
              </a>
              や
              <a
                href="/u/tipsinfo/a/affiliate-guideline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400"
              >
                Tipsアフィリエイトガイドライン
              </a>
              、
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400"
              >
                利用規約
              </a>
              をご確認ください。
            </div>
          </div>
        </div>
      </div>
      <div className={styles["letstart__section"]}>
        <div className={styles["container-lg"]}>
          <h2>まずははじめてみよう</h2>
          <p>無料会員登録ですぐに記事を書きはじめることができます。</p>
          <div className={styles["letstart__section-let-register"]}>
            <Image
              style={{ width: '100%', height: 'auto' }}
              height={500}
              width={500}
              src="/assets/front/image/homepage/main_illustration.svg"
              alt="Tipsなら、無料ですぐに記事の販売をはじめることができます"
            />
          </div>
          <div className={styles["letstart__section-let-register-btn"]}>
                <Link href="/register">無料で会員登録する</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
