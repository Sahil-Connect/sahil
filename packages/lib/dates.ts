import { parseISO, format } from "date-fns";
import { createDate, TimeSpan, isWithinExpirationDate } from "oslo";

export const isValidTimeString = (time: string): boolean => {
  // This regex allows for various time formats:
  // - HH:MM or H:MM (24-hour format)
  // - HH:MM:SS or H:MM:SS (24-hour format with seconds)
  // - HH:MM AM/PM or H:MM AM/PM (12-hour format)
  // - HH:MM:SS AM/PM or H:MM:SS AM/PM (12-hour format with seconds)
  const timeRegex =
    /^(0?[1-9]|1[0-2]|2[0-3]):[0-5][0-9](:[0-5][0-9])?\s*(AM|PM)?$|^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/i;
  return timeRegex.test(time);
};

export const formatDateTime = (
  dateISO: any,
  formatPattern = "MMMM d, yyyy HH:mm"
) => {
  const parsedDate = parseISO(dateISO);
  return format(parsedDate, formatPattern);
};

export const checkExpiration = (date: Date): boolean => {
  return isWithinExpirationDate(date);
};

export const createNewDate = (timespan: string) => {
  return createDate(new TimeSpan(1, "d"));
};

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

export const formatTime = (
  time: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const [hours, minutes] = time.split(":");
  const date = new Date(2000, 0, 1, parseInt(hours), parseInt(minutes));
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h24",
    ...options,
  });
};
