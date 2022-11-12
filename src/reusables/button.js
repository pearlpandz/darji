import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

function Button({ type, label, onPress, width, disabled }) {
    return (
        <TouchableOpacity style={[type ? styles[type] : styles.secondary, {width: width ? width : '100%'}] } onPress={onPress} disabled={disabled}>
            <Text style={type ? styles[type+'Label'] : styles.secondaryLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#e8875b',
        alignItems: 'center',
        // width: 150,
        paddingVertical: 14,
        borderRadius: 6
    },
    primaryLabel: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    },
    primaryoutline: {
        borderColor: '#e8875b',
        borderWidth: 1,
        padding: 12,
        borderRadius: 10
    },
    primaryoutlineLabel: {
        color: '#e8875b',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    secondary: {

    },
    secondaryLabel: {
        textTransform: 'capitalize',
        textDecorationLine: 'underline'
    },
    disabled: {
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 6
    },
    disabledLabel: {
        color: '#d0d0d0',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default Button