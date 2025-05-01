import BackButton from "@/components/BackButton";
import HeaderFrame from "@/components/Header";
import InputText from "@/components/InputText";
import MainButton from "@/components/MainButton";
import ViewBreak from "@/components/ViewBreak";
import Styles_Kyc from "@/styles/styles_Kyc";
import React, { useState } from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";

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

    return (
        <View style={Styles_Kyc.main}>
            <View>
                <View style={Styles_Kyc.header}>
                    <BackButton />
                    <HeaderFrame main="Personal info" />
                </View>
                <ViewBreak />
            </View>
            <KeyboardAvoidingView enabled={false} behavior={undefined} style={Styles_Kyc.formView}>
                <View>
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
                />
                <InputText
                    label="Last name"
                    placeholder="Enter your last name"
                    secure={false}
                    value={lastName}
                    onChangeText={setLastName}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                />
                <InputText
                    label="Phone number"
                    placeholder="Enter your phone number (plus country code eg 2340000)"
                    secure={false}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                />
                <InputText
                    label="Residential address"
                    placeholder="Enter your residential address"
                    secure={false}
                    value={address}
                    onChangeText={setAddress}
                    enterKeyHint="next"
                    onChange={() => checkEmptyFields(firstName, lastName, phoneNumber, address)}
                />

                <View>
                    <MainButton text="Confirm route" pressFun={() => {}} isEmpty={anyEmpty} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

