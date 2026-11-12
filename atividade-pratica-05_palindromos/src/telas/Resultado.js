import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Estilo from '../estilo';

export default function Resultado({ route, navigation }) {
    const { textoDigitado } = route.params;

    // Lógica para verificar palíndromo
    // Remove acentos, espaços e pontuações. Passa pra minúscula.
    const textoLimpo = textoDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    const textoInvertido = textoLimpo.split('').reverse().join('');
    const ehPalindromo = textoLimpo === textoInvertido && textoLimpo.length > 0;

    return (
        <View style={Estilo.containerBase}>
            <View style={Estilo.card}>
                <Text style={Estilo.titulo}>Resultado Final</Text>
                <Text style={Estilo.textoNormal}>"{textoDigitado}"</Text>
                
                {ehPalindromo ? (
                    <Text style={[Estilo.destaque, { color: '#4caf50' }]}>Sim! É um Palíndromo!</Text>
                ) : (
                    <Text style={[Estilo.destaque, { color: '#f44336' }]}>Não é um Palíndromo.</Text>
                )}
            </View>

            <TouchableOpacity 
                style={[Estilo.botao, { backgroundColor: '#5c6bc0' }]} 
                onPress={() => navigation.popToTop()}>
                <Text style={Estilo.textoBotao}>Nova Consulta</Text>
            </TouchableOpacity>
        </View>
    );
}