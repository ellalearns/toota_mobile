import saveToken from "./deps"
import TootaAPIConfig from "./tootaApiConfig"

const signIn = async ({ data } : { data : object }) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/login/user/"

    const response = await fetch(endpoint, {
        method: "POST",
        headers: TootaAPIConfig.headersPost,
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        return new Error("invalid details!", { cause: response.statusText })
    }

    const userTokens = await response.json()

    saveToken("refresh", userTokens.refresh)
    saveToken("access", userTokens.access)

    return userTokens

}

export default signIn
