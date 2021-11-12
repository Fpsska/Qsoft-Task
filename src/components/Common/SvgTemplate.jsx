import React from "react";

const SvgTemplate = ({id}) => {
  switch (id) {
    case "profile":
      return (
        <svg
          className="icon__image"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0576 13.229C7.98278 13.229 4.61188 16.2879 4.11951 20.231C4.05108 20.779 4.50536 21.229 5.05765 21.229C5.60993 21.229 6.04891 20.7779 6.14028 20.2332C6.61603 17.3972 9.08858 15.229 12.0576 15.229C15.0267 15.229 17.4993 17.3972 17.975 20.2332C18.0664 20.7779 18.5054 21.229 19.0576 21.229C19.6099 21.229 20.0642 20.779 19.9958 20.231C19.5034 16.2879 16.1325 13.229 12.0576 13.229Z"
            fill="#34AADD"
          />
          <path
            d="M12.0576 11.229C14.2636 11.229 16.0576 9.435 16.0576 7.229C16.0576 5.023 14.2636 3.229 12.0576 3.229C9.85162 3.229 8.05762 5.023 8.05762 7.229C8.05762 9.435 9.85162 11.229 12.0576 11.229"
            stroke="#34AADD"
            strokeWidth="2"
          />
        </svg>
      );
    default:
      return <svg className="empty"></svg>;
  }
};

export default SvgTemplate;
