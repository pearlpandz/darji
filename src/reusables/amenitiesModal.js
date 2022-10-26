import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Dimensions, ScrollView, KeyboardAvoidingView, Platform, KeyboardAwareScrollView } from 'react-native'
import Button from './button';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { AMENITIES } from '../constants/amenities';

function AmenitiesModal({ setActionSheet }) {

    const [selectedAmenities, setSelected] = useState([])

    return (
        <ScrollView>
            <KeyboardAvoidingView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} style={{
                alignItems: 'flex-end', flex: 1, backgroundColor: '#fff',
                height: Dimensions.get('screen').height - 150,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
            }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: Dimensions.get('screen').height - 150 }}>
                    <View style={{ height: Dimensions.get('screen').height - 220 }}>
                        <View style={styles.modalHeader}>
                            <Pressable onPress={() => setActionSheet(false)}>
                                <MCIcons name="keyboard-backspace" size={20} style={{ marginRight: 10 }} onPress={() => setActionSheet(false)} />
                            </Pressable>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>amenities</Text>
                            </View>
                        </View>
                        <View style={[styles.modalBody, { flex: 1 }]}>
                            <ScrollView>
                                {
                                    AMENITIES.map((item, index) => (
                                        <Pressable key={index} onPress={() => {
                                            const index = selectedAmenities.findIndex(a => a === item);
                                            if (index > -1) {
                                                selectedAmenities.splice(index, 1)
                                                setSelected([...selectedAmenities])
                                            } else {
                                                setSelected([...selectedAmenities, item])
                                            }
                                        }}>
                                            <View style={styles.item}>
                                                <Text style={styles.itemStr}>{item}</Text>
                                                {
                                                    selectedAmenities?.find(a => a === item) &&
                                                    <IonIcons name="checkmark" size={16} style={{ marginRight: 10 }} />
                                                }
                                            </View>
                                        </Pressable>
                                    ))
                                }
                            </ScrollView>

                        </View>
                    </View>

                    <View style={[styles.modalFooter, styles.btnContainer]}>
                        <Button label='cancel' type='secondary' onPress={() => setActionSheet(false)} />
                        <Button label='update' type='primary' onPress={() => setActionSheet(false)} />
                    </View>
                </View>
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
        paddingBottom: 0,
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
    item: {
        paddingVertical: 11,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemStr: {
        textTransform: 'capitalize',
        color: '#535353'

    }
})

export default AmenitiesModal