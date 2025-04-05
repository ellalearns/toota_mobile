import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import images from "@/constants/images";

const SplashScreen = () => {

    const { width, height } = Dimensions.get("screen")

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Image
                source={images.spinner}
                style={{
                    zIndex: 1
                }}
                 />

            <LinearGradient
                colors={["#e39018", "#cc7900"]}
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    height: height
                }}
                end={{ x: 0.3, y: 1.5 }}
            >

                <View
                    style={{
                        backgroundColor: "#cc7900",
                        position: "absolute",
                        top: "10%",
                        height: height / 5,
                        width: width * 2,
                        left: -70,
                        right: 0,
                        transform: [{
                            rotate: "-22deg"
                        }]
                    }}>
                    <LinearGradient
                        colors={["#cc7900", "#e39018"]}
                        style={{
                            height: height / 5
                        }}
                        end={{ x: 0.1, y: 0.2 }}
                    />

                </View>

                <View
                    style={{
                        backgroundColor: "#cc7900",
                        position: "absolute",
                        top: "55%",
                        height: height / 5,
                        width: width * 2,
                        left: -70,
                        right: 0,
                        transform: [{
                            rotate: "-22deg",

                        }]
                    }}>
                    <LinearGradient
                        colors={["#cc7900", "#e39018"]}
                        style={{
                            height: height / 5
                        }}
                        end={{ x: 0.1, y: 0.2 }}
                    />
                </View>
            </LinearGradient>
        </View>
    )

}

export default SplashScreen
