import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Estilo from '../estilo';

export default function Orientacoes({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            <View style={Estilo.card}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400' }} 
                    style={Estilo.imagemCapa} 
                    resizeMode="cover"
                />
                
                <Text style={Estilo.titulo}>A Magia das Palavras</Text>
                
                <Text style={Estilo.textoNormal}>
                    Na nossa rica literatura, brincar com as palavras é uma arte. 
                    Este aplicativo convida você a explorar os segredos do texto, revelando suas vogais e consoantes.
                </Text>

                <Text style={Estilo.textoNormal}>
                    Além disso, descubra se sua frase é um Palíndromo, ou seja, se pode ser lida da mesma forma de trás para frente. 
                    Exemplo clássico: {"\n"}"Socorram-me, subi no ônibus em Marrocos!"
                </Text>
            </View>

            <TouchableOpacity 
                style={Estilo.botao} 
                onPress={() => navigation.navigate('Leitura')}>
                <Text style={Estilo.textoBotao}>Iniciar Jornada Literária</Text>
            </TouchableOpacity>
        </View>
    );
}