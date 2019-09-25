import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}></div>

  {text}</div>;

class SimpleMap extends Component {
  static defaultProps() {
    return {
      center: {
        lat: 40.348210,
        lng: -74.669210
      },
      zoom: 11
    }
  };




  render() {
    //const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
      /* Important! Always set the container height explicitly */
      <section className="container">

        <div className=" place" style={{ height: '400px', width: '100%' }}>

          <GoogleMapReact
            className="container"
            bootstrapURLKeys={{ key: 'AIzaSyAvHBhv-DCpbvbZTYal8QLOKoxscD49ios '	 /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={40.348210}
              lng={-74.669210}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <div style={{ width: '100%', height: '400px' }}>
    <SimpleMap />
  </div>,
  document.getElementById('app')
)

export default SimpleMap;


