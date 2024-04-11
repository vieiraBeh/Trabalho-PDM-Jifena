import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native';

export default function App() {
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time1Pontos, setTime1Pontos] = useState(0);
  const [Time2Pontos, setTime2Pontos] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [jogadores, setJogadores] = useState([]);
  const [nomeJogador, setNomeJogador] = useState('');
  const [numeroJogador, setNumeroJogador] = useState('');

  const handleAddJogador = () => {
    if(selectedTime && nomeJogador && numeroJogador) {
      setJogadores([...jogadores, {nome: nomeJogador, numero: numeroJogador, time: selectedTime}]);
      setNomeJogador('');
      setNumeroJogador('');
    }
  };

  const handleIncrementScore = (time) => {
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
    placeholder="Time 2"
    value={time2}
    onChangeText={setTime2}/>

  <View style={styles.scoreContainer}>
  <TouchableOpacity
  style={[styles.teamButton, selectedTime === 'time1' && styles.selectedTime]}
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

  <TouchableOpacity style={styles.addButton} onPress={handleAddJogador}>
    <Text style={styles.buttonText}>Adicionar Jogador</Text>
  </TouchableOpacity>

  <View style={styles.jogadoresContainer}>
  {jogadores.map((jogador, index) => (
    <View key={index} style={styles.jogadoresItem}>
      <Text>{`${jogador.nome} - #${jogador.numero}`}</Text>
      <TouchableOpacity onPress={() => handleIncrementScore(jogador.time)}>
        <Text style={styles.incrementButton}>+</Text>
      </TouchableOpacity>
    </View>
  ))}
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#81638b',
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      width: '80%',
      height: 45,
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 2,
      marginBottom: 10,
      paddingHorizontal: 20,
    },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  teamButton: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  selectedTime: {
    backgroundColor: '#b695c0',
  },
  teamText: {
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#b695c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  playersContainer: {
    width: '80%',
  },
  playerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  incrementButton: {
    backgroundColor: '#b695c0',
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
