import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Estilo from '../style/estilo';

export default function Alianca({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer}>
                
                <Image 
                    source={{ uri: 'https://i.pinimg.com/736x/40/eb/fb/40ebfbb1617d00da50c7175adf8188e2.jpg' }} 
                    style={[Estilo.imagemCapa, { borderColor: '#004a93' }]} 
                    resizeMode="cover"
                />

                <Text style={[Estilo.titulo, { color: '#64b5f6' }]}>Pela Aliança!</Text>
                
                <Text style={Estilo.textoNormal}>
                    A Aliança é guiada por ideais de nobreza, honra, fé e justiça. Formada inicialmente pelos Humanos de Ventobravo, Anões de Altaforja e Elfos Noturnos, esta facção busca manter a ordem em Azeroth.
                </Text>

                <Text style={Estilo.textoNormal}>
                    Liderados historicamente por grandes reis da linhagem Wrynn (como Varian e Anduin), a Aliança se orgulha de sua disciplina militar, arquitetura imponente e do domínio da magia Arcana e da Luz Sagrada.
                </Text>

                <TouchableOpacity style={Estilo.botao} onPress={() => navigation.goBack()}>
                    <Text style={Estilo.textoBotao}>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}