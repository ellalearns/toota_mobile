import * as SecureStore from "expo-secure-store"

const access_token = SecureStore.getItem("access")

const TootaAPIConfig = {
    BASE_URL: "https://toota-mobile-sa.onrender.com",
    headersGet: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
    },
    headersPost: {
        "accept": "*/*",
        "Content-Type": "application/json"
    }

}

export default TootaAPIConfig
