import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Estilo from '../estilo';

export default function Contagem({ route, navigation }) {
    // Recebe o parâmetro da tela anterior
    const { textoDigitado } = route.params;

    // Lógica para contar vogais e consoantes
    const limparTexto = textoDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z]/g, "").toLowerCase();
    
    const vogais = limparTexto.match(/[aeiou]/g)?.length || 0;
    const consoantes = limparTexto.length - vogais;

    return (
        <View style={Estilo.containerBase}>
            <View style={Estilo.card}>
                <Text style={Estilo.titulo}>Análise de Letras</Text>
                <Text style={Estilo.textoNormal}>O texto digitado contém:</Text>
                
                <Text style={Estilo.destaque}>{vogais} Vogais</Text>
                <Text style={Estilo.destaque}>{consoantes} Consoantes</Text>
            </View>

            <TouchableOpacity 
                style={Estilo.botao} 
                onPress={() => navigation.navigate('Resultado', { textoDigitado })}>
                <Text style={Estilo.textoBotao}>É Palíndromo?</Text>
            </TouchableOpacity>
        </View>
    );
}