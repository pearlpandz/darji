import React, { useState } from 'react';
import { Image, View, ScrollView, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../reusables/button';
import BottomBG from './../../../assets/images/bottom-bg.png';
import Icon1 from './../../../assets/icons/icon-1.png';
import Icon2 from './../../../assets/icons/icon-2.png';
import Icon3 from './../../../assets/icons/icon-3.png';

function SelectDesignOption({ route, navigation }) {

    const { title, uri, gender } = route.params;
    const [knowMyDesign, setKnowMyDesign] = useState(false);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={{ flex: 1, width: '100%' }} source={uri} resizeMode="cover" />
            </View>
            <View style={styles.titleCard}>
                <View style={styles.cardDetails}>
                    <View style={[styles.iconView, styles.boxWithShadow]}>
                        <Ionicons name={`${gender}-outline`} size={42} color='#e8875b' />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ textTransform: 'uppercase', fontWeight: '500', color: '#fff', fontSize: 30 }}>{title}</Text>
                        <View style={styles.hr} />
                        <Text style={{ fontSize: 18, color: '#fff' }}>Stylish and Handsome Look</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, position: 'relative' }}>
                <View style={styles.designs}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
                        <Pressable onPress={() => setKnowMyDesign(!knowMyDesign)}>
                            <View style={styles.desginView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.iconContainer}>
                                        <Image source={Icon1} style={{ flex: 1 }} resizeMode="contain" />
                                    </View>
                                    <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                        <Text style={styles.link}>I Know My Design</Text>
                                    </View>
                                </View>
                                <Ionicons onPress={() => setKnowMyDesign(!knowMyDesign)} name={knowMyDesign ? "chevron-up" : "chevron-forward"} size={20} color='#e8875b' />
                            </View>
                        </Pressable>
                        {knowMyDesign && <View style={{ flexDirection: 'row', padding: 20, paddingTop: 0, justifyContent: 'space-between' }}>
                            <Button
                                label="shirt"
                                type="primaryoutline"
                                width={(Dimensions.get('screen').width - 100) / 2}
                                onPress={() => navigation.navigate('selectdress', {
                                    type: 'shirt',
                                    title: 'Shirt'
                                })}
                            />
                            <Button label="pant" type="primaryoutline" width={(Dimensions.get('screen').width - 100) / 2} />
                        </View>}
                    </View>
                    <Pressable 
                        style={[styles.desginView, { borderBottomWidth: 1, borderColor: '#f1f3f4', }]}
                        onPress={() => navigation.navigate('desginByMyself')} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <Image source={Icon2} style={{ flex: 1 }} resizeMode="contain" />
                            </View>
                            <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                <Text style={styles.link}>Design By Myself</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                    </Pressable>
                    <View style={[styles.desginView]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <Image source={Icon3} style={{ flex: 1 }} resizeMode="contain" />
                            </View>
                            <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                <Text style={styles.link}>Experts Designs From Tailor Shop</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                    </View>
                    <View>
                        <Image style={{ width: Dimensions.get('screen').width - 40, height: 90 }} source={BottomBG} resizeMode="cover" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 250
    },
    titleCard: {
        backgroundColor: '#757676',
        padding: 20,
        paddingBottom: 40
    },
    cardDetails: {
        width: '100%',
        flexDirection: 'row'
    },
    iconView: {
        backgroundColor: '#fff',
        width: 75,
        height: 75,
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
    hr: {
        height: 2,
        width: 100,
        backgroundColor: '#fff',
        marginVertical: 5
    },
    designs: {
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'relative',
        top: -20
    },
    desginView: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
    },
    iconContainer: {
        backgroundColor: '#fff5e5',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 45,
        height: 45,
        alignItems: 'center'
    },
    link: { color: '#305F72', fontSize: 16 }
});

export default SelectDesignOption