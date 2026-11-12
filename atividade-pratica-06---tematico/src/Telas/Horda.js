import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Estilo from '../style/estilo';

export default function Horda({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer}>
                
                <Image 
                    source={{ uri: 'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2019/06/Warcraft-Horde.jpg?w=1600&h=1200&fit=crop' }} 
                    style={[Estilo.imagemCapa, { borderColor: '#8c1616' }]} 
                    resizeMode="contain"
                />

                <Text style={[Estilo.titulo, { color: '#e53935' }]}>Pela Horda!</Text>
                
                <Text style={Estilo.textoNormal}>
                    A Horda é uma união forjada na sobrevivência e na força. Composta originalmente por Orcs refugiados, Trolls Lançanegra e Taurens, eles são frequentemente vistos como párias do mundo.
                </Text>

                <Text style={Estilo.textoNormal}>
                    Apesar de uma história manchada por sangue e corrupção demoníaca no passado, a Horda moderna preza pela honra xamânica, lealdade tribal e liberdade. Sua capital é a formidável fortaleza de Orgrimmar.
                </Text>

                <TouchableOpacity style={Estilo.botao} onPress={() => navigation.goBack()}>
                    <Text style={Estilo.textoBotao}>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}