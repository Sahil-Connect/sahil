import { create } from 'zustand';

const steps = [
    "basic_info",
    "preview"
] as const;

export type StepDirection = "prev" | "next";

export type FormState = Record<string, any>;

export const useOrderFormStore = create((set) => ({});