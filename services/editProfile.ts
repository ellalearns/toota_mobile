import TootaAPIConfig from "./tootaApiConfig"
import * as SecureStore from "expo-secure-store"

const getAccess = async () => {
    console.log("enterrred")
    const code = await SecureStore.getItemAsync("access")
    console.log("code used to edit profile => ", code)
    return code
}

const editProfile = async ({ data }: { data: Record<string, any> }) => {
    console.log("let's start")
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/kyc-update/user/"

    const formdata = new FormData()
    for (const key in data) {
        if (data[key] != null) {
            if (key === "profile_pic") {
                const pic = data[key]
                if (pic?.uri != null && pic?.name && pic?.type) {
                    formdata.append(key, data[key])
                    console.log("done dis")
                }
            } else {
                formdata.append(key, data[key])
                console.log("done dis")
            }
        }
    }

    console.log("outsider") 

    const token = await getAccess()
    console.log("authorization => ", token)
    console.log("formdata ", formdata)

    const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formdata
    })

    console.log("response => ", response)

    if (!response.ok) {
        const errorResponse = await response.json()
        console.log("errorResponse => ", errorResponse)

        return new Error(response.status.toString() + " " + response.statusText, { cause: response.statusText })
    }

    console.log("actually here")

    const result = await response.json()
    return result
}

export default editProfile
