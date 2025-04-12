import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles_SkipButton from "@/styles/styles_SkipButton";

type SkipButtonProps = {
    onPress: () => void
}

const SkipButton = ({ onPress }: SkipButtonProps) => {


    // useEffect(() => {
    //     Screen
    // })

    return(
        <TouchableOpacity style={styles_SkipButton.main} onPress={onPress}>
            <Text style={styles_SkipButton.text}>Skip</Text>
        </TouchableOpacity>
    )
}

export default SkipButton
