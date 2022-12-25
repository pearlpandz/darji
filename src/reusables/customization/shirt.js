import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import SHIRT from './../../assets/customization/shirt/shirt.png'
import SHIRT_SIZE from './../../assets/customization/shirt/shirt-size.png'
import SHIRT_SHOULDER from './../../assets/customization/shirt/shirt-shoulder.png'
import SHIRT_BODYTYPE from './../../assets/customization/shirt/shirt-bodytype.png'
import SHIRT_FIT from './../../assets/customization/shirt/shirt-fit.png'
import SHIRT_HEIGHT from './../../assets/customization/shirt/shirt-height.png'

function Shirt({ config }) {
    const { shirtSize, shoulder, fit, height, bodyType } = config;
    return (
        <View style={styles.container}>
            {shirtSize ? <View style={styles.shirtSizeContainer}>
                <Text style={styles.measurements}>{shirtSize} cms</Text>
                <Image style={styles.shirtSize} source={SHIRT_SIZE} />
            </View> : null}
            {shoulder ? <View style={styles.shirtShoulderContainer}>
                <Image style={styles.shirtShoulder} source={SHIRT_SHOULDER} />
                <Text style={[styles.measurements]}>{shoulder}</Text>
            </View> : null}
            <View style={styles.shirtContainer}>
                <Image style={styles.shirtImg} source={SHIRT} />
            </View>
            {fit ? <View style={styles.shirtFitContainer}>
                <Image style={styles.shirFit} source={SHIRT_FIT} />
                <Text style={[styles.measurements, { position: 'absolute', bottom: 50 }]}>{fit}</Text>
            </View> : null}
            {bodyType ? <View style={styles.shirtBodyTypeContainer}>
                <Image style={styles.shirtBodyType} source={SHIRT_BODYTYPE} />
                <Text style={[styles.measurements, { marginTop: 10 }]}>{bodyType}</Text>
            </View> : null}
            {height ? <View style={styles.shirtHeightContainer}>
                <Image style={styles.shirtHeight} source={SHIRT_HEIGHT} />
                <Text style={[styles.measurements, { position: 'absolute', bottom: '50%', right: 30 }]}>{height}</Text>
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 440,
        // backgroundColor: 'red',
        position: 'relative'
    },
    shirtContainer: {
        width: 280,
        height: 355,
        position: 'relative'
    },
    shirtImg: {
        flex: 1,
        width: '100%',
        opacity: 0.5
    },
    shirtSizeContainer: {
        width: 200,
        height: 23,
        marginLeft: 40,
        marginBottom: 10,
        alignItems: 'center'
    },
    shirtSize: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    measurements: {
        fontSize: 12,
        color: '#fff',
        textTransform: 'capitalize'
    },
    shirtShoulderContainer: {
        width: 230,
        height: 39,
        marginLeft: 26,
        alignItems: 'center',
        position: 'absolute',
        top: 73,
        zIndex: 10
    },
    shirtShoulder: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shirtFitContainer: {
        width: 120,
        height: 105,
        marginLeft: 80,
        alignItems: 'center',
        position: 'absolute',
        bottom: 73,
        zIndex: 10
    },
    shirFit: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shirtBodyTypeContainer: {
        width: 180,
        height: 46,
        marginLeft: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 10
    },
    shirtBodyType: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shirtHeightContainer: {
        width: 50,
        height: 330,
        alignItems: 'center',
        position: 'absolute',
        bottom: 60,
        right: 0,
        zIndex: 10
    },
    shirtHeight: {
        width: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Shirt