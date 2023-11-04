/* eslint-disable turbo/no-undeclared-env-vars */
import { config } from "dotenv";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Client } from "@googlemaps/google-maps-services-js";
import type { GeocodeResult } from '@googlemaps/google-maps-services-js';
config();

const key = process.env.API_KEY as string;

export const typeDefs = `#graphql
    type Places {
        name: String
        lat: String
        lng: String
        rating: Float
        address: String
        location: String
    }

    type GeoCoords {
        lat: String
        lng: String
    }
    type LocationByCoords {
        location: GeoCoords
        placeId: String
        types: [String]
    }

    type Address {
        location: GeoCoords
        placeId: String
        types: [String]
    }

    type LegDistance {
        text: String
        value: String
    }

    type LegDuration {
        text: String
        value: String
    }

    type DirectionLeg {
        distance: LegDistance
        duration: LegDuration
    }

    type DirectionRoute {
        name: String
        legs: [DirectionLeg]
    }

    type Directions {
        routes: DirectionRoute
        startLocation: GeoCoords
        endLocation: GeoCoords
    }

    type Query {
        address(lat: String!, lng: String): Address
        coords(address: String): LocationByCoords
        directions(origin: String!, destination: String): Directions
        places: [Places]
    }
`;

class GoogleDirectionsAPI {
    private client;
    private _key;

    constructor({ key }) {
        this.client = new Client({});
        this._key = key;
    }
    async getDirections(origin: string, destination: string): Promise<any> {
        const { data } = await this.client.directions({
            params: {
                origin,
                destination,
                key: this._key
            }
        });

        return {
            routes: {
                name: "Route",
                legs: [
                    {
                        distance: {
                            ...data.routes?.[0]?.legs[0]?.distance
                        },
                        duration: {
                            ...data.routes?.[0]?.legs[0]?.duration
                        }
                    }
                ]
            },
            startLocation: {
                ...data.routes?.[0]?.legs[0]?.start_location
            },
            endLocation: {
                ...data.routes?.[0]?.legs[0]?.end_location
            }
        };
    }


}

class GooglePlacesAPI {
    private client;
    private _key;

    constructor({ key }) {
        this.client = new Client({});
        this._key = key;
    }
    async getNearbyPlaces(lat: string, lng: string, {
        radius = 100,
        type = "hotel"
    }): Promise<any> {
        try {
            const response = await this.client.placesNearby({
                params: {
                    key: this._key,
                    location: `${lat},${lng}`,
                    radius,
                    type
                }
            });
            console.log("response", response);
            return [
                {
                    name: "String",
                    lat: "String",
                    lng: "String",
                    rating: "String",
                    address: "String",
                    location: "String"
                }
            ];
        } catch (error) {
            console.log("no", error);
        }
    }
}


class GoogleGeocodingAPI {
    private client;
    private _key;

    constructor({ key }) {
        this.client = new Client({});
        this._key = key;
    }

    async geocode({ address }): Promise<Pick<GeocodeResult, "types"> & {
        location: Record<string, string>;
        placeId: string;
    }> {
        const { data } = await this.client.geocode({
            params: {
                address,
                key: this._key
            }
        });
        return {
            location: { ...data.results[0]?.geometry?.location },
            placeId: data.results[0]?.place_id,
            types: data.results[0]?.types
        };
    }

    async reverseGeocode(lat: number, lng: number): Promise<any> {
        const { data } = await this.client.geocode({
            params: {
                key: this._key,
                latlng: `${lat},${lng}`,
            }
        });
        return {
            location: { ...data.results[0]?.geometry?.location },
            placeId: data.results[0]?.place_id,
            types: data.results[0]?.types
        };
    }
}

async function address(_: any, { lat, lng }: any, { googleGeocodingAPI }: any) {
    return googleGeocodingAPI.reverseGeocode(lat, lng);
}

async function coords(_: any, { address }: any, { googleGeocodingAPI }: any) {
    return googleGeocodingAPI.geocode({ address });
}

async function directions(_: any, { origin, destination }: any, { googleDirectionsAPI }: any) {
    return googleDirectionsAPI.getDirections(origin, destination);
}

async function places(_: any, { lat, lng, ...rest }: any, { googlePlacesAPI }: any) {
    console.log("...rest:", ...rest);
    return googlePlacesAPI.getNearbyPlaces(lat, lng, {
        radius: 50,
        type: "hotel"
    });
}

const resolvers = {
    Query: {
        address,
        coords,
        directions,
        places,
    }
};

interface ContextValue {
    googleDirectionsAPI: GoogleDirectionsAPI;
    googleGeocodingAPI: GoogleGeocodingAPI;
    googlePlacesAPI: GooglePlacesAPI;
}


const server = new ApolloServer<ContextValue>({
    typeDefs: typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    context: async () => {
        // We create new instances of our data sources with each request,
        // passing in our server's cache.
        return {
            googleDirectionsAPI: new GoogleDirectionsAPI({ key }),
            googleGeocodingAPI: new GoogleGeocodingAPI({ key }),
            googlePlacesAPI: new GooglePlacesAPI({ key })
        }
    },
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});