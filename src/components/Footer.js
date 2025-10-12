import * as React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="kicker">一起打造下一個指標作品</span>
            <h3>設計、動態與技術，為新創與品牌帶來具影響力的體驗。</h3>
          </div>
          <a className="button button--primary" href="mailto:hello@example.com">
            預約專案諮詢
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>聯絡</h4>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="tel:+886900000000">+886 900 000 000</a>
          </div>
          <div className="footer-col">
            <h4>社群</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
          </div>
          <div className="footer-col">
            <h4>據點</h4>
            <span>台北 · 東京 · Remote</span>
          </div>
        </div>
        <div className="footer-base">
          <span>© {year} FutureCraft Studio</span>
          <span>Available for 2024 Q4 Collaborations</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
