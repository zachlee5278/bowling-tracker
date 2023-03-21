import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import SingleGame from './views/SingleGame';

export default function App() {
  return (
      <SafeAreaView  style={styles.container}>      
        <SingleGame/>
      </SafeAreaView>
  );
}
