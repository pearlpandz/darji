import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import ClothCard from './clothCardView';
function ClothList({ navigation, title }) {

    const CLOTHS = [{
        image: require('./../../../assets/images/cloth.jpg'),
        name: 'linen blue',
        price: '50'
    }, {
        image: require('./../../../assets/images/cloth.jpg'),
        name: 'linen green',
        price: '50'
    }, {
        image: require('./../../../assets/images/cloth.jpg'),
        name: 'linen brown',
        price: '50'
    }, {
        image: require('./../../../assets/images/cloth.jpg'),
        name: 'linen blue',
        price: '50'
    }, {
        image: require('./../../../assets/images/cloth.jpg'),
        name: 'linen blue',
        price: '50'
    }]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={CLOTHS}
                renderItem={({ item }) => {
                    return <Pressable onPress={() => navigation.navigate('clothdetail', {...item})}>
                        <ClothCard item={item} key={item.index} />
                    </Pressable>
                }}
                scrollEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#1B1C20',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 10,
        paddingHorizontal: 20
    }
});

export default ClothList