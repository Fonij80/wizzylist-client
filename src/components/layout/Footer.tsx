import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
      <div className="flex flex-wrap justify-center gap-6 mb-2 text-md text-gray-500">
        <Link to="/about" className="hover:underline">
          {t("footer.about", "About")}
        </Link>
        <Link to="/contact" className="hover:underline">
          {t("footer.contact", "Contact")}
        </Link>
        <Link to="/privacy" className="hover:underline">
          {t("footer.privacy", "Privacy")}
        </Link>
        <a
          href="https://www.instagram.com/wizzylist"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://t.me/wizzylist"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Telegram
        </a>
      </div>

      {/* <div className="flex gap-4 justify-center mb-4">
        {socialLinks_list.map(({ href, label, icon: Icon, className }) => (
          <SocialLink
            key={label}
            href={href}
            label={label}
            className={className}
          >
            <Icon />
          </SocialLink>
        ))}
      </div> */}

      <p>&copy; 2025 WizzyList. {t("footer.tagline")}</p>
    </footer>
  );
};
