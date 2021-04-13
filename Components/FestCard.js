import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity, FlatList } from 'react-native';

const Card3 = props => {
    return (
        <View>
        <View style={styles.Views}>
            <View style={{marginTop: 5, marginLeft: 5, marginBottom: 5,}}>
            </View>
            <Text style={{color: '#e3ecff',}}>.</Text>

                <View style={{width: 340, margin: 5,}}>
                    <Text style={{fontSize: 23,}}>{props.title}</Text>
                    <Text style={{fontSize: 18,}}></Text>
                    <Text style={{fontSize: 18,}}>{props.content}</Text>
                    <Text style={{fontSize: 18, marginTop: 6,}}>{props.content2}</Text>
                    <Text style={{fontSize: 18, marginTop: 6, color: "blue",}} onPress={() => Linking.openURL('http://google.com')}>{props.content3}</Text>
                </View>
            </View>
            </View>
    );
};



const styles = StyleSheet.create({
Views:{
    flexDirection:'row',
    borderColor: "black",
    borderWidth: 3, 
    height: 260,   
    width: 369,   
    backgroundColor: "transparent",
    marginLeft: 3,
},

});

export default Card3;
//          <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
//            <Image source={props.imageSS} />
