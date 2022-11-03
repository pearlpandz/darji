import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import INFO from './../../../assets/customization/shirt/info.png';

function SuccessMeasurement({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#D97D54' }}>
            <ScrollView>
                <View style={styles.horizontalAlign}>
                    <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
                </View>
                <View style={{ padding: 15, alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginVertical: 15 }}>All Your Measurements Captured Successfully!</Text>
                    <View style={[styles.circle, styles.boxWithShadow]}>
                        <Ionicons name='checkmark-circle-outline' size={80} color="#fff" />
                    </View>
                    <View style={{ width: Dimensions.get('screen').width - 40, height: 250, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={INFO} alt="info" style={{ flex: 1, width: "100%" }} resizeMode="contain" />
                    </View>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', marginVertical: 15, maxWidth: 260 }}>Do you want to go-ahead for cloth selection?</Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 150, height: 45, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
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