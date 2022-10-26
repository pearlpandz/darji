import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

function Button({ type, label, onPress, width }) {
    return (
        <TouchableOpacity style={[type ? styles[type] : styles.secondary, {width: width ? width : '100%'}] } onPress={onPress}>
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
        borderColor: '#2b3a7c',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 6
    },
    primaryoutlineLabel: {
        color: '#2b3a7c',
        fontWeight: 'bold'
    },
    secondary: {

    },
    secondaryLabel: {
        textTransform: 'capitalize',
        textDecorationLine: 'underline'
    },
    disabled: {
        // backgroundColor: '#f7f7f7',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 6
    },
    disabledLabel: {
        color: '#585858',
        textTransform: 'capitalize',
    }
})

export default Button