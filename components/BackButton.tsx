import images from "@/constants/images";
import styles_BackButton from "@/styles/styles_BackButton";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type BackButtonProps = {
    onPress?: () => void
}

const BackButton = ({ onPress }: BackButtonProps) => {

    return (
        <TouchableOpacity style={styles_BackButton.arrowBox} onPress={onPress}>
            <Image source={images.arrowLeft} style={{padding: 10}} />
        </TouchableOpacity>
    )
}

export default BackButton
