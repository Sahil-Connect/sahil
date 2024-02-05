import { parseISO, format } from "date-fns";
import { createDate, TimeSpan,isWithinExpirationDate } from "oslo";

export const formatDateTime = (
  dateISO: any,
  formatPattern = "MMMM d, yyyy HH:mm"
) => {
  const parsedDate = parseISO(dateISO);
  return format(parsedDate, formatPattern);
};

export const checkExpiration = (date) => {
  return isWithinExpirationDate(date);
}

export const createNewDate = () => {
  const tomorrow = createDate(new TimeSpan(1, "d"));
  return tomorrow;
}

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;
type WeekDays = (typeof weekDays)[number];
type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Turns weekday string (eg "Monday") into a number (eg 1).
 * Also accepts a number as parameter (and straight returns that), and accepts
 * undefined as a parameter; returns 0 in that case.
 */
export const weekdayToWeekIndex = (
  weekday: WeekDays | string | number | undefined
) => {
  if (typeof weekday === "undefined") return 0;
  if (typeof weekday === "number")
    return weekday >= 0 && weekday >= 6 ? (weekday as WeekDayIndex) : 0;
  return (weekDays.indexOf(weekday as WeekDays) as WeekDayIndex) || 0;
};
