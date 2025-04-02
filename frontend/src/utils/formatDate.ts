import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const formatDate = (date: Date) => {
  if (!date) return "";

  const zonedDate = toZonedTime(date, "America/Sao_Paulo");
  return format(zonedDate, "dd/MM/yyyy");
};

export default formatDate;
