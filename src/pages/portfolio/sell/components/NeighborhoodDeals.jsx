import React from "react";
import NeighbhoodDealsCard from "./NeighbhoodDealsCard";

const NeighborhoodDeals = () => {
  return (
    <section className="max-w-7xl mx-auto mt-[99.53px]">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="text-[45px] text-themeDarkGreen font-bold" >What neighbourhoods do we cover?</h2>
          <p className="text-[18px] text-themeDarkGreen font-normal mb-[50px]" >
            We list properties in the following neighbourhoods. If you’re
            looking <br></br>to sell in these areas then we’ll consider a full
            cash offer!
          </p>
        </div>
        <NeighbhoodDealsCard />
    </section>
  );
};

export default NeighborhoodDeals;
