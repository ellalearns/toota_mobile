import BackButton from "@/components/BackButton";
import HeaderFrame from "@/components/Header";
import InputText from "@/components/InputText";
import MainButton from "@/components/MainButton";
import ViewBreak from "@/components/ViewBreak";
import Styles_Kyc from "@/styles/styles_Kyc";
import React, { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Kyc() {

    const checkEmptyFields = (firstName: string, lastName: string, phoneNumber: string, address: string) => {
        if (firstName === "" || lastName === "" || phoneNumber === "" || address === "") {
            return false
        }
        return true
    }

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ profilePic, setProfilePic ] = useState()
    const [ anyEmpty, setAnyEmpty ] = useState(false)

    const [ isKeyboardVisible, setIsKeyboardVisible ] = useState(false)

    const onEnterKeyboard = () => {
        setIsKeyboardVisible(true)
    }

    const onDismissKeyboard = () => {
        Keyboard.dismiss()
        setIsKeyboardVisible(false)
    }

    useEffect(() => {
        const hideKB = Keyboard.addListener("keyboardDidHide", () => setIsKeyboardVisible(false))
        return () => hideKB.remove()
    }, [])

    return (
        <View style={Styles_Kyc.main}>
            <View>
                <View style={Styles_Kyc.header}>
                    <BackButton />
                    <HeaderFrame main="Personal info" />
                </View>
                <ViewBreak />
            </View>
            <KeyboardAvoidingView enabled={false} behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles_Kyc.formView}>
                <ScrollView contentContainerStyle={Styles_Kyc.scrollView}>
                <View style={isKeyboardVisible ? [Styles_Kyc.formViewActive, {paddingTop: 17}] : null}>
                    <Text style={Styles_Kyc.picMainText}>Personal photo (optional)</Text>
                    <View style={Styles_Kyc.uploadView}>
                        <Text style={Styles_Kyc.picBodyText}>Upload a personal photo of yourself</Text>
                        <View>
                            <TouchableOpacity onPress={() => { }} style={Styles_Kyc.uploadButton}>
                                <Text style={Styles_Kyc.picBodyText}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <InputText
                    label="First name"
                    placeholder="Enter your first name"
                    secure={false}
                    value={firstName}
                    onChangeText={setFirstName}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                    onFocus={onEnterKeyboard}
                    activeKeyboardStyle={isKeyboardVisible ? Styles_Kyc.formViewActive : null}
                />
                <InputText
                    label="Last name"
                    placeholder="Enter your last name"
                    secure={false}
                    value={lastName}
                    onChangeText={setLastName}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                    onFocus={onEnterKeyboard}
                    activeKeyboardStyle={isKeyboardVisible ? Styles_Kyc.formViewActive : null}
                />
                <InputText
                    label="Phone number"
                    placeholder="Enter your phone number (plus country code eg 2340000)"
                    secure={false}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                    onFocus={onEnterKeyboard}
                    activeKeyboardStyle={isKeyboardVisible ? Styles_Kyc.formViewActive : null}
                />
                <InputText
                    label="Residential address"
                    placeholder="Enter your residential address"
                    secure={false}
                    value={address}
                    onChangeText={setAddress}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                    onFocus={onEnterKeyboard}
                    activeKeyboardStyle={isKeyboardVisible ? Styles_Kyc.formViewActive : null}
                />

                <View style={isKeyboardVisible ? Styles_Kyc.formViewActive : null}>
                    <MainButton text="Confirm route" pressFun={() => {}} isEmpty={anyEmpty} />
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

