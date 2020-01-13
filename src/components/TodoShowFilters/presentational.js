import React from "react";

export const TodoShowFilters = props => (
  <ul className="filters">
    {props.btnsArray.map((element, index) => {
      return (
        <li key={index}>
          <button
            className={props.selected === index ? "selected" : ""}
            onClick={e => props.toggleClass(index, element)}
          >
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </button>
        </li>
      );
    })}
  </ul>
);
