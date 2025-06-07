
import * as SecureStore from "expo-secure-store"

const saveToken = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
}

export default saveToken
