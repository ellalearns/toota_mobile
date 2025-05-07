import TootaAPIConfig from "./tootaApiConfig"
import * as SecureStore from "expo-secure-store"

const saveToken = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
}

const sendOtp = async ({ data }: { data : object}) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/verify-email/"

    const response = await fetch(endpoint, {
        method: "POST",
        headers: TootaAPIConfig.headersPost,
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        return new Error("something wrong with the otp", {cause: response.statusText})
    }

    const isUser = await response.json()

    saveToken("access", isUser.access)

    return isUser
}

export default sendOtp
