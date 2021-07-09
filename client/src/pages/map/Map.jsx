import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Room from '@material-ui/icons/Room';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoibWFkaHVzaGFuaSIsImEiOiJja3F1M3oyNTcwMHdjMm9vNnd1MWsybnBjIn0.IwduwcTrJdq76oUyA6y6Zw"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/madhushani/ckquqb3z9112917qnvazhsq7c"
    > 
       <Marker
       latitude={48.858093}
       longitude={2.294694}
       offsetLeft={-20}
       offsetTop={-10}>
         <Room style={{fontSize:viewport.zoom*7, color:"tomato"}}/>
       </Marker>

       <Popup
          latitude={48.858093}
          longitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div>You</div>
        </Popup>

    </ReactMapGL>
    </div>
  );
}

