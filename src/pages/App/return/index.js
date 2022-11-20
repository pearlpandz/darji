import React from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, ScrollView, SafeAreaView, Dimensions, Pressable } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../reusables/button'
function ReturnPage({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
      <ScrollView>
        <Pressable style={{padding: 20}} onPress={() => navigation.goBack()}>
          <IonIcon name='chevron-back' size={26} color="#fff" />
        </Pressable>
        <View style={{padding: 30, flexDirection: 'column', justifyContent: 'space-around', height: Dimensions.get('window').height - 180 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center'  }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', marginBottom: 10 }}>Return</Text>
            <View style={{ height: 1, width: 30, backgroundColor: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 10 }}>We Welcome you to return the product if you feel it is not up to the expectation</Text>
          </View>
          <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 25 }}>
            <View style={{marginBottom: 15}}>
              <Text style={styles.label}>Order ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Order ID"
                // value={pin}
                // onChangeText={(_pin) => { setPin(_pin) }}
                underlineColorAndroid="transparent"
              />
            </View>
            <View>
              <Text style={styles.label}>Mobile #</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile #"
                // value={pin}
                // onChangeText={(_pin) => { setPin(_pin) }}
                underlineColorAndroid="transparent"
                keyboardType='name-phone-pad'
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button type="secondary" label="validate" onPress={() => { }} width={150} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#334856',
    fontSize: 15, 
    fontWeight: '500',
    marginBottom: 10
  },
  input: {
    borderWidth: 1, 
    borderColor: '#E6E6E6',
    padding: 10,
    borderRadius: 12
  }
})

export default ReturnPage