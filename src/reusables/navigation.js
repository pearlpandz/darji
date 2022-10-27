import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Navigation({ pageTitle }) {
  return (
    <View style={[styles.header]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ionicons name='menu-outline' size={24} />
        <View style={styles.logo}>
          <Text style={styles.logoTxt}>tailor shop</Text>
        </View>
      </View>
      <Ionicons name='notifications-outline' size={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    alignItems: 'center',
    marginLeft: 10
  },
  logoTxt: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize'
  }
});

export default Navigation