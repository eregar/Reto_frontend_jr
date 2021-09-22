import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import DaySelector from '../DaySelector';

const MainMenu = () =>{
    return (
    <View style={{alignItems: 'center'}}>
        <Text >main menu</Text>
        <DaySelector style = {{flex: 1}}/>
        <ScrollView>
            <Text >scroll</Text>
        </ScrollView>
    </View>
    );
}

export default MainMenu;