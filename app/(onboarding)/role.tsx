import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
                    // backgroundColor: "green",
                    flex: .3,
                    borderColor: "green",
                    borderWidth: 2,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#f99e1a",
                        width: "85%",
                        height: "25%",
                        borderRadius: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#fef5e8",
                            textAlign: "center",
                        }}
                    >Continue</Text>
                </TouchableOpacity>
                <Text>I have an account</Text>
            </View>
        </View>
    )
}

export default Role
