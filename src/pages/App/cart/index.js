import React, {useMemo, useState} from 'react'
import { SafeAreaView, StatusBar, Text, View, StyleSheet, ScrollView, Dimensions, Image, TextInput, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import Navigation from '../../../reusables/navigation'
import ActionSheet from '../../../reusables/actionsheet';

import MEN_IMAGE from './../../../assets/images/men.png';
import WOMEN_IMAGE from './../../../assets/images/women.jpg';
import AVATAR from './../../../assets/images/avatar.png';
import GET_A_QUOTE from './../../../assets/images/getquote.png';

function CartPage({ navigation }) {
    const ACTIONITEMS = [
        {
            id: 1,
            label: 'Saved',
            value: 'saved',

        },
        {
            id: 2,
            label: 'Inprogress',
            value: 'inprogress',

        },
        {
            id: 3,
            label: 'Cancelled',
            value: 'cancelled',

        },
        {
            id: 4,
            label: 'Completed',
            value: 'completed',

        },
        {
            id: 5,
            label: 'Returned',
            value: 'returned',

        }
    ];
    const [selectedType, setType] = useState()
    const [actionSheet, setActionSheet] = useState(false);
    const ActionSheetModal = useMemo(() => (
        <Modal
            isVisible={actionSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end'
            }}
        >
            <ActionSheet
                actionItems={ACTIONITEMS}
                onCancel={() => setActionSheet(false)}
                onSelect={(type) => {
                    setType(type);
                    setActionSheet(false);
                }}
            />
        </Modal>
    ), [actionSheet])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.banner, styles.horizontalAlign]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Order ID"
                        underlineColorAndroid="transparent"
                    />
                    <Pressable onPress={() => setActionSheet(true)} 
                        style={[styles.select, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{color: '#324755'}}>
                            {ACTIONITEMS.find(a => a.value === selectedType)?.label}
                        </Text>
                        <Ionicons name="chevron-down" size={14} color='#000' />
                    </Pressable>
                </View>
                <View style={styles.cardView}>
                    {
                        [...new Array(15)].map((item, key) => (
                            <View style={[styles.cardContainer, styles.boxWithShadow]} key={key}>
                                <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                    <Image source={MEN_IMAGE} style={styles.imageView} />
                                    <View style={{ position: 'relative' }}>
                                        <Text style={{ fontWeight: 'bold', color: '#324755', fontSize: 15 }}>Full Sleeve Shirt</Text>
                                        <Text style={{ fontSize: 12, color: '#324755', fontWeight: '300', marginTop: 5 }}>ID: 56153439</Text>
                                        <Text style={{ fontSize: 12, color: '#324755', fontWeight: '300', marginTop: 5 }}>25-03-2022</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>1200 rs</Text>
                                    <Text style={styles.saved}>Saved</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {ActionSheetModal}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 20,
        marginBottom: 15,
        textTransform: 'capitalize'
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        width: ((Dimensions.get('screen').width) - 60) / 2,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 20,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        overflow: 'hidden'
    },
    cardDetails: {
        padding: 10,
        paddingTop: 30,
        position: 'relative',
        width: '100%'
    },
    iconView: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        top: -20,
        left: '42%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 15
    },
    cardImage: {
        height: 120,
        flex: 1,
        width: '100%',
        color: '#75bbb9'
    },
    horizontalAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tagline: {
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'capitalize',
        marginLeft: 15,
        color: '#fff',
        width: Dimensions.get('screen').width - 200
    },
    banner: {
        backgroundColor: '#000000',
        paddingVertical: 30,
        paddingHorizontal: 20,
        position: 'relative',
        paddingBottom: 50,
    },
    bannerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 10,
        letterSpacing: 1,
    },
    bannerDesc: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10
    },
    hr: {
        height: 1,
        width: 50,
        backgroundColor: '#fff'
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        width: Dimensions.get('screen').width - 40,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    inputInsideIcon: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: '#e8865b',
        color: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '48%'
    },
    select: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '48%',
    },
    blog: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    cardView: {
        paddingHorizontal: 20,
        position: 'relative',
        top: -30,
        marginBottom: -20
    },
    imageView: {
        height: 65,
        width: 65,
        borderRadius: 12,
        marginRight: 10
    },
    saved: {
        backgroundColor: '#e8875c4d',
        color: '#E8875C',
        fontSize: 14,
        textAlign: 'center',
        borderRadius: 4,
        paddingVertical: 3,
        paddingHorizontal: 15
    }
})

export default CartPage