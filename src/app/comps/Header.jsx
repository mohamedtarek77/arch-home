"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "../constents/index";
import Image from "next/image";
const Header = ({ theme, language, ChangeLanguage, ChangeTheme }) => {
  const t = translations[language];

  return (
    <header
      className={`container mx-auto px-4 py-6 ${
        theme === "dark" ? "border-b border-gray-700" : ""
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* <div
        className={`text-2xl font-bold ${
          theme === "dark" ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        NextGen
      </div> */}
        <div className="flex flex-1 justify-center items-center">
          {theme === "dark" ? (
            <Image
              src={"/images/logo-mo-black.png"}
              alt="Hero Image"
              width={200}
              height={200}
            />
          ) : (
            <Image
              src={"/images/logo-mo.png"}
              alt="Hero Image"
              width={200}
              height={200}
            />
          )}
        </div>

        <div className="flex  flex-2 justify-between items-center gap-4">
          {/* Toggle buttons */}
          <div className="flex gap-2">
            <button
              onClick={ChangeTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={ChangeLanguage}
              className={`px-3 py-1 rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 text-indigo-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle language"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
          </div>

          <div className="hidden md:flex justify-between items-center space-x-8">
            <a
              href="#about"
              className={`hover:${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              } transition-colors`}
            >
              {t.nav.about}
            </a>
            <a
              href="#mission"
              className={`hover:${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              } transition-colors`}
            >
              {t.nav.mission}
            </a>
            <a
              href="#services"
              className={`hover:${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              } transition-colors`}
            >
              {t.nav.services}
            </a>
            <a
              href="#clients"
              className={`hover:${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              } transition-colors`}
            >
              {t.nav.clients}
            </a>
            <a
              href="#contact"
              className={`hover:${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              } transition-colors`}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* <button
          className={`${
            theme === "dark"
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          } text-white px-6 py-2 rounded-lg transition-colors`}
        >
          {t.nav.getStarted}
        </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
