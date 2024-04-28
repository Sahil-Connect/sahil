import { create } from "zustand";
import { useRouter } from "next/router";
import { useEffect, useCallback, useMemo } from "react";

type State = {
  [key: string]: string;
};

type Props = {
  query: State;
  setQuery: (newQuery: State) => void;
};

const useQueryStore = create<Props>((set) => ({
  query: {},
  setQuery: (newQuery) => set({ query: newQuery }),
}));

export const useSyncQueryWithStore = (defaultValues: State) => {
  const router = useRouter();
  const setQuery = useQueryStore((state) => state.setQuery);
  const query = useQueryStore((state) => state.query);

  const initialState = useMemo(() => {
    // wait for isReady to access dynamic route variables
    if (!router.isReady) return {};

    return Object.keys(defaultValues).reduce((acc, key) => {
      const queryValue = router.query[key];
      acc[key] = Array.isArray(queryValue)
        ? queryValue.join(",")
        : queryValue || defaultValues[key];
      return acc;
    }, {} as State);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    setQuery(initialState);
  }, [initialState, setQuery]);

  const updateURL = useCallback(() => {
    const searchParams = new URLSearchParams();

    Object.keys(query).forEach((key) => {
      const value = query[key];
      if (value) {
        searchParams.set(key, value);
      }
    });

    const queryString = searchParams.toString();
    const currentQueryString = router.asPath.split("?")[1];

    if (queryString !== currentQueryString) {
      router.replace({
        pathname: router.asPath.split("?")[0],
        search: queryString ? `?${queryString}` : "",
      });
    }
  }, [query, router]);

  useEffect(() => {
    updateURL();
  }, [query, updateURL]);

  const handleChange = (property: string, value: string) => {
    setQuery({ ...query, [property]: value });
  };

  return {
    query,
    handleChange,
  };
};
