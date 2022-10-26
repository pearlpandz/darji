import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

function Header({ title, icon, isIconRequired, onPress }) {
    return (
        <View style={[styles.horizontalAlign, styles.header]}>
            {isIconRequired && (<Pressable onPress={onPress}>
                <IonIcons name={icon} size={20} style={{ marginRight: 10 }} />
            </Pressable>)}
            <View style={styles.centeAlign}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    horizontalAlign: {
        flexDirection: 'row'
    },
    centeAlign: {
        alignItems: 'center',
        flex: 1
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Header