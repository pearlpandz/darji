import React, { useState, useMemo } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'

import Modal from 'react-native-modal';
import AuthModal from '../../../reusables/authModal';

function AccountPage({ navigation }) {

    const [actionSheet, setActionSheet] = useState(false);

    const ActionSheetModal = useMemo(() => (
        <Modal
            isVisible={actionSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}>
            <View>
                <AuthModal setActionSheet={setActionSheet} navigation={navigation} />
            </View>
        </Modal>
    ), [actionSheet])


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 50, overflow: 'hidden' }}>
                        <Image
                            style={{ height: 60, width: 60, }}
                            source={{ uri: 'https://png.pngitem.com/pimgs/s/782-7820454_person-image-placeholder-clipart-png-download-man-profile.png' }}
                            resizeMode='cover' />
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <TouchableOpacity onPress={() => {
                            // setActionSheet(true)
                            navigation.navigate('Common', {screen: 'login'})
                        }}>
                            <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#0f5190', fontSize: 16 }}>login / signup</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 5 }}>Sign in to check or edit your properties</Text>
                    </View>
                </View>

                <View style={styles.moreList}>
                    <IonIcons name="person-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Common', { screen: 'myprofile' })}>
                        <Text style={styles.listItem}>my profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, backgroundColor: '#f3f3f3', flex: 1 }}></View>

                <View style={styles.moreList}>
                    <IonIcons name="lock-closed-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Common', { screen: 'changepassword' })}>
                        <Text style={styles.listItem}>change password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, backgroundColor: '#f3f3f3', flex: 1 }}></View>

                <View style={[styles.moreList]}>
                    <IonIcons name="heart-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('App', { screen: 'likes' })}>
                        <Text style={styles.listItem}>my favourites</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, backgroundColor: '#f3f3f3', flex: 1 }}></View>

                <View style={[styles.moreList, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                    <FontAwesomeIcons name="building-o" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.listItem}>my properties</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: '#f3f3f3', height: 10 }}></View>

            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <Text style={styles.sectionTitle}>Discover</Text>
                <View style={styles.newLaunch}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MCIcons name="rocket-launch-outline" color='#fff' size={24} style={{ marginRight: 10 }} />
                        <View style={{ marginLeft: 5 }}>
                            <TouchableOpacity>
                                <Text style={{ textTransform: 'capitalize', fontWeight: '500', color: '#fff', fontSize: 13, letterSpacing: 0.5 }}>launches</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#f7f7f7', marginTop: 2 }}>Checkout latest project launches (upcoming feature)</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: '#f3f3f3', height: 10 }}></View>

            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <Text style={styles.sectionTitle}>more</Text>
                <View style={styles.moreList}>
                    <FontAwesomeIcons name="building-o" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.listItem}>developers</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreList}>
                    <IonIcons name="flame-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.listItem}>special offers</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreList}>
                    <IonIcons name="md-reader-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.listItem}>blogs</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.moreList, { borderBottomWidth: 0 }]}>
                    <MCIcons name="account-group-outline" color='#2e81d5' size={24} style={{ marginRight: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.listItem}>contact us</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {ActionSheetModal}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        color: '#0f5190',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
        textTransform: 'capitalize'
    },
    newLaunch: {
        backgroundColor: '#60bbee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    moreList: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
        paddingVertical: 15
    },
    listItem: {
        textTransform: 'capitalize',
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 0.5
    }
})

export default AccountPage