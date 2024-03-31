import BlankLayout from "src/@core/layouts/BlankLayout";
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

PublicLayout.getLayout = page => <BlankLayout>{page}</BlankLayout>
PublicLayout.guestGuard = true;