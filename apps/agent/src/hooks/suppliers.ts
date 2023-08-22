import { useQuery } from "@apollo/client";
import { FETCH_SUPPLIERS } from "@/lib/graphql/queries/suppliers";

export const useFetchSuppliers = () => {
    const { error, data, loading } = useQuery(FETCH_SUPPLIERS);
    return { error, data: data?.supplier, loading };
}
