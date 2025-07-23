import { useTranslation } from "react-i18next";
import { SocialLink } from "../ui/extra";
import { socialLinks_list } from "../../constants/socialLinks";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="container mx-auto px-4 pb-8 text-center text-gray-600">
      <div className="flex gap-4 justify-center mb-4">
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
      </div>
      <p>&copy; 2025 WizzyList. {t("footer.tagline")}</p>
    </footer>
  );
};
