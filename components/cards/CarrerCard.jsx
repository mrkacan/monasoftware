import { motion } from "framer-motion";
import { useState } from "react";

function CarrerCard({ title, description }) {
  const [height, setHeight] = useState("h-24");
  return (
    <article className="shadow-base shadow-gray-300 rounded-xl p-4 min-h-40 h-full space-y-2 lg:flex items-center ">
      <div className="my-4">
        <motion.h3 layout className="font-semibold    text-lg   text-gray-900">
          Business Development Manager
        </motion.h3>
        <motion.div layout>
          <motion.div className={`${height} overflow-hidden `} layout>
            <motion.span className="inline-block " layout>
              {" "}
              We are looking for a Business Development Manager, that is
              responsible for leading the company s strategic partnerships.
              Informed by a deep understanding of the
            </motion.span>
            <motion.ul
              layout
              className="grid my-8 md:grid-cols-2 gap-14 list-disc p-2    text-lightblue  list-inside"
            >
              {[1, 2, 3, 4].map((item) => (
                <motion.li layout key={item}>
                  <motion.span layout className="   text-gray-900">
                    Understanding the service range of the company.
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      <h4 className="font-semibold  whitespace-nowrap   text-lg   text-gray-900 md:px-20 ">
        Full-Time
      </h4>
      <a href="mailto:info@monasoftware.com">
        <button className="bg-lightblue whitespace-nowrap  text-white  inline-block p-6 rounded-lg py-3 hover:bg-darkblue">
          Apply NOW
        </button>
      </a>
    </article>
  );
}

export default CarrerCard;
