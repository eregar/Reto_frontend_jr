import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ImageBackground, FlatList, ActivityIndicator} from 'react-native';
import { weakYellow } from './ColorPalette';
import Icon from 'react-native-vector-icons/Ionicons';
import { strongYellow } from './ColorPalette';

const FoodList = ({filter}) =>{
    const [datos,setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFoods = async() => {
        try {
            const filtered = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+filter);
            const json = await filtered.json();
            let promises = []
            //console.log(json.meals);
            for(let j = 0; j <json.meals.length; j++){
                let id = json.meals[j].idMeal
                //console.log(id);
                promises.push( fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
                .then((foodvalue) => foodvalue.json())
                .then((foodjson) => foodjson.meals[0])
                );
            }
            await Promise.all(promises);
            let foods = []
            for (let d of promises){
                foods.push(d._W);
            }
            setDatos(foods);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        setLoading(true);
        //console.log(filter);
        getFoods();
    },[filter]);
    
    const renderItem = ({ item }) => (
        <Elemento
            key={item.idMeal}
            id={item.idMeal} 
            titulo ={item.strMeal} 
            area={item.strArea} 
            tag={item.strTags}
            thumb={item.strMealThumb} />
    );
    
    return (
    <View style={{width: '100%',flex: 1}}>
        {loading? 
        <ActivityIndicator/> :
        (<FlatList
        style = {{paddingHorizontal: '5%'}}
        data = {datos}
        renderItem = {renderItem}
        columnWrapperStyle = {{justifyContent: 'space-between'}}
        numColumns ={2}
        sep/>)}
    </View>
    );
}

const Elemento = ({id,titulo,area,tag,thumb}) =>{
    const image = { uri: thumb };

let firstTag ='';
if(tag){
firstTag = tag.split(',')[0];
}
    return(
        <View style={{padding: 5, flex: 1, maxWidth:'50%'}}>
            <View style={[styles.elementContainer,styles.elevated]}>
                <View style={styles.elevated}>
                <ImageBackground
                source={image}
                resizeMode="cover"
                imageStyle={{ borderRadius: 5}}
                style={styles.foodImg}>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                    {tag? <Text style={[{backgroundColor: 'white'},styles.foodTag]} >{firstTag}</Text>:null}
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style = {styles.foodArea}>{area}</Text>
                        <Text style = {styles.foodTitle}>{titulo}</Text>
                    </View>
                </ImageBackground>
                </View>
                <View style={{flexDirection:'row',paddingVertical:5}}>
                    <Icon style={styles.icono} size={20} name='time-outline'/>
                    <Text style={styles.precioText}>$ {id}.00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    foodTitle: {
        //flex: 1,
        textAlign: 'left',
        textAlignVertical:'bottom',
        color: weakYellow,
        marginHorizontal: 3
    },
    foodArea:{
        //flex: 1,
        textAlign: 'left',
        textAlignVertical:'bottom',
        fontSize: 13,
        color: 'white',
        marginHorizontal: 3,
    },
    foodTag:{
        textAlign: 'right',
        color: weakYellow,
        borderRadius: 2,
        fontSize: 12,
        paddingHorizontal: 2,
        margin: 3
        
    },
    foodImg:{
        height: 144,//hacer esto una variable dependiente de width
        justifyContent: 'flex-end'
    },
    elementContainer:{
        backgroundColor: 'white',
        borderRadius: 5,
    },
    elevated: {
        elevation: 5,
    },
    precioText:{
        flex: 1,
        textAlign: 'right',
        paddingEnd: 5
    },
    icono:{
        flex: 1,
        textAlign: 'left',
        paddingStart: 5,
        color: strongYellow,
        alignSelf:'center'
    }

})

export default FoodList;