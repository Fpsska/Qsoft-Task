import React from "react";
import "./Input.scss";

const Input = ({isNavMobileVisible}) => {
  return (
    <input
      className={
        isNavMobileVisible
          ? "header__input-mobile input"
          : "header__input input"
      }
      type="text"
      placeholder="Найти..."
    />
  );
};

export default Input;
