import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import countriesname from "../countries";
import countries from "../Constants";
import SelectField from "../components/SelectField";
// import SearchCountries from "../components/SearchCountries"

const MapGL = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZmlsYmVydDBvIiwiYSI6ImNqYzQ5NzYzODEzNTkycnI1bWNwaDR0NWYifQ.CMn8BvsFMmUEBLsoGs29hw"
});

const countriesList = countriesname;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      longitude: 0,
      latitude: 0,
      zoom: 1
    }
    // this.onMapClick = this.onMapClick.bind(this)
    this.onCountryName = this.onCountryName.bind(this)
    this.onCountrySubmit = this.onCountrySubmit.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  componentDidMount(){
    // let mymap = L.map('mapid').setView([51.505, -0.09], 13);

    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    //
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsYmVydDBvIiwiYSI6ImNqYzQ5NzYzODEzNTkycnI1bWNwaDR0NWYifQ.CMn8BvsFMmUEBLsoGs29hw';
    // var map = new mapboxgl.Map({
    //   container: 'mapid',
    //   style: 'mapbox://styles/mapbox/streets-v10'
    // });
  }

  // onMapClick(e) {
  //   // event.preventDefault();
  //   console.log(e);
  //   // let longlat = JSON.stringify(e);
  //   this.setState({
  //     longitude: 10.19531,
  //     latitude: 49.49667
  //   })
  //   // console.log(longlat)
  // }

  onCountryName(countryName){
    let zoomIn = 1;
    countriesList.map(country => {
      if (countryName === country.name.common) {
        if (country.area >= 10000 && country.area < 100000) {
          zoomIn = 7
        } else if (country.area >= 100000 && country.area < 500000) {
          zoomIn = 6
        } else if (country.area >= 500000 && country.area < 1000000) {
          zoomIn = 5
        } else if (country.area >= 1000000 && country.area <= 10000000) {
          zoomIn = 4
        } else if (country.area > 10000000) {
          zoomIn = 2
        } else {
          zoomIn = 8
        }
        this.setState({
          longitude: country.latlng[1],
          latitude: country.latlng[0],
          zoom: zoomIn
        })
      }
    })
  }

  onCountrySubmit(event) {
    event.preventDefault();
    this.onCountryName(this.state.country);
  }

  handleCountryChange(event){
    this.setState({
      country: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onCountrySubmit}>
          <SelectField
            content={this.state.country}
            label="Country*"
            name="country"
            options={countries}
            onChange={this.handleCountryChange}
          />
          <input type='submit' value='Submit' />
        </form>
        <div id="mapid"></div>
        <MapGL
          container='mapid'
          onClick={this.onMapClick}
          center={[this.state.longitude,this.state.latitude]}
          style="mapbox://styles/mapbox/streets-v10"
          zoom={[this.state.zoom]}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[this.state.longitude,this.state.latitude]}/>
            </Layer>
        </MapGL>
      </div>
    )
  }
}

export default Map;
