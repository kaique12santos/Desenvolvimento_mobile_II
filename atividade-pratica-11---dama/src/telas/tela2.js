import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Estilo from '../estilo';

export default function Tela2({ navigation }) {
  return (
    <View style={Estilo.container}>
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        style={{ width: '100%', flex: 1 }}
      >
        
  
        <Image 
          source={require('../../assets/instrucoes_1.png')} 
          style={{ width: 340, height: 220, marginBottom: 15, borderRadius: 10 }} 
          resizeMode="cover" 
        />

  
        <Image 
          source={require('../../assets/instrucoes_2.png')} 
          style={{ width: 340, height: 220, marginBottom: 15, borderRadius: 10 }} 
          resizeMode="cover" 
        />

        <Image 
          source={require('../../assets/instrucoes_3.png')} 
          style={{ width: 340, height: 220, marginBottom: 25, borderRadius: 10 }} 
          resizeMode="cover" 
        />

        <TouchableOpacity style={Estilo.botao} onPress={() => navigation.goBack()}>
          <Text style={Estilo.textoBotao}>Voltar à Base</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}