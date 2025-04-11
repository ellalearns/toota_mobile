import React from "react";
import { View, Text } from "react-native";
import styles_SkipButton from "@/styles/styles_SkipButton";

type SkipButtonProps = {
    onPress: () => void
}

const SkipButton = ({ onPress }: SkipButtonProps) => {
    return(
        <View style={styles_SkipButton.main}>
            <Text style={styles_SkipButton.text}>Skip</Text>
        </View>
    )
}

export default SkipButton
