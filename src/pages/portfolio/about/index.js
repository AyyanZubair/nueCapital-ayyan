import BlankLayout from "src/@core/layouts/BlankLayout";
import BannerDescription from "../home/components/BannerDescription";
import GetReady from "../home/components/GetReady";
import AboutList from "./components/AboutList";
import VisionMissionWrapper from "./components/VisionMission";
import PublicLayout from "../layout";

function About() {
  return (
    <PublicLayout>
    <div>
      <BannerDescription
        heading={"NUE Capital"}
        description={
          "Crowdfunding Platform Supporting Presentation CMA FinTech Lab"
        }
      />
      <AboutList />
       <VisionMissionWrapper /> 
      <GetReady />
    </div>
    </PublicLayout>
  );
}

About.getLayout = page => <BlankLayout>{page}</BlankLayout>
About.guestGuard = true

export default About;
