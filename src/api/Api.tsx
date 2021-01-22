import axios from "axios";
import { urlPhoto } from "../constants/url";

export const Api = {
  getPhotos: () => {
    return axios.get(urlPhoto);
  },
};
