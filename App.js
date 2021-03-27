import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {

  render() {
    return(
      <View style={styles.app}>
        <Text style={styles.texto}>Orçamento de Ferragens</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  nome: {

  },
  texto: {
    fontSize: 20,
    marginTop: 50,
    color: '#000',
    alignSelf: 'center',
  }
});
