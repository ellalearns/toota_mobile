import TootaAPIConfig from "./tootaApiConfig"

const resendOtp = async ({ data }: { data : object}) => {
    const endpoint = TootaAPIConfig.BASE_URL + "/auth/resend-code/"

    const response = await fetch(endpoint, {
        method: "POST",
        headers: TootaAPIConfig.headersPost,
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        return new Error("something wrong with the otp", {cause: response.statusText})
    }

    const isUser = await response.json()

    return isUser
}

export default resendOtp
