import { YUMMLY_URL, X_RAPIDAPI_KEY, X_RAPIDAPI_HOST } from "@env";
import axios from "axios";

export default axios.create({
  baseURL: YUMMLY_URL,
  headers: {
    "X-RapidAPI-Key": X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": X_RAPIDAPI_HOST,
  },
});
