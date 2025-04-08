import images from "@/constants/images";
import styles_BackButton from "@/styles/styles_BackButton";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const BackButton = () => {

    return (
        <TouchableOpacity style={styles_BackButton.arrowBox}>
            <Image source={images.arrowLeft} style={{padding: 10}} />
        </TouchableOpacity>
    )
}

export default BackButton
