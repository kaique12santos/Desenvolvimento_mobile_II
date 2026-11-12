import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Estilo from '../estilo';

const hamburgers = [
  { id: '1', nome: 'X-Burger Clássico', preco: 'R$ 22,00' },
  { id: '2', nome: 'X-Salada', preco: 'R$ 25,00' },
  { id: '3', nome: 'Bacon Supremo', preco: 'R$ 30,00' },
  { id: '4', nome: 'Duplo Cheddar', preco: 'R$ 35,00' },
];

export default function Tela2() {
    return (
        <View style={Estilo.containerBase}>
            <Text style={Estilo.titulo}>Hamburgers Artesanais</Text>
            <FlatList
                data={hamburgers}
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