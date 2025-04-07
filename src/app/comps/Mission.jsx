import React from "react";
import { translations } from "../constents/index";
import Image from "next/image";
const Mission = ({ theme, language }) => {
  const t = translations[language];

  return (
    <div>
      <section
        id="mission"
        className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
          <div className="container flex flex-col sm:flex-row  mx-auto px-4 gap-5 w-3/4">
          <div className="rounded-4xl overflow-hidden">
            <Image
              src={t.mission.image}
              alt="About Image"
              width={500}
              height={500}
            />
          </div>
          <div className= {`${ language === "ar" ?`text-right `:`text-left `}mb-16 sm:w-3/4`}  >
              <h2 className=" text-lg sm:text-3xl font-bold mb-4">{t.mission.title}</h2>
              <p className={`text-md sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto  `}>
                {t.mission.subtitle}
              </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
