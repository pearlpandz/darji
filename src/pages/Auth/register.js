import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, ScrollView, ToastAndroid, LogBox, Platform, AlertIOS, Alert } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Button from '../../reusables/button';
import axios from 'axios';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { HOST } from '../../../env';

const ANDROID_CLIENT_ID = "280676335640-s4fv6lmjr0tqlb81thts0lnmct5d9ig6.apps.googleusercontent.com";
const IOS_CLIENT_ID = "280676335640-bmdv3027s2i362t30arsd17s0k40o9b0.apps.googleusercontent.com";
LogBox.ignoreLogs(['new NativeEventEmitter']);

function Register({ navigation }) {

    const [showPassword, setShowPassword] = useState(false)
    const [isSelectedTerms, setSelectionTerms] = useState(false);
    const [formdata, setFormdata] = useState({
        name: { value: '', isValid: false },
        // mobileNumber: { value: '', isValid: false },
        password: { value: '', isValid: false },
        email: { value: '', isValid: false },
    })

    const reset = () => {
        setFormdata({
            name: { value: '', isValid: false },
            // mobileNumber: { value: '', isValid: false },
            password: { value: '', isValid: false },
            email: { value: '', isValid: false },
        });
        setSelectionTerms(false);
        setShowPassword(false);
    }

    const handleChange = (field, value) => {
        const _formdata = { ...formdata };
        _formdata[field].value = value;
        if (value) {
            _formdata[field].isValid = true;
        } else {
            _formdata[field].isValid = false;
        }
        setFormdata({ ..._formdata })
    }

    const handleSubmit = async () => {
        try {
            const payload = {
                name: formdata.name.value,
                // mobileNumber: formdata.mobileNumber.value,
                password: formdata.password.value,
                email: formdata.email.value
            };
            const url = `${HOST}/api/register`;
            const { data } = await axios.post(url, payload);
            if (data) {
                console.log('data', data);
                navigation.navigate('otp', { payload: data, provider: 'oauth' });
                reset();
            }
        } catch (error) {
            const msg = error?.response?.data ? Object.values(error.response.data.error).map(a => a.toString()).join(', ') : 'Something went wrong!';
            if (Platform.OS === 'android') {
                Alert.alert('Warning', msg);
            } else {
                AlertIOS.alert(msg);
            }
        }

    }

    const isFormValid = () => {
        return Object.keys(formdata).every(a => formdata[a].isValid);
    }

    const socialRegister = async (payload) => {
        try {
            const url = `${HOST}/api/register`;
            const { data } = await axios.post(url, payload)
            if (data) {
                console.log(data);
                navigation.navigate('otp', { mobileNumber: null, payload: data });
            }
        } catch (error) {
            console.log(JSON.stringify(error.response.data));
            const msg = Object.values(error.response.data.error).map(a => a.toString()).join(', ') || 'Something went wrong!';
            if (Platform.OS === 'android') {
                Alert.alert('Warning', msg);
            } else {
                AlertIOS.alert(msg);
            }
        }
    }

    const registerByGoogle = (user) => {
        const { name, email } = user;
        const payload = { name, email, provider: 'google' };
        socialRegister(payload);
    };

    const registerByFacebook = (result) => {
        const { name, email } = result;
        const payload = { name, email, provider: 'facebook' };
        socialRegister(payload);
    }

    const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name,  first_name, last_name, email',
            },
        };
        const profileRequest = new GraphRequest(
            '/me',
            { token, parameters: PROFILE_REQUEST_PARAMS },
            (error, result) => {
                if (error) {
                    console.log('login info has error: ' + JSON.stringify(error));
                } else {
                    registerByFacebook(result);
                }
            },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.modalBody}>
                    {/* Register */}
                    <View style={{ marginTop: 10 }}>
                        {/* Full Name */}
                        <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                            <IonIcons style={styles.inputInsideIcon} name="person-outline" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                value={formdata.name.value || ''}
                                onChangeText={(searchString) => { handleChange('name', searchString) }}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Email */}
                        <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                            <IonIcons style={styles.inputInsideIcon} name="mail-outline" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                keyboardType='email-address'
                                value={formdata.email.value || ''}
                                onChangeText={(searchString) => { handleChange('email', searchString) }}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Mobile Number */}
                        {/* <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                            <IonIcons style={styles.inputInsideIcon} name="call-outline" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile Number"
                                keyboardType='number-pad'
                                value={formdata.mobileNumber.value}
                                onChangeText={(searchString) => { handleChange('mobileNumber', searchString) }}
                                underlineColorAndroid="transparent"
                            />
                        </View> */}

                        {/* Password */}
                        <View style={styles.inputContainer}>
                            <IonIcons style={styles.inputInsideIcon} name="key" size={18} color='#b9b9b9' />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                value={formdata.password.value | ''}
                                onChangeText={(searchString) => { handleChange('password', searchString) }}
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <IonIcons
                                    style={styles.inputInsideIcon}
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    size={18}
                                    color={showPassword ? '#000' : '#b9b9b9'} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.checkboxContainer, { marginBottom: 0 }]}>
                            <Checkbox
                                value={isSelectedTerms}
                                onValueChange={setSelectionTerms}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>I agree to be contacted by Darji, other terms and conditions and etc.,</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Button label='sign up' type='primary' onPress={handleSubmit} disabled={!isFormValid()} />
                    </View>

                    {/* separator */}
                    <View style={{ marginVertical: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text>or sign up with</Text>
                    </View>

                    {/* social login */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.googleBtn}>
                            <Pressable onPress={() => {
                                GoogleSignin.configure({
                                    androidClientId: ANDROID_CLIENT_ID,
                                    iosClientId: IOS_CLIENT_ID,
                                });
                                GoogleSignin.hasPlayServices().then((hasPlayService) => {
                                    if (hasPlayService) {
                                        GoogleSignin.signIn().then(({ user }) => {
                                            registerByGoogle(user)
                                        }).catch((e) => {
                                            console.log("ERROR IS: " + JSON.stringify(e));
                                        })
                                    }
                                }).catch((e) => {
                                    console.log("ERROR IS: " + JSON.stringify(e));
                                })
                                // navigation.navigate('otp')
                            }}>
                                <IonIcons name="logo-google" color='#1f212a' size={20} style={{ marginRight: 10 }} />
                            </Pressable>
                        </View>
                        <View style={styles.fbBtn}>
                            <Pressable onPress={() => {
                                LoginManager.logInWithPermissions(['public_profile', 'email']).then(
                                    login => {
                                        if (login.isCancelled) {
                                            console.log('Login cancelled');
                                        } else {
                                            AccessToken.getCurrentAccessToken().then(data => {
                                                const accessToken = data.accessToken.toString();
                                                getInfoFromToken(accessToken);
                                            });
                                        }
                                    },
                                    error => {
                                        console.log('Login fail with error: ' + error);
                                    },
                                );
                                // navigation.navigate('otp')
                            }}>
                                <IonIcons name="logo-facebook" color='#fff' size={20} style={{ marginRight: 10 }} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
        padding: 15
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        padding: 15,
        width: Dimensions.get('screen').width,
        backgroundColor: '#f6f6f6'
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
        marginVertical: 15,
        paddingRight: 5,
        alignItems: 'flex-start'
    },
    checkbox: {
        // alignSelf: 'center',
    },
    label: {
        marginVertical: 2,
        paddingRight: 20,
        lineHeight: 20
    },
})

export default Register