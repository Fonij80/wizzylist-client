import {
  Landing,
  Browse,
  CreateProfile,
  UserProfile,
  Privacy,
  Contact,
  About,
} from "@/pages";

export const appRoutes = [
  { path: "/", element: <Landing />, labelKey: "landing" },
  { path: "/create", element: <CreateProfile />, labelKey: "create profile" },
  { path: "/browse", element: <Browse />, labelKey: "browse" },
  {
    path: "/profile/:profileId",
    element: <UserProfile />,
    labelKey: "user profile",
  },
  { path: "/privacy", element: <Privacy />, labelKey: "privacy" },
  { path: "/contact", element: <Contact />, labelKey: "contact" },
  { path: "/about", element: <About />, labelKey: "about" },
];
