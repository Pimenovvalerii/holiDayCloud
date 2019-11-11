import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="поиск событий"
             value={this.state.term}
             onChange={ this.onTermChange } />
    );
  };
}
