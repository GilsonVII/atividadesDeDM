import React from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const img1 = require('./assets/img1.png');
const img2 = require('./assets/img2.png');
const img3 = require('./assets/img3.png');
const img4 = require('./assets/img4.png');
const img5 = require('./assets/img5.png');
const img6 = require('./assets/img6.png');

export default function App() {
  const imagens = [img1, img2, img3, img4, img5, img6];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>  
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.titulo}>Estágios de um estudante no Semestre</Text>
          {imagens.map((img, index) => (
            <Image key={index} source={img} style={styles.imagem} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30, 
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15, 
  }
});
