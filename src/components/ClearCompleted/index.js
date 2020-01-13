import React from "react";

export const ClearCompletedContainer = props => (
  <button className="clear-completed" onClick={props.clearCompleted}>
    Clear completed
  </button>
);
