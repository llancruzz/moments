import axios from "axios";

axios.defaults.baseURL = "https://api-django-rest.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
