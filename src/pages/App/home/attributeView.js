import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function AttributeView({ label, value }) {

    const bodyTypes = [
        { name: 'athletic', image: require('./../../../assets/customization/shirt/body-1.png') },
        { name: 'slight belly', image: require('./../../../assets/customization/shirt/body-2.png') },
        { name: 'significant belly', image: require('./../../../assets/customization/shirt/body-3.png') },
    ]

    const shoulderTypes = [
        { name: 'average', image: require('./../../../assets/customization/shirt/shoulder-1.png') },
        { name: 'sloping', image: require('./../../../assets/customization/shirt/shoulder-2.png') }
    ]

    const fitTypes = [
        { name: 'super slim', image: require('./../../../assets/customization/shirt/fit-1.png') },
        { name: 'structured', image: require('./../../../assets/customization/shirt/fit-2.png') },
        { name: 'relaxed', image: require('./../../../assets/customization/shirt/fit-3.png') },
    ]

    const getImage = () => {
        switch (label) {
            case "Body Type":
                return <Image style={styles.img} source={bodyTypes.find(a => a.name === value).image} resizeMode="contain" />

            case "Shirt Size":
                return <Text>{value}</Text>

            case "Shoulder Type":
                return <Image style={styles.img} source={shoulderTypes.find(a => a.name === value).image} resizeMode="contain" />

            case "Height":
                return <Text>{value}</Text>

            case "Preferred Fit":
                return <Image style={styles.img} source={fitTypes.find(a => a.name === value).image} resizeMode="contain" />

            default:
                break;
        }
    }

    return (
        <View style={styles.horizontalAlign}>
            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
            <View style={{width: 40}}>
                {getImage()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    horizontalAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: '#7D8184',
        textTransform: 'capitalize'
    },
    value: {
        color: '#324755',
        textTransform: 'capitalize',
        fontWeight: '500'
    },
    img: {
        flex: 1,
        height: 60,
        width: '100%'
    }
})

export default AttributeView