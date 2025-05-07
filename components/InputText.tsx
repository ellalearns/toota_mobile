import styles_InputText from "@/styles/styles_inputText";
import React, { useState } from "react";
import { View, TextInput, Text, Image, EnterKeyHintTypeOptions, TouchableOpacity } from "react-native";

type InputTextProps = {
    icon1?: any,
    icon2?: any,
    icon2fun?: (value: any) => void,
    placeholder?: string,
    secure: boolean,
    value: string,
    label: string,
    onFocus?: () => void,
    onChange?: () => void,
    enterKeyHint?: string,
    onChangeText: (value: string) => void,
    activeKeyboardStyle?: any
}

const InputText = ({
    icon1 = "", icon2 = "", icon2fun, placeholder = "", secure = false, value, label = "", enterKeyHint = "done", onFocus, onChange, onChangeText, activeKeyboardStyle
}: InputTextProps) => {

    const [text, setText] = useState(value)

    return (
        <View style={[styles_InputText.mainView, activeKeyboardStyle]}>

            <View>
                <Text style={styles_InputText.inputLabel}>{label}</Text>
            </View>

            <View style={styles_InputText.main}>
                <Image source={icon1} style={styles_InputText.icon} />

                <TextInput
                    style={styles_InputText.text}
                    onChangeText={(newText) => {
                        setText(newText)
                        onChangeText(newText)
                        value = newText
                    }}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    placeholderTextColor="#867f75"
                    onFocus={onFocus}
                    onChange={onChange}
                    enterKeyHint={enterKeyHint as EnterKeyHintTypeOptions} />

                <TouchableOpacity onPress={icon2fun}>
                    <Image source={icon2} style={styles_InputText.icon} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default InputText
