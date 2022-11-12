import React from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, Pressable } from 'react-native'
import GET_A_QUOTE from './../../../../assets/images/getquote.png';
function DesginByMyself({navigation}) {

    const CATEGORIES = [{
        type: 'shirt',
        tagline: 'inspired by anything beautiful',
        image: require('./../../../../assets/images/shirt.png'),
        icon: require('./../../../../assets/icons/icon-8.png')
    }, {
        type: 'pant',
        tagline: 'i have my fancy pants',
        image: require('./../../../../assets/images/pant.png'),
        icon: require('./../../../../assets/icons/icon-7.png')
    }, {
        type: 'jacket',
        tagline: 'a torn jacket is soon mended',
        image: require('./../../../../assets/images/men.png'),
        icon: require('./../../../../assets/icons/icon-6.png')
    }, {
        type: 'suite',
        tagline: 'as far as luxury goes',
        image: require('./../../../../assets/images/suit.png'),
        icon: require('./../../../../assets/icons/icon-9.png')
    }]

    return (
        <ScrollView>
            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Men’s Apparel Category</Text>
                <View style={styles.hr} />
                <Text style={styles.bannerDesc}>Styling Tricks to Steal From</Text>
            </View>
            <View style={styles.cardView}>
                {
                    CATEGORIES.map(({ type, tagline, image, icon }, index) => (
                        <Pressable 
                            style={[styles.cardContainer, styles.boxWithShadow]} 
                            key={index}
                            onPress={() => navigation.navigate('Common',{
                                screen: 'shirtCustomization'
                            })}>
                            <Image source={image} style={styles.imageView} />
                            <View style={styles.contentContainer}>
                                <View style={[styles.iconContainer, styles.boxWithShadow]}><Image source={icon} style={styles.iconView} /></View>
                                <Text style={styles.type}>{type}</Text>
                                <Text style={styles.tagline}>{tagline}</Text>
                            </View>
                        </Pressable>
                    ))
                }
            </View>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <View style={{ backgroundColor: '#e8875b', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                        <Image style={{ flex: 1, width: '100%' }} source={GET_A_QUOTE} resizeMode="cover" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }}>assured best quote</Text>
                        <Text style={{ fontSize: 12, color: '#fff' }}>Reference site about Lorem Ipsum, giving information on its origins</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#0f2528',
        paddingTop: 40,
        paddingHorizontal: 30,
        position: 'relative',
        paddingBottom: 70,
    },
    bannerTitle: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 10,
        letterSpacing: 1,
        maxWidth: 300
    },
    bannerDesc: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10
    },
    hr: {
        height: 1,
        width: 50,
        backgroundColor: '#fff'
    },
    cardView: {
        paddingHorizontal: 20,
        position: 'relative',
        top: -30,
        marginBottom: -30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    imageView: {
        height: 100,
        width: '100%'
    },
    iconContainer: {
        height: 45,
        width: 45,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        position: 'absolute',
        top: -20
    },
    iconView: {
        height: '100%',
        width: '100%'
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        width: (Dimensions.get('screen').width - 60) / 2,
        marginBottom: 20,
    },
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 15
    },
    contentContainer: {
        position: 'relative',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30
    },
    type: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#334856',
        textTransform: 'capitalize'
    },
    tagline: {
        fontSize: 10,
        color: '#7D8184'
    }
})

export default DesginByMyself