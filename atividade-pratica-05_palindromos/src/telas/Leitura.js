import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilo from '../estilo';

export default function Leitura({ navigation }) {
    const [texto, setTexto] = useState('');

    const analisarTexto = () => {
        if (texto.trim() === '') {
            Alert.alert('Atenção', 'Por favor, digite uma palavra ou frase.');
            return;
        }
        navigation.navigate('Contagem', { textoDigitado: texto });
    };

    return (
        <View style={Estilo.containerBase}>
            <Text style={Estilo.titulo}>Digite seu texto:</Text>
            <TextInput 
                style={Estilo.input}
                placeholder="Ex: A grama é amarga."
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity style={Estilo.botao} onPress={analisarTexto}>
                <Text style={Estilo.textoBotao}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}