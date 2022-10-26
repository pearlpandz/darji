import React from 'react'
import { TouchableOpacity, View, ScrollView, Text, SafeAreaView, StatusBar } from 'react-native';
import { PROPERTIES } from '../../../constants/property';
import HorizontalCardView from '../../../reusables/horizontalCardView';

function CartPage({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ paddingHorizontal: 10, paddingTop: 15, paddingBottom: 5 }}>
                    <Text>cart list</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CartPage