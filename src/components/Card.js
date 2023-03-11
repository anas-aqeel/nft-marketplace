import React from "react";
import { Link } from "react-router-dom";
import heartIcon from "../assets/icons/heart.png";

const Card = ({nftData: {id, img, title, price}}) => {
  return (
   
      <section className="font-outfit bg-[#161933] p-3 rounded-xl shadow-2xl w-auto h-auto">
        <Link to="/nft-profile" className="group block relative rounded-md overflow-hidden">
          <img src={img} alt="equilibrium" className="w-full h-auto" />
        </Link>

        <div className="flex justify-between items-center">
          <h1>
            <Link
              to="/nft-profile"
              className="block text-white mt-3 font-semibold text-lg hover:text-cyan"
            >
              {title}
            </Link>
          </h1>
          <div className="mt-2 items-center text-white opacity-50 text-sm text-soft-blue whitespace-nowrap">
            Current Bid
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="/nft-profile"
            className="block text-white  font-semibold text-base hover:text-cyan"
          >
            #{id}
          </Link>
          <div className="text-[#382C9A] font-bold  text-base  whitespace-nowrap">
            {price} BTC
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="space-x-2">
            <a
              href="/Wallet"
              className="whitespace-nowrap rounded-full cursor-pointer border-2 border-solid border-[#9B02FB] py-2 px-4 text-sm text-white hover:text-gray-100"
            >
              Make Offer
            </a>
            <a
              href="/Wallet"
              className="whitespace-nowrap cursor-pointer rounded-full bg-[#22233B] border-2 border-solid border-transparent py-2 px-4 text-sm text-white hover:text-gray-100"
            >
              Buy Now
            </a>
          </div>
          <div className="h-9 w-9 p-2 flex justify-center items-center rounded-full bg-[#ffffff0d] cursor-pointer">
            <img src={heartIcon}  alt=''/>
          </div>
        </div>
      </section>
    
  );
};

export default Card;
