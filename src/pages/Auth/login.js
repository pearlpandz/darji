import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, StatusBar, LogBox, ToastAndroid, Platform, AlertIOS, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Button from '../../reusables/button';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { AuthContext } from '../../services/context';
import axios from 'axios';

const ANDROID_CLIENT_ID = "280676335640-s4fv6lmjr0tqlb81thts0lnmct5d9ig6.apps.googleusercontent.com";
const IOS_CLIENT_ID = "280676335640-bmdv3027s2i362t30arsd17s0k40o9b0.apps.googleusercontent.com";
LogBox.ignoreLogs(['new NativeEventEmitter']);

function Login({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const { setAuthStatus } = useContext(AuthContext);


    const socialRegister = async (payload) => {
        try {
            const url = 'http://10.0.2.2:8000/api/register';
            const { data } = await axios.post(url, payload)
            if (data) {
                console.log(data);
                navigation.navigate('otp', { mobileNumber: null, payload });
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
        const payload = { name, email, provide: 'google' };
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
                                await AsyncStorage.setItem('isAuthenticated', String(true));
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
        width: (Dimensions.get('screen').width - 30) / 2,
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