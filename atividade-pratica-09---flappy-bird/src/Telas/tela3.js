import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image } from 'react-native';
import Estilo from '../estilo';

const { width, height } = Dimensions.get('window');

const LARGURA_PASSARO = 55;
const ALTURA_PASSARO = 45;
const LARGURA_CANO = 90;
const ABERTURA_CANO = 210; 
const PASSARO_X = width / 5;

// Física calibrada
const GRAVIDADE = 0.6;
const FORCA_PULO = -8.5;
const VELOCIDADE_CANO = 5;

export default function Tela3({ navigation }) {
  const [jogando, setJogando] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [tempo, setTempo] = useState(0);

  // Estados visuais para renderização
  const [passaroY, setPassaroY] = useState(height / 2);
  const [canoX, setCanoX] = useState(width);
  const [alturaCanoTopo, setAlturaCanoTopo] = useState(180);
  const passaroYRef = useRef(height / 2);
  const velocidadeRef = useRef(0);
  const canoXRef = useRef(width);
  const alturaTopoRef = useRef(180);

  useEffect(() => {
    let cronometro;
    if (jogando && !gameOver) {
      cronometro = setInterval(() => {
        setTempo((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(cronometro);
  }, [jogando, gameOver]);

  // Motor principal do jogo 
  useEffect(() => {
    if (!jogando || gameOver) return;

    const loopJogo = setInterval(() => {
      // 1. Atualiza a posição e queda do tucano
      velocidadeRef.current += GRAVIDADE;
      passaroYRef.current += velocidadeRef.current;

      // 2. Atualiza o movimento das palmeiras
      canoXRef.current -= VELOCIDADE_CANO;
      if (canoXRef.current <= -LARGURA_CANO) {
        canoXRef.current = width;
        setPontos((p) => p + 1);
        
        // Sorteia uma nova altura segura para a próxima passagem
        const minAltura = 80;
        const maxAltura = height - ABERTURA_CANO - 160;
        const novaAltura = Math.floor(Math.random() * (maxAltura - minAltura + 1)) + minAltura;
        alturaTopoRef.current = novaAltura;
        setAlturaCanoTopo(novaAltura);
      }

      // 3. Verificação de Colisão com margem de tolerância (Hitbox justa)
      const margemPerdao = 10; 
      const pTopo = passaroYRef.current + margemPerdao;
      const pBase = passaroYRef.current + ALTURA_PASSARO - margemPerdao;
      const pDireita = PASSARO_X + LARGURA_PASSARO - margemPerdao;
      const pEsquerda = PASSARO_X + margemPerdao;

      const cEsquerda = canoXRef.current + 27; 
      const cDireita = canoXRef.current + LARGURA_CANO - 27;

      const bateuBordas = pBase >= height || pTopo <= 0;
      const dentroAreaCano = pDireita > cEsquerda && pEsquerda < cDireita;
      const bateuPalmeira = pTopo < alturaTopoRef.current || pBase > alturaTopoRef.current + ABERTURA_CANO;

      if (bateuBordas || (dentroAreaCano && bateuPalmeira)) {
        setGameOver(true);
        setJogando(false);
      }

      // Atualiza os gráficos no ecrã
      setPassaroY(passaroYRef.current);
      setCanoX(canoXRef.current);
    }, 25);

    return () => clearInterval(loopJogo);
  }, [jogando, gameOver]);

  // Função disparada imediatamente ao tocar no ecrã
  const pular = () => {
    if (gameOver) return;
    if (!jogando) {
      setJogando(true);
    }
    velocidadeRef.current = FORCA_PULO;
  };

  const reiniciarJogo = () => {
    passaroYRef.current = height / 2;
    velocidadeRef.current = FORCA_PULO;
    canoXRef.current = width;
    alturaTopoRef.current = 180;

    setPassaroY(height / 2);
    setCanoX(width);
    setAlturaCanoTopo(180);
    setPontos(0);
    setTempo(0);
    setGameOver(false);
    setJogando(true);
  };

  return (
    <TouchableWithoutFeedback onPress={pular}>
      <View style={Estilo.areaJogo}>
        
        <Image 
          source={require('../../assets/nuvem_texture.png')} 
          style={Estilo.fundoNuvens} 
          resizeMode="cover" 
        />

        {/* Placar de Pontuação e Tempo */}
        <View style={Estilo.placarContainer}>
          <Text style={Estilo.textoPlacar}>Pontos: {pontos}</Text>
          <Text style={Estilo.textoPlacar}>Tempo: {tempo}s</Text>
        </View>

        <Image 
          source={require('../../assets/tucano_pixel.png')} 
          style={[
            Estilo.passaroImg, 
            { 
              top: passaroY, 
              left: PASSARO_X,
              transform: [{ rotate: `${Math.min(Math.max(velocidadeRef.current * 3, -25), 45)}deg` }]
            }
          ]} 
          resizeMode="contain"
        />

      {/* Palmeira do Topo (Invertida) */}
        <View style={[Estilo.canoContainer, { top: 0, left: canoX, height: alturaCanoTopo }]}>
          <Image 
            source={require('../../assets/tronco_palmeira_extensao.png')} 
            style={Estilo.extensaoTronco} 
            resizeMode="repeat"
          />
          {/* A imagem da folha fica exatamente na ponta de baixo do obstáculo */}
          <Image 
            source={require('../../assets/palmeira_can_os.png')} 
            style={[Estilo.arvoreCopa, { transform: [{ rotate: '180deg' }] }]} 
            resizeMode="stretch"
          />
        </View>

        {/* Palmeira de Baixo */}
        <View style={[Estilo.canoContainer, { top: alturaCanoTopo + ABERTURA_CANO, left: canoX, height: height - (alturaCanoTopo + ABERTURA_CANO) }]}>
          {/* A imagem da folha fica exatamente na ponta de cima do obstáculo */}
          <Image 
            source={require('../../assets/palmeira_can_os.png')} 
            style={Estilo.arvoreCopa} 
            resizeMode="stretch"
          />
          <Image 
            source={require('../../assets/tronco_palmeira_extensao.png')} 
            style={Estilo.extensaoTronco} 
            resizeMode="repeat"
          />
        </View>

        {/* Ecrã inicial antes do primeiro toque */}
        {!jogando && !gameOver && (
          <View style={Estilo.overlayGameOver}>
            <Text style={[Estilo.titulo, { color: '#fff' }]}>Toca no ecrã para voar!</Text>
          </View>
        )}

        {/* Ecrã de Fim de Jogo */}
        {gameOver && (
          <View style={Estilo.overlayGameOver}>
            <View style={Estilo.card}>
              <Text style={Estilo.titulo}>Fim de Jogo!</Text>
              <Text style={Estilo.subtitulo}>Pontuação: {pontos}</Text>
              <Text style={Estilo.texto}>Tempo sobrevivido: {tempo} segundos</Text>
            </View>

            <TouchableOpacity style={[Estilo.botao, Estilo.botaoSecundario]} onPress={reiniciarJogo}>
              <Text style={Estilo.textoBotao}>Jogar Novamente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Estilo.botao} onPress={() => navigation.navigate('Tela1')}>
              <Text style={Estilo.textoBotao}>Menu Principal</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    </TouchableWithoutFeedback>
  );
}