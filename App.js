import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {

  // Variaveis Estaticas
  state = {
    // Primeiro Bloco
    quantColuna: 0,
    quantPerna: 0,
    metragemPerna: 0,
    metragemTotal: 0,
    varasTotal: 0,
    resultadoColuna: 0,
    varaTamanhopadrao: 12,
    // Segundo Bloco
    espacoEstrivos: 0,
    comprimentoEstrivos: 0,
    metragemEstrivos : 0,
    quantidadeEstrivos: 0,
    varasEstrivos: 0,
    resultadoVaras: 0,
    resultadoEstrivos: 0,
  };

  

  // Função das Ferragens
  colunasFerragem = () => {

    // Valores para conversão em metro
    const varaTamanhopadrao = 12;
    const metro = 100;

    // Primeiro Bloco da Função
    const metragemTotal = (this.state.quantColuna * this.state.quantPerna) * this.state.metragemPerna;
    const varasTotal = metragemTotal / varaTamanhopadrao;
    this.setState ({
      resultadoColuna: Math.ceil(varasTotal)
    });

    // Segundo Bloco da Função
    const quantidadeEstrivos = (this.state.quantColuna * this.state.metragemPerna) / (this.state.espacoEstrivos / metro);
    const metragemEstrivos = (this.state.comprimentoEstrivos / metro) * quantidadeEstrivos;
    const varasEstrivos = metragemEstrivos / varaTamanhopadrao;
    this.setState ({
      resultadoVaras : Math.ceil(varasEstrivos),
      resultadoEstrivos: Math.ceil(quantidadeEstrivos),
    })

    // Tratamento de Erros Básico
    if (this.state.quantColuna <= 0 && this.state.quantPerna <= 0 && this.state.metragemPerna <= 0) {
      alert("Erro, por favor insira os dados corretamente.");
    } else if (metragemTotal <= 1000) {
      alert("Sucesso!");
    } else if (metragemTotal > 1000) {
      alert("A metragem excedeu o limite!!!");
    }
  }  


  render() {
    return(
      <ScrollView style={styles.app}>
  
        {/* Calculo das Colunas */}
        <View style={styles.box}>
        <Text style={styles.tituloBox}>Cálculo de Colunas</Text>
          <View style={styles.boxResultado}>
            <Text style={styles.resultado}>Varas de 12 M</Text>
            <Text style={styles.calculo}>{this.state.resultadoColuna}</Text>
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
        
        {/* Calculo dos Estrivos */}
        <View style={styles.box2}>
            <Text style={styles.tituloBox}>Cálculo de Estrivos</Text>
            <View style={styles.painel}>
              <View style={[styles.boxResultado, {width: 130}]}>
                <Text style={styles.resultado}>Quant. Estrivos</Text>
                <Text style={styles.calculo}>{this.state.resultadoEstrivos}</Text>
              </View>
              <View style={[styles.boxResultado, {width: 130}]}>
                <Text style={styles.resultado}>Varas de 12 Metros</Text>
                <Text style={styles.calculo}>{this.state.resultadoVaras}</Text>
              </View>
            </View>
        
            <View style={styles.itemBox}>
              <Text style={styles.descricaoItem}>Espaçamentos dos Estrivos</Text>
              <TextInput style={styles.dados} placeholder={'Espaçamento em centímetros'} onChangeText={
                valor => {
                  this.setState ({espacoEstrivos: valor.replace(',','.')});
                }
              }
              />
            </View>
            <View style={styles.itemBox}>
              <Text style={styles.descricaoItem}>Comprimento dos Estrivos</Text>
              <TextInput style={styles.dados} placeholder={'Comprimento em cm'} onChangeText={
                valor => {
                  this.setState ({comprimentoEstrivos: valor.replace(',','.')});
                }
              }              
              />
            </View>
            <View>
              <Button mode="contained" style={styles.btn} onPress={this.colunasFerragem}>Calcular</Button>
            </View>
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
  tituloBox: {
    fontSize: 25,
    marginBottom: 30,
    color: '#fafafa',
    textAlign: 'center',
  },
  descricaoItem: {
    fontSize: 18,
    padding:5,
    textAlign: 'center',
    color:'#ecf0f1'
  },
  itemBox: {
    marginBottom: 20,
  },
  dados: {
    width: 280,
    alignSelf: 'center',
  },
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
  },
  box2: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 5,
    marginBottom: 30,
  },
  painel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemPainel: {
    flex:1,
  }
});
