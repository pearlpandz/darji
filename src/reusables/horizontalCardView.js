import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function HorizontalCardView({ navigation, item, marginRight }) {
    return (
        <View style={[styles.card, {marginRight: marginRight}]}>
            <Image
                source={{ uri: 'https://img.freepik.com/premium-photo/silk-fabric-crepe-de-chine-stretch-dark-blue-color_133187-2091.jpg' }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={{fontWeight: 'bold', color: '#fff', textTransform: 'capitalize'}}>{item.name}</Text>
                <Text style={{fontWeight: '400', color: '#fff', textTransform: 'capitalize'}}>${item.price}</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        position: 'relative',
        height: 120,
        width: 220,
        marginLeft: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        // position: 'absolute',
        flex:1,
        // height: 200,
        // width: '100%'
    },
    info: {
        position: 'absolute',
        bottom: 5,
        left: 10,
    }
})

export default HorizontalCardView