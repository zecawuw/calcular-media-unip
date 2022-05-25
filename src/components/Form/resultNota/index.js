import { Text, View } from 'react-native';
import styles from './style';

export default function ResultNota(props) {
  return (
    <View style={styles.resultNota}>
        <Text style={styles.information}>{props.massageResultNota}</Text>
        <Text style={styles.numberNota}>{props.resultNota}</Text>
    </View>
  );
}

