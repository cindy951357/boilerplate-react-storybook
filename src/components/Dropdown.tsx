import React, { useState } from "react";

const LANGUAGES = ["English", "繁體中文", "Français"];

interface DropdownProps {
  arrowAnimation: "rotate" | "glow";
}

const Dropdown: React.FC<DropdownProps> = ({ arrowAnimation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClasses =
    arrowAnimation === "rotate"
      ? `transform transition-transform duration-500 ${
          isOpen ? "rotate-180" : ""
        }`
      : "transition duration-500 hover:brightness-150";

  return (
    <div
      className="main-with-sub-menu relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 border border-gray-300
        shadow-sm text-sm font-medium rounded-md bg-white
        hover:bg-gray-50 hover:border-none
        focus:outline focus:outline-2 focus:outline-secondary focus:outline-offset-2"
      >
        <span>Language</span>
        <svg
          className={`ml-2 h-5 w-5 ${arrowClasses}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 z-10 w-56 origin-top-right rounded-md 
          bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
          focus:border-none"
        >
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                hover:text-gray-900 w-full text-left"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
