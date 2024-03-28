import Footer from "./components/Footer";
import VerticalNavbar from "./components/VerticalNavbar";

export default function PublicLayout({children}) {

  return  (
   
    <>
      <VerticalNavbar />
        {children}
      <Footer />
    </>
)}
