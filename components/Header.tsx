import Styles_HeaderFrame from "@/styles/styles_HeaderFrame";
import React from "react";
import { Text, View } from "react-native";

type HeaderFrameProps = {
    main: string,
    body?: string
}

const HeaderFrame = ({ main, body }: HeaderFrameProps) => {
    return (
        <View>
            { main ? <Text style={Styles_HeaderFrame.main}>{main}</Text> : null}
            <Text style={Styles_HeaderFrame.body}>{body}</Text>
        </View>
    )
}

export default HeaderFrame
