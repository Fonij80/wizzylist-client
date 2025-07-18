import { Landing, Browse, CreateProfile, UserProfile } from "@/pages";

export const appRoutes = [
  { path: "/", element: <Landing />, labelKey: "landing" },
  { path: "/create", element: <CreateProfile />, labelKey: "create profile" },
  { path: "/browse", element: <Browse />, labelKey: "browse" },
  {
    path: "/profile/:profileId",
    element: <UserProfile />,
    labelKey: "user profile",
  },
];
