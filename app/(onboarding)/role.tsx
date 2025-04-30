import React, { useState } from "react";
import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import images from "@/constants/images";
import { Link, useRouter } from "expo-router";

export default function Role () {

    const router = useRouter();

    const [tripSelected, isTripSelected] = useState(false)
    const [driverSelected, isDriverSelected] = useState(false)
    const [roleSelected, isRoleSelected] = useState(false)

    const pickTrip = () => {
        isTripSelected(true)
        isDriverSelected(false)
        isRoleSelected(true)
    }

    const pickDriver = () => {
        isTripSelected(false)
        isDriverSelected(true)
        isRoleSelected(true)
    }

    return (
        <View style={styles.rolePage}>
            <View style={{ flex: .2 }}></View>{/* gives the space before the roles */}

            <View
                style={styles.roleGroup}>
                <Text style={styles.roleTitle}>Choose your role</Text>
                <TouchableOpacity style={styles.roleBoxButtons} onPress={() => pickTrip()}>
                    <View style={[styles.roleBox, tripSelected ? styles.selectedRoleBox : null]}>
                        <Image source={images.findDriver} />
                        <Text style={styles.innerRoleBoxContent}>Find a trip</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.roleBoxButtons} onPress={() => pickDriver()}>
                    <View style={[styles.roleBox, driverSelected ? styles.selectedRoleBox : null]}>
                        <Image source={images.findTrip} />
                        <Text style={styles.innerRoleBoxContent}>Find a driver</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomFlex}>
                <TouchableOpacity style={[styles.continueButton, roleSelected ? styles.selectedContinueButton : null]}
                onPress={() => {roleSelected ? router.push("/(auth)/welcomeScreen") : ToastAndroid.showWithGravity("please choose a role", 1000, ToastAndroid.TOP)}}>
                <Text style={[styles.continueText, roleSelected ? styles.selectedContinueText : null]}>Continue</Text>
                </TouchableOpacity>
                <Link href={{pathname: "/(auth)/auth", params: { action: "login"}}}><Text style={[styles.continueText, styles.signInText]}>I already have an account</Text></Link>
            </View>

        </View>
    )
}

// export default Role

const styles = StyleSheet.create({
    roleBox: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fef5e8",
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    selectedRoleBox: {
        borderWidth: 2,
        borderColor: "#f99e1a"
    },
    innerRoleBoxContent: {
        fontSize: 15,
        color: "#6b6357"
    },
    roleBoxButtons: {
        height: "30%",
        width: "80%"
    },
    roleTitle: {
        fontSize: 30
    },
    roleGroup: {
        backgroundColor: "white",
        flex: .5,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 20,
        elevation: 5,
        marginTop: 20,
        borderRadius: 30
    },
    rolePage: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white"
    },
    bottomFlex: {
        flex: .3,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    continueButton: {
        backgroundColor: "#fef5e8",
        width: "85%",
        height: "25%",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    selectedContinueButton: {
        backgroundColor: "#f99e1a"
    },
    continueText: {
        fontSize: 15,
        color: "#6b6357",
        textAlign: "center",
    },
    selectedContinueText: {
        color: "#fef5e8"
    },
    signInText: {
        color: "#f99e1a",
        textDecorationLine: "underline",
    }
})
