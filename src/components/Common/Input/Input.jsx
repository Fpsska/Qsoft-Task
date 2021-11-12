import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <input
      className={
        props.isNavMobileVisible
          ? "header__input-mobile input"
          : "header__input input"
      }
      type="text"
      placeholder="Найти..."
    />
  );
};

export default Input;
