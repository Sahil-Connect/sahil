import type { IconType } from "react-icons";

export type StepDirection = "prev" | "next";

export type FormState = Record<string, any>;

export type OrderItem = {};

export type FormDataState = Record<string, any>;

export type SahilBusinessPartner = Record<string, any>;

export type StepItem = {
    title: string;
    step: StepDirection;
    icon?: IconType;
    completed?: boolean;
}