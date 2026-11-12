import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Estilo from '../estilo';

export default function Tela1({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/rio_background_title.png')} 
      style={{ flex: 1, width: '100%' }}
      resizeMode="cover"
    >
      
      <View style={Estilo.fundoCapa}>
        <View style={Estilo.card}>
          <Image 
            source={require('../../assets/tucano_pixel.png')} 
            style={{ width: 80, height: 65, marginBottom: 10 }} 
            resizeMode="contain"
          />
          <Text style={Estilo.texto}>
            Bem-vindo ao Flappy FATEC! Ajuda o tucano a voar pelo Rio de Janeiro desviando-se das palmeiras.
          </Text>
        </View>

        <TouchableOpacity 
          style={[Estilo.botao, Estilo.botaoSecundario]} 
          onPress={() => navigation.navigate('Tela3')}
        >
          <Text style={Estilo.textoBotao}>Jogar Agora</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={Estilo.botao} 
          onPress={() => navigation.navigate('Tela2')}
        >
          <Text style={Estilo.textoBotao}>Instruções</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[Estilo.botao, { backgroundColor: '#0288d1' }]} 
          onPress={() => navigation.navigate('Tela4')}
        >
          <Text style={Estilo.textoBotao}>Créditos</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}