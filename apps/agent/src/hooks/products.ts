import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS } from "@/lib/graphql/queries/products";

export const useFetchProducts = () => {
    const { error, data, loading } = useQuery(FETCH_PRODUCTS);
    return { error, data: data?.products, loading };
}