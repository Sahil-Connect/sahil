import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';


export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Query {}
`;

class GooglePlacesAPI extends RESTDataSource {
    override baseURL = '';

    constructor(options: { token?: string; cache: KeyValueCache }) {
        super(options);
    }

}

interface ContextValue {
    dataSources: {
        googlePlacesAPI: GooglePlacesAPI;
    };
}

const resolvers = {
    Mutation: {

    },
    Query: {

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