import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time1Pontos, setTime1Pontos] = useState('');
  const [Time2Pontos, setTime2Pontos] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [jogadores, setJogadores] = useState([]);
  const [nomeJogador, setNomeJogador] = useState('');
  const [numeroJogador, setNumeroJogador] = useState('');

  const addJogador = () => {
    if(selectedTime && nomeJogador && numeroJogador) {
      setJogadores([...jogadores, {nome: nomeJogador, numero: numeroJogador, time: selectedTime}]);
      setNomeJogador('');
      setNumeroJogador('');
    }
  };

  const addPontos = (time) => {
    if (time === 'time1'){
      setTime1Pontos(time1Pontos + 1);
    } else {
      setTime2Pontos(Time2Pontos+ 1);
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.heading}>JIFENA - MARCADOR DE PONTOS</Text>
    <TextInput
    style={styles.input}
    placeholder="Esporte"
    value={esporte}
    onChangeText={setEsporte}/>

  <TextInput
    style={styles.input}
    placeholder="Time 1"
    value={time1}
    onChangeText={setTime1}/>

  <TextInput
    style={styles.input}
    placeholder="Nome do Time 2"
    value={time2}
    onChangeText={setTime2}/>

  <View style={styles.scoreContainer}>
    <TouchableOpacity
      style={[styles.timeButton, selectedTime === 'time1' && styles.selectedTime]}
      onPress={() => setSelectedTime('time1')}>
      <Text style={styles.timeText}>{time1}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.teamButton, selectedTime === 'time2' && styles.selectedTime]}
      onPress={() => setSelectedTime('time2')}>
      <Text style={styles.timeText}>{time2}</Text>
    </TouchableOpacity>
  </View>

  <TextInput
    style={styles.input}
    placeholder="Jogador"
    value={nomeJogador}
    onChangeText={setNomeJogador}/>

  <TextInput
    style={styles.input}
    placeholder="Número da Camiseta"
    value={numeroJogador}
    onChangeText={setNumeroJogador}
    keyboardType="numeric"/>

  <TouchableOpacity style={styles.addButton} onPress={addJogador}>
    <Text style={styles.buttonText}>Adicionar Jogador</Text>
  </TouchableOpacity>

  <View style={styles.jogadoresContainer}>
    {players.map((jogadores, index) => (
      <View key={index} style={styles.jogadoresItem}>
        <Text>{`${jogadores.nome} - #${jogadores.numero}`}</Text>
        <TouchableOpacity onPress={() => handleIncrementScore(jogadores.time)}>
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    ))};
  </View>

  <View style={styles.scoreContainer}>
    <Text style={styles.scoreText}>{time1}: {time1Pontos}</Text>
    <Text style={styles.scoreText}>{time2}: {Time2Pontos}</Text>
  </View>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
