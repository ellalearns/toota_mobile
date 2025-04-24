import styles_LinkText from "@/styles/styles_LinkText";
import React from "react";
import { View, Text } from "react-native";

type LinkTextProps = {
    text: string,
    action: () => void
}

const LinkText = ({ text, action }: LinkTextProps) => {
    return (
        <View>
            <Text onPress={action} style={styles_LinkText.text}>{text}</Text>
        </View>
    )
}

export default LinkText
