import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Alert, AlertIOS, Platform } from 'react-native';
import ClothList from './clothListView';
import { HOST } from '../../../../env';

function ClothSelection({navigation, route}) {
    const {orderId} = route.params;
    const [cloths, setCloths] = useState([])

    const getData = async () => {
        try {
            const url = `${HOST}/api/cloths`;
            const { data } = await axios.get(url, {withCredentials: true})
            if(data) {
                setCloths(data)
            }
        } catch (error) {
            console.log(error.response.data);
            const msg = Object.values(error.response.data).map(a => a.toString()).join(', ') || 'Something went wrong!';
            if (Platform.OS === 'android') {
                Alert.alert('Warning', msg);
            } else {
                AlertIOS.alert(msg);
            }
        }
    }

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <ScrollView>
            <View style={{paddingTop: 20}}>
                <ClothList title="linen" orderId={orderId} navigation={navigation} cloths={cloths.filter(a=> a.material === 'linen')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});

export default ClothSelection