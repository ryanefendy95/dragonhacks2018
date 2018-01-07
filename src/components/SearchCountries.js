import React, { Component } from 'react';
// import { Link } from 'react-router';
import countries from "../Constants"
import Autosuggest from 'react-autosuggest';
import Map from "../components/Map"

// const countries = [];

class SearchCountries extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      countries: countries
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  // componentDidMount() {
  //   this.getVenues();
  // }

  getSuggestions(value) {
    let inputValue = value.trim().toLowerCase();
    let inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.countries.filter(country =>
    country.toLowerCase().slice(0, inputLength) === inputValue
  );
  }

  getSuggestionValue(suggestion) { return suggestion; }

  renderSuggestion(suggestion) {
    return(
      <div>
        <p>{suggestion}</p>
      </div>
    )
  }

  render() {

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for a Country',
      value,
      onChange: this.onChange
    };

    return (
      <div className='suggestions-container'>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        />
        <Map
          value={this.state.value}
        />
      </div>
    );
  }
}

export default SearchCountries;
