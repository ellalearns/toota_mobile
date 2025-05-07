import React from "react";
import { Text, View } from "react-native";

export default function Loader () {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }}>
            <Text style={{
                fontSize: 48
            }}>Loading...</Text>
        </View>
    )
}


