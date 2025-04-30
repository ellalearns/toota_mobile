import { StyleSheet } from "react-native";

const Styles_NumberFrame = StyleSheet.create({
    main: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 20,
        justifyContent: "space-between",
    },
    each: {
        width: 95,
        height: 72,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 32
    }
})

export default Styles_NumberFrame
