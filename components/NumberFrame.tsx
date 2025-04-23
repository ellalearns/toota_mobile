import images from "@/constants/images";
import Styles_NumberFrame from "@/styles/styles_NumberFrame";
import React, { Dispatch, SetStateAction } from "react";
import { Image, Text, ToastAndroid, TouchableNativeFeedback, TouchableOpacity, Vibration, View } from "react-native";

type NumberFrameProps = {
    otp: Array<number>,
    setOtp: Dispatch<SetStateAction<Array<number>>>,
    currentPosition: number,
    setCurrentPosition: Dispatch<SetStateAction<number>>
}

const NumberFrame = ({ otp, setOtp, currentPosition, setCurrentPosition } : NumberFrameProps) => {

    const displayNum = (num: number) => {
        switch (num) {
            case 10: return 0
            case 9: return null
            case 11: return images.backspace
            default: return (num + 1)
        }
    }

    const inputNum = (num : number, array : Array<number>) => {
        const newArray = [...array]
        newArray[currentPosition] = num + 1
        setCurrentPosition(currentPosition < 3 ? currentPosition + 1 : currentPosition)
        return newArray
    }

    const backspaceNum = (array: Array<number>) => {
        const newArray = [...array]
        const newPosition = newArray[currentPosition] === -1 && currentPosition > 0 ? currentPosition - 1 : currentPosition
        
        newArray[newPosition] = -1
        setCurrentPosition(newPosition)
        return newArray
    }

    return (
        <View style={Styles_NumberFrame.main}>
            {[...Array(12)].map((_, num) => <TouchableOpacity onPress={
                () => {
                    if (num === 9) {
                        return
                    } else {
                        Vibration.vibrate(50)
                        if (num !== 11) {
                            if (currentPosition <= 3 && otp[3] === -1) {
                                setOtp(inputNum(num === 10 ? -1 : num, otp))
                            }
                        } else {
                            setOtp(backspaceNum(otp))
                        }
                    }
                }
            } style={Styles_NumberFrame.each} key={num}>
                {num !== 11 ?  <Text style={Styles_NumberFrame.text}>{displayNum(num)}</Text> : <Image source={images.backspace} />}
            </TouchableOpacity>)}
        </View>
    )
}

export default NumberFrame
