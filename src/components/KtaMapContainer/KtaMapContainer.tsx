import './KtaMapContainer.css';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet'
import { CRS, LatLngBoundsExpression, LatLngBoundsLiteral } from 'leaflet';
import { KtaMapIcon } from '../../global/icons';

interface ContainerProps {
}

const KtaMapContainer: React.FC<ContainerProps> = () => {
  const style = {height: '100%', backgroundColor: 'black'};

  const initialPosition = {lat: 0, lng:0}
  const bounds: LatLngBoundsLiteral = [[-250,-250], [250,250]]; 
  

  return (
    <div className="container">
      <MapContainer 
        center={initialPosition} 
        zoom={1} 
        maxZoom={6} 
        scrollWheelZoom={true} 
        style={style} 
        crs={CRS.Simple}
      >
        <ImageOverlay
          bounds={bounds}
          url={'assets/nexus-2011.jpg'}
        />

        <Marker icon={KtaMapIcon.Skull} position={[0,0]}/>

      </MapContainer>,
    </div>
  );
};

export default KtaMapContainer;
