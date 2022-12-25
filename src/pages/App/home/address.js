import axios from 'axios'
import React, { useState, useMemo, useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, TextInput, Platform, Alert, AlertIOS } from 'react-native'
import { HOST } from '../../../../env'
import Button from '../../../reusables/button'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Address({ setAddress, setActionSheet }) {
    const [address, setCompleteAddress] = useState({})
    const [pincodes, setCodes] = useState([])

    const getCodes = async () => {
        try {
            const url = `${HOST}/api/pincodes`;
            const { data } = await axios.get(url, { withCredentials: true });
            if (data) {
                setCodes(data.map(a => a.pincode));
            }
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

    const isValid = useMemo(() => pincodes.includes(address.pin), [address.pin])

    useEffect(() => {
        getCodes();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>enter complete address</Text>
            <View>
                <Text style={styles.label}>Complete Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="H. No, Street, City, State, Pincode"
                    multiline
                    numberOfLines={7}
                    value={address?.fullAddress}
                    onChangeText={(_address) => { setCompleteAddress({ ...address, fullAddress: _address }) }}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your PIN Code"
                    value={address?.pin}
                    onChangeText={(_pin) => setCompleteAddress({ ...address, pin: _pin })}
                    underlineColorAndroid="transparent"
                    textAlignVertical="center"
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Floor (Optional)"
                    value={address?.floor}
                    onChangeText={(_floor) => { setCompleteAddress({ ...address, floor: _floor }) }}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nearby landmark (Optional)"
                    value={address?.landmark}
                    onChangeText={(_landmark) => { setCompleteAddress({ ...address, landmark: _landmark }) }}
                    underlineColorAndroid="transparent"
                />

                {address?.pin?.length === 6 &&
                    <>
                        {
                            !isValid ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="information-circle" size={20} color="red" />
                                    <Text style={{ color: 'red', marginBottom: 15, marginLeft: 5 }}>We are providing limited services, please contact our office to add your pincode +91-8610100498</Text>
                                </View> :
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="checkmark-circle" size={20} color="green" />
                                    <Text style={{ color: 'green', marginBottom: 15, marginLeft: 5 }}>Pin Code is valid</Text>
                                </View>
                        }
                    </>
                }


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button type="secondary" label="cancel" onPress={() => setActionSheet(false)} width='49%' />
                    <Button type="primary" label="save address & next" width='49%' disabled={!address.fullAddress} onPress={() => {
                        if (isValid) {
                            setAddress(address);
                            setActionSheet(false);
                        }
                    }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        marginBottom: 20,
        borderRadius: 12,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10
    }
})

export default Address