import React, { useState, useRef, useEffect } from "react";
import { translations } from "../constents/index";
import Image from "next/image";
const Mission = ({ theme, language }) => {
  const t = translations[language];
  const isDark = theme === "dark";

  // State to track if the text is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Ref for the text element
  const textRef = useRef(null);

  // State to track if we need to show the read more button
  const [showReadMore, setShowReadMore] = useState(false);

  // Function to toggle expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if content exceeds 5 lines on mobile
  useEffect(() => {
    const checkTextHeight = () => {
      if (textRef.current) {
        // Get the line height of the text
        const style = window.getComputedStyle(textRef.current);
        const lineHeight = parseInt(style.lineHeight) || 24; // Default fallback
        const maxHeight = lineHeight * 5; // 5 lines max

        // Check if the text height exceeds max height
        const needsReadMore = textRef.current.scrollHeight > maxHeight;
        setShowReadMore(needsReadMore);
      }
    };

    checkTextHeight();

    // Re-check when window resizes
    window.addEventListener("resize", checkTextHeight);
    return () => {
      window.removeEventListener("resize", checkTextHeight);
    };
  }, [t.about.subtitle]);
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
              {/* <p className={`text-md sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto  `}>
                {t.mission.subtitle}
              </p> */}
               <div className="relative">
              <p
                ref={textRef}
                className={`text-base md:text-lg lg:text-xl 
    ${isDark ? "text-gray-300" : "text-gray-600"}
    ${!isExpanded && showReadMore ? "line-clamp-5 md:line-clamp-none" : ""}
  `}
              >
                {t.mission.subtitle}
              </p>

              {/* Read more button - only shown on mobile if needed */}
              {showReadMore && (
                <button
                  onClick={toggleExpand}
                  className={`mt-2 text-blue-600 font-medium hover:text-blue-800 md:hidden block `}
                >
                  {/* {t.language === "ar" ? "قراءة المزيد" : "Read More"} */}
                  {/* {isExpanded ? (t.about.readLess || "Read Less") : (t.about.readMore || "Read More")} */}
                  {isExpanded
                    ? language === "ar"
                      ? "اقرأ أقل"
                      : "Read Less"
                    : language === "ar"
                    ? "قراءة المزيد"
                    : "Read More"}
                </button>
              )}
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
