import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions } from 'react-native'

// third-party
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../services/context';
import Button from '../../reusables/button';

import IonIcons from 'react-native-vector-icons/Ionicons'


function OtpValidation({ route, navigation }) {
    const { mobileNumber, payload } = route.params;
    const [showPassword, setShowPassword] = useState(false)
    const [mobile, setMobileNumber] = useState(false)
    const { setAuthStatus } = useContext(AuthContext)

    // if payload?.provider is oauth then redirect to login page
    // if payload?.provider is facebook or google then call login api then allow to homepage

    return (
        <View style={styles.container}>
            {
                mobileNumber ?
                    <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            fontSize: 16,
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            marginBottom: 20
                        }}>enter 6-digit code</Text>
                        <Text style={{
                            color: '#585758',

                        }}>We have sent a code to <Text style={{ fontWeight: 'bold' }}>{mobileNumber},</Text></Text>
                        <Text style={{ marginTop: 5, color: '#585758', }}>Enter the code please.</Text>

                        <View style={{ alignItems: 'center', marginVertical: 25 }}>
                            <OTPInputView
                                style={{ width: '60%', height: 50 }}
                                pinCount={6}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                placeholderTextColor="red"
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>

                        <View style={[styles.btnContainer]}>
                            {/* <Button label='cancel' type='secondary' onPress={() => navigation.goBack()} width={150} /> */}
                            <Button label='verify' type='primary' onPress={async () => {
                                setAuthStatus(true);
                                await AsyncStorage.setItem('isAuthenticated', String(true));
                            }} />
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Button type='disabled' label="Resend code in 00:39" width={'auto'} />
                            <View style={{ marginVertical: 10 }} />
                            <Button type='primaryoutline' label="Resend Code" width={'auto'} />
                        </View>
                    </View> :
                    <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
                        {/* Mobile Number */}
                        <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                            <IonIcons style={styles.inputInsideIcon} name="call-outline" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile Number"
                                keyboardType='number-pad'
                                value={mobile}
                                onChangeText={(searchString) => { setMobileNumber(searchString) }}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button type='primary' label="get otp" width={120} />
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundColor: '#f1f3f4'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 15,
        width: Dimensions.get('screen').width - 20,
        // backgroundColor: '#f3f3f3',
    },
    borderStyleHighLighted: {
        borderColor: "#2b3a7c",
        borderBottomWidth: 2
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#000',
        fontWeight: 'bold'
    },
    underlineStyleHighLighted: {
        borderColor: "#2b3a7c",
        borderBottomWidth: 2
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#b9b9b9',
        borderRadius: 6
    },
    inputInsideIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 0,
        color: '#424242',
    },
})

export default OtpValidation