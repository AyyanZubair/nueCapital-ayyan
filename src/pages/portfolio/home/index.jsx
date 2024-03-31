
import BlankLayout from "src/@core/layouts/BlankLayout";
import BannerVertical from "./components/BannerVertical";
import VisionMissionWrapper from "./components/VisionMission";
import Services from "./components/Services";
import RealStateImageGrid from "./components/RealStateImageGrid";
import RealStateText from "./components/RealStateText";
import ReatEstateInvestGrid from "./components/ReatEstateInvestGrid";
import SliderCards from "./components/SliderCards";
import GetReady from "./components/GetReady";
import PublicLayout from "../layout";

function Portfolio() {
  return (
    <PublicLayout>
    <div className="mx-auto p-1">
      <BannerVertical />
      <VisionMissionWrapper/>
       <Services />
      <RealStateImageGrid />
     <RealStateText />
       <ReatEstateInvestGrid />
     <SliderCards />
      {/* <OurTeamWrapper />*/} 
      <GetReady /> 
    </div>

    </PublicLayout>
  );
}
Portfolio.getLayout = page => <BlankLayout>{page}</BlankLayout>
Portfolio.guestGuard = true

export default Portfolio;
