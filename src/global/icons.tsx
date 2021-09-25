import L from "leaflet";

export class KtaMapIcon {
    static Skull = L.icon({
        iconUrl: 'assets/markers/skull.png',
        iconSize: [50, 50],
        iconAnchor: [0, 25],
        popupAnchor: [0, 50],
    });
}
