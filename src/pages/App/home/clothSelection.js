import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import ClothList from './clothListView';

function ClothSelection({navigation}) {

    return (
        <ScrollView>
            <View style={{paddingTop: 20}}>
                <ClothList title="linen" navigation={navigation} />
                <ClothList title="cotten" navigation={navigation} />
                <ClothList title="polyester" navigation={navigation} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});

export default ClothSelection