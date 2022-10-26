import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Navigation({ pageTitle }) {
  return (
    <View style={[styles.header]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilepic}>
          <Image
            style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
            source={{ uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/google_pay__7__1200x768.jpeg' }} />
        </View>
        <View>
          <Text style={styles.logo}>Hi, Muthupandi!</Text>
          <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>good morning</Text>
        </View>
      </View>
      {/* <View>
        <Ionicons name="menu-outline" size={24} color="#202021" />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#049fa6'
  },
  profilepic: {
    width: 37,
    height: 37,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#049fa6',
    marginRight: 10
  }
});

export default Navigation