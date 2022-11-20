import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, TextInput } from 'react-native'
import Button from '../../../reusables/button'

function ValidatePinCode({pin, setPin, setActionSheet}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>enter your pincode</Text>
            <View>
                <Text style={styles.label}>pincode</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your PIN Code"
                    value={pin}
                    onChangeText={(_pin) => { setPin(_pin) }}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    keyboardType='number-pad'
                />
                <Button type="primary" label="validate" onPress={() => {
                    console.log('validatting....')
                    setActionSheet(false);
                }} />
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