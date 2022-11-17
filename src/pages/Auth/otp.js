import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions } from 'react-native'

// third-party
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../services/context';
import Button from '../../reusables/button';

import IonIcons from 'react-native-vector-icons/Ionicons'


function OtpValidation({ navigation }) {

    const [showPassword, setShowPassword] = useState(false)
    const { setAuthStatus } = useContext(AuthContext)

    return (
        <View style={styles.container}>
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

                }}>We have sent a code to <Text style={{ fontWeight: 'bold' }}>8610100498,</Text></Text>
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
            </View>
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
})

export default OtpValidation