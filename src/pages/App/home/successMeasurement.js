import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SuccessMeasurement({navigation, route}) {
    const {orderId} = route.params;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#D97D54' }}>
            <ScrollView>
                <View style={styles.horizontalAlign}>
                    <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
                </View>
                <View style={{ padding: 15, alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 30 }}>All Your Measurements Captured Successfully!</Text>
                    <View style={[styles.circle, styles.boxWithShadow]}>
                        <Ionicons name='checkmark-circle-outline' size={80} color="#fff" />
                    </View>
                    <View style={[{ alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FCC3A9', borderRadius: 10, padding: 20, marginTop: 50, position: 'relative' }]}>
                        <Text style={{position: 'absolute', top: -35, left: 10, fontSize: 80, color: '#FCC3A9'}}>"</Text>
                        <Text style={{fontSize: 28, color: '#FCC3A9', letterSpacing: 1}}>We can turn your</Text>
                        <Text style={{fontSize: 28, color: '#fff', fontWeight: 'bold', letterSpacing: 1}}>BLANK CANVAS</Text>
                        <Text style={{fontSize: 26, color: '#FCC3A9'}}>into a <Text style={{color: '#fff', fontStyle: 'italic'}}>Masterpiece</Text></Text>
                    </View>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', marginTop: 25, maxWidth: 260 }}>Do you want to go-ahead for cloth selection?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('clothcategory', {orderId: orderId})} style={{ backgroundColor: '#fff', width: 150, height: 45, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ textTransform: 'uppercase', color: '#324755', fontWeight: 'bold', }}>yes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    horizontalAlign: {
        flexDirection: 'row',
        padding: 15
    },
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 35
    },
    circle: {
        width: 150,
        height: 150,
        backgroundColor: '#D97D54',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }
});

export default SuccessMeasurement