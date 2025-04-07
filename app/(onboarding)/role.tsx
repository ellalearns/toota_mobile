import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "@/constants/images";

const Role = () => {

    const [tripSelected, isTripSelected] = useState(false)
    const [driverSelected, isDriverSelected] = useState(false)
    const [roleSelected, isRoleSelected] = useState(false)

    const pickTrip = () => {
        isTripSelected(true)
        isDriverSelected(false)
        isRoleSelected(true)
    }

    // const pickDriver = () => {
    //     isDriverSelected(true)
    //     isTripSelected(false)
    //     isRoleSelected(true)
    // }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "white"
            }}>
            <View
                style={{
                    flex: .2
                }}>

            </View>
            <View
                style={{
                    backgroundColor: "white",
                    flex: .5,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: 20,
                    elevation: 5,
                    marginTop: 20,
                    borderRadius: 30
                }}>

                <Text
                    style={{
                        fontSize: 40
                    }}>Choose your role</Text>

                <TouchableOpacity
                    style={styles.roleBoxButtons}
                    onPress={() => pickTrip()}>
                    <View
                        style={[styles.roleBox, roleSelected ? styles.selectedRoleBox : null]}>
                        <Image source={images.findDriver} />
                        <Text
                            style={styles.innerRoleBoxContent}>Find a trip</Text>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        height: "30%",
                        width: "80%",
                        backgroundColor: "#fef5e8",
                        borderRadius: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>
                    <Image source={images.findTrip} />
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#6b6357"
                        }}>Find a driver</Text>
                </View>

            </View>
            <View
                style={{
                    flex: .3,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#f99e1a",
                        width: "85%",
                        height: "25%",
                        borderRadius: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#fef5e8",
                            textAlign: "center",
                        }}
                    >Continue</Text>
                </TouchableOpacity>
                <Text>I have an account</Text>
            </View>
        </View>
    )
}

export default Role

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
    }
})
