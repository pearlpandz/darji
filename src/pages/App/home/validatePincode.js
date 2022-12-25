import axios from 'axios'
import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, Dimensions, StyleSheet, TextInput, Alert, Platform, AlertIOS } from 'react-native'
import Button from '../../../reusables/button';
import { HOST } from '../../../../env';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ValidatePinCode({ pin, setPin, setActionSheet }) {

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

    const isValid = useMemo(() => pincodes.includes(pin), [pin])

    useEffect(() => {
        getCodes();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>enter your pincode</Text>
            <View>
                <Text style={styles.label}>pincode</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your PIN Code"
                    value={pin}
                    onChangeText={(_pin) => setPin(_pin)}
                    underlineColorAndroid="transparent"
                    textAlignVertical="center"
                    keyboardType='number-pad'
                />
                {pin?.length === 6 &&
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button type="secondary" label="cancel" onPress={() => setActionSheet(false)} width='49%' />
                    <Button type="primary" label="continue" width='49%' onPress={() => {
                        if (isValid) {
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
        marginBottom: 10,
        textTransform: 'capitalize'
    }
})

export default ValidatePinCode