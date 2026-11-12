import React,{useState} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import styles from '../style/Cadastro'
import { RadioButton } from 'react-native-paper';

export default function Cadastro({ dados}) {
  const [nome, setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [sexo,setSexo] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Cadastro</Text>
      <Text style={styles.textInput}>Nome</Text>
      <TextInput
      style={styles.input}
      placeholder="Informe o seu nome completo"
      keyboardType="default"
      value= {nome}
      onChangeText={setNome}
      />
      <Text style={styles.textInput}>Idade</Text>
      <TextInput
      style={styles.input}
      placeholder="Informe sua idade"
      keyboardType="numeric"
      value= {idade}
      onChangeText={setIdade}
      /><Text style={styles.textInput}>Sexo</Text>
      <RadioButton.Group onValueChange={novoValor => setSexo(novoValor)} value={sexo}>
      <RadioButton.Item label="Masculino" value="M" />
      <RadioButton.Item label="Feminino" value="F" />
      <RadioButton.Item label="Outro" value="O" />
    </RadioButton.Group>
      
      <Button
        style={styles.button}
        title="Confirmar Cadastro"
        onPress={() => dados ({nome, idade,sexo})}
      />
    </View>


  )

}
