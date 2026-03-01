import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput, SafeAreaView, Platform } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');

  const alertaNome = () => {
    const mensagem = `Alerta!!! O nome: ${nome} foi salvo!`;

    if (Platform.OS === 'web') {
      alert(mensagem); 
    } else {

      Alert.alert('Sucesso!', mensagem); 
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Digite Seu nome aqui 👇</Text>
        
        <TextInput 
          placeholder='Ex: João' 
          value={nome} 
          onChangeText={setNome} 
          style={styles.input} 
        />
        
        <TouchableOpacity onPress={alertaNome} style={styles.button}>
          {}
          <Text style={styles.textoBotao}>Clique</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 18,
    color: '#2C3E50',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADDE1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#4A6CF7',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#4A6CF7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
