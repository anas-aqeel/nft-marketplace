import React from "react";
import {BsCheckCircleFill} from 'react-icons/bs'
import {IoCopySharp} from 'react-icons/io5'
import "./Modal.css";
import qrImg from "../assets/qr.png";
import popImg from "../assets/pop.png";
import avatarImg from "../assets/avatar.png";
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className=" flex justify-between items-center mt-3 mb-7">
          <h2 className="mb-10px lh-1 text-[28px] text-white font-[700]">
            Complete Checkout!
          </h2>
          <button
            onClick={() => {
              setIsModal(false);
            }}
            className="text-white text-[24px] font-[400]"
          >
            X
          </button>
        </div>
        <div className="">
          <section className="">
            <div className="formWrapper">
              <div className="container">
                <div className="flex justify-between mb-10 ">
                  <div className="text-left">
                    <img
                      src={popImg}
                      alt="s"
                      className="h-full w-full r sm:rounded-lg"
                    />
                  </div>

                  <div className="mt-10 w-[63%]  px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <div className="  flex  justify-between ">
                      <h1 className="text-[20px] font-bold tracking-tight text-gray-100">
                        BTSEA PUNKS
                      </h1>

                      <p className="text-white opacity-[0.5]">#2075</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <img src={avatarImg} className="h-12 w-12 rounded-full" />
                      <div className="flex-grow flex flex-col justify-center ml-5">
                        <p className="font-medium text-white">Owned By</p>
                        <p className="text-white font-base opacity-50 text-[12px]">
                          Amirhossein Rahmani
                        </p>
                      </div>
                      <div className=" items-center">
                        <button
                          className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                        >
                          0.80 BTC
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="mt-7 mb-2">
                        <h2 className="text-sm font-[500] text-white opacity-50">
                          My BTC Wallet <span>!</span>
                        </h2>
                      </div>
                      <div className="flex justify-between p-4 bg-[#2E3154] rounded-[55px] h-[40px] items-center">
                        <h2 className="text-white text-sm font-[500]">@hdh552356fjdjhd2154djndmjnd6325</h2>
                        <p className="text-[#8F06ED] text-xl"><BsCheckCircleFill/></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className=" mt-7 w-[62%]">
                    <div className="flex justify-between mb-7">
                      <div>
                        <h1 className="text-xl text-white font-[700]">Send funds to escrow</h1>
                        <p className="text-xs text-white text-[500]">
                          This escrow will expire in 6 hours if the funds are
                          not received.
                        </p>
                      </div>
                      <div className=" items-center">
                        <button
                          className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                        >
                          0.80 BTC
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-base font-[700] text-white">Time left</h1>
                        <h1 className="text-base font-[700] text-white">Status</h1>
                      </div>
                      <div>
                        <p className="text-sm text-white font-[500] opacity-50">05:48:52</p>
                        <p className="text-sm text-white font-[500] opacity-50">Waiting for funds</p>
                      </div>
                    </div>
                    <div className="mt-7">
                      <p className="text-sm text-white font-[500] opacity-50 mb-5">Address</p>
                      <div className="flex justify-between p-4 bg-[#2E3154] rounded-[55px] h-[40px] items-center">
                        <h1 className="text-white text-sm font-[500]">@hdh552356fjdjhd2154djndmjnd6325</h1>
                        <p className="text-[#8F06ED] text-xl"><IoCopySharp/></p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={qrImg} alt="" />
                  </div>
                </div>
                <div className="text-center w-full mt-7">
                  <button className="btn-con w-full text-white text-base font-[600]">Confirm Deposit</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model;
