import { useMutation, useQuery } from "@apollo/client";
import { GET_ZONES, GET_ZONE_BY_ID } from "@sahil/lib/graphql/queries/zones";

export const useGetZoneByIdAction = (id: string) => {
  const { data, loading, error } = useQuery(GET_ZONE_BY_ID, {
    variables: { id },
  });

  return { error, data: data?.zones, loading };
};

export const useGetZones = () => {
  const { data, loading, error } = useQuery(GET_ZONES);

  return { error, data: data?.zones, loading };
};
