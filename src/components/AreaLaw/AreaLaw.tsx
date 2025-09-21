"use client";
import React, { useState, useMemo } from "react";

import { translations } from "./Helper";

const extractText = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const parseContent = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const sections = [];
  const elements = doc.body.children;
  let currentSection = null;

  for (const element of elements) {
    if (
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3"
    ) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: element.textContent.trim(),
        content: element.outerHTML,
        originalLink: null,
      };
    } else {
      if (currentSection) {
        const tempDiv = document.createElement("div");
        tempDiv.appendChild(element.cloneNode(true));
        const link = tempDiv.querySelector(
          'a[href*="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf"]'
        );

        if (link) {
          currentSection.originalLink = link.href;
          link.parentNode.removeChild(link);
        }
        currentSection.content += tempDiv.innerHTML;
      }
    }
  }
  if (currentSection) {
    sections.push(currentSection);
  }
  return sections;
};

const AreaLaw = () => {
  const [language, setLanguage] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const currentTranslation = translations[language];
  const translatedFilterOptions = currentTranslation.filterOptions;

  const handleLanguageChange = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ne" : "en"));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const parsedContent = useMemo(
    () => parseContent(currentTranslation.actContent),
    [currentTranslation]
  );

  const filteredContent = useMemo(() => {
    let content = [...parsedContent];

    if (filter) {
      content = content.filter((section) => {
        const titleElement = new DOMParser()
          .parseFromString(section.content, "text/html")
          .body.querySelector("h1, h2, h3");
        if (titleElement) {
          return titleElement.tagName.toLowerCase() === filter.toLowerCase();
        }
        return false;
      });
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      content = content.filter((section) => {
        return extractText(section.content)
          .toLowerCase()
          .includes(lowerCaseSearchTerm);
      });
    }

    return content;
  }, [searchTerm, filter, parsedContent]);

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans antialiased p-4 sm:p-8">
      <style>{`
        body {
          background-color: #111111;
        }
        .text-neon-green {
          color: #39FF14;
        }
        .border-neon-green {
          border-color: #39FF14;
        }
        .bg-gradient-to-r-neon {
          background-image: linear-gradient(to left, #00Bfff, #00BFFF);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        th, td {
            border: 1px solid #4a5568;
            padding: 0.75rem;
            text-align: left;
        }
        thead {
            background-color: #2d3748;
        }
        tr:nth-child(even) {
            background-color: #2a3442;
        }
        .prose strong {
            color: #E2E8F0;
        }
      `}</style>
      <div className="max-w-4xl mx-auto py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r-neon">
              {currentTranslation.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            {currentTranslation.subtitle}
          </p>
        </header>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div className="flex-grow relative w-full">
            <input
              type="text"
              placeholder={currentTranslation.searchPlaceholder}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all duration-300"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              className="w-full sm:w-auto bg-gray-700 text-gray-200 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all duration-300 cursor-pointer appearance-none"
              value={filter}
              onChange={handleFilterChange}
            >
              {translatedFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={handleLanguageChange}
              className="
    w-full sm:w-auto
    px-4 py-2
    border border-transparent
    text-sm font-medium
    rounded-md shadow-sm
    text-black
    hover:opacity-90
    bg-[#EAEAEA]
  "
            >
              {currentTranslation.switchLangButton}
            </button>
          </div>
        </div>

        <main>
          {filteredContent.length > 0 ? (
            filteredContent.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg p-6 mb-6 transition-transform transform hover:scale-[1.01] duration-300"
              >
                <div
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {section.originalLink && (
                  <div className="mt-4 text-right">
                    <a
                      href={section.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r-neon hover:bg-gradient-to-r-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green"
                    >
                      {currentTranslation.viewOriginal}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 text-center text-gray-400 text-lg">
              {currentTranslation.noResults}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AreaLaw;
