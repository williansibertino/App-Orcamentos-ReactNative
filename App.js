import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import {Button} from 'react-native-paper';


export default class App extends React.Component {
// Variveis Estáticas
  state = {
    // Dados de Entrada
    dadoColuna : 0,
    dadoPerna : 0,
    dadoPernaMetro: 0,
    dadoEspacamento: 0,
    dadoComprimento: 0,
    dadoValor1: 0,
    dadoValor2: 0,
    // Var 1 bloco
    metragemColuna: 0,
    varasColuna: 0,
    valorColuna: 0,
    resultadoVaras: 0,
    valorTotalColuna: 0,
    // Var 2 bloco
    quantidadeEstrivos: 0,
    varasEstrivos: 0,
    valorEstrivos: 0,
    resultadoEstrivos: 0,
    valorTotalEstrivo: 0,
  };

// função das Ferragens
  calculoFerragens = () => {
  // Valores para conversão em metro
  const varaTamanhopadrao = 12;
  const metro = 100;    
  // 1 bloco
  const metragemColuna = (this.state.dadoColuna * this.state.dadoPerna) * this.state.dadoPernaMetro;
  const varasColuna = (metragemColuna / varaTamanhopadrao);
  const valorColuna = (varasColuna * this.state.dadoValor1);
  // 2 bloco
  const quantidadeEstrivos = (this.state.dadoColuna * this.state.dadoPernaMetro) / (this.state.dadoEspacamento / metro);
  const varasEstrivos = ((this.state.dadoComprimento / metro) * quantidadeEstrivos) / varaTamanhopadrao;
  const valorEstrivos = (varasEstrivos * this.state.dadoValor2);
  // Set State
  this.setState ({
    resultadoVaras: Math.ceil(varasColuna),
    resultadoEstrivos: Math.ceil(varasEstrivos),
    valorTotalColuna: Math.ceil(valorColuna),
    valorTotalEstrivo: Math.ceil(valorEstrivos),
  });
  }


  render() {
    return (
      <ScrollView style={styles.container}> 
        <Text style={styles.textoHeader}>Calculadora de Ferragens</Text>
        <View style={styles.box}>
          <Text style={styles.texto}>Insira a quantidade de COLUNAS ou VIGAS.</Text>
          <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='0 un' placeholderTextColor='#fff' style={styles.dados} 
          onChangeText={
            valor => { this.setState ({ dadoColuna : valor })}
          }      
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Insira a quantidade de PERNAS da coluna ou viga.</Text>
          <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='0 un' placeholderTextColor='#fff' style={styles.dados}  
          onChangeText={
            valor => {this.setState ({dadoPerna : valor})}
          }
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Insira a METRAGEM da perna da coluna ou viga.</Text>
          <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='0 mt' placeholderTextColor='#fff' style={styles.dados} 
          onChangeText={
            valor => {this.setState ({dadoPernaMetro : valor})}
          }          
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Insira o espaçamento entre os estrivos em cm.</Text>
          <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='0 cm' placeholderTextColor='#fff' style={styles.dados} 
          onChangeText={
            valor => {this.setState ({dadoEspacamento : valor})}
          }          
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>Insira o COMPRIMENTO dos estrivos em cm</Text>
          <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='0 cm' placeholderTextColor='#fff' style={styles.dados} 
          onChangeText={
            valor => {this.setState ({dadoComprimento : valor})}
          }
          />
        </View>
        <View style={styles.box2}>
          <View style={[styles.itembox,{marginRight: 5}]}>
            <Text style={styles.texto3}>Valor Vara 5.16</Text>
            <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='R$ 0,00' placeholderTextColor='#fff' style={styles.dados2} 
            onChangeText={
              valor => {this.setState ({dadoValor1 : valor})}
            }            
            />
          </View>
          <View style={[styles.itembox,{marginLeft: 5}]}>
            <Text style={styles.texto3}>Valor Vara 4.2</Text>
            <TextInput keyboardType='numeric' selectionColor='#fff' placeholder='R$ 0,00' placeholderTextColor='#fff' style={styles.dados2} 
            onChangeText={
              valor => {this.setState ({dadoValor2 : valor})}
            }            
            />
          </View>
        </View>
        <Button mode='contained' style={styles.btn} onPress={this.calculoFerragens}>CALCULAR</Button>

        <Text style={[styles.texto,{alignSelf: 'center', marginVertical: 15, fontWeight: 'bold'}]}>Role para baixo para ver os resultados.</Text>

        <View style={styles.box3}>
          <Text style={styles.texto2}>Resultado Colunas ou Vigas</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.itembox2}>
              <Text style={styles.texto3}>Varas de 12M</Text>
              <Text style={styles.texto4}>{this.state.resultadoVaras} un</Text>
            </View>
            <View style={styles.itembox2}>
              <Text style={styles.texto3}>Valor Total</Text>
              <Text style={styles.texto4}>R$ {this.state.valorTotalColuna}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.box3,{marginBottom:30}]}>
          <Text style={styles.texto2}>Resultado dos Estrivos</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.itembox2}>
              <Text style={styles.texto3}>Varas de 12M</Text>
              <Text style={styles.texto4}>{this.state.resultadoEstrivos} un</Text>
            </View>
            <View style={styles.itembox2}>
              <Text style={styles.texto3}>Valor Total</Text>
              <Text style={styles.texto4}>R$ {this.state.valorTotalEstrivo}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  textoHeader: {
    color: '#38ada9',
    fontSize: 20,
    padding: 10,
    borderBottomColor: '#3c6382',
    borderBottomWidth: 2,
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  texto : {
    flex: 2,
    padding: 10,
    color: '#fff',
    fontSize: 16,
    alignItems: 'flex-start',

  },
  texto2: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  texto3: {
    fontSize: 18,
    paddingVertical: '2%',
    color:'#fff',
  },
  texto4: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#38ada9',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  box: {
    flexDirection: 'row',
    width: 320,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#3c6382',
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: '#ffffff',
    shadowOffset: {	width: 0,	height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  box2: {
    flexDirection: 'row',
    width: 320,
    height: 80,
    alignSelf: 'center',
    marginVertical: 5,
  },
  box3: {
    width: 320,
    padding: 5,
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: '#3c6382',
    borderRadius: 5,
  },
  dados: {
    width: 100,
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#60a3bc',
    fontSize: 25,
    textAlign: 'center',
    color: '#0a3d62',
  },
  dados2: {
    width: 145,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#60a3bc',
    borderRadius: 15,
    fontSize: 16,
  },
  itembox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    backgroundColor: '#3c6382',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {	width: 0,	height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  itembox2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#079992',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  btn : {
    height: 50,
    width: 320,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#4a69bd',
    color: '#000',
  },
});