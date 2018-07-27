import React from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';
import {initializeCases} from '../actions'
import './Mapa.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aW1iYSIsImEiOiJjaXBlbWdwM3owMDAxdGhuZGFndXFnamwwIn0.Dyxt47gEXGCeNTzU2ObGsQ';

let Map = class Map extends React.Component {
  map;
  
  componentDidUpdate() {
    this.setFill();
  }
  
  setFill() {
    /*const { property, stops } = this.props.active;
    this.map.setPaintProperty('countries', 'fill-color', {
      property,
      stops
    });    */
  }

  componentDidMount() {
    initializeCases()

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-70.666,4.426],
      zoom: 3.2
    });

    this.map.on('load', () => {
        this.map.addSource('trees', {
          type: 'geojson',
          data: this.props.geocases
        });
        
        this.map.addLayer({
          id: 'trees-heat',
          type: 'heatmap',
          source: 'trees',
          maxzoom: 15,
          paint: {
            // increase weight as diameter breast height increases
            'heatmap-weight': {
              property: 'dbh',
              type: 'exponential',
              stops: [
                [1, 0],
                [62, 1]
              ]
            },
            // increase intensity as zoom level increases
            'heatmap-intensity': {
              stops: [
                [11, 1],
                [15, 3]
              ]
            },
            // assign color values be applied to points depending on their density
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(236,222,239,0)',
              0.2, 'rgb(208,209,230)',
              0.4, 'rgb(166,189,219)',
              0.6, 'rgb(103,169,207)',
              0.8, 'rgb(28,144,153)'
            ],
            // increase radius as zoom increases
            'heatmap-radius': {
              stops: [
                [11, 15],
                [15, 20]
              ]
            },
            // decrease opacity to transition into the circle layer
            'heatmap-opacity': {
              default: 1,
              stops: [
                [14, 1],
                [15, 0]
              ]
            },
          }
        }, 'waterway-label');
        
        this.map.addLayer({
          id: 'trees-point',
          type: 'circle',
          source: 'trees',
          minzoom: 14,
          paint: {
            // increase the radius of the circle as the zoom level and dbh value increases
            'circle-radius': {
              property: 'dbh',
              type: 'exponential',
              stops: [
                [{ zoom: 15, value: 1 }, 5],
                [{ zoom: 15, value: 62 }, 10],
                [{ zoom: 22, value: 1 }, 20],
                [{ zoom: 22, value: 62 }, 50],
              ]
            },
            'circle-color': {
              property: 'dbh',
              type: 'exponential',
              stops: [
                [0, 'rgba(236,222,239,0)'],
                [10, 'rgb(236,222,239)'],
                [20, 'rgb(208,209,230)'],
                [30, 'rgb(166,189,219)'],
                [40, 'rgb(103,169,207)'],
                [50, 'rgb(28,144,153)'],
                [60, 'rgb(1,108,89)']
              ]
            },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.5,
            'circle-opacity': {
              stops: [
                [14, 0],
                [15, 1]
              ]
            }
          }
        }, 'waterway-label');
      }); //fin load
  }

  render() {
    return (
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeCases: dispatch(initializeCases())
  }
}

function mapStateToProps(state) {
  return {
    geocases: state.cases,
    data: state.data,
    active: state.active
  };
}

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;