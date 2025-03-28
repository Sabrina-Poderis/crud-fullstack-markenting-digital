
import { format } from "date-fns";

const formatDate = (date: Date) => (date ? format(new Date(date), "dd/MM/yyyy") : "");

export default formatDate