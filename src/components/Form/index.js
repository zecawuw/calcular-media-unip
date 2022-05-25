import React, {useState} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import ResultNota from './resultNota/index'
import styles from './style';

export default function Form() {

  const [np1, setNp1] = useState(null)
  const [np2, setNp2] = useState(null)
  const [pim, setPim] = useState(null)
  const [messageNota, setMessageNota] = useState('Preencha o as notas')
  const [nota, setNota] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function notaCalculator(){

        var numero = (np1 * 0.4) + (np2 * 0.4) + (pim* 0.2);
        var partes = (numero + '').split('.'); // ['11', '599999999999998']
        var parteCorrigida = partes[1].slice(0, 1); // '59'
        var numeroFinal = [partes[0], parteCorrigida].join('.')

        return setNota(numeroFinal)

        // return setNota((np1 * 0.4) + (np2 * 0.4) + (pim* 0.2))

  }

  function validationNota(){
      if(np1 != null && np2 != null && pim != null){
          notaCalculator()
          setNp1(null)
          setNp2(null)
          setPim(null)
          setMessageNota('Sua nota é: ')
          setTextButton('Calcular Novamente')
          return
      }
      setNota(null)
      setTextButton('calcular')
      setMessageNota('preencha a NP1, NP2 e PIM')
  }

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>NP1</Text>
            <TextInput style={styles.input} onChangeText={setNp1} value={np1} placeholder='EX. 7.0' keyboardType='numeric' />
            <Text style={styles.formLabel}>NP2</Text>
            <TextInput style={styles.input} onChangeText={setNp2} value={np2} placeholder='EX. 8.5' keyboardType='numeric' />
            <Text style={styles.formLabel}>PIM</Text>
            <TextInput style={styles.input} onChangeText={setPim} value={pim} placeholder='EX. 9.0' keyboardType='numeric' />
            {/* <Button onPress={() => validationNota()} title={textButton} /> */}
            <TouchableOpacity style={styles.ButtonCalculetor}  onPress={() => validationNota()}><Text style={styles.textButtonCalculetor}>{textButton}</Text></TouchableOpacity>

        </View>
        <ResultNota massageResultNota={messageNota} resultNota={nota} />
    </View>
  );
}

