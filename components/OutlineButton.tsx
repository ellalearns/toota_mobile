import React from "react"
import { TouchableOpacity, Text, ToastAndroid } from "react-native"
import stylesMainButton from "@/styles/styles_MainButton"
import stylesOutlineButton from "@/styles/styles_OutlineButton"

type OutlineButtonProps = {
    text: string,
    pressFun: () => void
}

const OutlineButton = ({text, pressFun}: OutlineButtonProps) => {
    return (
        <TouchableOpacity style={[stylesOutlineButton.continueButton]}
            onPress={pressFun}>
            <Text style={[stylesOutlineButton.continueText]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default OutlineButton


