import axios from "axios";
// import cors from "cors";
// import express from "express";

// const app = express();

// Enable CORS for all routes
// app.use(cors());

// Your routes and other middleware...

// app.listen(8100, () => {
//   console.log("Server is running on port 8100");
// });

// const host = "http://192.168.0.65/whoscored";
const host = "https://project-laravel-stats-foot.onrender.com/api";
const AxiosService = {
  general: async () => {
    try {
      const response = await axios.get(host + "/general");
      console.log(host + "/general");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  generalDom: async () => {
    try {
      const response = await axios.get(host + "/general/domicile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  generalExt: async () => {
    try {
      const response = await axios.get(host + "/general/exterieur");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  attaque: async () => {
    try {
      const response = await axios.get(host + "/attaque");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  attaqueDom: async () => {
    try {
      const response = await axios.get(host + "/attaque/domicile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  attaqueExt: async () => {
    try {
      const response = await axios.get(host + "/attaque/exterieur");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  defense: async () => {
    try {
      const response = await axios.get(host + "/defense");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  defenseDom: async () => {
    try {
      const response = await axios.get(host + "/defense/domicile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  defenseExt: async () => {
    try {
      const response = await axios.get(host + "/defense/exterieur");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export default AxiosService;
