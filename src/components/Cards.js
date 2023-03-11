import React from "react";
import Card from "./Card";
import filterIcon from "../assets/icons/filter.png";
import nftImg1 from "../assets/nft (2).png";
import nftImg2 from "../assets/nft (1).png";
import nftImg3 from "../assets/nft (2).webp";
import nftImg4 from "../assets/nft (3).png";
import nftImg5 from "../assets/nft (4).png";
import nftImg6 from "../assets/nft (5).png";
import nftImg7 from "../assets/nft (6).png";
import nftImg8 from "../assets/bitbear.webp";

let Nfts = [
  { id: 23232, img: nftImg1, title: "CyberPepes", price: 0.021 },
  { id: 23232, img: nftImg2, title: "Ordinal Egg", price: 0.32 },
  { id: 23232, img: nftImg3, title: "Ordinal Artifacts", price: 0.034 },
  { id: 23232, img: nftImg4, title: "OrdinalFace", price: 0.038 },
  { id: 23232, img: nftImg5, title: "OrdinalPunk", price: 0.020 },
  { id: 23232, img: nftImg6, title: "OrdinalSmokes", price: 0.028 },
  { id: 23232, img: nftImg7, title: "DarkOrdinauts", price: 0.0070 },
  { id: 23232, img: nftImg8, title: "BitDefender", price: 0.021 },
];
let buttons = ["On Sale", "Top", "Art", "Photography", "Game"];
const Cards = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center mx-auto">
        <div className="">
          <h1 className="text-white mt-3 font-bold text-lg">Marketplace</h1>
          <h2 className="items-center text-white opacity-50 text-sm text-soft-blue whitespace-nowrap">
            Buy NFTs, Get Rewards{" "}
          </h2>
        </div>
        <div className="space-x-2 flex">
          {buttons.map((text, i) => (
            <a
              href="/Wallet"
              className={`whitespace-nowrap rounded-full cursor-pointer ${
                i == 0
                  ? "border-2 border-solid border-[#9B02FB]"
                  : "border-transparent"
              } hidden md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100`}
            >
              {text}
            </a>
          ))}
          <a
            href="/Wallet"
            className={`flex items-center whitespace-nowrap rounded-full cursor-pointer w-fit py-2 px-6 bg-[#2E3154] text-sm text-white hover:text-gray-100`}
          >
            <img src={filterIcon} className="mr-1 h-4 w-4" />
            Filter
          </a>
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <div className="my-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {Nfts.map((nftData) => (
            <Card nftData={nftData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
