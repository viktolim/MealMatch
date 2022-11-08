import { SERVER_DB_URL } from "@env";
import axios from "axios";

export default axios.create({
  baseURL: SERVER_DB_URL,
});
