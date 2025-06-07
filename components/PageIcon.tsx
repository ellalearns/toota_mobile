import images from "@/constants/images";
import styles_PageIcon from "@/styles/styles_PageIcon";
import React from "react";
import { Image, View } from "react-native";

const PageIcon = () => {
    return (
        <View style={styles_PageIcon.container}>
                <Image source={images.logo} />
        </View>
    )
}

export default PageIcon
