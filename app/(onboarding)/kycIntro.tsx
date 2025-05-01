import BackButton from "@/components/BackButton";
import HeaderFrame from "@/components/Header";
import LinkText from "@/components/LinkText";
import MainButton from "@/components/MainButton";
import ViewBreak from "@/components/ViewBreak";
import images from "@/constants/images";
import Styles_KycIntro from "@/styles/styles_KycIntro";
import React from "react";
import { Image, Text, View } from "react-native";

export default function KycIntro() {
    return (
        <View style={Styles_KycIntro.main}>
            <View>
                <View style={Styles_KycIntro.header}>
                    <BackButton />
                    <HeaderFrame main="Almost there" body="Please take a moment to provide your personal details." />
                </View>
                <ViewBreak />
            </View>
            <View style={Styles_KycIntro.image}>
                <Image source={images.personalData} />
            </View>
            <View style={Styles_KycIntro.actionView}>
                <View style={Styles_KycIntro.rowText}>
                    <Image source={images.lock} />
                    <Text>Your personal information is safe with us</Text>
                </View>
                <MainButton text="Continue" pressFun={() => { }} isEmpty />
                <LinkText text="Do this later" action={() => { }} />
            </View>
        </View>
    )
}
