import React, {useState} from 'react';
import { Image, View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BACKGROUND_BANNER from './../../../assets/images/cloth.jpg';
import ICON from './../../../assets/icons/icon-13.png';
import Button from '../../../reusables/button';

function ClothDetail({ route, navigation }) {
    const { image, name, price } = route.params;
    const [selectedQuantity, setQuantity] = useState(1);
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.imageContainer}>
                <Image style={{ flex: 1, width: '100%' }} source={BACKGROUND_BANNER} resizeMode="cover" />
            </View>
            <View style={styles.titleCard}>
                <View style={styles.iconContainer}>
                    <Image source={ICON} style={{ flex: 1, width: '100%' }} />
                </View>
                <View>
                    <Text style={styles.clothName}>{name}</Text>
                    <View style={styles.hr} />
                    <Text style={styles.price}>Rs.{price} / meter</Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <View style={[styles.boxWithShadow, styles.counter]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable style={styles.circle} disabled={selectedQuantity == 1} onPress={() => setQuantity(selectedQuantity-1)}>
                            <Ionicons name='remove' color='#E8875C' size={32} />
                        </Pressable>
                        <Text style={{ fontSize: 16, color: '#324755' }}>1.0 mtr</Text>
                        <Pressable style={styles.circle} onPress={() => setQuantity(selectedQuantity+1)}>
                            <Ionicons name='add' color='#E8875C' size={32} />
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={{ color: '#E8875C', fontSize: 20, fontWeight: '500' }}>{selectedQuantity * 50}</Text>
                        <Text style={{ marginLeft: 5, fontSize: 14, color: '#7D8184' }}>Rs</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.sectionTitle}>description</Text>
                    <Text style={styles.sectionContent}>Linen fabric is exceptionally breathable and absorbent, making it a great summer fabric. It is also skin-friendly as it is made entirely of natural fibers</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.sectionTitle}>Basic Details</Text>
                    <Text style={styles.sectionContent}>Material Type: Linen</Text>
                    <Text style={styles.sectionContent}>Color: Blue</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 30}}>
                    <Button label="select" type="primaryoutline" width={150} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 20
    },
    imageContainer: {
        height: 250
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
        padding: 20,
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
    counter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    circle: {
        borderWidth: 1,
        borderColor: '#ECEFF0',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 10
    },
    sectionTitle: {
        color: '#324755',
        fontWeight: '600',
        textTransform: 'capitalize',
        marginBottom: 5
    },
    sectionContent: {
        color: '#7D8184'
    }
});

export default ClothDetail