import { FaYoutube, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import company_data from "./company_data.json";

export const socialLinks_list = [
  // {
  //   href: company_data.social_links.youtube,
  //   label: "YouTube",
  //   icon: FaYoutube,
  //   className: "text-red-500 hover:text-red-700",
  // },
  {
    href: company_data.social_links.telegram,
    label: "Telegram",
    icon: FaTelegram,
    className: "text-blue-500 hover:text-blue-700",
  },
  {
    href: company_data.social_links.instagram,
    label: "Instagram",
    icon: FaInstagram,
    className: "text-pink-500 hover:text-pink-700",
  },
  {
    href: company_data.social_links.twitter,
    label: "Twitter",
    icon: FaTwitter,
    className: "text-blue-500 hover:text-blue-700",
  },
];
