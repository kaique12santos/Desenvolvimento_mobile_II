import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Estilo from '../estilo';

const bebidas = [
  { id: '1', nome: 'Refrigerante Lata', preco: 'R$ 6,00' },
  { id: '2', nome: 'Suco Natural 500ml', preco: 'R$ 9,00' },
  { id: '3', nome: 'Água Mineral', preco: 'R$ 4,00' },
  { id: '4', nome: 'Chopp Artesanal', preco: 'R$ 12,00' },
];

export default function Tela3() {
    return (
        <View style={Estilo.containerBase}>
            <Text style={Estilo.titulo}>Bebidas Geladas</Text>
            <FlatList
                data={bebidas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={Estilo.itemCard}>
                        <Text style={Estilo.nomeItem}>{item.nome}</Text>
                        <Text style={Estilo.precoItem}>{item.preco}</Text>
                    </View>
                )}
            />
        </View>
    );
}