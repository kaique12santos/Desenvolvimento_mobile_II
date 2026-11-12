import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Estilo from '../estilo';

// 1. Listas de imagens das peças 
const imagensAlianca = [
  require('../../assets/alianca_1.png'),
  require('../../assets/alianca_2.png'),
  require('../../assets/alianca_3.png'),
  require('../../assets/alianca_4.png'),
];

const imagensHorda = [
  require('../../assets/horda_1.png'),
  require('../../assets/horda_2.png'),
  require('../../assets/horda_3.png'),
  require('../../assets/horda_4.png'),
];

// 2. Sorteio de imagem na criação do tabuleiro
const iniciarTabuleiro = () => {
  let tab = Array(8).fill(null).map(() => Array(8).fill(null));
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 !== 0) { 
        if (r < 3) {
          // Horda (Topo) com imagem aleatória
          const randomImg = Math.floor(Math.random() * imagensHorda.length);
          tab[r][c] = { player: 2, isKing: false, imgId: randomImg }; 
        }
        if (r > 4) {
          // Aliança (Baixo) com imagem aleatória
          const randomImg = Math.floor(Math.random() * imagensAlianca.length);
          tab[r][c] = { player: 1, isKing: false, imgId: randomImg }; 
        }
      }
    }
  }
  return tab;
};

