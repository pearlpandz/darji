import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, TextInput } from 'react-native'
import Button from '../../../reusables/button'

function Address({setAddress, setActionSheet}) {
    const [address, setCompleteAddress] = useState({})
    return (
        <View style={styles.container}>
            <Text style={styles.title}>enter complete address</Text>
            <View>
                <Text style={styles.label}>Complete Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="H. No, Street, City, State, Pincode"
                    multiline
                    numberOfLines={7}
                    value={address?.fullAddress}
                    onChangeText={(_address) => { setCompleteAddress({...address, fullAddress: _address}) }}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Floor (Optional)"
                    value={address?.floor}
                    onChangeText={(_floor) => { setCompleteAddress({...address, floor: _floor}) }}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nearby landmark (Optional)"
                    value={address?.landmark}
                    onChangeText={(_landmark) => { setCompleteAddress({...address, landmark: _landmark}) }}
                    underlineColorAndroid="transparent"
                />

                <Button type="primary" label="save address & next" onPress={() => {
                    setAddress(address);
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
        marginBottom: 10
    }
})

export default Address