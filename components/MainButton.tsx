import React from "react"
import { TouchableOpacity, Text, ToastAndroid } from "react-native"
import stylesMainButton from "@/styles/styles_MainButton"

type MainButtonProps = {
    text: string,
    pressFun: () => void,
    isEmpty?: boolean,
    isEmptyMessage?: string
}

const MainButton = ({text, pressFun, isEmpty = false, isEmptyMessage = "email is not valid"}: MainButtonProps) => {
    return (
        <TouchableOpacity style={[stylesMainButton.continueButton, isEmpty === false ? stylesMainButton.disabledButton : stylesMainButton.activeButton]}
            onPress={() => {
                if (isEmpty === false) {
                    ToastAndroid.show(isEmptyMessage, 1000)
                    return
                } else {
                    pressFun()
                }
            }}>
            <Text style={[stylesMainButton.continueText]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MainButton


