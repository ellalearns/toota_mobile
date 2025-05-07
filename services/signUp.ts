import TootaAPIConfig from "./tootaApiConfig"

const signUp = async({ data }: { data : object }) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/signup/user/"

    const response = await fetch(endpoint, {
        method: "POST",
        headers: TootaAPIConfig.headersPost,
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        return new Error(response.status.toString() + " " + response.statusText , {cause: response.statusText + "" + response.status})
    }

    const userData = await response.json() 
    
    return userData
}

export default signUp
