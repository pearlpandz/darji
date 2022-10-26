import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions } from 'react-native'
import Checkbox from '@react-native-community/checkbox';

import IonIcons from 'react-native-vector-icons/Ionicons'

function AddPhoneNumber({ setActionSheet, item, isEdit }) {

    const [mobileNumber, setMobileNumber] = useState();
    const [countryCode, setCountryCode] = useState();
    const [isCall, setCall] = useState(false);
    const [isWhatsapp, setWhatsapp] = useState(false);

    useEffect(() => {
        setMobileNumber(item?.mobileNumber);
        setCountryCode(item?.countryCode);
        setCall(item?.isCall);
        setWhatsapp(item?.isWhatsapp);
    }, [isEdit, item])


    return (
        <View>
            <View style={styles.modalHeader}>
                <Pressable onPress={() => setActionSheet(false)}>
                    <IonIcons name="close" size={20} style={{ marginRight: 10 }} />
                </Pressable>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>{isEdit ? 'edit' : 'add'} phone number</Text>
                </View>
            </View>
            <View style={styles.modalBody}>
                <Text style={styles.title}>phone number</Text>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType='default'
                        value={mobileNumber}
                        onChangeText={(searchString) => { setMobileNumber(searchString) }}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={[styles.formGroup, { justifyContent: 'space-between' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <IonIcons name={isCall ? 'call' : 'call-outline'} size={20} style={{ marginRight: 10 }} />
                        <Text style={{ textTransform: 'capitalize' }}>call</Text>
                    </View>
                    <Checkbox
                        value={isCall}
                        onValueChange={setCall}
                        style={styles.checkbox}
                    />
                </View>

                <View style={[styles.formGroup, { justifyContent: 'space-between', borderBottomWidth: 0, paddingBottom: 0 }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <IonIcons name={isWhatsapp ? 'md-logo-whatsapp' : 'logo-whatsapp'} size={20} style={{ marginRight: 10 }} />
                        <Text style={{ textTransform: 'capitalize' }}>whatsapp</Text>
                    </View>
                    <Checkbox
                        value={isWhatsapp}
                        onValueChange={setWhatsapp}
                        style={styles.checkbox}
                    />
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
        textTransform: 'capitalize',
        letterSpacing: 1,
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
    formGroup: {
        paddingVertical: 10,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#535353',
        textTransform: 'capitalize',
        width: 100,
        fontSize: 13
    },
    input: {
        flex: 1,
        paddingHorizontal: 7,
        paddingRight: 10,
        paddingLeft: 0,
        color: '#424242',
        fontSize: 13
    },
})

export default AddPhoneNumber