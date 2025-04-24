import TootaAPIConfig from "./tootaApiConfig"

const signUp = async({ data }: { data : object }) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/signup/user/"

    const response = await fetch(endpoint, {
        method: "POST",
        headers: TootaAPIConfig.headersPost,
        body: JSON.stringify(data)
    })
    console.log(response)

    if (!response.ok) {
        throw new Error("unable to create user", {cause: response.statusText})
    }

    const userData = await response.json() 
    
    return userData.results
}

export default signUp
