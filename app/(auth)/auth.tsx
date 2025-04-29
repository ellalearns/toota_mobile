import BackButton from "@/components/BackButton";
import InputText from "@/components/InputText";
import LinkText from "@/components/LinkText";
import MainButton from "@/components/MainButton";
import ViewBreak from "@/components/ViewBreak";
import images from "@/constants/images";
import copy from "@/constants/texts";
import signIn from "@/services/signIn";
import signUp from "@/services/signUp";
import styles_SignUp from "@/styles/styles_SignUp";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, Image, KeyboardAvoidingView, Platform, Keyboard, ToastAndroid } from "react-native";

type AuthProps = {
    action: "signup" | "login"
}

const Auth = () => {
    const { action = "signup" } = useLocalSearchParams<AuthProps>()

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [isEmail, setIsEmail] = useState(false)

    const [password, setPassword] = useState("")
    const [isPassword, setIsPassword] = useState(false)
    const [hidden, setHidden] = useState(true)

    const [keyboardVisible, setKeyboardVisible] = useState(false)

    const onDismissKeyboard = () => {
        Keyboard.dismiss()
        setKeyboardVisible(false)
    }

    const onEnterKeyboard = () => {
        setKeyboardVisible(true)
    }

    useEffect(() => {
        const hideKB = Keyboard.addListener("keyboardDidHide", () => { setKeyboardVisible(false) })
        return () => hideKB.remove()
    }, [])

    const createAccount = async () => {

        if (!email.includes("@") || email.endsWith("@") || !email.includes(".") || email.startsWith("@")) {
            ToastAndroid.show("invalid email!", 1000)
            return
        }

        const newUser = {
            "email": email,
            "password": password
        }

        const userNow = await signUp({ data: newUser })

        if (userNow instanceof Error) {
            ToastAndroid.show(userNow.message, 1000)
        } else {
            router.push({
                pathname: "/verifyEmail",
                params: {
                    email: email
                }
            })
        }
    }

    const logIn = async () => {
        const user = {
            "email": email,
            "password": password
        }

        const userLogIn = await signIn({ data: user })

        if (userLogIn instanceof Error) {
            ToastAndroid.show("invalid details!", 1000)
        } else { router.push("/main_app") }
    }

    return (
        <View>
            <KeyboardAvoidingView style={styles_SignUp.main}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                onTouchStart={onDismissKeyboard}
            >

                <View style={styles_SignUp.view1}>

                    <View style={styles_SignUp.backView}>

                        <BackButton onPress={() => router.back()} />
                    </View>

                    <View style={styles_SignUp.textView}>
                        <Text style={styles_SignUp.signup1}>{action === "signup" ? copy.signup1 : copy.login1}</Text>
                        <Text style={styles_SignUp.signup2}>{action === "signup" ? copy.signup2 : copy.login2}</Text>
                    </View>

                    <ViewBreak />

                    <View style={keyboardVisible ? styles_SignUp.emailViewActive : styles_SignUp.emailView}>
                        <InputText icon1={images.profile}
                            label="Email"
                            placeholder="Please enter your email"
                            value={email}
                            secure={false}
                            onFocus={onEnterKeyboard}
                            onChange={() => { setIsEmail(true) }}
                            enterKeyHint="next"
                            onChangeText={setEmail} />
                    </View>

                    <View style={keyboardVisible ? styles_SignUp.emailViewActive : styles_SignUp.emailView}>
                        <InputText icon1={images.lock}
                            icon2={images.closedEye}
                            icon2fun={() => setHidden(!hidden)}
                            label="Password"
                            placeholder="Please enter your password"
                            value={password}
                            secure={hidden}
                            onFocus={onEnterKeyboard}
                            onChange={() => setIsPassword(true)}
                            enterKeyHint="send"
                            onChangeText={setPassword} />
                    </View>

                    {keyboardVisible || action === "login" ? null : <View style={styles_SignUp.lineView}>
                        <Image source={images.line} />
                        <Image source={images.line} />
                    </View>}

                    {keyboardVisible || action === "login" ? null : <View style={styles_SignUp.policyView}>
                        <Text style={styles_SignUp.policyText}>By creating an account you accept our </Text>
                        <LinkText text="Terms and Conditions" action={() => { }} />
                        <Text style={styles_SignUp.policyText}> and acknowledge our </Text>
                        <LinkText text="Privacy Policy." action={() => { }} />
                    </View>}

                </View>

                <View>
                    <View style={styles_SignUp.buttonView}>
                        <MainButton text={action === "signup" ? "Create account" : "Login"} pressFun={action === "signup" ? createAccount : logIn} isEmpty={isEmail && isPassword} />
                    </View>

                    {keyboardVisible ? null : <View>
                        <LinkText
                            text={action === "signup" ? "I already have an account" : "I don't have an account"}
                            action={() => {
                                if (action === "signup") {
                                    router.push({ pathname: "/auth", params: { action: "login" } })
                                } else { router.push({ pathname: "/auth", params: { action: "signup" } }) }
                            }} />
                    </View>}

                </View>

            </KeyboardAvoidingView>
        </View>
    )
}

export default Auth
