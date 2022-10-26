import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import IonIcons from 'react-native-vector-icons/Ionicons'
import AddPhoneNumber from '../../../reusables/addPhoneNumber';
import Button from '../../../reusables/button';

const PHONE_NUMBERS = [{
    mobileNumber: '8610100498',
    countryCode: '+91',
    isCall: true,
    isWhatsapp: true
}, {
    mobileNumber: '7502022870',
    countryCode: '+91',
    isCall: true,
    isWhatsapp: false
}]

function Profile({ navigation }) {

    const [actionSheet, setActionSheet] = useState(false);
    const [editItem, setEditItem] = useState({});
    const [isEdit, setEdit] = useState(false);

    const ActionSheetModal = useMemo(() => (
        <Modal
            isVisible={actionSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end'
            }}
        >
            <View style={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
            }}>
                <AddPhoneNumber setActionSheet={setActionSheet} item={editItem} isEdit={isEdit} />
            </View>
        </Modal>
    ), [actionSheet])

    return (
        <View style={{ flex: 1, }}>
            <ScrollView style={{ backgroundColor: '#fff' }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcons size={22} name="close" />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Profile</Text>
                    </View>
                </View>

                <View style={styles.imgContainer}>
                    <Image style={{ height: 180, resizeMode: 'cover' }} source={{ uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/google_pay__7__1200x768.jpeg' }} />
                    <View style={styles.overlay} />
                    <TouchableOpacity onPress={() => console.log("openGallery")} style={styles.iconContainer}>
                        <IonIcons size={36} name="camera" color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>my profile</Text>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            keyboardType='default'
                            // value={query}
                            // onChangeText={(searchString) => { setQuery(searchString) }}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType='default'
                            // value={query}
                            // onChangeText={(searchString) => { setQuery(searchString) }}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>gender</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Gender"
                            keyboardType='default'
                            // value={query}
                            // onChangeText={(searchString) => { setQuery(searchString) }}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={[styles.formGroup, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                        <Text style={styles.label}>user type</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="User Type"
                            keyboardType='default'
                            // value={query}
                            // onChangeText={(searchString) => { setQuery(searchString) }}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={{ height: 10, backgroundColor: '#f3f3f3' }} />

                <View style={styles.section}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.sectionTitle}>phone numbers</Text>
                        <TouchableOpacity onPress={() => {
                            setActionSheet(true); setEdit(false); setEditItem();
                        }}>
                            <Text style={[styles.sectionTitle, { fontWeight: 'normal' }]}><IonIcons size={18} name="add" color="#000" style={styles.mr10} /> add</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        PHONE_NUMBERS.map((item, index) => (
                            <View
                                style={[styles.formGroup, { justifyContent: 'space-between', paddingVertical: 15 }, index === PHONE_NUMBERS.length - 1 && { borderBottomWidth: 0 }]}
                                key={index}
                            >
                                <Text style={[styles.label, { fontWeight: 'bold', width: 'auto' }]}>
                                    {item.countryCode ? (item.countryCode) : ''} {item.mobileNumber}
                                </Text>
                                <View style={styles.iconGroup}>
                                    <IonIcons size={18} name="logo-whatsapp" color="#2db943" style={styles.mr10} />
                                    <IonIcons size={16} name="call" color="#2b3a7c" style={styles.mr10} />
                                    <TouchableOpacity onPress={() => {
                                        setActionSheet(true); setEdit(true); setEditItem(item);
                                    }}>
                                        <Text style={[styles.editIcon]}>edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <View style={[styles.section, styles.btnContainer]}>
                <Button type='secondary' label='cancel' onPress={() => navigation.goBack()} />
                <Button type='primary' label='save' onPress={() => navigation.goBack()} />
            </View>
            {ActionSheetModal}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    imgContainer: {
        backgroundColor: '#f7f7f7',
        overflow: 'hidden'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0,
        height: 180,
        zIndex: 1,
        width: Dimensions.get('screen').width
    },
    iconContainer: {
        height: 180,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 3,
        top: 0,
        left: 0
    },
    sectionTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 10,
        fontSize: 15
    },
    section: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    formGroup: {
        paddingVertical: 10,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#535353',
        textTransform: 'capitalize',
        width: 100,
        fontSize: 13
    },
    input: {
        flex: 1,
        paddingHorizontal: 7,
        paddingRight: 10,
        paddingLeft: 0,
        color: '#424242',
        fontSize: 13
    },
    iconGroup: {
        flexDirection: 'row'
    },
    mr10: {
        marginRight: 10
    },
    editIcon: {
        textTransform: 'capitalize',
        color: '#6da2d8'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width,
        alignItems: 'center'
    },
    saveBtn: {
        backgroundColor: '#2b3a7c',
        width: 150,
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 4,
    }
})

export default Profile