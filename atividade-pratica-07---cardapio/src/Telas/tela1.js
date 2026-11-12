import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Estilo from '../estilo';

const pizzas = [
  { id: '1', nome: 'Mussarela', preco: 'R$ 45,00' },
  { id: '2', nome: 'Calabresa', preco: 'R$ 48,00' },
  { id: '3', nome: 'Frango com Catupiry', preco: 'R$ 55,00' },
  { id: '4', nome: 'Portuguesa', preco: 'R$ 52,00' },
];

export default function Tela1() {
    return (
        <View style={Estilo.containerBase}>
            <Text style={Estilo.titulo}>Pizzas Tradicionais</Text>
            <FlatList
                data={pizzas}
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