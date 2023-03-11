import React from "react";
import img from "../assets/nft (1).png";
import heartIcon from "../assets/icons/heart.png";
import avatarImg from "../assets/avatar.png";
import Model from "./Popup";
import { useState } from "react";
import Table from "./Table.js";
import PlaceBidModal from "./PlaceBid";

export default function NftProfile() {
  let buttons = ["Others", "Properties", "Activity"];
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <main className="mx-auto max-w-7xl  bg-opacity-60 mb-8">
        <div className="mx-auto max-w-2xl lg:max-w-none pt-10">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            {/* Image selector */}

            <img
              src={img}
              alt="s"
              height={"2"}
              width={"2"}
              className="h-full w-full r sm:rounded-lg"
            />

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex item-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                  BTSEA PUNKS
                </h1>
                <h2 className="text-lg tracking-tight text-gray-400">#2075</h2>
              </div>

              <div className="mt-6">
                <div className="space-y-6 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Risus ut id velit
                  hendrerit nunc tristique non malesuada malesuada. Eu lacus sed
                  imperdiet elementum ipsum duis at ridiculus rhoncus. Lorem
                  ipsum dolor sit amet consectetur. Risus ut id velit hendrerit
                  nunc tristique non malesuada malesuada. Eu lacus sed imperdiet
                  elementum ipsum duis at ridiculus rhoncus.
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <img src={avatarImg} className="h-12 w-12 rounded-full" />
                <div className="flex-grow flex flex-col justify-center ml-5">
                  <p className="font-medium text-white">Owned By</p>
                  <p className="text-white font-base opacity-50">
                    Amirhossein Rahmani
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                  >
                    0.80 BTC
                  </button>
                  <div className="ml-2 h-9 w-9 p-2 flex justify-center items-center rounded-full bg-[#ffffff0d] cursor-pointer">
                    <img src={heartIcon} />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-start">
                <p className="mt-1 text-white mr-4">Auction Ends in</p>{" "}
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        0
                      </button>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        1
                      </button>
                    </div>
                    <p className="text-white text-sm mt-1">Days</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        1
                      </button>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        8
                      </button>
                    </div>
                    <p className="text-white text-sm mt-1">Hours</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        3
                      </button>
                      <button className="h-9 w-9 bg-gradient-to-b text-white font-medium mr-1 from-[#14142F] to-[#232757] rounded-lg border border-gray-500">
                        4
                      </button>
                    </div>
                    <p className="text-white text-sm mt-1">Minutes</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-x-2">
                <button
                  onClick={() => setIsModal(true)}
                  className={`whitespace-nowrap rounded-full cursor-pointer w-[58%]  py-2 px-6 bg-gradient-to-t  to-[#22233B] from-[#1B1E4C] text-sm text-white font-bold hover:text-gray-100`}
                >
                  Buy Now
                </button>
                <PlaceBidModal />
              </div>
              <div className="w-full">{/* <DetailsTab /> */}</div>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div>
            <div className="flex mb-5">
              {buttons.map((text, i) => (
                <button
                  className={`whitespace-nowrap rounded-full cursor-pointer ${
                    i == 0
                      ? "border-2 border-solid border-[#9B02FB]"
                      : "border-transparent"
                  } py-2 px-6 bg-gradient-to-b mx-1  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100`}
                >
                  {text}
                </button>
              ))}
            </div>
            <div>
              <Table />
            </div>
          </div>
          <div></div>
        </div>
        {/* </div> */}
      </main>
      {isModal && <Model setIsModal={setIsModal} />}
    </>
  );
}
