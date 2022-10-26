import React, { useState } from 'react'
import Checkbox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, ScrollView, KeyboardAvoidingView, Platform, KeyboardAwareScrollView } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

function AuthModal({ setActionSheet, navigation }) {

    const [showPassword, setShowPassword] = useState(false)
    const [isSelectedTerms, setSelectionTerms] = useState(false);
    const [isLoginPage, setPage] = useState(true);
    const [isForgetPassword, setForgetPassword] = useState(false);

    return (
        <ScrollView>
            <KeyboardAvoidingView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} style={{
                alignItems: 'flex-end', flex: 1, backgroundColor: '#fff',
                height: Dimensions.get('screen').height - 150,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
            }}>
                {
                    isLoginPage ?
                        (
                            // Login Modal
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: Dimensions.get('screen').height - 150 }}>
                                <View>
                                    <View style={styles.modalHeader}>
                                        <Pressable onPress={() => setActionSheet(false)}>
                                            <IonIcons name="close" size={20} style={{ marginRight: 10 }} />
                                        </Pressable>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>Login</Text>
                                        </View>
                                    </View>
                                    <View style={styles.modalBody}>
                                        {/* Login */}

                                        <Text style={styles.title}>login to your account</Text>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <Text style={{ marginRight: 5, color: '#707070', marginBottom: 10 }}>Don't have an account yet?</Text>
                                            <TouchableOpacity onPress={() => setPage(false)}><Text style={{ color: '#008efb', fontWeight: 'bold' }}>Register</Text></TouchableOpacity>
                                        </View>
                                        <View>
                                            <Pressable>
                                                <View style={styles.fbBtn}>
                                                    <IonIcons name="logo-facebook" color='#fff' size={20} style={{ marginRight: 10 }} />
                                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <Text style={{ color: '#fff' }}>Sign in with Facebook</Text>
                                                    </View>
                                                </View>
                                            </Pressable>
                                            <Pressable>
                                                <View style={styles.googleBtn}>
                                                    <IonIcons name="logo-google" color='#1f212a' size={20} style={{ marginRight: 10 }} />
                                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <Text style={{ color: '#1f212a' }}>Sign in with Google</Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <Text style={{ height: 1, width: '40%', backgroundColor: '#b9b9b9' }}></Text>
                                                    <Text style={{ color: '#bdbebe', textTransform: 'uppercase' }}>or</Text>
                                                    <Text style={{ height: 1, width: '40%', backgroundColor: '#b9b9b9' }}></Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                        <View>
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
                                                        name={showPassword ? 'eye-off' : 'eye'}
                                                        size={18}
                                                        color={showPassword ? '#000' : '#b9b9b9'} />
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity onPress={() => { setActionSheet(false); navigation.navigate('Common', { screen: 'forgetpassword' }) }}>
                                                <Text style={{ textTransform: 'capitalize', textAlign: 'right', marginVertical: 15, color: '#008efb' }}>forget your password?</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.modalFooter]}>
                                    <View style={[styles.boxWithShadow, styles.btnContainer]}>
                                        <Pressable onPress={() => setActionSheet(false)}>
                                            <Text style={[{ textDecorationLine: 'underline', textTransform: 'capitalize' }]}>cancel</Text>
                                        </Pressable>
                                        <TouchableOpacity>
                                            <Text style={[styles.submitBtn]}>login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            // Register Modal
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: Dimensions.get('screen').height - 150 }}>
                                <View>
                                    <View style={styles.modalHeader}>
                                        <Pressable onPress={() => setActionSheet(false)}>
                                            <IonIcons name="close" size={20} style={{ marginRight: 10 }} />
                                        </Pressable>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>register</Text>
                                        </View>
                                    </View>
                                    <View style={styles.modalBody}>
                                        {/* Login */}

                                        <Text style={styles.title}>register new account</Text>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <Text style={{ marginRight: 5, color: '#707070', marginBottom: 10 }}>Already have an account?</Text>
                                            <TouchableOpacity onPress={() => setPage(true)}><Text style={{ color: '#008efb', fontWeight: 'bold', textTransform: 'capitalize' }}>login</Text></TouchableOpacity>
                                        </View>
                                        <View>
                                            <Pressable>
                                                <View style={styles.fbBtn}>
                                                    <IonIcons name="logo-facebook" color='#fff' size={20} style={{ marginRight: 10 }} />
                                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <Text style={{ color: '#fff' }}>Sign in with Facebook</Text>
                                                    </View>
                                                </View>
                                            </Pressable>
                                            <Pressable>
                                                <View style={styles.googleBtn}>
                                                    <IonIcons name="logo-google" color='#1f212a' size={20} style={{ marginRight: 10 }} />
                                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <Text style={{ color: '#1f212a' }}>Sign in with Google</Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <Text style={{ height: 1, width: '40%', backgroundColor: '#b9b9b9' }}></Text>
                                                    <Text style={{ color: '#bdbebe', textTransform: 'uppercase' }}>or</Text>
                                                    <Text style={{ height: 1, width: '40%', backgroundColor: '#b9b9b9' }}></Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                        <View>
                                            {/* Full Name */}
                                            <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                                                <IonIcons style={styles.inputInsideIcon} name="person-outline" size={18} color='#b9b9b9' />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Full Name"
                                                    keyboardType='number-pad'
                                                    // value={query}
                                                    // onChangeText={(searchString) => { setQuery(searchString) }}
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>

                                            {/* Mobile Number */}
                                            <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                                                <IonIcons style={styles.inputInsideIcon} name="call-outline" size={18} color='#b9b9b9' />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Mobile Number"
                                                    keyboardType='number-pad'
                                                    // value={query}
                                                    // onChangeText={(searchString) => { setQuery(searchString) }}
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>

                                            {/* Email */}
                                            <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                                                <IonIcons style={styles.inputInsideIcon} name="mail-outline" size={18} color='#b9b9b9' />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Email"
                                                    keyboardType='number-pad'
                                                    // value={query}
                                                    // onChangeText={(searchString) => { setQuery(searchString) }}
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>

                                            {/* Usertype */}
                                            <View style={[styles.inputContainer, { marginBottom: 15 }]}>
                                                <IonIcons style={styles.inputInsideIcon} name="ios-briefcase-outline" size={18} color='#b9b9b9' />
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="User Type"
                                                    keyboardType='number-pad'
                                                    // value={query}
                                                    // onChangeText={(searchString) => { setQuery(searchString) }}
                                                    underlineColorAndroid="transparent"
                                                />
                                            </View>

                                            {/* Password */}
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
                                                <Text style={styles.label}>I agree to the trems and conditions</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.modalFooter]}>
                                    <View style={[styles.boxWithShadow, styles.btnContainer]}>
                                        <Pressable onPress={() => setActionSheet(false)}>
                                            <Text style={[{ textDecorationLine: 'underline', textTransform: 'capitalize' }]}>cancel</Text>
                                        </Pressable>
                                        <TouchableOpacity>
                                            <Text style={[styles.submitBtn]}>register</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                }
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        marginBottom: 10
    },
    fbBtn: {
        backgroundColor: '#495993',
        borderRadius: 6,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#b9b9b9',
        borderWidth: 1
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
        paddingHorizontal: 7,
        paddingRight: 10,
        paddingLeft: 0,
        color: '#424242',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
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
        marginVertical: 15
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        marginVertical: 8,
    },
})

export default AuthModal