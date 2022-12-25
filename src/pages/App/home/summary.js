import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, Dimensions, TextInput, Platform, Alert, AlertIOS } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shirt from '../../../reusables/customization/shirt';
import AttributeView from './attributeView';
import Button from '../../../reusables/button';

import Cloth from './../../../assets/images/cloth.jpg';
import axios from 'axios';
import { HOST } from '../../../../env';

function Summary({ navigation, route }) {
    const { id, measurements, cloth_length, cloth_total_price, cloth_name, measurementAddress, cloth_pickuplocation, cloth_couriered } = route.params;
    const config = { ...measurements };
    const selectedCloth = {
        name: cloth_name,
        size: cloth_length,
        price: cloth_total_price
    };

    const [address, setAddress] = useState('');

    const updateDeliveryAddress = async (isDraft) => {
        try {
            const url = `${HOST}/api/updateOrder/${id}`;
            const payload = {
                deliveryAddress: address,
                orderStatus: isDraft ? 'draft' : 'complete',
                orderDeliveryStatus: 'pending',
                orderPaymentStatus: 'pending'
            }
            console.log(payload);
            const { data } = await axios.put(url, payload, { withCredentials: true })
            if (data) {
                console.log(data);
                if (!isDraft) {
                    navigation.navigate('finalquote', {
                        ...route.params
                    })
                } else {
                    console.log('redirect to orders list page');
                }
            }
        } catch (error) {
            console.log(error.response.data);
            const msg = Object.values(error.response.data).map(a => a.toString()).join(', ') || 'Something went wrong!';
            if (Platform.OS === 'android') {
                Alert.alert('Warning', msg);
            } else {
                AlertIOS.alert(msg);
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 20, backgroundColor: '#87BCBF' }}>
                    <View style={[styles.horizontalAlign]}>
                        <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Summary</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Shirt config={config} />
                </View>



                <View style={styles.detailContainer}>
                    {measurements ?
                        <>
                            <Text style={styles.title}>give measurements</Text>
                            <View style={styles.measurements}>
                                <View style={styles.measurement}><AttributeView label="Body Type" value={config.bodyType} /></View>
                                <View style={[styles.measurement, { marginRight: 0 }]}><AttributeView label="Shirt Size" value={config.shirtSize} /></View>
                                <View style={styles.measurement}><AttributeView label="Shoulder Type" value={config.shoulderType} /></View>
                                <View style={[styles.measurement, { marginRight: 0 }]}><AttributeView label="Height" value={config.height} /></View>
                                <View style={styles.measurement}><AttributeView label="Preferred Fit" value={config.fit} /></View>
                            </View>

                            <View>
                                <Text style={styles.label}>Notes / Instructions</Text>
                                <Text style={styles.value}>{config.notes}</Text>
                            </View>
                        </>
                        :
                        <View>
                            <Text>Measurements will collect from: <Text style={{ fontWeight: '500' }}>{measurementAddress}</Text></Text>
                        </View>
                    }
                </View>

                <View style={styles.titleCard}>
                    {
                        selectedCloth.name ?
                            <>
                                <View style={styles.iconContainer}>
                                    <Image source={Cloth} style={{ flex: 1, width: '100%' }} />
                                </View>
                                <View>
                                    <Text style={styles.clothName}>{selectedCloth.name}</Text>
                                    <View style={styles.hr} />
                                    <Text style={styles.price}>{selectedCloth.size} mtr ................. Rs.{selectedCloth.price}</Text>
                                </View>
                            </> :
                            cloth_couriered ?
                                <View>
                                    <Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 15, color: '#fff' }}>Cloth will be couriered to the below mentioned address (Our Office Address)</Text>
                                    <Text style={{color: '#fff'}}>3/235</Text>
                                    <Text style={{color: '#fff'}}>test street,</Text>
                                    <Text style={{color: '#fff'}}>area</Text>
                                    <Text style={{color: '#fff'}}>district</Text>
                                    <Text style={{color: '#fff'}}>state</Text>
                                    <Text style={{color: '#fff'}}>PIN: 000 000</Text>
                                </View> :
                                <View>
                                    <Text style={{ color: '#fff' }}>Cloth will pick up from: <Text style={{ fontWeight: '500' }}>{cloth_pickuplocation}</Text></Text>
                                </View>
                    }

                </View>

                <View style={[styles.addressSection, { paddingBottom: 0 }]}>
                    <Text style={styles.subtitle}>Delivery Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="H. No, Street, City, State, Pincode"
                        multiline
                        numberOfLines={7}
                        value={address}
                        onChangeText={(_address) => { setAddress(_address) }}
                        underlineColorAndroid="transparent"
                        textAlignVertical="top"
                    />
                </View>

                <View style={[styles.addressSection, { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingTop: 0 }]}>
                    <Button type="primaryoutline" label="save for later" width={(Dimensions.get('window').width - 50) / 2}
                        disabled={!address}
                        onPress={() => updateDeliveryAddress(true)}
                    />
                    <Button type="primary" label="continue to checkout" width={(Dimensions.get('window').width - 50) / 2}
                        disabled={!address}
                        onPress={() => updateDeliveryAddress()} />
                </View>
            </ScrollView >
        </SafeAreaView >
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#324755',
        marginBottom: 10
    },
    measurements: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    measurement: {
        width: Dimensions.get('window').width / 2 - 40,
        marginBottom: 20,
        marginRight: 20
    },
    label: {
        color: '#7D8184',
        textTransform: 'capitalize'
    },
    value: {
        color: '#324755',
        textTransform: 'capitalize',
        fontWeight: '500'
    },
    titleCard: {
        backgroundColor: '#334856',
        padding: 20,
        flexDirection: 'row'
    },
    iconContainer: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 75,
        height: 75,
        overflow: 'hidden',
        marginRight: 20
    },
    clothName: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    hr: {
        height: 1,
        width: 50,
        backgroundColor: '#fff'
    },
    price: {
        color: '#fff',
        fontSize: 18
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    addressSection: {
        padding: 20,
        backgroundColor: '#fff'
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        marginBottom: 20,
        borderRadius: 12,

    },
    subtitle: {
        color: '#334856',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10
    }
})

export default Summary