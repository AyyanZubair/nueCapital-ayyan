import BlankLayout from "src/@core/layouts/BlankLayout";
import GetReady from "./components/GetReady";
import FilterCardsSakook from "./components/FilterCardsSakook";
import PublicLayout from "../layout";

function Properties() {
  return (
    <PublicLayout>
    <div className="max-w-7xl mx-auto">
      <FilterCardsSakook />
      <GetReady />
    </div>

    </PublicLayout>
  );
}
Properties.getLayout = page => <BlankLayout>{page}</BlankLayout>
Properties.guestGuard = true;

export default Properties;
