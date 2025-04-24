import { StyleSheet } from "react-native";

const styles_InputText = StyleSheet.create({
    
    main: {
        flexDirection: "row",
        width: "90%",
        height: 50,
        backgroundColor: "#fef5e8",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        flex: 1,
        paddingLeft: 10
    },
    icon: {
        margin: 5
    },
    inputLabel: {
        fontSize: 20,
        paddingBottom: 5
    },
    mainView: {
        // alignSelf: "center"
    }
})

export default styles_InputText
