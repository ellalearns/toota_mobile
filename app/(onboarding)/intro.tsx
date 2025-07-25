import React, { useState } from "react";
import { Image, ImageBackground, Text, ToastAndroid, View } from "react-native";
import copy from "@/constants/texts";
import SkipButton from "@/components/SkipButton";
import styles_intro from "@/styles/styles_intro";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";
import { useRouter } from "expo-router";

export default function TootaIntro () {

    const router = useRouter()

    const headers = copy.onHeaders
    const text = copy.onText

    const imageList = [images.onImage1, images.onImage2, images.onImage3]

    const [currentPosition, setCurrentPostion] = useState(0)

    const pressNext = () => {
        if (currentPosition < 2) {
            setCurrentPostion(currentPosition + 1)
            return
        }
        router.push({pathname: "/auth", params: {action: "signup"}})
    }

    const toAuth = () => {
        router.push({pathname: "/auth", params: {action: "signup"}})
    }

    return (
            <View style={styles_intro.mainView}>
                <ImageBackground source={imageList[currentPosition]} style={styles_intro.image} />

                <View style={styles_intro.skipView}>
                    <SkipButton onPress={toAuth} />
                </View>

                <View style={styles_intro.actionView}>
                    <View style={styles_intro.copySection}>
                        <Text style={styles_intro.headerText}>{headers[currentPosition]}</Text>
                        <Text style={styles_intro.contentText}>{text[currentPosition]}</Text>
                        <View style={styles_intro.positionIndicator}>
                            <Image source={currentPosition == 0 ? images.currentItem : images.inactiveItem} style={styles_intro.positionPointer} />
                            <Image source={currentPosition == 1 ? images.currentItem : images.inactiveItem} style={styles_intro.positionPointer} />
                            <Image source={currentPosition == 2 ? images.currentItem : images.inactiveItem} style={styles_intro.positionPointer} />
                        </View>
                    </View>
                    <View style={styles_intro.buttonView}>
                        <MainButton text={currentPosition == 2 ? "Sign up" : "Next"} pressFun={pressNext} isEmpty />
                    </View>
                </View>
            </View>
    )
}

// export default TootaIntro
