import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      source={{ uri: 'https://vignette4.wikia.nocookie.net/naruto/images/5/53/Itachi_Using_Genjutsu.png/revision/latest?cb=20151217131016&path-prefix=id' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Seja Bem vindo ao Genjutsu!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'red', // Fundo semi-transparente para melhor contraste
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
