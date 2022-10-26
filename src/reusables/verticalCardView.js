import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function VerticalCardView({ item, marginRight }) {
    return (
        <View style={[styles.card, {marginRight: marginRight}]}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg' }} resizeMode='cover' style={{ height: 150 }} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={{fontWeight: '500', textTransform: 'capitalize', fontSize: 15}}>men's shirt</Text>
                <Text>$40.23</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        width: (Dimensions.get('window').width - 30)/2,
        borderRadius: 6,
        overflow: 'hidden',
        margin: 0,
        borderWidth: 2,
        borderColor: '#f3f3f3'
    },
    imageContainer: {
        position: 'relative'
    },
    detailsContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        color: '#000'
    },
    category: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 10
    },
    type: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 8,
        backgroundColor: '#5ebbed',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 4,
        letterSpacing: 1
    },
    rating: {
        position: 'absolute',
        top: 5,
        right: 10,
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1
    },
    attributes: {
        flexDirection: 'row',
        marginVertical: 5
    },
    mr10: {
        marginRight: 10,
    }
})

export default VerticalCardView