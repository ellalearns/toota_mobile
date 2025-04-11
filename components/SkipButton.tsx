import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles_SkipButton from "@/styles/styles_SkipButton";

type SkipButtonProps = {
    onPress: () => void
}

const SkipButton = ({ onPress }: SkipButtonProps) => {
    return(
        <TouchableOpacity style={styles_SkipButton.main}>
            <Text style={styles_SkipButton.text}>Skip</Text>
        </TouchableOpacity>
    )
}

export default SkipButton
