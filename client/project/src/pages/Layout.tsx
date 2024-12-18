import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import EditProfile from "@/components/EditProfile";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow bg-background text-foreground">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
}

export default Layout;
