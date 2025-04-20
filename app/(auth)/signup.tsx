import BackButton from "@/components/BackButton";
import InputText from "@/components/InputText";
import LinkText from "@/components/LinkText";
import MainButton from "@/components/MainButton";
import PageIcon from "@/components/PageIcon";
import SignInOption from "@/components/signInOption";
import ViewBreak from "@/components/ViewBreak";
import images from "@/constants/images";
import copy from "@/constants/texts";
import styles_SignUp from "@/styles/styles_SignUp";
import React from "react";
import { Text, View, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, NativeModules, KeyboardAvoidingViewComponent } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {

    let email = ""
    let password = ""

    const createAccount = () => { }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles_SignUp.main}>

                <View style={styles_SignUp.view1}>

                    <View style={styles_SignUp.backView}>
                        <BackButton onPress={() => { }} />
                    </View>

                    <View style={styles_SignUp.textView}>
                        <Text style={styles_SignUp.signup1}>{copy.signup1}</Text>
                        <Text style={styles_SignUp.signup2}>{copy.signup2}</Text>
                    </View>

                    {/* <View style={styles_SignUp.viewBreak}> */}
                    <ViewBreak />
                    {/* </View> */}

                    <View style={styles_SignUp.emailView}>
                        <InputText icon1={images.phone} label="Email" placeholder="Please enter your email" value={email} secure={false} />
                    </View>

                    <View style={styles_SignUp.lineView}>
                        <Image source={images.line} />
                        <Image source={images.line} />
                    </View>

                    <View style={styles_SignUp.policyView}>
                        <Text style={styles_SignUp.policyText}>By creating an account you accept our </Text>
                        <LinkText text="Terms and Conditions" action={() => { }} />
                        <Text style={styles_SignUp.policyText}> and acknowledge our </Text>
                        <LinkText text="Privacy Policy." action={() => { }} />
                    </View>

                </View>

                <View>
                    <View style={styles_SignUp.buttonView}>
                        <MainButton text="Create account" pressFun={() => { }} />
                    </View>

                    <View>
                        <LinkText text="I already have an account" action={() => { }} />
                    </View>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SignUp
