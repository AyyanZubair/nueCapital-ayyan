import { IoLocationOutline } from "react-icons/io5";
import { FaSwimmingPool } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { HiOutlineDownload } from "react-icons/hi";

// import { Chrono } from "react-chrono";

export default function OverviewSection() {
  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold pb-3">Property Overview</h2>
        <p>
          NUE Capital is offering an opportunity to invest in a 2-bed apartment
          in Sky Gardens, Hidaya Towers. The Hidaya Towers is a global financial
          hub, a free trade zone established in 2004, and one of Saudia’s most
          reputable districts. The area has a multitude of multinational firms
          calling it home, along with acclaimed dining venues, art galleries,
          and 5-star hotels. The area has seen an increase in property prices
          due to the launch of new office and residential towers. Sky Gardens is
          a 45-storey residential tower, offering retail and F&B in its ground
          and concourse levels. The tower offers strategically located
          apartments with views either over the Hidaya Towers or Riyadh. It’s
          located a stones throw away from the Hidaya Towers Gate Avenue and
          Gate Village The financial hub of the Middle East, the Saudia
          International Financial Centre is located adjacent to Riyadh, the
          Saudia World Trade Centre. A favorite for young professionals to stay
          in, the community features a museum, a performing arts center, as well
          as several art galleries, lounges, fitness centers, and eateries.
          Hosting residential as well as commercial blocks, Hidaya Towers
          features properties that are of high standards with great finishes and
          spectacular architecture.
        </p>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-2xl font-bold text-gray-900">Financials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium ">Property Cost</h2>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">Property price</span>
              <span className="font-semibold ">SAR 2,390,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">Transaction cost</span>
              <span className="font-semibold ">SAR 278,340</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">NUE fee</span>
              <span className="font-semibold ">1.5%</span>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="flex justify-between items-center py-3">
              <span className=" text-gray-500">Investment cost</span>
              <span className="text-green-500 font-semibold">
                SAR 2,668,340
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium ">Rental income (Year 1)</h2>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">Annual Gross rent</span>
              <span className="font-semibold ">SAR 180,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">Service charges</span>
              <span className="font-semibold ">SAR 17,750</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-gray-500">Mgmt. and maintenance</span>
              <span className="font-semibold ">SAR 18,851</span>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="flex justify-between items-center py-3">
              <span className=" text-gray-500">Annual net income</span>
              <span className="text-green-500 font-semibold">SAR 143,399</span>
            </div>
            <div className="p-2 rounded-lg bg-gray-200 text-gray-500 text-xs max-w-sm">
              This is an estimate for the 1st year of ownership
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 py-1">
        <h2 className="text-2xl font-bold text-gray-900">Funding timeline</h2>
        <div className="p-2 rounded-lg bg-gray-200 text-gray-500 text-xs max-w-sm">
          The timeline is an estimate. Actual dates may vary
        </div>
        <div>
          <Chrono
            items={items}
            mode="VERTICAL"
            disableToolbar="true"
            cardHeight="100"
            theme={{
              primary: "green",
              secondary: "white",
            }}
          />
        </div>
      </div> */}
      <div className="flex flex-col gap-4 py-1">
        <h2 className="text-2xl font-bold text-gray-900">Location</h2>

        <div className="flex gap-2 items-center font-semibold text-lg">
          <IoLocationOutline className="text-green-500" />

          <p>Hidaya Towers</p>

        </div>

        <div className="flex justify-center items-center border rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11955.68902451072!2d46.65885802263149!3d24.762210785614457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1711011787249!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p>
          The financial hub of Middle East, International Financial Centre
          (Hidaya Towers). A favourite for young professionals to stay in, the community features a museum, a
          performing arts center, as well as several art galleries, lounges,
          fitness centers and eateries. Hosting residential as well as
          commercial blocks, DIFC features properties that are of high standards
          with great finishes and spectacular architecture.
        </p>
      </div>
      <div className="flex flex-col gap-4 py-2">
        <h2 className="text-2xl font-bold text-gray-900">Amenities</h2>

        <div className="grid grid-cols-2 py-2">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <CgGym />
            GYM
          </div>
          <div className="flex items-center gap-2 text-xl font-semibold">
            <FaSwimmingPool />
            Pool
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-2">
        <h2 className="text-2xl font-bold text-gray-900">Documents(4)</h2>
        <div className="flex flex-col gap-2 py-3">
          {[
            "Investor Memo",
            "Projections",
            "Initial Valuation Report",
            "Investor Memo",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center rounded-xl border border-gray-300 p-3 text-lg gap-4 px-6"
            >
              <IoDocumentTextOutline />
              <p className="flex-1 text-sm">{item}</p>
              <HiOutlineDownload className="text-green-500 cursor-pointer hover:text-green-700 hover:scale-110 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "March 12 2024",
    cardTitle: "Closing date",
    cardSubtitle:
      "This is the date the property completes funding, after which we will work on completing the legal formalities.",
  },
  {
    title: "March 16 2024",
    cardTitle: "SPV formation and title deed distribution",
    cardSubtitle:
      "The SPV will be established, and the Title Deed and Share Certificate will be accessible via the app a few weeks after funding.",
  },
  {
    title: "March 18 2024",
    cardTitle: "Expected first rental payment",
    cardSubtitle:
      "The first rental payment for this property is projected to be paid to investors by April 25, 2024",
  },
];
