import React from "react";
import Card from "../components/Card";
import nftImg7 from "../assets/nft (6).png";

import CreateForm from "../components/CreateForm";

const Create = () => {
  return (
    <div className="mx-auto my-6 grid max-w-7xl grid-cols-1 gap-x-5 gap-y-2 px-3 py-5 sm:grid-cols-1 md:grid-cols-3 md:px-10 lg:grid-cols-4 ">
      <div className="h-fit">
        <p className="mb-2 ml-1 text-base font-semibold uppercase tracking-widest text-gray-300">
          PREVIEW ITEM
        </p>
        <Card
          nftData={{
            id: 23232,
            img: nftImg7,
            title: "CyberPepes",
            price: 0.021,
          }}
        />
      </div>

      <div className=" rounded-lg  md:col-span-2 lg:col-span-3 ">
        <CreateForm />
      </div>
    </div>
  );
};

export default Create;
