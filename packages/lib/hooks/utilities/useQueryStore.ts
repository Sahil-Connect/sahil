import { create } from "zustand";
import { useRouter } from "next/router";
import { useEffect, useCallback, useMemo } from "react";

export type TabValue = "info" | "preferences" | "progress";
export const tabs = ["info", "preferences", "progress"] as const;
export const INITIAL_TAB = "info";

type State = {
  tab: TabValue;
};

type StoreProps = {
  // query: State;
  setCurrentTab: (value: TabValue) => void;
  currentTab: TabValue;
};

const defaultValues = { tab: INITIAL_TAB };

const useQueryStore = create<StoreProps>((set) => ({
  setCurrentTab: (tab: TabValue) => set({ currentTab: tab }),
  currentTab: INITIAL_TAB,
}));

export const useSyncQueryWithStore = () => {
  const router = useRouter();
  const { currentTab, setCurrentTab }= useQueryStore((state) => state);

  // const initialState = useMemo(() => {
  //   // wait for isReady to access dynamic route variables
  //   if (!router.isReady) return {};

  //   return Object.keys(defaultValues).reduce((acc, key) => {
  //     const queryValue = router.query[key];
  //     acc[key] = Array.isArray(queryValue)
  //       ? queryValue.join(",")
  //       : queryValue || query[key];
  //     return acc;
  //   }, {} as State);
  // }, [router.isReady]);

  // useEffect(() => {
  //   setCurrentTab(initialState);
  // }, [initialState, setCurrentTab]);

  // const updateURL = useCallback(() => {
  //   const searchParams = new URLSearchParams();
  //   Object.keys(query).forEach((key) => {
  //     const value = query[key];
  //     if (value) {
  //       searchParams.set(key, value);
  //     }
  //   });

  //   const queryString = searchParams.toString();
  //   const currentQueryString = router.asPath.split("?")[1];

  //   if (queryString !== currentQueryString) {
  //     router.replace({
  //       pathname: router.asPath.split("?")[0],
  //       search: queryString ? `?${queryString}` : "",
  //     });
  //   }
  // }, [query, router]);

  // useEffect(() => {
  //   updateURL();
  // }, [query, updateURL]);

  const handleChange = (value: TabValue) => {
    setCurrentTab(value);
  };

  return {
    handleChange,
    currentTab
  };
};
