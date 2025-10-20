import * as React from "react";
import { useLocale } from "../context/LocaleContext";

const footerContent = {
  en: {
    columns: [
      {
        title: "Contact",
        items: [
          { type: "link", label: "hello@laizhaoting.com", href: "mailto:hello@laizhaoting.com" },
          { type: "link", label: "+886 912 345 678", href: "tel:+886912345678" }
        ]
      },
      {
        title: "Capabilities",
        items: [
          { type: "text", label: "Front-end engineering" },
          { type: "text", label: "Back-end integration" },
          { type: "text", label: "Content & marketing production" }
        ]
      },
      {
        title: "Follow",
        items: [
          { type: "link", label: "Instagram", href: "https://www.instagram.com" },
          { type: "link", label: "LinkedIn", href: "https://www.linkedin.com" },
          { type: "link", label: "YouTube", href: "https://www.youtube.com" }
        ]
      },
      {
        title: "Availability",
        items: [
          { type: "text", label: "Open for Q3 collaborations" },
          { type: "link", label: "Schedule a call", href: "mailto:hello@laizhaoting.com" }
        ]
      }
    ],
    imprintLabel: "Imprint",
    privacyLabel: "Privacy",
    baseLabel: "LAI ZHAO TING",
    year: "©2025"
  },
  zh: {
    columns: [
      {
        title: "聯絡方式",
        items: [
          { type: "link", label: "hello@laizhaoting.com", href: "mailto:hello@laizhaoting.com" },
          { type: "link", label: "+886 912 345 678", href: "tel:+886912345678" }
        ]
      },
      {
        title: "服務內容",
        items: [
          { type: "text", label: "前端工程實作" },
          { type: "text", label: "後端串接與整合" },
          { type: "text", label: "內容與行銷製作" }
        ]
      },
      {
        title: "追蹤動態",
        items: [
          { type: "link", label: "Instagram", href: "https://www.instagram.com" },
          { type: "link", label: "LinkedIn", href: "https://www.linkedin.com" },
          { type: "link", label: "YouTube", href: "https://www.youtube.com" }
        ]
      },
      {
        title: "目前時程",
        items: [
          { type: "text", label: "Q3 歡迎新專案洽談" },
          { type: "link", label: "預約討論", href: "mailto:hello@laizhaoting.com" }
        ]
      }
    ],
    imprintLabel: "網站資訊",
    privacyLabel: "隱私政策",
    baseLabel: "賴昭庭",
    year: "©2025"
  }
};

const Footer = () => {
  const { locale } = useLocale();
  const copy = footerContent[locale] ?? footerContent.en;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          {copy.columns.map((column) => (
            <div key={column.title} className="site-footer__column">
              <span>{column.title}</span>
              {column.items.map((item) =>
                item.type === "link" ? (
                  <a key={`${column.title}-${item.label}`} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    {item.label}
                  </a>
                ) : (
                  <span key={`${column.title}-${item.label}`}>{item.label}</span>
                )
              )}
            </div>
          ))}
        </div>
        <div className="site-footer__base">
          <span>{copy.baseLabel}</span>
          <div>
            <a href="https://www.notion.so" target="_blank" rel="noreferrer">
              {copy.imprintLabel}
            </a>
            <span> / </span>
            <a href="https://www.notion.so" target="_blank" rel="noreferrer">
              {copy.privacyLabel}
            </a>
          </div>
          <span>{copy.year}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
