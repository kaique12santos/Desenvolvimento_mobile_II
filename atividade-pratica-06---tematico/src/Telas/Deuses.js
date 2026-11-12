import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Estilo from '../style/estilo';

export default function Deuses({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer}>
                
                <Image 
                    source={{ uri: 'https://bnetcmsus-a.akamaihd.net/cms/content_folder_media/UXB8EVJ5WXPF1687910938411.jpg' }} 
                    style={[Estilo.imagemCapa, { borderColor: '#8e24aa' }]} 
                    resizeMode="contain"
                />

                <Text style={[Estilo.titulo, { color: '#ce93d8' }]}>Forças Cósmicas</Text>
                
                <Text style={Estilo.textoNormal}>
                    Muito além de Humanos e Orcs, o universo é disputado por poderes incomensuráveis. O Panteão dos Titãs, seres colossais feitos de magia arcana e ordem, foram os responsáveis por moldar Azeroth.
                </Text>

                <Text style={Estilo.textoNormal}>
                    Em oposição a eles estão os Senhores do Caos (Void Lords) e seus avatares físicos: os Deuses Antigos (Old Gods). Entidades como C'Thun e Yogg-Saron foram aprisionadas nas profundezas de Azeroth e sussurram loucuras para tentar corromper o planeta.
                </Text>

                <TouchableOpacity style={Estilo.botao} onPress={() => navigation.popToTop()}>
                    <Text style={Estilo.textoBotao}>Voltar ao Início</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}