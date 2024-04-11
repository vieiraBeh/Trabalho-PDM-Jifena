import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [esporte, setEsporte] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time1Pontos, setTime1Pontos] = useState('');
  const [Time2Pontos, setTime2Pontos] = useState('');
  const [selectTime, setSelectTime] = useState(null);
  const [jogadores, setJogadores] = useState([]);
  const [nomeJogador, setNomeJogador] = useState('');
  const [numeroJogador, setNumeroJogador] = useState('');

  const addJogador = () => {
    if(selectTime && nomeJogador && numeroJogador) {
      setJogadores([...jogadores, {nome: nomeJogador, numero: numeroJogador, time: selectTime}]);
      setNomeJogador('');
      setNumeroJogador('');
    }
  };

  






}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
