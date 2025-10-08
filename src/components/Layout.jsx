import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </div>
  );
}
