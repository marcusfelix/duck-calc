import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from "react-native";

const { width, height } = Dimensions.get('window');
const buttonWidth = (width - (40 + 16)) / 4;

interface Props {
    title?: string,
    style?: "secondary" | "operator" | "number",
    sizeMultiplier?: number,
    onPress?: () => void
}

export default function Button({ title, style = "number", sizeMultiplier = 1, onPress }: Props) {
    const customStyles: any = { width: buttonWidth * sizeMultiplier }

    if(style === "operator"){
        customStyles.backgroundColor = "#FF9500"
    }

    if(style === "secondary"){
        customStyles.backgroundColor = "#666"
    }

    if(style === "number"){
        customStyles.backgroundColor = "#444"
    }

    if(onPress === undefined){
        customStyles.backgroundColor = "transparent"
    }


    if(onPress === undefined){
        return <View style={customStyles}></View>
    }

    return <TouchableOpacity style={{...styles.button, ...customStyles}} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        width: buttonWidth,
        height: buttonWidth,
        borderRadius: buttonWidth,
        backgroundColor: "#444",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 32,
        fontWeight: "500",
        color: "white"
    }
})