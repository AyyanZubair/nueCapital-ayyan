import { useEffect } from "react";
import { useRouter } from "next/router";
import logo from "../../../public/portfolioImages/splashlogo.svg";
import BlankLayout from "src/@core/layouts/BlankLayout";
import Image from "next/image";
import { Box } from "@mui/material";

function SplashScreen() {
  let navigate = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push("/pages/porfolio/home");
    }, 1000);
    
return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box className="flex justify-center items-center flex-column text-center bg-themeDarkGreen h-[100vh]">
        <Image className="img-fluid" src={logo} alt="Nuelogo" />
    </Box>
  );
}
SplashScreen.getLayout = page => <BlankLayout>{page}</BlankLayout>
SplashScreen.guestGuard = true

export default SplashScreen;
