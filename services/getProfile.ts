import TootaAPIConfig from "./tootaApiConfig"

const getProfile = async () => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/profile/user/"

    console.log(endpoint)
    console.log(TootaAPIConfig.headersGet)

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TootaAPIConfig.headersGet
    })

    console.log(TootaAPIConfig.headersGet)

    if (!response.ok) {
        return new Error("something wrong", {cause: response.statusText})
    }

    const user = await response.json()

    console.log(user)

    return user
}

export default getProfile
