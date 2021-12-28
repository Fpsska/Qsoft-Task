import React from "react";
import SvgTemplate from "../SvgTemplate";
import "./Form.scss";

const Form = ({ isNavMobileVisible }) => {
  return (
    <form
      className={isNavMobileVisible ? "form form--mobile" : "form"}
      action="#"
    >
      <input
        className={
          isNavMobileVisible ? "form__input form__input-mobile" : "form__input"
        }
        type="text"
        placeholder="Найти..."
      />
      <button className="form__button" type="submit">
        <SvgTemplate id="search" />
      </button>
    </form>
  );
};

export default Form;
