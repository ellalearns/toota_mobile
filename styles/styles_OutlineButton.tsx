import { StyleSheet } from "react-native"

const stylesOutlineButton = StyleSheet.create({
    continueButton: {
        width: 330,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#f99e1a"
    },

    selectedContinueButton: {
        backgroundColor: "#f99e1a"
    },

    continueText: {
        fontSize: 15,
        color: "#f99e1a",
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

export default stylesOutlineButton
