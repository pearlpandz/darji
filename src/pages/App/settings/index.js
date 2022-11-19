import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

function AccountPage() {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Account Page</Text>
                <Text>In Progress...</Text>
            </View>
        </SafeAreaView>
    )
}

export default AccountPage