import React from "react"
import { TouchableOpacity, Text, ToastAndroid } from "react-native"
import stylesMainButton from "@/styles/styles_MainButton"

type MainButtonProps = {
    text: string,
    pressFun: () => void,
    isEmpty?: boolean
}

const MainButton = ({text, pressFun, isEmpty = false}: MainButtonProps) => {
    return (
        <TouchableOpacity style={[stylesMainButton.continueButton, isEmpty === false ? stylesMainButton.disabledButton : stylesMainButton.activeButton]}
            onPress={() => {
                if (isEmpty === false) {
                    ToastAndroid.show("email is not valid", 1000)
                    return
                } else {
                    pressFun
                }
            }}>
            <Text style={[stylesMainButton.continueText]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MainButton


