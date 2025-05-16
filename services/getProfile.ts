import TootaAPIConfig from "./tootaApiConfig"
import * as SecureStore from "expo-secure-store"

const accessCode = async () => {
        const code = await SecureStore.getItemAsync("access")
        console.log("code used to get profile => ", code)
        return code
    }

const getProfile = async () => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/profile/user/"
    const token = await accessCode()

    console.log("authorization=>", token)

    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    console.log("response   ,", response)

    if (!response.ok) {
        return new Error("something wrong", {cause: response.statusText})
    }

    const user = await response.json()

    console.log(user)

    return user
}

export default getProfile
