import { Client } from "@googlemaps/google-maps-services-js";
import type { GeocodeResult } from "@googlemaps/google-maps-services-js";

export class GoogleGeocodingAPI {
  private client;
  private _key;

  constructor({ key }) {
    this.client = new Client({});
    this._key = key;
  }

  async geocode({ address }): Promise<
    Pick<GeocodeResult, "types"> & {
      location: Record<string, string>;
      placeId: string;
    }
  > {
    const { data } = await this.client.geocode({
      params: {
        address,
        key: this._key,
      },
    });
    return {
      location: { ...data.results[0]?.geometry?.location },
      placeId: data.results[0]?.place_id,
      types: data.results[0]?.types,
    };
  }

  async reverseGeocode(lat: number, lng: number): Promise<any> {
    const { data } = await this.client.geocode({
      params: {
        key: this._key,
        latlng: `${lat},${lng}`,
      },
    });
    return {
      location: { ...data.results[0]?.geometry?.location },
      placeId: data.results[0]?.place_id,
      types: data.results[0]?.types,
    };
  }
}
