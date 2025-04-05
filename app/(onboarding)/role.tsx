import React from "react";
import { Image, Text, View } from "react-native";
import images from "@/constants/images";

const Role = () => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "white"
            }}>
            <View
                style={{
                    // backgroundColor: "green",
                    flex: .2
                }}>

            </View>
            <View
                style={{
                    backgroundColor: "white",
                    flex: .5,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: 20,
                    elevation: 5,
                    marginTop: 20,
                    borderRadius: 30
                }}>
                {/* <View
                style={{
                    backgroundColor: "fef5e8",
                    // justifyContent: "space-around",
                    height: 20,
                    // flex: 1
                }}></View> */}

                {/* <View
                style={{
                    backgroundColor: "fef5e8",
                    // justifyContent: "space-around",
                    // height: "20%",
                    // flex: 1
                }}></View> */}

                <Text
                    style={{
                        fontSize: 40
                    }}>Choose your role</Text>

                <View
                    style={{
                        height: "30%",
                        width: "80%",
                        backgroundColor: "#fef5e8",
                        borderRadius: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>
                        <Image source={images.findDriver} />
                        <Text 
                        style={{
                            fontSize: 15,
                            color: "#6b6357"
                        }}>Find a trip</Text>
                </View>
                <View
                    style={{
                        height: "30%",
                        width: "80%",
                        backgroundColor: "#fef5e8",
                        borderRadius: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>
                        <Image source={images.findTrip} />
                        <Text 
                        style={{
                            fontSize: 15,
                            color: "#6b6357"
                        }}>Find a driver</Text>
                </View>

            </View>
            <View
                style={{
                    backgroundColor: "green",
                    flex: .3
                }}></View>
        </View>
    )
}

export default Role
