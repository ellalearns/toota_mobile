import TootaAPIConfig from "./tootaApiConfig"

const getMimeType = (uri: string) => {
    if (uri.endsWith(".png")) return "image/png";
    if (uri.endsWith(".jpg") || uri.endsWith(".jpeg")) return "image/jpeg";
    return null
};

const editProfile = async ({ data }: { data: Record<string, any> }) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/kyc-update/user/"

    const formdata = new FormData()
    for (const key in data) {
        if (data[key] != null) {
                formdata.append(key, data[key])
        }
    }
    console.log("formdata => ", formdata)

    // console.log("headersPut ", TootaAPIConfig.headersPut)

    const response = await fetch(endpoint, {
        method: "PUT",
        headers: TootaAPIConfig.headersPut,
        body: formdata
    })

    console.log("response => ", response)

    if (!response.ok) {
        console.log(response.status.toString() + " " + response.statusText)
        return new Error(response.status.toString() + " " + response.statusText, { cause: response.statusText })
    }

    const result = await response.json()
    console.log(result)

    return result
}

export default editProfile
