import { parseISO, format } from "date-fns";
export const formatDateTime = (dateISO: any, formatPattern = "MMMM d, yyyy HH:mm") => {
    const parsedDate = parseISO(dateISO);
    return format(parsedDate, formatPattern);
}