/* eslint-disable react/prop-types */
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import KYCLayout from "./KYCLayout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function KYCUploadDocuments() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const item = data[queryParams.get("page")];

  const navigate = useNavigate();

  return (
    <KYCLayout>
      <div className="flex flex-col gap-7  max-h-full overflow-auto">
        {/* <Link to="../" className="flex items-center gap-2 text-xl font-medium">
          <IoIosArrowBack className="text-2xl" />
          Back
        </Link> */}
        <h1 className="font-semibold text-2xl">Upload Documents</h1>
        <div className="flex items-center gap-3">
          <IoShieldCheckmarkOutline className="text-5xl" />
          <p className="max-w-xs">
            Please review the sample documents below, and upload one of the
            following documents.
          </p>
        </div>
        <main className=" flex gap-2 flex-col max-h-full overflow-auto">
          {item.map((el, i) => (
            <div key={i} className="flex gap-1.5 flex-col p-4 bg-gray-100">
              <h2 className="text-xl font-medium">{el.title}</h2>
              <p className="text-xs text-gray-500">{el.sub}</p>
            </div>
          ))}
          <input type="file" id="upload-document" className="hidden" />
          <label
            htmlFor="upload-document"
            className="flex justify-center items-center border-2 border-dashed rounded-lg p-4 font-medium border-green-500 hover:bg-green-100 transition-all duration-300 cursor-pointer"
          >
            Upload Document
          </label>
          <button
            onClick={() => {
              localStorage.setItem("hideNotification", "ok");
              navigate("/user/dashboard");
            }}
            className="text-white bg-themeDarkGreen py-3 rounded-xl flex justify-center items-center max-w-xs mt-3 w-full mx-auto"
          >
            Submit
          </button>
        </main>
      </div>
    </KYCLayout>
  );
}

const data = {
  1: [
    {
      title: "Bank or Credit Card Statement",
      sub: "A document issued by a financial institution in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Title Deed",
      sub: "A legal document that proves ownership of a residential property, which includes a full address and full name of the tenant. Commercial or agricultural properties are not acceptable.",
    },
    {
      title: "Utilities or Telecoms Bill",
      sub: "A document issued by a utilities or telecoms company in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Saudi National Address Document",
      sub: "An address proof document issued by National Address which includes the issue date, your full name, proof number and your full address of residence.",
    },
  ],
  2: [
    {
      title: "Bank or Credit Card Statement",
      sub: "A document issued by a financial institution in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Saudi National Address Document",
      sub: "An address proof document issued by National Address which includes the issue date, your full name, proof number and your full address of residence.",
    },
    {
      title: "Lease or Tenancy Contract",
      sub: "A contract or document of rental between a property owner and a renter, which includes a full address and full name of the tenant.",
    },
    {
      title: "Utilities or Telecoms Bill",
      sub: "A document issued by a utilities or telecoms company in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
  ],
  3: [
    {
      title: "Lease or Tenancy Contract",
      sub: "A contract or document of rental between a property owner and a renter, which includes a full address and full name of the tenant.",
    },
    {
      title: "Utilities or Telecoms Bill",
      sub: "A document issued by a utilities or telecoms company in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "No Objections Certificate",
      sub: "Letter from the owner or renter stating that they have no objection to your tenancy",
    },
    {
      title: "Government Issued ID",
      sub: "A Government issued identification document for the registered tenant of the property that you reside in, such as a passport, national ID or driving license",
    },
  ],
  4: [
    {
      title: "Hotel Tenancy Contract",
      sub: "A document or contract of agreement between a hotel operator and a tenant for a stay of 3 months or more, which includes the name of the hotel or hotel operator, a full address, issue date and full name of the tenant.",
    },
    {
      title: "Letter from the Hotel",
      sub: "A formal letter from the hotel where you are staying, which outlines the name of the hotel or hotel operator, the issue date for the letter, the full name of the guest, the full address of the hotel, and the check-in and check out dates. The total stay must be for 3 months or more.",
    },
  ],
  5: [
    {
      title: "Bank or Credit Card Statement",
      sub: "A document issued by a financial institution in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Saudi National Address Document",
      sub: "An address proof document issued by National Address which includes the issue date, your full name, proof number and your full address of residence.",
    },
    {
      title: "Utilities or Telecoms Bill",
      sub: "A document issued by a utilities or telecoms company in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
  ],
  6: [
    {
      title: "Bank or Credit Card Statement",
      sub: "A document issued by a financial institution in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Saudi National Address Document",
      sub: "An address proof document issued by National Address which includes the issue date, your full name, proof number and your full address of residence.",
    },
    {
      title: "Utilities or Telecoms Bill",
      sub: "A document issued by a utilities or telecoms company in the last 3 months, which includes a full address, issue date and full name of the receiver.",
    },
    {
      title: "Lease or Tenancy Contract",
      sub: "A contract or document of rental between a property owner and a renter, which includes a full address and full name of the tenant.",
    },
  ],
};
