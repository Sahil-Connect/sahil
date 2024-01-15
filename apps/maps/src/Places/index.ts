import { Client } from "@googlemaps/google-maps-services-js";
export class GooglePlacesAPI {
  private client;
  private _key;

  constructor({ key }) {
    this.client = new Client({});
    this._key = key;
  }
  async getNearbyPlaces(lat: number, lng: number): Promise<any> {
    console.log("yrrrrr");
    try {
      const response = await this.client.placesNearby({
        params: {
          key: this._key,
          location: `${lat},${lng}`,
          radius: 100,
          type: "hotel",
        },
      });
      console.log("response", response?.data?.results);
      console.log("************");
      console.log("response", response?.data?.results?.geometry);
      return response?.data?.results?.map((place) => {
        return {
          name: place.name,
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          address: "String",
          location: "String",
        };
      });
    } catch (error) {
      console.log("no", error);
    }
  }
}
