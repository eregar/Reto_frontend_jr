import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { weakGray, reddish} from './ColorPalette';
import Icon from 'react-native-vector-icons/Ionicons';


const Location = () =>{
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={{flexDirection:'row',width:'100%'}} 
                onPress={() => alert('select location!')}>
                <Icon style={{alignSelf: 'center',color: reddish}} size={25} name='md-location-sharp' />
                <Text  style={styles.textStyle}> Select location... </Text>
                <Icon style={{alignSelf: 'center'}} size={25} name='filter' />
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        borderBottomWidth: 1,
        flexDirection:'row',
        width:'100%',
        backgroundColor: 'white', 
        borderBottomColor: weakGray,
        paddingHorizontal: '5%',
    },
    textStyle:{
        padding:7,
        flex: 1,
        color: 'gray',
    }

});
export default Location;