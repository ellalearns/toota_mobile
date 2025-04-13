import images from "@/constants/images";
import styles_PageIcon from "@/styles/styles_PageIcon";
import React from "react";
import { Image, View } from "react-native";

const PageIcon = () => {
    return (
        <View style={styles_PageIcon.main}>
            <View style={styles_PageIcon.second_main}>
                <Image source={images.logo} style={styles_PageIcon.image} />
            </View>
        </View>
    )
}

export default PageIcon
