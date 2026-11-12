import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Estilo from '../estilo';

export default function Tela4({ navigation }) {
  return (
    <View style={Estilo.container}>
      <View style={Estilo.card}>
        <Text style={Estilo.titulo}>Créditos</Text>

        <Text style={[Estilo.texto, { fontWeight: 'bold' }]}>Desenvolvedor:</Text>
        <Text style={Estilo.texto}>Kaique Caitano Dos Santos</Text>

        <Text style={[Estilo.texto, { fontWeight: 'bold' }]}>Instituição:</Text>
        <Text style={Estilo.texto}>FATEC</Text>

        <Text style={[Estilo.texto, { fontWeight: 'bold' }]}>Curso:</Text>
        <Text style={Estilo.texto}>Desenvolvimento de Software Multiplataforma (5º Semestre)</Text>

        <Text style={[Estilo.texto, { fontWeight: 'bold' }]}>Disciplina:</Text>
        <Text style={Estilo.texto}>Programação para Dispositivos Móveis II - Prof. Jeferson de Souza Dias</Text>

        <Text style={Estilo.avisoAcademico}>
          "Este site é um projeto acadêmico da FATEC, criado apenas para fins de estudo. Não utilize as informações aqui para uso real."
        </Text>
      </View>

      <TouchableOpacity style={Estilo.botao} onPress={() => navigation.navigate('Tela1')}>
        <Text style={Estilo.textoBotao}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
}