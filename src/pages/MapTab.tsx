import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import KtaMapContainer from '../components/KtaMapContainer/KtaMapContainer';
import './MapTab.css';

const MapTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>KTAMaps  <IonIcon name="accessibility-outline"></IonIcon></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KTAMaps</IonTitle>
          </IonToolbar>
        </IonHeader>
        <KtaMapContainer/>
      </IonContent>
    </IonPage>
  );
};

export default MapTab;
