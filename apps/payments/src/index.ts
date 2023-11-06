import { ApolloServer } from '@apollo/server';
import express from "express";
import http from 'http';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { AugmentedRequest, CacheOptions, PostRequest, RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import * as dotenv from "dotenv";

dotenv.config();
export const typeDefs = `#graphql
  type RequestToPayResponse {
    status: String
    message: String
}

type CreateAccessTokenResponse {
    token: String
    expires_in: Int
}

type AccountBalanceResponse {
    availableBalance: String
    currency: String
}

type BasicUserInfoResponse {
    given_name: String
    family_name: String
    birthdate: String
    locale: String
    gender: String
    status: String
}

type PaymentStatusResponse {
    referenceId: String
    status: String
    financialTransactionId: String
    reason: String
}

type PreApprovalStatusResponse {
    payer: String
    payerCurrency: String
    payerMessage: String
    status: String
    expirationDateTime: String
    reason: String
}

type UserInfoWithConsentResponse {
    sub: String
    name: String
    given_name: String
    family_name: String
    middle_name: String
    email: String
    email_verified: Boolean
    gender: String
    locale: String
    phone_number: String
    phone_number_verified: Boolean
    address: String
    updated_at: Int
    status: String
    birthdate: String
    credit_score: String
    active: Boolean
    country_of_birth: String
    region_of_birth: String
    city_of_birth: String
    occupation: String
    employer_name: String
    identification_type: String
    identification_value: String
}

type RequestToPayTransactionStatusResponse {
    amount: String
    currency: String
    financialTransactionId: String
    externalId: String
    payer: String
    payerMessage: String
    payeeNote: String
    status: String
    reason: String
}


type Mutation {
    requestToPay(amount: Float!, currency: String!, externalId: String!, partyIdType: String!, partyId: String!, payerMessage: String, payeeNote: String): RequestToPayResponse
    createAccessToken: CreateAccessTokenResponse
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    accountBalance: AccountBalanceResponse
    basicUserInfo(accountHolderMSISDN: String!): BasicUserInfoResponse
    paymentStatus(referenceId: String!): PaymentStatusResponse
    preApprovalStatus(referenceId: String!): PreApprovalStatusResponse
    userInfoWithConsent: UserInfoWithConsentResponse
    requestToPayTransactionStatus(referenceId: String!): RequestToPayTransactionStatusResponse
}
`;

class MomoAPI extends RESTDataSource {
    override baseURL = 'https://sandbox.momodeveloper.mtn.com/';
    private token: string = "";

    constructor(options: { token?: string; cache: KeyValueCache }) {
        super(options);
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['Authorisation'] = `Bearer ${this.token}`;
        request.headers['Ocp-Apim-Subscription-Key'] = ``;
    }

    async requestToPay(body: PostRequest<CacheOptions> | undefined) {
        return this.post(`collection/v1_0/requesttopay`, body);
    }

    async createAcccessToken() {
        return this.post(`collection/token/`);
    }

    async getAccountBalance() {
        try {
            const res = await this.get(`collection/v1_0/account/balance`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getBasicUserInfo(accountHolderMSISDN: any) {
        return this.get(`collection/v1_0/accountholder/msisdn/${accountHolderMSISDN}/basicuserinfo`);
    }

    async getPaymentStatus(referenceId: any): Promise<Record<string, any>> {
        return this.get(`collection/v2_0/payment/${referenceId}`);
    }

    async getPreApprovalStatus(referenceId: any) {
        return this.get(`collection/v2_0/preapproval/${referenceId}`);
    }

    async getUserInfoWithConsent() {
        return this.get(`collection/oauth2/v1_0/userinfo`);
    }

    async getRequestToPayTransactionStatus(referenceId: any) {
        return this.get(`collection/v1_0/requesttopay/${referenceId}`);
    }
}

async function accountBalance(_: any, __: any, { dataSources }: any) {
    return dataSources.momoAPI.getAccountBalance();
}

async function basicUserInfo(_: any, { accountHolderMSISDN }: any, { dataSources }: any) {
    return dataSources.momoAPI.getBasicUserInfo(accountHolderMSISDN);
}
async function paymentStatus(_: any, { referenceId }: any, { dataSources }: any) {
    return dataSources.momoAPI.getPaymentStatus(referenceId);
}
async function preApprovalStatus(_: any, { referenceId }: any, { dataSources }: any) {
    return dataSources.momoAPI.getPreApprovalStatus(referenceId);
}
async function userInfoWithConsent(_: any, __: any, { dataSources }: any) {
    return dataSources.momoAPI.getUserInfoWithConsent();
}
async function requestToPayTransactionStatus(_: any, { referenceId }: any, { dataSources }: any) {
    return dataSources.momoAPI.getRequestToPayTransactionStatus(referenceId);
}

const resolvers = {
    Mutation: {
        requestToPay: async (_: any, { amount, currency, externalId, partyIdType, partyId, payerMessage, payeeNote }: any, { dataSources }: any) => {
            return dataSources.momoAPI.requestToPay({ amount, currency, externalId, partyIdType, partyId, payerMessage, payeeNote });
        },
        createAccessToken: async (_: any, __: any, { dataSources }: any) => {
            return dataSources.momoAPI.createAcccessToken();
        }
    },
    Query: {
        // account queries
        accountBalance,
        basicUserInfo,
        userInfoWithConsent,

        // payment queries
        paymentStatus,
        preApprovalStatus,
        requestToPayTransactionStatus
    }
};

const app = express();
const httpServer = http.createServer(app);

interface ContextValue {
    dataSources?: {
        momoAPI: MomoAPI;
    };
}


const server = new ApolloServer<ContextValue>({
    typeDefs: typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});


await server.start();

app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);