import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { HOST } from '../../../../env';

function ClothCard({ item }) {
    return (
        <View style={styles.card}>
            <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{ height: 125, flex: 1 }}
                source={{uri:`${HOST}${item.image}`}} 
            />
            <View style={styles.cardItem}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>Rs.{item.price}/meter</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: '#fff',
        marginLeft: 20,
        overflow: 'hidden',
        width: 140,
        marginBottom: 20
    },
    cardItem: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    description: {
        fontSize: 12,
        color: '#7D8184'
    }
})

export default ClothCard