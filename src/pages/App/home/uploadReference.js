import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../reusables/button'
import BottomBG from './../../../assets/images/bottom-bg-2.png';
import Icon4 from './../../../assets/icons/icon-4.png';
import Icon5 from './../../../assets/icons/icon-5.png';
import { useNavigation } from '@react-navigation/native';

function UploadReference() {

    const navigation = useNavigation();
    const [imageList, setImageList] = useState([]);

    const handleFileUpload = () => {
        // launchCamera({
        //     saveToPhotos: true,
        //     mediaType: 'photo',
        //     includeBase64: false,
        // }, setResponse)

        launchImageLibrary({
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        }, ({ assets }) => {
            if (assets) {
                setImageList([...imageList, ...assets])
            }
        })
    }

    return (
        <ScrollView style={{ color: '#fff' }}>
            <View style={styles.imageContainer}>
                <Text style={styles.title}>upload reference images</Text>
                <View style={[styles.images, { alignItems: 'center', justifyContent: 'center', borderRadius: 20, borderColor: '#fff', borderWidth: 1 }]}>
                    {imageList.length > 0 &&
                        <View style={{ overflow: 'hidden', borderRadius: 20, backgroundColor: '' }}>
                            <FlatList
                                data={imageList}
                                renderItem={({ item }) => {
                                    return (
                                        <View key={item.index} style={{ marginRight: 2 }}>
                                            <Image
                                                resizeMode="cover"
                                                resizeMethod="scale"
                                                style={{ width: 120, height: 200 }}
                                                source={{ uri: item.uri }}
                                            />
                                        </View>
                                    )
                                }}
                                scrollEnabled={true}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    }
                    {/* {imageList.length === 0 && <Text style={{color: '#fff'}}>Placeholder</Text>} */}
                    {imageList.length > 0 && <Text style={styles.imgCount}>{imageList.length}</Text>}
                </View>

                {/* <Button label="upload images" type="primaryoutline" onPress={handleFileUpload} /> */}
                <View style={{ paddingHorizontal: 20 }}>
                    <Pressable onPress={handleFileUpload} style={{ borderColor: '#87BCBF', borderWidth: 1, borderRadius: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', padding: 12, fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.8 }}>upload images</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20, position: 'relative' }}>
                <View style={[styles.designs, styles.boxWithShadow]}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
                        <View style={styles.desginView}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Icon4} style={{ flex: 1 }} resizeMode="contain" />
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Common', {
                                        screen: 'measurement'
                                    })}>
                                        <Text style={styles.link}>Submit Measurement Online Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnView}>
                                        <Text style={styles.btnLabel}>learn how to measure yourself</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#f1f3f4', }}>
                        <View style={[styles.desginView]}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Icon5} style={{ flex: 1 }} resizeMode="contain" />
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 180 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Common', {
                                        screen: 'clothcategory'
                                    })}>
                                        <Text style={styles.link}>Collect Measurements at Home</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnView}>
                                        <Text style={styles.btnLabel}>check your pincode is eligible</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color='#e8875b' />
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', height: 48 }}>
                        <Image style={{ flex: 1, width: '100%' }} source={BottomBG} resizeMode="cover" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#213c42',
        padding: 20,
        paddingBottom: 50
    },
    title: {
        color: '#fff',
        textTransform: 'capitalize',
        marginBottom: 20,
        fontWeight: '500'
    },
    images: {
        marginBottom: 20,
        position: 'relative',
        height: 200
    },
    imgCount: {
        position: 'absolute',
        bottom: -10,
        right: 10,
        zIndex: 10000,
        backgroundColor: '#fff',
        color: '#D97D54',
        borderRadius: 50,
        padding: 5,
        width: 30,
        height: 30,
        textAlign: 'center'
    },
    designs: {
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'relative',
        top: -20,
        overflow: 'hidden'
    },
    desginView: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    iconContainer: {
        backgroundColor: '#fff5e5',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 45,
        height: 45,
        alignItems: 'center'
    },
    btnView: {
        borderColor: '#E8875C',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10
    },
    btnLabel: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#E8875C',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500'
    },
    boxWithShadow: {
        shadowColor: '#666',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 15
    },
    link: { color: '#305F72', fontSize: 16 }
})

export default UploadReference