import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import MY_PANT from './../../assets/customization/pant/pant.png';

function MyPant({ config }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.selectedPant, styles.text, {opacity: config.pant ? 1 : 0}]}>{config.pant}</Text>
      <Text style={[styles.selectedRise, styles.text, {opacity: config.rise ? 1 : 0}]}>{config.rise} Rise - {config.pant}</Text>
      <View style={[styles.fastening, {opacity: config.fastening ? 1 : 0}]}>
        <View style={styles.circle} />
        <Text style={styles.selectedFastening}>{config.fastening}</Text>
      </View>
      <Image source={MY_PANT} style={styles.pant} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 250,
    alignItems: 'center',
    paddingTop: 50,
  },
  pant: {
    height: 250,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#fff',
    position: 'absolute',
    zIndex: 2
  },
  selectedPant: {
    bottom: 10,
  },
  selectedRise: {
    top: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 150,
    textAlign: 'center',
    paddingBottom: 5
  },
  fastening: {
    position: 'absolute',
    top: 50,
    zIndex: 2,
    left: 110
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
  },
  selectedFastening: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#fff',
    textAlign: 'center'
  }
})

export default MyPant