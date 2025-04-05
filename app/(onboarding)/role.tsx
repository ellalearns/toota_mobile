import React from "react";
import { View } from "react-native";

const Role = () => {
    return(
        <View
        style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <View
            style={{
                backgroundColor: "black",
                flex: .6,
                margin: 20,
                borderRadius: 25,
                elevation: 20,
            }}></View>
            <View
            style={{
                backgroundColor: "green",
                flex: .4
            }}></View>
        </View>
    )
}

export default Role
