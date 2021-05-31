import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImage from '../assets/erick2.jpeg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const localStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    };
    localStorageUserName();
  },[])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={userImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 40,
    color: colors.heading,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
