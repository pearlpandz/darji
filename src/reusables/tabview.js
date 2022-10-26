import React, { useState, useMemo } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image, Linking } from 'react-native'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { WebView } from 'react-native-webview';


function PropertyTabView() {
    const TABS = ['details', 'location', 'description', 'payment']

    const [tabIndex, setIndex] = useState(0);

    const TabContent = useMemo(() => {
        switch (tabIndex) {
            case 0:
                return (
                    // Details
                    <View>
                        <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>property details</Text>
                                <View style={[styles.row, { marginBottom: 15 }]}>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>type</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>appartment</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>status</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>new</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row, { marginBottom: 15 }]}>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>rooms</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>bathrooms</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>1</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row, { marginBottom: 15 }]}>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>view</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>garden</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>finish type</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>semi furnished</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>area</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>120 m2</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <View style={styles.col}>
                                                <Text style={styles.label}>delivered date</Text>
                                            </View>
                                            <View style={styles.col}>
                                                <Text style={styles.value}>2022</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>amenities</Text>
                                <View style={[styles.row, { flexWrap: 'wrap' }]}>
                                    <View style={[styles.col, { flexDirection: 'row', marginBottom: 15 }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>central A/C</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row', marginBottom: 15 }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>maid service</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row', marginBottom: 15 }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>covered parking</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row', marginBottom: 15 }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>laundry</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row', marginBottom: 15 }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>pets allowed</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row' }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>gym</Text>
                                    </View>
                                    <View style={[styles.col, { flexDirection: 'row' }]} >
                                        <MCIcons name="map-marker-outline" color='#297fd4' size={16} />
                                        <Text style={styles.label}>view of landmark</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>videos</Text>
                                <View style={{ borderRadius: 6, overflow: 'hidden' }} renderToHardwareTextureAndroid={true}>
                                    <WebView
                                        style={{ width: Dimensions.get('screen').width, height: 200 }}
                                        // javaScriptEnabled={true}
                                        // domStorageEnabled={true}
                                        // androidHardwareAccelerationDisabled={true}
                                        source={{ uri: "https://www.youtube.com/embed/zqPV5sropBo" }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fff' }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                                    <Text style={styles.sectionTitle}>posted by</Text>
                                    <Text style={styles.date}>6 days ago</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden' }}>
                                        <Image
                                            style={{ height: 60, width: 60, }}
                                            source={{ uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg' }}
                                            resizeMode='cover' />
                                    </View>
                                    <View style={{ marginLeft: 25 }}>
                                        <Text style={styles.ownerName}>Adel Elsherif</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Broker</Text>
                                            <Text style={{ marginRight: 5 }}>in</Text>
                                            <Text style={{ textDecorationLine: 'underline' }}>Booking Real Estate</Text>
                                        </View>
                                        <TouchableOpacity style={{ marginTop: 10 }}>
                                            <Text style={{ textTransform: 'capitalize', textDecorationLine: 'underline' }}>see all properties</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                )
            case 1:
                return (
                    // Location
                    <View>
                        <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>location</Text>
                                <View style={{ borderRadius: 6, overflow: 'hidden' }} renderToHardwareTextureAndroid={true}>
                                    <TouchableOpacity onPress={() => {
                                        const fulladdress = 'zion street, koodal nagar'
                                        const url = Platform.select({
                                            ios: `maps:0,0?q=${fulladdress}`,
                                            android: `geo:0,0?q=${fulladdress}`,
                                        })
                                        Linking.openURL(url)
                                    }}>
                                        <Image source={{ uri: 'https://www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png' }}
                                            style={{ height: 220, width: Dimensions.get('screen').width }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#fff' }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>nearby places</Text>
                                <View style={{ borderRadius: 6, overflow: 'hidden' }} renderToHardwareTextureAndroid={true}>
                                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )

            case 2:
                return (
                    // Description
                    <View>
                        <View style={{ backgroundColor: '#fff' }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>description</Text>
                                <View style={{ borderRadius: 6, overflow: 'hidden' }} renderToHardwareTextureAndroid={true}>
                                    <Text style={{ marginBottom: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                                    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Features and services of the Compund</Text>
                                    {["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                        "Quisque ac nisi sed justo gravida hendrerit.",
                                        "Donec imperdiet turpis in varius commodo.",
                                        "Nunc porttitor nisl eu tellus volutpat lobortis.",
                                        "Nullam viverra massa eu libero scelerisque semper.",
                                        "Vestibulum id sem consectetur, venenatis lorem eu, ultricies odio."].map((item, index) => (
                                            <Text style={{ marginBottom: 10 }} key={index}>{index + 1}.{item}</Text>
                                        ))}
                                </View>
                            </View>
                        </View>
                    </View>
                )

            case 3:
                return (
                    // Payment
                    <View>
                        <View style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                                <Text style={styles.sectionTitle}>payment</Text>
                                <View>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', }}>
                                        {[0, 1, 2].map((item, index) => (
                                        <View style={styles.priceCard} key={index}>
                                            <View style={styles.priceCardTop}>
                                            <Text style={styles.percentage}>30%</Text>
                                            <Text style={styles.paymentInfo}>advance payment</Text>
                                            </View>
                                            <View style={styles.yearCard}>
                                                <Text style={styles.years}>3 years</Text>
                                            </View>
                                        </View>))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )

            default:
                break;
        }
    }, [tabIndex])

    return (
        <View>
            <View style={styles.tabHeader}>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {
                        TABS.map((title, index) => (
                            <TouchableOpacity key={index} onPress={() => setIndex(index)}>
                                <Text style={[styles.tabTitle, tabIndex === index ? styles.activeTab : '']}>{title}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <View style={[styles.tabContent]}>
                {TabContent}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10
    },
    tabTitle: {
        textTransform: 'capitalize',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    activeTab: {
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderColor: '#297fd4'
    },
    sectionTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 15
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        width: '50%'
    },
    label: {
        textTransform: 'capitalize',
        fontSize: 12
    },
    value: {
        fontWeight: '500',
        textTransform: 'capitalize',
        fontSize: 12
    },
    date: {
        fontSize: 12,
        color: '#535353'
    },
    ownerName: {
        fontWeight: 'bold',
        color: '#2b3a7d',
        textTransform: 'capitalize'
    },
    priceCard: {
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderRadius: 6,
        overflow: 'hidden',
        width: '33%'
    },
    priceCardTop: {
        alignItems: 'center',
        padding: 10,
    },
    percentage: {
        fontSize: 18,
        color: '#f2a14f',
        marginBottom: 5
    },
    paymentInfo: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: '#535353'
    },
    yearCard: {
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#f8f8f9'
    },
    years: {
        color: '#f2a14f',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 12
    }
});

export default PropertyTabView