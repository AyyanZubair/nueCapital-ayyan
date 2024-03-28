const RealStateText = () => {
  return (
    <div className="flex flex-col lg:flex-row pl-7 pr-1 lg:pl-0 gap-5 xl:max-w-7xl lg:max-w-[65rem] mx-auto py-10">
      <section className="lg:w-[65%] lg:text-start text-center">
        <Heading>Liquidation Solution</Heading>
        <ul className="list-disc px-3" >
          {liquidationSolutionData.map((i) => {
            return (
              <li className="text-lg list-disc py-1" key={i.id}>
                {i.description}
              </li>
            );
          })}
        </ul>
        <h1 className="font-bold text-themeDarkGreen py-4 text-lg">
          Saudi Real Estate Market
        </h1>
        <div className="flex flex-col gap-3 text-lg">
          {saudiRealEstateData.map((i) => {
            return <span key={i.id}>{i.description}</span>;
          })}
        </div>
      </section>
      <section className="lg:w-[35%] lg:text-start text-center">
        <Heading>Deals Selection</Heading>
        <div className="flex flex-col gap-3 text-lg">
          {dealsSelectionData.map((i) => (
            <span key={i.id}>{i.description}</span>
          ))}
        </div>
        <Heading>Deals Selection Cont.</Heading>
        <div className="flex flex-col gap-3 text-lg">
          {dealsSelectionContData.map((i) => (
            <span key={i.id}>{i.description}</span>
          ))}
        </div>
        <Heading>NUE Fee</Heading>
        <div className="flex flex-col gap-2 text-lg">
          {neuData.map((el) => (
            <div
              key={el.id}
              className="flex w-full justify-between items-center"
            >
              <span>{el.description}</span>
              <span>{el.per}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RealStateText;

// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <h1 className="text-3xl text-themeDarkGreen my-3 font-medium">
      {children}
    </h1>
  );
};




const liquidationSolutionData = [
  {
    id: 1,
    description:
      "Private real estate is a long-term investment commitment. However, we understand that some investors might ask to exit the project before completion. And thus, NUE provides a secondary market as a solution.",
  },
  {
    id: 2,
    description:
      "Current Sukuk can list his bought Sukuk in (NUE platform) for a scheduled auction for secondary market.",
  },
  {
    id: 3,
    description:
      "Approved investors can browse secondary market listings and make an offer.",
  },
  {
    id: 4,
    description:
      "Once the current owner approves an offer, NUE automatically handle the transaction through the platform.",
  },
];

const saudiRealEstateData = [
  {
    id: 1,
    description:
      "Identify real estate assets that meet our investment criteria",
  },
  {
    id: 2,
    description:
      "Review the asset and negotiate price and sign contract (conditioning the success of fund raising)",
  },
  {
    id: 3,
    description:
      "The SPV will sign an agreement with a real estate management company to operate the asset",
  },
];

const dealsSelectionData = [
  {
    id: 1,
    description: "New residential and commercial Real Estate",
  },
  {
    id: 2,
    description: "Riyadh & Makkah regions, and other cities in the future",
  },
  {
    id: 3,
    description: "Prim locations with services and essay access",
  },
  {
    id: 4,
    description: "Independent real estate evaluator",
  },
];

const dealsSelectionContData = [
  {
    id: 1,
    description: "4% target income from acquisition value",
  },
  {
    id: 2,
    description: "Average acquisition for 5 years",
  },
  {
    id: 3,
    description: "Legal due diligence for title deed legitimacy",
  },
];

const neuData = [
  {
    id: 1,
    description: "Acquisition",
    per: "2.5%",
  },
  {
    id: 2,
    description: "Annual fees",
    per: "25%",
  },
  {
    id: 3,
    description: "Exit fee",
    per: "2.5%",
  },
  {
    id: 4,
    description: "Transfer fee (for secondary market)",
    per: "2.5%",
  },
  {
    id: 5,
    description: "Sukuk holders returns",
    per: "97.5%",
  },
  {
    id: 6,
    description: "Profit distribution frequency",
    per: "Semi- annually",
  },
];