import { ScrollView, StyleSheet } from "react-native";

const Styles_Kyc = StyleSheet.create({
    main: {
        backgroundColor: "#ffffff",
        flex: 1,
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: "space-between"
    },
    header: {
        paddingLeft: 20
    },
    formView: {
        paddingLeft: 20,
        justifyContent: "space-evenly",
        flex: 1,
    },
    formViewActive: {
        marginBottom: 33
    },
    picMainText: {
        fontSize: 20
    },
    picBodyText: {
        fontSize: 16,
        color: "#6b6357",
        alignSelf: "center",
        wordWrap: "no-wrap"
    },
    uploadView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    uploadButton: {
        backgroundColor: "#f6f6f5",
        marginRight: 40,
        width: 60,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: "space-around"
    }
})

export default Styles_Kyc
