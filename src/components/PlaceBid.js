import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function PlaceBidModal() {
  const cancelButtonRef = useRef(null);
  let [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`whitespace-nowrap rounded-full cursor-pointer w-[39%] py-2 px-6 bg-transparent border-2 border-[#9307F0] text-sm text-white font-bold hover:text-gray-100`}
      >
        Place Offer
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto font-mono">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 text-left shadow-xl transition-all sm:my-8 w-screen py-5 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="text-center sm:mt-2 ">
                    <h1 className="text-xl font-medium font-mono  text-gray-100">
                      Place a Bid
                    </h1>
                    <div className="my-8">
                      <div className="my-3">
                        <div className="mb-5 flex w-full flex-col items-start justify-between">
                          <div className="mb-2 font-medium font-mono text-sm text-gray-300">
                            You must bid at least 13 ETH
                          </div>
                          <input
                            type="text"
                            name=""
                            placeholder="00.00ETH"
                            className="w-full rounded-lg bg-transparent py-3 px-4 text-sm font-medium font-monos text-gray-200 outline outline-1 outline-gray-500"
                          />
                        </div>
                      </div>
                      <div className="my-3">
                        <div className="mb-5 flex w-full flex-col items-start justify-between">
                          <div className="mb-2 font-medium font-mono text-sm text-gray-300">
                            Enter Quantity{" "}
                            <span className="text-red-600">(5 available)</span>
                          </div>
                          <input
                            type="text"
                            name=""
                            placeholder="1"
                            className="w-full rounded-lg bg-transparent py-3 px-4 text-sm font-medium font-mono text-gray-200 outline outline-1 outline-gray-500"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="my-3 w-full flex justify-between items-center text-gray-300 ">
                          <p>You must bid at least:</p>
                          <p className="font-semibold">1200 ETH</p>
                        </div>
                        <div className="my-3 w-full flex justify-between items-center text-gray-300 ">
                          <p>Service Cost:</p>
                          <p className="font-semibold">10 ETH</p>
                        </div>
                        <div className="my-3 w-full flex justify-between items-center text-gray-300 ">
                          <p>Total bid amount:</p>
                          <p className="font-semibold">1210 ETH</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6">
                
                    <button
                      className="bg-gradient-to-b from-[#232757] to-[#232757] rounded-lg h-fit w-full p-[2px] transition duration-300
                    hover:-translate-y-1"
                    >
                      <button className="cursor-pointer w-full h-9 text-white font-semibold bg-gradient-to-b from-[#14142F] to-[#232757] rounded-md">
                        Place Bid
                      </button>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
