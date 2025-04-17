import stylesSignInOption from "@/styles/styles_SignInOption";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

type SignInOptionProps = {
    text: string,
    icon: any
}

const SignInOption = ({ text, icon } : SignInOptionProps) => {
    return (
        <TouchableOpacity style={stylesSignInOption.main}>
            <Image source={icon} style={stylesSignInOption.icon}/>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default SignInOption
