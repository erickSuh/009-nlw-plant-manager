import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Button } from '../components/Button';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export const Welcome: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Text>
      <Image source={wateringImg} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title=">" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});