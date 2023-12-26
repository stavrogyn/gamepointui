import { StyleSheet, View } from 'react-native';
import { MyScreen } from './Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <MyScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
});
