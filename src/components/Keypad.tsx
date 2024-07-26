import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

interface Props {
    onChange: (value: string) => void
}

export default function Keypad({ onChange }: Props){

    return <View style={styles.view}>
        <Button title="C" style="secondary" onPress={() => onChange("C")}/>
        <Button sizeMultiplier={2}/>
        <Button title="÷" style="operator" onPress={() => onChange("/")}/>
        <Button title="1" onPress={() => onChange("1")}/>
        <Button title="2" onPress={() => onChange("2")}/>
        <Button title="3" onPress={() => onChange("3")}/>
        <Button title="+" style="operator" onPress={() => onChange("+")}/>
        <Button title="4" onPress={() => onChange("4")}/>
        <Button title="5" onPress={() => onChange("5")}/>
        <Button title="6" onPress={() => onChange("6")}/>
        <Button title="*" style="operator" onPress={() => onChange("*")}/>
        <Button title="7" onPress={() => onChange("7")}/>
        <Button title="8" onPress={() => onChange("8")}/>
        <Button title="9" onPress={() => onChange("9")}/>
        <Button title="-" style="operator" onPress={() => onChange("-")}/>
        <Button title="0" sizeMultiplier={2} onPress={() => onChange("0")}/>
        <Button title="." onPress={() => onChange(".")}/>
        <Button title="=" style="secondary" onPress={() => onChange("=")}/>
    </View>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4
    },
    formula: {

    },
    result: {

    }
})