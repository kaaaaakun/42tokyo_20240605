import "./Footer.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <nav>
      {/* <Link to="/privacy">プライバシーポリシー</Link> */}
      <>
        <footer className="l-footer futu-shop u-font__jp">
          <div className="l-footer__inner">
            <div className="l-footer__section">
              <div className="l-footer__inner__logo">
                <img
                  src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/futu_shop_logo.svg"
                  alt="Logo"
                  style={{ height: "50px", marginRight: "10px" }}
                />
              </div>
              <div className="l-footer__inner__sns">
                <p>レシピ公開中。</p>
                <ul>
                  <li className="p-news_header__inner__top__share__list__item">
                    <a
                      className="p-news_header__inner__top__share__list__item__inner tracking_footer_sns"
                      href="https://www.instagram.com/futsunoshop/"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="u-icon--instagram" />
                    </a>
                  </li>
                  <li className="p-news_header__inner__top__share__list__item">
                    <a
                      className="p-news_header__inner__top__share__list__item__inner tracking_footer_sns"
                      href="https://twitter.com/futsunoshop"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="u-icon--twitter" />
                    </a>
                  </li>
                  <li className="p-news_header__inner__top__share__list__item">
                    <a
                      className="p-news_header__inner__top__share__list__item__inner tracking_footer_sns"
                      href="https://lin.ee/cPXxmD9"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="u-icon--line" />
                    </a>
                  </li>
                </ul>
                <div className="l-footer__inner__menu__list is-pc">
                  <a className="l-footer__inner__menu__item" href="/shop/faq">
                    FAQ
                  </a>
                  <a
                    className="l-footer__inner__menu__item"
                    href="https://studiobeta.jp/privacy"
                    target="_brank"
                  >
                    プライバシーポリシー
                  </a>
                  <a
                    className="l-footer__inner__menu__item"
                    href="/shop/law_info"
                  >
                    特定商取引法に基づく表記
                  </a>
                  <a
                    className="l-footer__inner__menu__item"
                    href="/shop/customer_term"
                  >
                    利用規約
                  </a>
                  <a
                    className="l-footer__inner__menu__item"
                    href="/shop/contact/draft"
                  >
                    お問い合わせ
                  </a>
                </div>
              </div>
            </div>
            <div className="l-footer__section">
              <ul className="l-footer__inner__menu__list">
                <li className="l-footer__inner__menu__item">
                  <p className="title">商品</p>
                  <div className="product">
                    <ul>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/MOY1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          マヨネーズ
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/KTP1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          ケチャップ
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/SIO1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          塩
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/DRE1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          ドレッシング
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/STK1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          出汁
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/PEP1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          胡椒
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/SOY1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          醤油
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/SET1B01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          紅白セット
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/4SETB01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          調味料セット(4種)
                        </a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a
                          href="/shop/products/6SETB01"
                          onclick="ptengine.track('【brandsite】tracking_footer_item_link', {label: 'フッターメニューから遷移'})"
                        >
                          調味料セット(6種)
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="l-footer__inner__menu__item"
                  style={{ maxWidth: 50 }}
                >
                  <p className="title">ギフト</p>
                  <div className="product">
                    <ul>
                      <li className="tracking_footer_item_link">
                        <a href="/shop/pages/gift">ギフト</a>
                      </li>
                      <li className="tracking_footer_item_link">
                        <a href="/shop/product_categories/goods">グッズ</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="l-footer__inner__menu__item"
                  style={{ minWidth: 147 }}
                >
                  <p className="title">OWNER'S CLUB</p>
                  <div className="product">
                    <ul>
                      <li className="tracking_footer_item_link">
                        <a href="https://futsuno.shop/lp?u=owners_club_shop">
                          OWNER'S CLUBについて
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="l-footer__inner__menu__item"
                  style={{ marginRight: 0, minWidth: 92 }}
                >
                  <p className="title">ブランド</p>
                  <div className="product">
                    <ul>
                      <li className="tracking_footer_item_link">
                        <a href="/shop/pages/brand">ブランドについて</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="l-footer__section">
              <div className="l-footer__inner__menu__list is-sp">
                <a
                  className="l-footer__inner__menu__item tracking_footer_page_link"
                  href="/shop/faq"
                >
                  FAQ
                </a>
                <a
                  className="l-footer__inner__menu__item tracking_footer_page_link"
                  href="/shop/privacy"
                >
                  プライバシーポリシー
                </a>
                <a
                  className="l-footer__inner__menu__item tracking_footer_page_link"
                  href="/shop/law_info"
                >
                  特定商取引法に基づく表記
                </a>
                <a
                  className="l-footer__inner__menu__item tracking_footer_page_link"
                  href="/shop/customer_term"
                >
                  利用規約
                </a>
                <a
                  className="l-footer__inner__menu__item tracking_footer_page_link"
                  href="/shop/contact/draft"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
            <div className="l-footer__section l-footer__inner__copyright">
              ©2023 Studio beta
            </div>
          </div>
          <button className="l-footer__scrolltotop">
            <img
              className="lazyload"
              data-src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/scrolltotop.svg"
              alt=""
            />
          </button>
        </footer>
        <footer className="l-footer none is-omo futu-shop u-font__jp">
          <div className="l-footer__inner">
            <div className="l-footer__section">
              <div className="l-footer__inner__logo">
                <img
                  className="lazyload"
                  data-src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/futu_shop_logo.svg"
                  alt="(ふつうの)ショップ"
                />
              </div>
              <div className="l-footer__inner__sns">
                <div className="l-footer__inner__menu__list">
                  <a
                    className="l-footer__inner__menu__item"
                    href="https://studiobeta.jp/privacy"
                    target="_brank"
                  >
                    プライバシーポリシー
                  </a>
                  <div className="l-footer__inner__copyright">
                    ©2023 Studio beta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </nav>
  );
}

export default Footer;
