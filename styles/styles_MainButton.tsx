import { StyleSheet } from "react-native"

const stylesMainButton = StyleSheet.create({

    disabledButton: {
        backgroundColor: "#fde1b8"
    },

    activeButton: {
        backgroundColor: "#f99e1a"
    },

    continueButton: {
        width: 330,
        height: 60,
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
        color: "#fef5e8",
        textAlign: "center",
    },

    selectedContinueText: {
        color: "#fef5e8"
    },

    bottomFlex: {
        flex: .3,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default stylesMainButton
