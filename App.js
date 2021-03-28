import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {
  // Variaveis
  state = {
    quantColuna: 0,
    quantPerna: 0,
    metragemPerna: 0,
    metragemTotal: 0,
    varasTotal: 0,
    resultado: 0,
  };

  // Função das Ferragens
  colunasFerragem = () => {
    const metragemTotal = (this.state.quantColuna * this.state.quantPerna) * this.state.metragemPerna;
    const varasTotal = (metragemTotal/12)

    this.setState ({
      resultado: Math.ceil(varasTotal)
    });
  }  

  render() {
    return(
      <ScrollView style={styles.app}>

        <Text style={styles.tituloBox}>Cálculo de Colunas</Text>

        {/* Calculo das Colunas */}
        <View style={styles.box}>
          <View style={styles.boxResultado}>
            <Text style={styles.resultado}>Resultado</Text>
            <Text style={styles.calculo}>{this.state.resultado} Varas</Text>
          </View>

          <View style={styles.itemBox}>
            <Text style={styles.descricaoItem}>Quantidades de Colunas</Text>
            <TextInput  style={styles.dados} label='Número de Quantidades de Colunas' onChangeText={
              valorEntrada => {
                this.setState({
                  quantColuna: valorEntrada.replace(',','.')
                });
              }
            } />
          </View>
          <View style={styles.itemBox}>
            <Text style={styles.descricaoItem}>Pernas por coluna</Text>
            <TextInput style={styles.dados}label='Quantas Pernas Vai em Cada Coluna' onChangeText={
              valorEntrada => {
                this.setState({
                  quantPerna: valorEntrada.replace(',','.')
                });
              }
            } />
          </View>
          <View style={styles.itemBox}>
            <Text style={styles.descricaoItem}>Metragem de cada perna</Text>
            <TextInput style={styles.dados} label='Tamanho em metros de cada perna' onChangeText={
              valorEntrada => {
                this.setState ({
                  metragemPerna: valorEntrada.replace(',','.')
                });
              }
            } />
          </View>
          <View>
            <Button style={styles.btn} mode='contained' onPress={this.colunasFerragem}>Calcular</Button>
          </View>
        </View>
        
        <View style={styles.box2}>
        

        </View>

      </ScrollView> // View Master
    );
  }
}


const styles = StyleSheet.create({
  app: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 1000,
  },

  // Linha 23 a 39
  tituloBox: {
    fontSize: 20,
    marginBottom: 30,
    color: '#000',
    textAlign: 'center',
  },
  descricaoItem: {
    fontSize: 16,
    padding:2,
    textAlign: 'center',
  },
  itemBox: {
    marginBottom: 20,
  },
  dados: {
    width: 280,
    alignSelf: 'center',
  },

  // Linha 13 a 20
  boxResultado: {
    width: 150,
    backgroundColor: '#2ecc71',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 10,
    marginBottom: 30,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
    color: '#ecf0f1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  calculo: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#27ae60',
    color: '#ecf0f1',
  },
  btn: {
    width: 280,
    alignSelf: 'center',
  },
  box: {
    backgroundColor: '#1abc9c',
    paddingVertical: 20,
    borderRadius: 5,
    marginVertical: 5,
  }
});
