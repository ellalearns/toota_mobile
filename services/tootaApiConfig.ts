
const TootaAPIConfig = {
    BASE_URL: "https://toota-mobile-sa.onrender.com",
    headersGet: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_JWT}`,
    },
    headersPost: {
        "accept": "*/*",
        "Content-Type": "application/json"
    }

}

export default TootaAPIConfig
