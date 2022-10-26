import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, ScrollView } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Button from '../../reusables/button';

function Register({ navigation }) {

    const [showPassword, setShowPassword] = useState(false)
    const [isSelectedTerms, setSelectionTerms] = useState(false);

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
                            <Text style={styles.label}>I agree to be contacted by Darji, other terms and conditions and etc.,</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Button label='sign up' type='primary' onPress={() => navigation.navigate('otp')} />
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