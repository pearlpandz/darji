import React, { useState, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions, TouchableOpacity, Alert, AlertIOS, ToastAndroid, } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import ValidatePinCode from './validatePincode';
import BottomBG from './../../../assets/images/bottom-bg-2.png';
import Icon4 from './../../../assets/icons/icon-4.png';
import Icon5 from './../../../assets/icons/icon-5.png';
import Address from './address';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../../redux/slices/order';

import Banner from './../../../assets/images/measurement-banner.png';

function SelectMeasurement() {
  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  const [actionSheet, setActionSheet] = useState(false);
  const [collectMeasureActionSheet, setMeasureActionSheet] = useState(false);
  const [pin, setPin] = useState();

  const updateMeasurementAddress = async (address) => {
    try {
      const payload = {
        measurementAddress: address
      };
      dispatch(updateOrder(payload));
      navigation.navigate('Common', { screen: 'clothcategory' });
    } catch (error) {
      console.log(error);
      const msg = Object.values(error.response.data).map(a => a.toString()).join(', ') || 'Something went wrong!';
      if (Platform.OS === 'android') {
        Alert.alert('Warning', msg);
      } else {
        AlertIOS.alert(msg);
      }
    }
  }

  const CollectMeasuremntAddressModal = useMemo(() => (
    <Modal
      isVisible={collectMeasureActionSheet}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <View>
        <Address setActionSheet={setMeasureActionSheet} setAddress={(address) => {
          const _address = `${address.fullAddress}${address.floor ? ', ' + address.floor : ''}${address.landmark ? ', ' + address.landmark : ''}`;
          console.log(_address);
          updateMeasurementAddress(_address);
        }} />
      </View>
    </Modal>
  ), [collectMeasureActionSheet])


  const ActionSheetModal = useMemo(() => (
    <Modal
      isVisible={actionSheet}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <View>
        <ValidatePinCode setActionSheet={(bool) => {
          setActionSheet(bool);
          setPin();
        }} setPin={setPin} pin={pin} />
      </View>
    </Modal>
  ), [actionSheet, pin])

  return (
    <ScrollView style={{ color: '#fff' }}>
      <View style={{ position: 'relative'}}>
        <View style={styles.imgContainer}>
          <Image source={Banner} style={{flex: 1}} />
        </View>
        <View style={[styles.designs, styles.boxWithShadow, {padding: 20, }]}>
          <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
            <View style={styles.desginView}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.iconContainer}>
                  <Image source={Icon4} style={{ flex: 1 }} resizeMode="contain" />
                </View>
                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('Common', { screen: 'measurement' })
                  }}>
                    <Text style={styles.link}>Submit Measurement Online Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.btnLabel}>learn how to measure yourself</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color='#e8875b' />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
            <View style={[styles.desginView]}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.iconContainer}>
                  <Image source={Icon5} style={{ flex: 1 }} resizeMode="contain" />
                </View>
                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                  <TouchableOpacity onPress={() => {
                    setMeasureActionSheet(true);
                  }}>
                    <Text style={styles.link}>Collect Measurements at Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnView} onPress={() => setActionSheet(true)}>
                    <Text style={styles.btnLabel}>check your pincode is eligible</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color='#e8875b' />
            </View>
          </View>
          <View style={{ alignItems: 'flex-end', height: 48 }}>
            <Image style={{ flex: 1, width: '100%' }} source={BottomBG} resizeMode="cover" />
          </View>
        </View>
      </View>
      {ActionSheetModal}
      {CollectMeasuremntAddressModal}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#213c42',
    padding: 20,
    paddingBottom: 50
  },
  title: {
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 20,
    fontWeight: '500'
  },
  images: {
    marginBottom: 20,
    position: 'relative',
    height: 200
  },
  imgCount: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    zIndex: 10000,
    backgroundColor: '#fff',
    color: '#D97D54',
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30,
    textAlign: 'center'
  },
  designs: {
    backgroundColor: '#fff',
    borderRadius: 15,
    position: 'relative',
    top: -20,
    overflow: 'hidden'
  },
  desginView: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  iconContainer: {
    backgroundColor: '#fff5e5',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 45,
    height: 45,
    alignItems: 'center'
  },
  btnView: {
    borderColor: '#E8875C',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
  btnLabel: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#E8875C',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500'
  },
  boxWithShadow: {
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15
  },
  link: { color: '#305F72', fontSize: 16 },
  imgContainer: {
    height: 250,
    flex: 1
  }
})

export default SelectMeasurement