import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "conic-gradient(to right, #a18cd1, #fbc2eb)" }}
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
