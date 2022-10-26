import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'

function InputPassword({ value, onChangeText, placeholder }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.inputContainer}>
            <IonIcons style={styles.inputInsideIcon} name="key" size={18} color='#b9b9b9' />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={onChangeText}
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
    )
}

const styles = StyleSheet.create({
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
})

export default InputPassword;