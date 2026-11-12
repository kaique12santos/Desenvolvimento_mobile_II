import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Estilo from '../style/estilo';

export default function Capa({ navigation }) {
    return (
        <View style={Estilo.containerBase}>
            
            <ImageBackground 
                source={require('../assets/world_of_warcraft_mobile_cover.png')} 
                style={Estilo.imagemFundo} 
                resizeMode="cover"
            >
                <View style={{ flex: 1 }} />
                <Text style={Estilo.tituloCapa}>
                    O MMORPG mais jogado dos anos 2000
                </Text>

                <TouchableOpacity 
                    style={[Estilo.botao, { backgroundColor: '#f5c242', borderColor: '#d1a115' }]} 
                    onPress={() => navigation.navigate('Historia')}
                >
                    <Text style={[Estilo.textoBotao, { color: '#1a1a1a' }]}>ENTRAR EM AZEROTH</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
}