import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import ClothCard from './clothCardView';
function ClothList({ navigation, title, cloths }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={cloths}
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