import images from "@/constants/images";
import styles_InputText from "@/styles/styles_inputText";
import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";

type InputTextProps = {
    icon1: any,
    icon2?: any,
    placeholder?: string,
    secure: boolean,
    value: string,
    label: string
}

const InputText = ({
    icon1 = "", icon2 = "", placeholder = "", secure = false, value = "", label = ""
}: InputTextProps) => {

    const [ text, setText ] = useState(value)

    return (
        <View>

        <View>
            <Text style={styles_InputText.inputLabel}>{label}</Text>
        </View>

        <View style={styles_InputText.main}>
                <Image source={icon1} style={styles_InputText.icon} />
                
                <TextInput 
                style={styles_InputText.text} 
                onChangeText={(newText)=>{
                    setText(newText),
                    value = text
                }}
                value={text}
                placeholder={placeholder}
                secureTextEntry={secure}
                placeholderTextColor="#867f75" />

            <Image source={icon2} style={styles_InputText.icon} />
        </View>

        </View>
    )
}

export default InputText
