import React from "react"
import { TouchableOpacity, Text } from "react-native"
import stylesMainButton from "@/styles/styles_MainButton"

type MainButtonProps = {
    text: string,
    pressFun: () => void
}

const MainButton = ({text, pressFun}: MainButtonProps) => {
    return (
        <TouchableOpacity style={[stylesMainButton.continueButton]}
            onPress={pressFun}>
            <Text style={[stylesMainButton.continueText]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MainButton


