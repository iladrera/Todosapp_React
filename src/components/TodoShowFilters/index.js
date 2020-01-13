import React, { Component } from "react";
import { TodoShowFilters } from "./presentational";

export default class TodoShowFiltersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  _toggleClass = (id, filter) => {
    this.setState(prevState => ({
      selected: id
    }));
    this.props.toggleShowFilters(filter);
  };

  render() {
    const btnsArray = ["all", "active", "completed"];

    return (
      <TodoShowFilters
        btnsArray={btnsArray}
        selected={this.state.selected}
        toggleClass={this._toggleClass}
      />
    );
  }
}
