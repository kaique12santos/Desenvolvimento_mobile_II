import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Estilo from '../estilo';

export default function Tela1({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/capa.png')} 
      style={{ flex: 1, width: '100%' }}
      resizeMode="cover"
    >
      
      <View style={[Estilo.container, { backgroundColor: 'transparent' }]}>
        
        <View style={Estilo.card}>

          
          <Text style={Estilo.texto}>
            A guerra entre a Horda e a Aliança chegou ao tabuleiro. Escolha sua facção, crie sua estratégia e conquiste a vitória!
          </Text>
        </View>

        <TouchableOpacity style={Estilo.botao} onPress={() => navigation.navigate('Tela3')}>
          <Text style={Estilo.textoBotao}>Entrar em Combate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Estilo.botao, { backgroundColor: '#004a93' }]} onPress={() => navigation.navigate('Tela2')}>
          <Text style={Estilo.textoBotao}>Regras de Guerra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Estilo.botao, { backgroundColor: '#8c1616' }]} onPress={() => navigation.navigate('Tela4')}>
          <Text style={Estilo.textoBotao}>Créditos</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}