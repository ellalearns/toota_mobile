import InputText from "@/components/InputText";
import PageIcon from "@/components/PageIcon";
import SignInOption from "@/components/signInOption";
import images from "@/constants/images";
import copy from "@/constants/texts";
import styles_SignUp from "@/styles/styles_SignUp";
import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {

    let email = ""
    let password = ""

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles_SignUp.main}>

                <View style={styles_SignUp.headerContent}>
                    <PageIcon />
                    <Text style={styles_SignUp.signup1}>{copy.signup1}</Text>
                    <Text style={styles_SignUp.signup2}>{copy.signup2}</Text>
                </View>

                <View style={styles_SignUp.mainContent}>

                    <InputText
                        icon1={images.phone}
                        secure={false}
                        value={email}
                        label="Email"
                        placeholder="Enter your email" />

                    <InputText
                        icon1={images.lock}
                        icon2={images.closedEye}
                        secure={true}
                        label="Password"
                        value={password}
                        placeholder="Enter your new password" />

                    <View style={styles_SignUp.orView}>
                        <Image source={images.line} />
                        <Text style={{color: "#bab6b0"}}>  OR  </Text>
                        <Image source={images.line} />
                    </View>

                    <View style={styles_SignUp.orView}>
                    <SignInOption text="Google" icon={images.google} />
                    <SignInOption text="Apple" icon={images.apple} />
                    </View>



                </View>

                <View></View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SignUp
