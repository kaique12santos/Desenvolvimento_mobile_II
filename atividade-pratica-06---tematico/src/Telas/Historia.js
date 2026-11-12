import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Estilo from '../style/estilo';

export default function Historia({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer}>
                
                <Image 
                    source={{ uri: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/DLEY10QTKTR61769660411830.png' }} 
                    style={Estilo.imagemCapa} 
                    resizeMode="cover"
                />

                <Text style={Estilo.titulo}>A História de Warcraft</Text>
                
                <Text style={Estilo.textoNormal}>
                    O universo de World of Warcraft se passa primariamente no mundo de Azeroth, um planeta repleto de magia, mistérios e conflitos intermináveis. 
                    A história é moldada por invasões demoníacas da Legião Ardente, a corrupção do Void e, principalmente, a eterna guerra entre as duas maiores facções mortais.
                </Text>

                <Text style={Estilo.textoNormal}>
                    Escolha um dos caminhos abaixo para explorar mais sobre as facções que dividem este mundo ou as entidades cósmicas que o governam.
                </Text>

                <TouchableOpacity style={[Estilo.botao, Estilo.botaoAlianca]} onPress={() => navigation.navigate('Alianca')}>
                    <Text style={Estilo.textoBotao}>Conhecer a Aliança</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Estilo.botao, Estilo.botaoHorda]} onPress={() => navigation.navigate('Horda')}>
                    <Text style={Estilo.textoBotao}>Conhecer a Horda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Estilo.botao, Estilo.botaoDeuses]} onPress={() => navigation.navigate('Deuses')}>
                    <Text style={Estilo.textoBotao}>Os Deuses e Titãs</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}