import * as SecureStore from "expo-secure-store"

const access_token = SecureStore.getItem("access")
console.log(access_token)

const TootaAPIConfig = {
    BASE_URL: "https://toota-mobile-sa.onrender.com",
    headersGet: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
    },
    headersPost: {
        "accept": "*/*",
        "Content-Type": "application/json"
    },
    headersPut: {
        Authorization: `Bearer ${access_token}`,
        // accept: "application/json",
        // "Content-Type": "multipart/form-data"
    }

}

export default TootaAPIConfig
