import React, { useState } from "react";
import { useContactContext } from "../../../context/ContactProvider";
import { AnimateSharedLayout, motion } from "framer-motion";
function Form({ initialLoad }) {
  const [allowed, setAllowed] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [data, setData] = useState({ name: "", email: "" });

  const [, setOpen] = useContactContext();

  function handelSubmit(e) {
    e.preventDefault();
  }

  const wave = {
    initial: {
      rotate: "0deg",
      y: "0",
    },
    animate: {
      rotate: "30deg",
      transition: {
        repeat: Infinity,
        duration: 0.5,
        type: "spring",
        repeatType: "mirror",
      },
    },
    he: {
      rotate: "6deg",
      scale: 1.1,
      transition: {
        repeat: Infinity,
        duration: 0.41,
        type: "spring",
        repeatType: "mirror",
      },
    },
  };
  return (
    <>
      <motion.h1
        variants={initialLoad}
        className="text-center my-2 py-2 text-lg font-medium"
      >
        {submit ? data.name.split(" ")[0] + "   Hello" : "Say Hello "}
        <motion.span
          className="inline-block"
          variants={wave}
          initial={"initial"}
          animate={submit ? "animate" : "he"}
        >
          👋
        </motion.span>
      </motion.h1>

      {submit ? (
        <motion.div variants={initialLoad} className="py-8 px-4 text-center">
          <h4 className="">Thank you for reaching out at 🎉</h4>
          <p className="border-b-lightblue border-b-4 inline-block font-semibold ">
            {data.email} 💌
          </p>
          <h4 className="">We will contact you soon as possible ✅</h4>
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
        <motion.form
          variants={initialLoad}
          onSubmit={handelSubmit}
          className="     pt-4 lg:p-8 p-2   py-8 space-y-4  xl:grid xl:grid-cols-2 items-baseline gap-6 "
        >
          <motion.button
            className="absolute text-black flex items-center justify-center top-3 right-3 font-mono w-6 h-6 rounded-md text-xl"
            variants={initialLoad}
            onClick={() => {
              setOpen(false);
            }}
          >
            &times;
          </motion.button>
          <label htmlFor="name" className="block col-span-2">
            <span className="mb-1 block font-semibold text-base text-gray-700">
              Name
            </span>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-lightblue  focus:border-gray-500 "
              placeholder="Name"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </label>
          <label htmlFor="email" className="block col-span-2">
            <span className="mb-1 block font-semibold text-base text-gray-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-lightblue focus:border-gray-500 mb-6`}
              placeholder="Email"
            />
          </label>

          <button
            type="submit"
            onClick={() => {
              setSubmit(true);
            }}
            disabled={!data.name || !data.email.includes("@") || allowed}
            className="col-span-2  bg-indigo-700 text-white text-base font-semibold inline-block w-full p-3 rounded-md mt-8 disabled:opacity-10 tracking-wider hover:bg-lightblue"
          >
            Submit
          </button>
        </motion.form>
      )}
    </>
  );
}

export default Form;
