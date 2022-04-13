import React, { useState } from "react";
import { useCarrerContext } from "../../../../context/CarrerProvider";
import { motion } from "framer-motion";
function JobFrom({ initialLoad }) {
  const [allowed, setAllowed] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [data, setData] = useState({ name: "", email: "" });
  function handelSubmit(e) {
    e.preventDefault();
  }
  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [, setOpen] = useCarrerContext();
  return (
    <>
      {submit ? (
        <motion.div
          variants={initialLoad}
          className="bg-white rounded-xl py-8 px-4 text-center"
        >
          <h4 className="">Thank you for reaching out at 🎉</h4>
          <p className="border-b-lightblue border-b-4 inline-block font-semibold ">
            {data.email} 💌
          </p>

          <h4 className="my-4">
            We will contact you soon as possible to disccus our process hiring
            interveiw ✅
          </h4>
          <motion.button
            className=" text-white flex items-center justify-center top-3 right-3 bg-red-600 font-mono hover:bg-red-500   w-[60%] m-auto mt-8 py-2  rounded-md "
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </motion.button>
        </motion.div>
      ) : (
        <form
          onSubmit={handelSubmit}
          className=" bg-white  xl:max-w-3xl w-full pt-4 p-8 rounded-lg space-y-4  xl:grid xl:grid-cols-2 items-baseline gap-6 relative overflow-auto "
        >
          <motion.button
            className="absolute text-white flex items-center justify-center top-3 right-3 bg-red-600 font-mono   w-6 h-6  rounded-md "
            onClick={() => {
              setOpen(false);
            }}
          >
            &times;
          </motion.button>
          <h1 className="font-bold  text-xl    text-darkblue font-mono col-span-2 text-center">
            Apply For Opening Job
          </h1>
          <label htmlFor="stack" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Select The Position you want to Apply
            </span>
            <select
              name="stack"
              id="stack"
              className="w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   "
            >
              <option value="Mern">ReactJs Web Developper</option>
              <option value="Mern">React Native Senior</option>
              <option value="Mern">MERN Full Stack </option>

              <option value="Mern">Other</option>
            </select>
          </label>
          <label htmlFor="name" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Full Name
            </span>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 "
              placeholder="Name"
              id="name"
              name="name"
              onChange={handelChange}
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Email
            </span>
            <input
              type="email"
              id="email"
              className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   `}
              placeholder="email"
              name="email"
              onChange={handelChange}
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Phone
            </span>
            <input
              type="phone"
              id="phone"
              className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   `}
              placeholder="phone"
              name="phone"
              onChange={handelChange}
            />
          </label>
          <label htmlFor="resume" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              upload your resume
            </span>
            <input
              type="file"
              id="resume"
              className={` p-1 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4 file:bg-violet-50 file:border-2  file:mr-4 file:py-2 file:px-4 block w-full text-sm font-bold  italic shadow-md shadow-slate-100 text-gray-500
      file:rounded-full file:border-none
      file:text-sm file:font-semibold
       border-x file:text-violet-700  hover:file:text-violet-100
      hover:file:bg-violet-800  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 file:shadow-sm border-gray-500 `}
            />
          </label>
          <label htmlFor="able" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Your Able To Start ?
            </span>
            <input
              type="radio"
              name="able"
              value="yes"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-green-500  focus:border-gray-500 "
              placeholder="Name"
              id="able"
            />
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              Yes
            </span>
            <input
              type="radio"
              name="able"
              value="no"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-red-500  focus:border-gray-500 "
              placeholder="Name"
              id="no"
            />
            <label htmlFor="no">
              <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
                No
              </span>
            </label>
          </label>

          <label htmlFor="exCtc" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Your Expected CTC
            </span>
            <input
              type="number"
              className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 "
              placeholder="$$$"
              id="exCtc"
              name="exCtc"
              onChange={handelChange}
            />
          </label>
          <label htmlFor="ctc" className="block">
            <span className="mb-1 block font-bold text-base text-gray-700">
              Your Current CTC
            </span>
            <input
              type="number"
              className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 "
              placeholder="$$$"
              id="ctc"
              name="ctc"
              onChange={handelChange}
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              setSubmit(true);
            }}
            disabled={!data.name || !data.email.includes("@") || !data.phone}
            className="col-span-2  bg-indigo-700 text-white text-base font-semibold inline-block w-full p-3 rounded-md mt-8 disabled:opacity-10 tracking-wider hover:bg-lightblue"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default JobFrom;
