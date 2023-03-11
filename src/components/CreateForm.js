import {
  ClockIcon,
  ExclamationTriangleIcon,
  LockOpenIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import React, { useReducer } from "react";
import Dropdown from "./Dropdown.js";
import ToogleButton from "./Switch.js";

let CreatePageFields = [
  {
    label: "NAME",
    subText: "",
    placeholder: "Item Name",
  },
  {
    label: "SUPPLY",
    subText: "The number of items that can be minted.",
    placeholder: "1",
  },
  {
    label: "EXTERNAL LINK",
    subText:
      " We will include a link to this URL on this item's detail page, so that users can click to learn more about it.",
    placeholder: "https://yoursite.io/item/123",
  },
];
let sellCategories = [
  {
    label: "FIXED PRICE",
    Icon: TagIcon,
    components: [
      {
        label: "PRICE",
        subText: "",
        placeholder: "Enter Your Price",
        type: "text",
      },
    ],
  },
  {
    label: "OPEN FOR BIDS",
    Icon: LockOpenIcon,
    components: [
      {
        label: "MIN BID",
        subText: "",
        placeholder: "0.8 ETH",
        type: "number",
      },
    ],
  },
  {
    label: "TIMED AUCTION",
    Icon: ClockIcon,
    components: [
      {
        label: "START TIME",
        subText: "",
        placeholder: "",
        type: "date",
      },
      {
        label: "END TIME",
        subText: "",
        placeholder: "",
        type: "date",
      },
    ],
  },
];

let reducer = (prevState, action) => {
  console.log(prevState.Image);
  try {
    return { ...action };
  } catch (error) {
    console.log(error);
  }
  return { ...prevState };
};

let initialData = {
  NAME: "",
  SUPPLY: 1,
  "EXTERNAL LINK": "",
  Image: undefined,
  "Put on Marketplace": false,
  "Selected Type": "FIXED PRICE",
  "FIXED PRICE": {
    PRICE: 0.1,
  },
  "TIMED AUCTION": {
    "START TIME": new Date(),
    "END TIME": new Date(),
  },
  "OPEN FOR BIDS": {
    "MIN BID": 0.12,
  },
  DESCRIPTION: "",
};

const CreateForm = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
      }}
      className=" rounded-lg bg-[#161933] p-5"
    >
      <div className="mb-10">
        <p className="mb-2 text-base font-semibold uppercase tracking-widest text-gray-300">
          Upload File<span className="text-lg text-red-600">*</span>
        </p>
        <div className="rounded-lg border-[1px] border-gray-400 bg-gradient-to-b from-[#232757] to-[#151839] p-8">
          <div className="relative flex flex-col items-center justify-center space-y-6  rounded-lg p-10 outline-dashed outline-[1px] outline-gray-100">
            <p className="text-sm font-semibold leading-4 text-gray-200">
              PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
            </p>
            <label
              htmlFor="upload"
              className="
                     whitespace-nowrap rounded-full cursor-pointer border-2 border-solid border-[#9B02FB] py-2 px-4 text-sm text-white hover:text-gray-100
                    transition duration-300
                    hover:-translate-y-1 
                    "
            >
              Upload File
            </label>

            <input
              name="image"
              id="upload"
              value={state.Image?.webkitRelativePath}
              onChange={(e) => {
                if (e.target.files?.length)
                  dispatch({ ...state, Image: e.target.files[0] });
              }}
              type="file"
              className="absolute hidden opacity-0"
            />
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-5 flex w-full items-center justify-between">
          <div className="mb-2 font-semibold tracking-widest">
            <p className="text-base uppercase text-white">Put on Marketplace</p>
            <p className="text-sm tracking-wider text-gray-400">
              Enter price to allow users instantly purchase your NFT
            </p>
          </div>
          <ToogleButton
            enabled={state["Put on Marketplace"]}
            onClick={() =>
              dispatch({
                ...state,
                "Put on Marketplace": !state["Put on Marketplace"],
              })
            }
          />
        </div>
        {state["Put on Marketplace"] && (
          <div className="flex justify-between space-x-6">
            {sellCategories.map((e) => (
              <div className="w-full bg-gradient-to-b from-[#232757] to-[#232757] rounded-lg h-fit  p-[2px]">
                <div
                  onClick={() => {
                    dispatch({ ...state, "Selected Type": e.label });
                  }}
                  className={`max-w-24 flex cursor-pointer  flex-col items-center justify-between rounded-lg bg-gradient-to-b from-[#14142F] to-[#232757] p-5  outline outline-1   sm:w-full sm:p-10 ${
                    e.label == state["Selected Type"]
                      ? "outline-gray-100"
                      : "outline-transparent hover:outline-gray-100 "
                  }`}
                >
                  <p className="mb-5 text-sm font-bold tracking-widest text-gray-200">
                    {e.label}
                  </p>
                  <e.Icon color="white" className="h-12 w-auto text-sm" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {state["Put on Marketplace"] &&
        sellCategories
          .find((e) => e.label == state["Selected Type"])
          ?.components.map((formField) => (
            <div className="mb-5 flex w-full flex-col items-start justify-between">
              <div className="mb-2 font-semibold tracking-widest">
                <p className="text-base  text-gray-200">
                  {formField.label}
                  <span className="text-lg text-red-600">*</span>
                </p>
                <p className="text-sm tracking-wider text-gray-400">
                  {formField.subText}
                </p>
              </div>
              <div className="w-full bg-gradient-to-b from-[#232757] to-[#232757] rounded-lg h-fit  p-[2px]">
                <div className="w-full px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-11 rounded-md">
                  <input
                    type={formField.type}
                    name=""
                    placeholder={formField.placeholder}
                    className="w-full rounded-lg bg-transparent py-3  text-sm font-medium tracking-wide text-gray-200"
                  />
                </div>
              </div>
            </div>
          ))}

      {CreatePageFields.map((formField) => (
        <div className="mb-5 flex w-full flex-col items-start justify-between">
          <div className="mb-2 font-semibold tracking-widest">
            <p className="text-base  text-gray-200">
              {formField.label}
              <span className="text-lg text-red-600">*</span>
            </p>
            <p className="text-sm tracking-wider text-gray-400">
              {formField.subText}
            </p>
          </div>
          <div className="w-full bg-gradient-to-b from-[#232757] to-[#232757] rounded-lg h-fit  p-[2px]">
            <div className=" px-3 flex items-center mx-auto  bg-gradient-to-b from-[#14142F] to-[#232757] h-11 rounded-md">
              <input
                type={typeof state[formField.label]}
                name=""
                onChange={(e) => {
                  dispatch({ ...state, [formField.label]: e.target.value });
                }}
                placeholder={formField.placeholder}
                className="w-full rounded-lg bg-transparent py-3  text-sm font-medium tracking-wide text-gray-200"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mb-5 flex w-full flex-col items-start justify-between">
        <div className="mb-2 font-semibold tracking-widest">
          <p className="text-base  text-gray-200">
            DESCRIPTION<span className="text-lg text-red-600">*</span>
          </p>
          <p className="text-sm tracking-wider text-gray-400">
            The description will be included on the item's detail page
            underneath its image.
          </p>
        </div>
          <textarea
            rows={4}
            onChange={(e) => {
              dispatch({ ...state, DESCRIPTION: `${e.target.value}` });
            }}
            name=""
            placeholder="Provide a detailed description of your item"
            className="w-full rounded-lg bg-transparent py-3 px-4 text-sm font-medium tracking-wide bg-gradient-to-b from-[#232757] to-[#1b1f48]"
          />
      </div>

      <div className=" mt-8 mb-5 flex w-full items-center justify-between rounded-lg bg-gradient-to-b from-[#232757] to-[#1b1f48] py-3 px-2">
        <div className="rounded-full bg-[#171b3e] p-3">
          <LockOpenIcon color="white" className="h-5 w-5" />
        </div>
        <div className="grow px-3 font-semibold tracking-widest">
          <p className="text-base uppercase text-white">unlockable content</p>
          <p className="text-sm tracking-wider text-gray-400">
            Include unlockable content that can only be revealed by the owner of
            the item.
          </p>
        </div>
        <ToogleButton />
      </div>
      <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-gradient-to-b from-[#232757] to-[#1b1f48] py-3 px-2">
        <div className="rounded-full bg-[#171b3e] p-3">
          <ExclamationTriangleIcon color="white" className="h-5 w-5" />
        </div>
        <div className="grow px-3 font-semibold tracking-widest">
          <p className="text-base uppercase text-white">
            EXPLICIT & SENSITIVE CONTENT
          </p>
          <p className="text-sm tracking-wider text-gray-400">
            Set this item as explicit and sensitive content
          </p>
        </div>
        <ToogleButton />
      </div>

      <div className="mb-5 flex w-full flex-col items-start justify-between">
        <div className=" font-semibold tracking-widest">
          <p className="text-base  text-gray-200">
            Currency<span className="text-lg text-red-600">*</span>
          </p>
        </div>
        <Dropdown />
      </div>

      <button
        type="submit"
        onClick={() => {}}
        disabled={false}
        className={`mb-2 rounded-md bg-gradient-to-t  to-[#22233B] from-[#1B1E4C] py-3 px-5 text-sm font-semibold uppercase text-gray-100 transition duration-300 hover:-translate-y-1 cursor-pointer
      `}
      >
        Create
      </button>
    </form>
  );
};

export default CreateForm;
