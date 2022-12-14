import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shirt from '../../../reusables/customization/shirt';
import AttributeView from './attributeView';
import Button from '../../../reusables/button';

import Cloth from './../../../assets/images/cloth.jpg';
import { useSelector } from 'react-redux';

function FinalQuote({navigation, route}) {
    const orders = useSelector(state => state.orders);
    const { 
        measurements, 
        cloth_id, cloth_length, cloth_total_price, cloth, cloth_pickuplocation, cloth_couriered,
        measurementAddress, 
        deliveryAddress 
    } = orders;
    const config = { ...measurements };
    const {name: cloth_name} = cloth;

    const paymentInitiate = () => {
        console.log('initiate payment gateway');
        console.log('once payment done, create order and update orderReferenceImage for the orderId');

        navigation.reset({
            index: 0,
            routes: [{
                name: 'cart'
            }]
        })
        navigation.navigate('cart')
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 20, backgroundColor: '#87BCBF'}}>
                    <View style={[styles.horizontalAlign]}>
                        <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Final Quote</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Shirt config={config} />
                </View>

                <View style={styles.detailContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Stitching Price</Text>
                        <Text style={styles.value}>1000</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Fabric Charges</Text>
                        <Text style={styles.value}>100</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Customisation Cost</Text>
                        <Text style={styles.value}>00</Text>
                    </View>
                    <View style={[styles.hr, styles.row]} />
                    <View style={styles.row}>
                        <Text style={styles.label}>Total</Text>
                        <Text style={[styles.value, styles.active]}>1100</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Payment Advance Min 60%</Text>
                        <Text style={[styles.value, styles.active]}>700</Text>
                    </View>
                    <View style={[styles.hr, styles.row]} />
                    <View style={styles.row}>
                        <View>
                        <Text style={styles.label}>Address</Text>
                        <Text>{deliveryAddress}</Text>
                        </View>
                        <Button type="primaryoutline" label="edit" width={100} onPress={() => navigation.goBack()} />
                    </View>
                    {/* <View style={styles.row}>
                        <Text style={{fontWeight: '500'}}>{cloth_name}</Text>
                    </View> */}
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => paymentInitiate()}>
                            <Text style={styles.btnLabel}>place order</Text>
                            <Text style={styles.btnInfo}>(payment advance min 60% - Rs.700)</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    horizontalAlign: {
        flexDirection: 'row',
        padding: 15,
    },
    detailContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    label: {
        color: '#7D8184',
        textTransform: 'capitalize',
        fontSize: 16
    },
    value: {
        color: '#324755',
        fontWeight: '500',
        fontSize: 18
    },
    active: {
        color: '#E8875C'
    },
    hr: {
        height: 1,
        width: '100%',
        backgroundColor: '#d0d0d0'
    },
    btn: {
        backgroundColor: '#E8875C',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10
    },
    btnLabel: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btnInfo: {
        color: '#fff',
        textTransform: 'capitalize'
    }
})

export default FinalQuote