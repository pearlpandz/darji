import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet, Image, Dimensions, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shirt from '../../../reusables/customization/shirt';
import AttributeView from './attributeView';
import Button from '../../../reusables/button';

import Cloth from './../../../assets/images/cloth.jpg';

function Summary({navigation}) {

    const config = { size: 42, shoulder: 'average', fit: 'super slim', bodyType: 'athletic', height: "5'2", notes: "Linen fabric is exceptionally breathable and absorbent, making it a great summer fabric. It is also skin-friendly as it is made entirely of natural fibers" };
    const selectedCloth = {
        name: 'linen blue',
        size: 5,
        price: 50 // price for 1mtr
    };

    const [address, setAddress] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 20, backgroundColor: '#87BCBF'}}>
                    <View style={[styles.horizontalAlign]}>
                        <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Summary</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Shirt config={config} />
                </View>

                <View style={styles.detailContainer}>
                    <Text style={styles.title}>give measurements</Text>

                    <View style={styles.measurements}>
                        <View style={styles.measurement}><AttributeView label="Body Type" value={config.bodyType} /></View>
                        <View style={[styles.measurement, { marginRight: 0 }]}><AttributeView label="Shirt Size" value={config.size} /></View>
                        <View style={styles.measurement}><AttributeView label="Shoulder Type" value={config.shoulder} /></View>
                        <View style={[styles.measurement, { marginRight: 0 }]}><AttributeView label="Height" value={config.height} /></View>
                        <View style={styles.measurement}><AttributeView label="Preferred Fit" value={config.fit} /></View>
                    </View>

                    <View>
                        <Text style={styles.label}>Notes / Instructions</Text>
                        <Text style={styles.value}>{config.notes}</Text>
                    </View>
                </View>

                <View style={styles.titleCard}>
                    <View style={styles.iconContainer}>
                        <Image source={Cloth} style={{ flex: 1, width: '100%' }} />
                    </View>
                    <View>
                        <Text style={styles.clothName}>{selectedCloth.name}</Text>
                        <View style={styles.hr} />
                        <Text style={styles.price}>{selectedCloth.size} mtr ................. Rs.{selectedCloth.size * selectedCloth.price}</Text>
                    </View>
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
                    <Button type="primaryoutline" label="save for later" width={(Dimensions.get('window').width - 50) / 2} />
                    <Button type="primary" label="checkout" width={(Dimensions.get('window').width - 50) / 2} />
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