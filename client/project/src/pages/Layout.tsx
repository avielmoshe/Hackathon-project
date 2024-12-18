import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Navbar) sempre no topo */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-background text-foreground">
        <Outlet />
      </main>

      {/* Footer sempre no final */}
      <Footer />
    </div>
  );
}

export default Layout;
