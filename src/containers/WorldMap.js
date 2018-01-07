// import React, { Component } from 'react';
// // import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import countriesLayer from '../data/world'
// import ReactMapboxGl from "react-mapbox-gl";
// import L from 'mapbox.js';
// import { Link, browserHistory } from 'react-router'
//
// let geojson;
//
// class WorldMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       highlightedCountry: ""
//     }
//     this.map;
//     this.zoomToFeature = this.zoomToFeature.bind(this);
//     this.countriesOnEachFeature = this.countriesOnEachFeature.bind(this);
//     this.highlightFeature = this.highlightFeature.bind(this)
//
//   }
//
//   componentDidMount() {
//
//     // Since we are creating a new map instance, the code below within componentDidMount can only be run once. So, the code needs to remain here, and can't be in the MapContainer file (since each change in state would re-run the code).
//     L.mapbox.accessToken = 'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
//     var map = L.mapbox.map('map').setView([16.541430, 7.558594], 3);
//
//
//     this.map = map;
//     // Use styleLayer to add a Mapbox style created in Mapbox Studio
//     L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v9').addTo(map);
//
//      geojson = L.geoJSON(countriesLayer, {
//       onEachFeature: this.countriesOnEachFeature
//     }).addTo(map);
//
//
//     geojson.setStyle({opacity: 0, fillOpacity: 0})
//
//     this.L = L
//   }
//
//   highlightFeature(event) {
//     var layer = event.target;
//     let country = layer.feature.properties.name
//
//     this.setState({
//       highlightedCountry: country
//     })
//
//     layer.setStyle(
//       {
//         weight: 3,
//         fillColor: '#0082E6',
//         fillOpacity: 0.8
//       }
//     )
//     if(!L.Browser.ie && !L.Browser.opera) {
//       layer.bringToFront();
//     }
//   }
//
//   resetHighlight(e) {
//
//     geojson.setStyle({ fillOpacity: 0 })
//   }
//
//   countriesOnEachFeature(feature, layer) {
//     layer.on(
//       {
//         mouseover: this.highlightFeature,
//         mouseout: this.resetHighlight,
//         click: this.zoomToFeature
//       }
//     )
//   }
//
//   zoomToFeature(clickEvent) {
//     let countryObject = clickEvent.target
//     let countryName = countryObject.feature.properties.name
//     let countryBounds = (countryObject.getBounds())
//
//     this.map.fitBounds(countryBounds)
//     this.props.selectCountry(countryName)
//     // browserHistory.push('/country-transition')
//   }
//
//   render() {
//
//     return(
//       <div>
//         shit
//         <div className="countryName blue">{this.state.highlightedCountry}</div>
//         <div className="container" id='map'></div>
//       </div>
//     )
//   }
// }
// export default WorldMap;
