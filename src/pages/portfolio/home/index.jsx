
// import VisionMissionWrapper from "../warpper/text/VisionMissionWrapper";
// import SliderCards from "../components/card/SliderCards";
// import GetReady from "../components/text/GetReady";
// import Services from "../components/imagegridtext/Services";
// import RealStateImageGrid from "../components/imagegridtext/RealStateImageGrid";
// import ReatEstateInvestGrid from "../components/imagegridtext/ReatEstateInvestGrid";
// import RealStateText from "../components/text/RealStateText";

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

// import OurTeamWrapper from "../warpper/Team/OurTeamWrapper";
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
