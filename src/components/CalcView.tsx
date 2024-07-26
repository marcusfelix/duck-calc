import { StyleSheet, View, Text } from "react-native";

interface Props {
    formula: string;
    results?: string;
}

export default function CalcView({ formula, results } : Props){

    return <View style={styles.view}>
        <Text style={styles.formula}>{formula}</Text>
        <Text style={styles.result} numberOfLines={1} ellipsizeMode='tail'>{results}</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gap: 10
    },
    formula: {
        color: "gray",
        fontSize: 32
    },
    result: {
        color: "white",
        fontSize: 72,
        fontWeight: "400"
    }
})