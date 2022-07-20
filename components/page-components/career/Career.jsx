import React from "react";
import CarrerProvider from "../../../context/CarrerProvider";
import CarrerCard from "../../cards/CarrerCard";

function Career() {
    return (
        <CarrerProvider>
            <section className="container text-center py-14 leading-8 ">
                <div className="m-auto max-w-4xl w-full px-4">
                    <div className="py-8">
                        <h1 className="font-light lg:text-2xl text-xl text-gray-900">
                            Become a Part of
                            <br/>
                            <span className="text-darkblue lg:text-2xl text-xl font-bold ">
                Monasoftware Family
              </span>
                        </h1>
                        <p className="py-6 lg:font-medium  ">
                            We have a few postings that we think you might be interested in!
                        </p>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="font-bold  md:text-xl text-lg my-4 text-gray-900 mb-8
          ">
                        Open Positions in Engineering
                    </h2>
                    <section className="grid gap-8 text-left">
                        {[1].map((item) => (
                            <CarrerCard key={item}/>
                        ))}
                    </section>
                </div>
            </section>
        </CarrerProvider>
    );
}

export default Career;
