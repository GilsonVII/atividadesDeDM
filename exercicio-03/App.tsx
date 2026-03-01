import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [itens, setItens] = useState<string[]>([]);
  
  const [texto, setTexto] = useState("");

  const adicionarItem = () => {

    if (texto.trim() !== "") {
      setItens([...itens, texto]);
      setTexto("");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Minha Lista de tarefas</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite um item..."
              value={texto}
              onChangeText={setTexto}
            />
            <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
              <Text style={styles.textoBotao}>Add</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listaContainer}>
            {itens.map((item, index) => (
              <View key={index} style={styles.cardItem}>
                <Text style={styles.textoItem}>{item}</Text>
              </View>
            ))}
          </ScrollView>         
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADDE1',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#4A6CF7',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listaContainer: {
    flex: 1,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E1E4E8',
    elevation: 1,
  },
  textoItem: {
    fontSize: 16,
    color: '#333333',
  }
});