import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalcView from './src/components/CalcView';
import Keypad from './src/components/Keypad';

import { StatusBar } from 'expo-status-bar';
import { useCalc } from './src/hooks/useCalc';

export default function App() {
  const { formula, result, onChange } = useCalc()

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
