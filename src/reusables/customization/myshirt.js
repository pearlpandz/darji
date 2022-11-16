import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import SHIRT_BODY from './../../assets/customization/shirt/shirt-body.png';
import LEFT_HAND from './../../assets/customization/shirt/left-hand.png';
import RIGHT_HAND from './../../assets/customization/shirt/right-hand.png';
import HALF_LEFT_HAND from './../../assets/customization/shirt/left-half-hand.png';
import HALF_RIGHT_HAND from './../../assets/customization/shirt/right-half-hand.png';
import COLLOR from './../../assets/customization/shirt/collar.png';
import POCKET from './../../assets/customization/shirt/pocket.png';
function MyShirt({ config }) {
  return (
    <View style={styles.container}>
      <>
        <Text style={[styles.selectedColor, styles.text, { opacity: config.collor ? 1 : 0 }]}>{config.collor}</Text>
        <Image source={COLLOR} style={[styles.collor, { opacity: config.collor ? 1 : 0 }]} />
      </>
      <Image source={SHIRT_BODY} style={styles.body} />
      <>
        <Text style={[styles.selectedPocket, styles.text, { opacity: config.pocket ? config.pocket === 'no pocket' ? 0  : 1 : 0 } ]}>{config.pocket}</Text>
        <Image source={POCKET} style={[styles.pocket, { opacity: config.pocket ? config.pocket === 'no pocket' ? 0  : 1 : 0 }]} />
      </>
      <>
        <Image source={config.sleeve === 'full hand' ? LEFT_HAND : HALF_LEFT_HAND} style={[config.sleeve === 'full hand' ? styles.leftHand : styles.leftHalfHand, { opacity: config.sleeve ? 1 : 0 }]} />
        <Image source={config.sleeve === 'full hand' ? RIGHT_HAND : HALF_RIGHT_HAND} style={[config.sleeve === 'full hand' ? styles.rightHand : styles.rightHalfHand, { opacity: config.sleeve ? 1 : 0 }]} />
        <Text style={[styles.selectedHand, styles.text, { opacity: config.sleeve ? 1 : 0 }]}>{config.sleeve}</Text>
      </>
      <Text style={[styles.selectedCuff, styles.text, { opacity: config.sleeve === 'full hand' ? config.cuff ? 1 : 0 : 0 }]}>{config.cuff}</Text>
      <Text style={[styles.selectedCuffStyle, styles.text, { opacity: config.sleeve === 'full hand' ? config.cuffStyle ? 1 : 0 : 0 }]}>{config.cuffStyle}</Text>
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
  selectedColor: {
    position: 'absolute',
    top: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  hr: {
    height: 1,
    width: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 22,
  },
  collor: {
    width: 65,
    height: 45,
    position: 'absolute',
    top: 30
  },
  body: {
    height: 225,
    width: 145
  },
  selectedCuff: {
    position: 'absolute',
    left: -35,
    bottom: 80,
    transform: [{ rotate: '-70deg' }]
  },
  selectedCuffStyle: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    transform: [{ rotate: '-70deg' }]
  },
  leftHand: {
    height: 150,
    width: 60,
    position: 'absolute',
    left: 7,
    top: 65
  },
  leftHalfHand: {
    height: 75,
    width: 39,
    position: 'absolute',
    left: 28,
    top: 65,
    transform: [{ rotate: '-3deg' }]
  },
  selectedHand: {
    position: 'absolute',
    right: 0,
    top: 100,
    transform: [{ rotate: '270deg' }]
  },
  rightHand: {
    height: 150,
    width: 60,
    position: 'absolute',
    right: 7,
    top: 65
  },
  rightHalfHand: {
    height: 75,
    width: 39,
    position: 'absolute',
    right: 28,
    top: 65,
    transform: [{ rotate: '4deg' }]
  },
  selectedPocket: {
    position: 'absolute',
    right: 110,
    top: 85
  },
  pocket: {
    width: 21,
    height: 23,
    position: 'absolute',
    right: 85,
    top: 85,
  }
})

export default MyShirt