export default function Tela3({ navigation }) {
  const [board, setBoard] = useState(iniciarTabuleiro());
  const [turn, setTurn] = useState(1); // 1 = Aliança, 2 = Horda
  const [selected, setSelected] = useState(null);
  
  const [pontosP1, setPontosP1] = useState(0);
  const [pontosP2, setPontosP2] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [vencedor, setVencedor] = useState(null); 

  useEffect(() => {
    let timer;
    if (!vencedor) {
      timer = setInterval(() => setTempo(t => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [vencedor]);

  const formatarTempo = () => {
    const min = Math.floor(tempo / 60).toString().padStart(2, '0');
    const seg = (tempo % 60).toString().padStart(2, '0');
    return `${min}:${seg}`;
  };

  const processarClique = (r, c) => {
    if (vencedor) return; 

    const pecaClicada = board[r][c];

    if (pecaClicada && pecaClicada.player === turn) {
      setSelected({ r, c });
      return;
    }

    if (!pecaClicada && selected) {
      const peca = board[selected.r][selected.c];
      const diffR = r - selected.r;
      const diffC = c - selected.c;

      if (!peca.isKing) {
        if (turn === 1 && diffR > 0) return; 
        if (turn === 2 && diffR < 0) return; 
      }

      if (Math.abs(diffR) === 1 && Math.abs(diffC) === 1) {
        finalizarMovimento(r, c, selected.r, selected.c);
      } 
      else if (Math.abs(diffR) === 2 && Math.abs(diffC) === 2) {
        const capturadaR = selected.r + diffR / 2;
        const capturadaC = selected.c + diffC / 2;
        const pecaCapturada = board[capturadaR][capturadaC];

        if (pecaCapturada && pecaCapturada.player !== turn) {
          finalizarMovimento(r, c, selected.r, selected.c, capturadaR, capturadaC);
        }
      }
    }
  };

  const finalizarMovimento = (novaR, novaC, velhaR, velhaC, capR, capC) => {
    let novoBoard = [...board];
    let pecaMove = novoBoard[velhaR][velhaC];
    novoBoard[velhaR][velhaC] = null;
    
    let novosPontosP1 = pontosP1;
    let novosPontosP2 = pontosP2;

    if (capR !== undefined) {
      novoBoard[capR][capC] = null;
      if (turn === 1) {
        novosPontosP1 += 1;
        setPontosP1(novosPontosP1);
      } else {
        novosPontosP2 += 1;
        setPontosP2(novosPontosP2);
      }
    }

    if (turn === 1 && novaR === 0) pecaMove.isKing = true;
    if (turn === 2 && novaR === 7) pecaMove.isKing = true;

    novoBoard[novaR][novaC] = pecaMove;
    setBoard(novoBoard);
    setSelected(null);
    setTurn(turn === 1 ? 2 : 1);

    if (novosPontosP1 === 12) setVencedor(1);
    else if (novosPontosP2 === 12) setVencedor(2);
  };

  const reiniciar = () => {
    setBoard(iniciarTabuleiro());
    setTurn(1);
    setPontosP1(0);
    setPontosP2(0);
    setTempo(0);
    setSelected(null);
    setVencedor(null);
  };

  return (
    <View style={Estilo.areaJogo}>
      <Text style={Estilo.turnoTexto}>
        Turno: {turn === 1 ? '🟦 Aliança' : '🟥 Horda'}
      </Text>

      <View style={Estilo.placarContainer}>
        <Text style={[Estilo.textoPlacar, { color: '#64b5f6' }]}>🟦 Aliança: {pontosP1}</Text>
        <Text style={Estilo.textoPlacar}>⏱️ {formatarTempo()}</Text>
        <Text style={[Estilo.textoPlacar, { color: '#e57373' }]}>🟥 Horda: {pontosP2}</Text>
      </View>

      <ImageBackground 
        source={require('../../assets/tabuleiro_fundo_1.png')} 
        style={Estilo.tabuleiro}
        resizeMode="cover"
      >
        {board.map((row, r) => (
          <View key={r} style={Estilo.linha}>
            {row.map((cell, c) => {
              const isPlayable = (r + c) % 2 !== 0;
              const isSelected = selected?.r === r && selected?.c === c;
              
              return (
                <TouchableOpacity 
                  key={c} 
                  activeOpacity={0.8}
                  style={[
                    isPlayable ? Estilo.casaEscura : Estilo.casaClara,
                    isSelected && Estilo.casaSelecionada
                  ]}
                  onPress={() => isPlayable && processarClique(r, c)}
                >
                  {cell && (
                    <View style={[
                      Estilo.peca,
                      cell.player === 1 ? Estilo.pecaAlianca : Estilo.pecaHorda,
                      cell.isKing && Estilo.pecaDama
                    ]}>
                      {/* Busca a imagem no array de acordo com o ID sorteado no início */}
                      <Image 
                        source={
                          cell.player === 1 
                            ? imagensAlianca[cell.imgId] 
                            : imagensHorda[cell.imgId]
                        } 
                        style={Estilo.pecaImagem} 
                      />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ImageBackground>

      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity style={[Estilo.botao, { width: '40%', marginRight: 10 }]} onPress={reiniciar}>
          <Text style={Estilo.textoBotao}>Recuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Estilo.botao, { width: '40%', backgroundColor: '#d32f2f', borderColor: '#b71c1c' }]} onPress={() => navigation.navigate('Tela1')}>
          <Text style={Estilo.textoBotao}>Desistir</Text>
        </TouchableOpacity>
      </View>

      {/* OVERLAY DE VITÓRIA */}
      {vencedor && (
        <View style={Estilo.overlayVitoria}>
          <View style={Estilo.card}>
            <Text style={{ fontSize: 50, marginBottom: 10 }}>⚔️</Text>
            <Text style={Estilo.titulo}>Batalha Encerrada!</Text>
            <Text style={Estilo.textoVitoria}>
              A {vencedor === 1 ? '🟦 Aliança' : '🟥 Horda'} dominou o campo de batalha!
            </Text>
            <Text style={[Estilo.texto, { marginBottom: 20 }]}>
              Duração da guerra: {formatarTempo()}
            </Text>
            
            <TouchableOpacity style={Estilo.botao} onPress={reiniciar}>
              <Text style={Estilo.textoBotao}>Nova Batalha</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[Estilo.botao, { backgroundColor: '#d32f2f', borderColor: '#b71c1c' }]} 
              onPress={() => navigation.navigate('Tela1')}
            >
              <Text style={Estilo.textoBotao}>Voltar à Base</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}