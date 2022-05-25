import { StyleSheet, Text, View } from 'react-native';
import Titlel from './src/components/Titlel';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Titlel></Titlel>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e8e5e5',
      paddingTop: 80,
    },
});
