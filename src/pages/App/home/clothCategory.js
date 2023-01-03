import React, { useState, useMemo } from 'react';
import { Image, View, ScrollView, StyleSheet, Text, Dimensions, Pressable, TouchableOpacity, Platform, Alert, AlertIOS } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Button from '../../../reusables/button';
import BottomBG from './../../../assets/images/bottom-bg.png';
import Icon10 from './../../../assets/icons/icon-10.png';
import Icon11 from './../../../assets/icons/icon-11.png';
import Icon12 from './../../../assets/icons/icon-12.png';
import BACKGROUND_BANNER from './../../../assets/images/cloth.jpg';
import Address from './address';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../../redux/slices/order';

function ClothCategory({ navigation }) {
    const dispatch = useDispatch();
    const [actionSheet, setActionSheet] = useState(false);
    const [courierSheet, setCourierSheet] = useState(false);


    const updateAddress = async (payload) => {
        try {
            dispatch(updateOrder(payload));
            navigation.navigate('summary')
        } catch (error) {
            console.error(error);
            const msg = Object.values(error.response.data).map(a => a.toString()).join(', ') || 'Something went wrong!';
            if (Platform.OS === 'android') {
                Alert.alert('Warning', msg);
            } else {
                AlertIOS.alert(msg);
            }
        }
    }

    const ActionSheetModal = useMemo(() => (
        <Modal
            isVisible={actionSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}>
            <View>
                <Address setActionSheet={setActionSheet} setAddress={(address) => {
                    const _address = `${address.fullAddress}${address.floor ? ', ' + address.floor : ''}${address.landmark ? ', ' + address.landmark : ''}`;
                    console.log(_address);
                    const payload = {
                        cloth_pickuplocation: _address
                    };
                    updateAddress(payload);
                }} />
            </View>
        </Modal>
    ), [actionSheet])

    const CourierActionSheetModal = useMemo(() => (
        <Modal
            isVisible={courierSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}>
            <View>
                <View style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}>
                    <Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 15 }}>Courier Address (Our Office Address)</Text>
                    <Text>3/235</Text>
                    <Text>test street,</Text>
                    <Text>area</Text>
                    <Text>district</Text>
                    <Text>state</Text>
                    <Text>PIN: 000 000</Text>
                    <View style={{ marginTop: 20 }}>
                        <Button type="primary" label="continue" onPress={() => {
                            const payload ={
                                cloth_couriered: true
                            }
                            updateAddress(payload);
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    ), [courierSheet])

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={{ flex: 1, width: '100%' }} source={BACKGROUND_BANNER} resizeMode="cover" />
            </View>
            {/* <View style={styles.titleCard}>
                <View style={styles.cardDetails}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: '500', color: '#fff', fontSize: 16 }}>Address:</Text>
                        <Text style={{ color: '#fff' }}>{address}</Text>
                    </View>
                    {pickupAddress.hasOwnProperty('fullAddress') && <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ fontWeight: '500', color: '#fff', fontSize: 16 }}>Cloth Pickup Address:</Text>
                        <Text style={{ color: '#fff' }}>{pickupAddress?.fullAddress}</Text>
                    </View>}
                </View>
            </View> */}
            <View style={{ paddingHorizontal: 20, position: 'relative' }}>
                <View style={styles.designs}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
                        <Pressable onPress={() => navigation.navigate('clothselection')}>
                            <View style={styles.desginView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.iconContainer}>
                                        <Image source={Icon10} style={{ flex: 1 }} resizeMode="contain" />
                                    </View>
                                    <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                        <Text style={styles.link}>shop for cloth</Text>
                                    </View>
                                </View>
                                <Ionicons name={"chevron-forward"} size={20} color='#e8875b' />
                            </View>
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={() => setActionSheet(true)}>
                        <View style={[styles.desginView, { borderBottomWidth: 1, borderColor: '#f1f3f4', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Icon11} style={{ flex: 1 }} resizeMode="contain" />
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                    <Text style={styles.link}>pickup my cloth</Text>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCourierSheet(true)}>
                        <View style={[styles.desginView]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Icon12} style={{ flex: 1 }} resizeMode="contain" />
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                    <Text style={styles.link}>courier my cloth</Text>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Image style={{ width: Dimensions.get('screen').width - 40, height: 90 }} source={BottomBG} resizeMode="cover" />
                    </View>
                </View>
            </View>
            {ActionSheetModal}
            {CourierActionSheetModal}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: Dimensions.get('window').height / 2
    },
    titleCard: {
        backgroundColor: '#404040',
        padding: 20,
        paddingBottom: 40
    },
    cardDetails: {
        width: '100%',
    },
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 15
    },
    hr: {
        height: 2,
        width: 100,
        backgroundColor: '#fff',
        marginVertical: 5
    },
    designs: {
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'relative',
        top: -20
    },
    desginView: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
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
    link: { color: '#305F72', fontSize: 16, textTransform: 'capitalize' }
});

export default ClothCategory