import { StyleSheet } from "react-native";

const styles_SignUp = StyleSheet.create({
    main: {
        flex: 1,
        padding: 16,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    headerContent: {},
    signup1: {
        textAlign: "center",
        color: "#1f1200",
        fontSize: 24
    },
    signup2: {
        textAlign: "center",
        color: "#6b6357",
        fontSize: 16
    },
    mainContent: {},
    orView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    actionView: {},
    policyView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    policyText: {
        fontSize: 16,
        color: "#6b6357"
    }
})

export default styles_SignUp
