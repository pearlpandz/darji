import React from 'react';
import { View, Text, TouchableOpacity, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Button from '../../../reusables/button';

function ForgetPassword({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                {/* <View style={styles.modalHeader}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <IonIcons name="arrow-back" size={20} style={{ marginRight: 10 }} />
                    </Pressable>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>forget password</Text>
                    </View>
                </View> */}
                <View style={styles.modalBody}>
                    {/* Login */}
                    <Text style={styles.title}>forget password?</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <Text style={{ marginRight: 5, color: '#707070', marginBottom: 10 }}>Do you remember your password?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={{ color: '#008efb', fontWeight: 'bold' }}>Login</Text></TouchableOpacity>
                    </View>
 
                    <View>
                        <View style={[styles.inputContainer, { marginBottom: 0 }]}>
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
                    </View>
                </View>
            </View>
            <View style={[styles.modalFooter]}>
                <View style={[styles.boxWithShadow, styles.btnContainer]}>
                    {/* <Button label="cancel" type="secondary" onPress={() => navigation.goBack()} width={150} /> */}
                    <Button label="send" type="primary" onPress={() => navigation.navigate('otp')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        // justifyContent: 'space-between', 
        backgroundColor: '#f1f3f4' 
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
        // marginTop: 20,
        padding: 15,
        width: Dimensions.get('screen').width,
        // backgroundColor: '#f6f6f6'
    },
})

export default ForgetPassword