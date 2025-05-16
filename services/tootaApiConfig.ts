import * as SecureStore from "expo-secure-store"

const getAccessCode = async () => {
    const code = await SecureStore.getItemAsync("access")
    return code
}

const TootaAPIConfig = {
    BASE_URL: "https://toota-mobile-sa.onrender.com",
    headersGet: {
        accept: "application/json",
        Authorization: `Bearer ${getAccessCode()}`,
    },
    headersPost: {
        "accept": "*/*",
        "Content-Type": "application/json"
    },
    headersPut: {
        Authorization: `Bearer ${getAccessCode}`,
    }

}

export default TootaAPIConfig
