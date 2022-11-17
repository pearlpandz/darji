import React from 'react'
import { SafeAreaView, StatusBar, Text, View, StyleSheet, ScrollView, Dimensions, Image, TextInput, Pressable } from 'react-native'
import Navigation from '../../../reusables/navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MEN_IMAGE from './../../../assets/images/men.png';
import WOMEN_IMAGE from './../../../assets/images/women.jpg';
import AVATAR from './../../../assets/images/avatar.png';
import GET_A_QUOTE from './../../../assets/images/getquote.png';

function StylistPage({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.banner}>
                    <Text style={styles.bannerTitle}>Style is a way to say who you are without having to speak</Text>
                    <View style={styles.hr} />
                    <Text style={styles.bannerDesc}>Make it simple, but significant</Text>
                </View>
                <View style={styles.cardView}>
                    <View style={[styles.inputContainer, styles.boxWithShadow]}>
                        <Text style={{ fontSize: 15 }}>Special outfit for an event? Complete wardrobe refresh? Our personal stylists are here to help, one-on-one</Text>
                        <View style={{position: 'relative', alignItems: 'center'}}>
                            <Image source={MEN_IMAGE} style={styles.imageView} />
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff', position: 'absolute', bottom: 10}}>Best of all, it’s completely free.</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                    <View style={{ backgroundColor: '#e8875b', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                            <Image style={{ flex: 1, width: '100%' }} source={GET_A_QUOTE} resizeMode="cover" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }}>Get Styled</Text>
                            <Text style={{ fontSize: 12, color: '#fff' }}>“I’m confused about how to match my buttons and cuffs to my fabric. Help!"</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                    <View style={{ backgroundColor: '#87BCBF', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                            <Image style={{ flex: 1, width: '100%' }} source={GET_A_QUOTE} resizeMode="cover" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }}>Put a look Together</Text>
                            <Text style={{ fontSize: 12, color: '#fff' }}>“I have a dinner party this weekend and can’t get anything that matches my black jeans. Any ideas?”</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                    <View style={{ backgroundColor: '#B9B0A2', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                            <Image style={{ flex: 1, width: '100%' }} source={GET_A_QUOTE} resizeMode="cover" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }}>Get Your Unique Fit</Text>
                            <Text style={{ fontSize: 12, color: '#fff' }}>“I’m not sure what my body type is. Can you help me figure it out?"</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
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
        paddingHorizontal: 30,
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
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        width: Dimensions.get('screen').width - 40,
        padding: 15,
    },
    inputInsideIcon: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: '#e8865b',
        color: '#fff'
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: '#424242',
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
        height: 180,
        marginTop: 20,
        width: '100%',
        borderRadius: 12
    }
})

export default StylistPage