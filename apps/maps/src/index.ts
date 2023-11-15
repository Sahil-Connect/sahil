/* eslint-disable turbo/no-undeclared-env-vars */
import * as dotenv from "dotenv";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { key, PORT } from "./config";
import { GooglePlacesAPI } from "./Places";
import { GoogleDirectionsAPI } from "./Directions";
import { GoogleGeocodingAPI } from "./Geolocation";
import { places } from "./Places/resolvers";
import { typeDefs } from "./typeDefs";

dotenv.config();

async function address(_: any, { lat, lng }: any, { googleGeocodingAPI }: any) {
    return googleGeocodingAPI.reverseGeocode(lat, lng);
}

async function coords(_: any, { address }: any, { googleGeocodingAPI }: any) {
    return googleGeocodingAPI.geocode({ address });
}

async function directions(_: any, { origin, destination }: any, { googleDirectionsAPI }: any) {
    return googleDirectionsAPI.getDirections(origin, destination);
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
    typeDefs,
    resolvers,
    introspection: true,
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
    listen: { port: parseInt(PORT) },
}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});