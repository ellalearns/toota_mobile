import { StatusBar, StyleSheet } from "react-native";

const styles_intro = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ffffff",
        justifyContent: "space-between"
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        height: "100%",
        width: "100%",
        transform: [{
            translateY: 55
        }]
    },
    skipView: {
        marginLeft: "65%"
    },
    actionView: {
        backgroundColor: "#ffffff",
        height: "35%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    positionIndicator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "#1f1200"
    },
    contentText: {
        textAlign: "center",
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 10,
        color: "#6b6357"
    },
    copySection: {
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: "column",
        justifyContent: "center",
        flex: 0.7
    },
    buttonView: {
        flex: 0.2,
        marginBottom: 30
    },
    positionPointer: {
        marginLeft: 2,
        marginRight: 2
    }
})

export default styles_intro
