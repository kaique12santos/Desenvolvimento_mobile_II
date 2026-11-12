import React from 'react'
import {ImageBackground, Text, Button, View} from 'react-native';
import style from '../style/capa'


export default function Capa({iniciar}){
  
 
  return(
    <View style={style.container}>
      <ImageBackground source={require('../assets/capa-02.jpg')} resizeMode="cover" style={style.image}>
        <Text style={style.text}>Hospital nova Esperança</Text>
        <Text style={style.text}>Sistema de Cadastro</Text>
        <Text style={style.text}>e chamada de senhas</Text>
        <Button title="Iniciar" onPress={iniciar} style={style.button}/>
      </ImageBackground>
    </View>
  )

}