import { Client } from "@googlemaps/google-maps-services-js";
export class GoogleDirectionsAPI {
  private client;
  private _key;

  // @ts-ignore
  constructor({ key }) {
    this.client = new Client({});
    this._key = key;
  }
  async getDirections(origin: string, destination: string): Promise<any> {
    const { data } = await this.client.directions({
      params: {
        origin,
        destination,
        key: this._key,
      },
    });

    return {
      routes: {
        name: "Route",
        legs: [
          {
            distance: {
              ...data.routes?.[0]?.legs[0]?.distance,
            },
            duration: {
              ...data.routes?.[0]?.legs[0]?.duration,
            },
          },
        ],
      },
      startLocation: {
        ...data.routes?.[0]?.legs[0]?.start_location,
      },
      endLocation: {
        ...data.routes?.[0]?.legs[0]?.end_location,
      },
    };
  }
}
