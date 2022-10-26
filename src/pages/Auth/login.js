import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Button from '../../reusables/button';

import { AuthContext } from '../../services/context';

function Login({navigation}) {

    const [showPassword, setShowPassword] = useState(false)
    const { setAuthStatus } = useContext(AuthContext)

    return (
        <View style={[styles.container]}>
            <View>
                <View style={styles.modalBody}>
                    {/* Login Form */}
                    <View style={{ marginTop: 10 }}>
                        <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                            <IonIcons style={styles.inputInsideIcon} name="call" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile Number"
                                keyboardType='number-pad'
                                // value={query}
                                // onChangeText={(searchString) => { setQuery(searchString) }}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <IonIcons style={styles.inputInsideIcon} name="key" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                // value={"hellow"}
                                // value={query}
                                // onChangeText={(searchString) => { setQuery(searchString) }}
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <IonIcons
                                    style={styles.inputInsideIcon}
                                    name={showPassword ? 'eye' : 'eye-off'}
                                    size={18}
                                    color={showPassword ? '#000' : '#b9b9b9'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Button label='sign in' type='primary' onPress={async () => {
                                setAuthStatus(true);
                                // await AsyncStorage.setItem('isAuthenticated', true.toString());
                                setTimeout(() => {
                                    navigation.navigate('Welcome', { screen: 'intro'});
                                }, 1000);
                            }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('forgetpassword')}>
                            <Text style={{ textTransform: 'capitalize', textAlign: 'right', marginVertical: 15, color: '#e8875b' }}>forget your password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* separator */}
                    <View style={{ marginVertical: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text>or sign in with</Text>
                    </View>

                    {/* social login */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.googleBtn}>
                            <Pressable onPress={() => navigation.navigate('otp')}>
                                <IonIcons name="logo-google" color='#1f212a' size={20} style={{ marginRight: 10 }} />
                            </Pressable>
                        </View>
                        <View style={styles.fbBtn}>
                            <Pressable onPress={() => navigation.navigate('otp')}>
                                <IonIcons name="logo-facebook" color='#fff' size={20} style={{ marginRight: 10 }} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    modalHeader: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 50
    },
    modalBody: {
        padding: 15,
        paddingBottom: 0
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 20
    },
    fbBtn: {
        backgroundColor: '#495993',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginRight: 0,
        width: (Dimensions.get('screen').width - 30) / 2
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderColor: '#b9b9b9',
        borderWidth: 1,
        marginRight: 15,
        width: (Dimensions.get('screen').width - 60) / 2
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
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        padding: 15,
        width: Dimensions.get('screen').width,
        // backgroundColor: '#f6f6f6'
    },
    submitBtn: {
        textTransform: 'capitalize',
        backgroundColor: '#0c5190',
        width: 150,
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 6,
        color: '#fff',
        fontWeight: 'bold'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginVertical: 15
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        marginVertical: 8,
    },
})

export default Login