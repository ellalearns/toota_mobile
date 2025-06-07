import getProfile from "@/services/getProfile";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

type MainAppPageProps = {
    first_name: string,
    email: string,
    phone_number: string,
    profile_pic: any,
    last_name: string,
    physical_address: string
}

export default function MainAppPage() {

    const [ firstName, setFirstName ] = useState("")
    const [ address, setAddress ] = useState("")

    const user = async () => {
        const userData =  await getProfile()
        setFirstName(userData.first_name)
        setAddress(userData.physical_address)
        console.log(user)
    }

    useEffect(() => {
        user()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>First Name: {firstName}</Text>
            <Text>Physical Address: {address}</Text>
            </View>
    )
}
