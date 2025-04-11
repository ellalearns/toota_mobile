import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import copy from "@/constants/texts";
import SkipButton from "@/components/SkipButton";
import styles_intro from "@/styles/styles_intro";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";

const TootaIntro = () => {

    const headers = copy.onHeaders
    const text = copy.onText

    const [currentPosition, setCurrentPostion] = useState(1)
    const [mainButtonText, setMainButtonText] = useState("Next")
    const [current, isCurrent] = useState(false)


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles_intro.mainView} edges={["top"]}>
                <ImageBackground source={images.onImage1} style={styles_intro.image} />

                <View style={styles_intro.skipView}>
                    <SkipButton onPress={() => { }} />
                </View>

                <View style={styles_intro.actionView}>
                    <View style={styles_intro.copySection}>
                        <Text style={styles_intro.headerText}>{copy.onHeaders[0]}</Text>
                        <Text style={styles_intro.contentText}>{copy.onText[0]}</Text>
                        <View style={styles_intro.positionIndicator}>
                            <Image source={images.currentItem} style={styles_intro.positionPointer} />
                            <Image source={images.currentItem} style={styles_intro.positionPointer} />
                            <Image source={images.currentItem} style={styles_intro.positionPointer} />
                        </View>
                    </View>
                    <View style={styles_intro.buttonView}>
                        <MainButton text={mainButtonText} pressFun={() => { }} />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default TootaIntro
