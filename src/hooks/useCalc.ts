import { Audio } from 'expo-av';
import { useState } from 'react';
import { calculate } from '../includes/calculator';

export const useCalc = () => {
    const [formula, setFormula] = useState("")
    const [result, setResult] = useState("")

    const onChange = (string: string) => {
        if(string === "C") {
        setFormula("")
        setResult("")
        return
        }
        if(string === "="){
        try {
            const result = calculate(formula)
            setResult(result.toString())
        } catch (error) {
            setResult("ERROR")
        }
        } else {
        const value = formula + string
        setFormula(value)
        }
        quack()
    }

    const quack = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/quack.mp3'))
        await sound.playAsync()
    }

    return { formula, result, onChange }
}