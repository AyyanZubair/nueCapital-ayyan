// import GetReady from "../components/text/GetReady";
// import RealEstateCards from "../components/card/RealEstateCards";
// import NeighborhoodDeals from "../components/card/NeighborhoodDeals";
import BannerDescription from "../home/components/BannerDescription";
import BlankLayout from "src/@core/layouts/BlankLayout";
import GetReady from "./components/GetReady";
import RealEstateCards from "./components/RealEstateCards";
import NeighborhoodDeals from "./components/NeighborhoodDeals";
import PublicLayout from "../layout";

function Sell() {
  return (
    <PublicLayout>
    <div>
      <BannerDescription
        heading={"The easiest home sale ever"}
        description={
          "We’ll pay market rate for your property, in cash. 1 viewing. 100% closing record"
        }
      />
      <div className="max-w-7xl mx-auto">
        <RealEstateCards />
         <NeighborhoodDeals />
        <GetReady />
      </div>
    </div>

    </PublicLayout>
  );
}
Sell.getLayout = page => <BlankLayout>{page}</BlankLayout>
Sell.guestGuard = true;

export default Sell;
