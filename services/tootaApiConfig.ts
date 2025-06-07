import * as SecureStore from "expo-secure-store";

// Async function to get access token
const getAccessCode = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync("access");
};

// We must export headers as async functions to await token properly
const TootaAPIConfig = {
  BASE_URL: "https://toota-mobile-sa.onrender.com",

  // Use this function when performing GET requests
  headersGet: async () => ({
    accept: "application/json",
    Authorization: `Bearer ${await getAccessCode()}`,
  }),

  // POST headers (no token assumed)
  headersPost: {
    accept: "*/*",
    "Content-Type": "application/json",
  },

  // Use this function when performing PUT requests
  headersPut: async () => ({
    Authorization: `Bearer ${await getAccessCode()}`,
  }),
};

export default TootaAPIConfig;

