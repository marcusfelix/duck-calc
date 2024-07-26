import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalcView from './src/components/CalcView';
import Keypad from './src/components/Keypad';
import { calculate } from './src/includes/calculator';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';

export default function App() {
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
    const { sound } = await Audio.Sound.createAsync(require('./src/assets/quack.mp3'))
    await sound.playAsync()
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        style='light'
      />
      <View style={styles.container}>
        <CalcView formula={formula} results={result}/>
        <Keypad onChange={onChange}/>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#222'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    gap: 20
  },
});
