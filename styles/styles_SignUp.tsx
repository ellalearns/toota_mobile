import { StyleSheet } from "react-native";

const styles_SignUp = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#ffffff",
        width: "100%",
        justifyContent: "space-around"
    },
    view1: {
        flex: 0.6,
    },
    backView: {
        paddingLeft: 20
    },
    textView: {
        paddingLeft: 20,
        marginTop: 16
    },
    emailView: {
        paddingLeft: 20,
        marginTop: 24
    },
    emailViewActive: {
        paddingTop: 8,
        paddingLeft: 20
    },
    lineView: {
        marginTop: 16,
        alignSelf: "center",
        flexDirection: "row"
    },
    signup1: {
        color: "#1f1200",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: -0.96,
    },
    signup2: {
        textAlign: "left",
        color: "#6b6357",
        fontSize: 16,
        width: "90%"
    },
    policyView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16
    },
    policyText: {
        fontSize: 16,
        color: "#6b6357"
    },
    buttonView: {
        alignSelf: "center"
    },
    viewBreak: {
        // height: "1%"
        marginTop: 16
    },
})

export default styles_SignUp
