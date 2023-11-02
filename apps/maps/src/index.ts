import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';


export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Places {
        name: String
        lat: String
        long: String
        rating: Float
        address: String
        location: String
    }

    type Query {
        places: [Places]
    }
`;

class GoogleDirectionsAPI extends RESTDataSource {
    override baseURL = '';

    constructor(options: { token?: string; cache: KeyValueCache }) {
        super(options);
    }

}

class GoogleGeocodingAPI extends RESTDataSource {
    override baseURL = '';

    constructor(options: { token?: string; cache: KeyValueCache }) {
        super(options);
    }
}

class GooglePlacesAPI extends RESTDataSource {
    override baseURL = 'https://maps.googleapis.com/maps/';

    constructor(options: { token?: string; cache: KeyValueCache }) {
        super(options);
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.params.set('location', `4.859363,31.571251`);
        request.params.set('radius', `100`);
        request.params.set('type', `restaurant`);
        request.params.set('key', `AIzaSyCL9sSCrI2VKvzRDFY3fAlh7wgUGZp5jcA`);
    }
    
    async getRestaurants() {
        const { results } = await this.get(`/maps/api/place/nearbysearch/json`);
        return results;
    }
}


interface ContextValue {
    dataSources: {
        googlePlacesAPI: GooglePlacesAPI;
    };
}

const resolvers = {
    Query: {
        places: async (_, __, { dataSources }) => {
            return dataSources.googlePlacesAPI.getRestaurants();
        }
    }
};

const server = new ApolloServer<ContextValue>({
    typeDefs: typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {
            // We create new instances of our data sources with each request,
            // passing in our server's cache.
            dataSources: {
                googlePlacesAPI: new GooglePlacesAPI({ cache }),
            },
        };
    },
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);