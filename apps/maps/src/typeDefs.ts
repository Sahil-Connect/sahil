export const typeDefs = `#graphql
    type Places {
        name: String
        lat: Float
        lng: Float
        address: String
        location: String
    }

    type GeoCoords {
        lat: Float
        lng: Float
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
        address(lat: Float!, lng: Float!): Address
        coords(address: String!): LocationByCoords
        directions(origin: String!, destination: String!): Directions
        places(lat: Float!, lng: Float!): [Places]
    }
`;
