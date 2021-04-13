import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Tooltip} from 'react-native-elements';
import MapView from 'react-native-maps';


const image = {
    uri: "https://cnusdk12-coronahs.ss18.sharpschool.com/UserFiles/Servers/Server_213669/Image/Our%20School/Campus%20Map/School%20Map%20Banner.jpg" ,
   width: 375 ,
   height: 100
};


  const about = {
    uri:'https://p.kindpng.com/picc/s/21-211168_transparent-person-icon-png-png-download.png',
    width: 30,
    height: 30,  
    justifyContent: 'center',
  };
  
  const contact = {
    uri:'https://icon-library.com/images/phone-icon-transparent-background/phone-icon-transparent-background-0.jpg',
    width: 30,
    height: 30,  
    justifyContent: 'center',
  };
  
  const fest = {
    uri:'https://i.pinimg.com/originals/e3/a6/28/e3a6286575945e680d473313ba2b2a5d.png',
    width: 40,
    height: 30,  
    justifyContent: 'center',
  };
  
  const others = {
    uri:'https://p7.hiclipart.com/preview/1015/72/40/cartoon-map-euclidean-vector-tourist-map-vector-map.jpg',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  
  const Sech = {
    uri:'https://www.vhv.rs/dpng/d/199-1994720_calendar-icons-deadline-vector-transparent-calendar-icon-hd.png',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  

  const link = {
    uri:'https://www.pinclipart.com/picdir/middle/451-4511115_the-media-school-for-creative-content-background-online.png',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  

const MapScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Location</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      
      <Tooltip popover={<Text>TechSchool Location</Text>}>
<MapView style={{height: 370, width: 370,}} showsUserLocation={true} region={{
        latitude: 42.066446,
        longitude: -86.503042,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }}>

<MapView.Marker
            coordinate={{
              latitude: 42.06606,
              longitude: -86.503042,
          }}
            title={"Tech School"}
            description={"There is no tech school, so i put the location to Brown School"}
         />
         </MapView>



            <Text></Text>
            <Text></Text>
            <Text style={{marginLeft: 15, fontSize: 20,}}>Adress: 410 Vine St, St Joseph, MI 49085</Text>
            <Text></Text>

            </Tooltip>

      <View style={{height:200,}}></View>

      
    </View>

</ScrollView>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <View style={styles.navi2}>
       <View>
         <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
       <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
       <Icon name='home' size={30} color='black' style={{marginLeft:12,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:10,}}/>
         </TouchableOpacity>
       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('About')}>

       <Button title="Staff" onPress={() => props.navigation.navigate('About')}/> 
       <Image source={about} style={{marginLeft:9,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Contacts')}>

       <Button title="Contacts" onPress={() => props.navigation.navigate('Contacts')}/> 
       <Image source={contact} style={{marginLeft:24,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:24,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Fest')}>

       <Button title="Events" onPress={() => props.navigation.navigate('Fest')}/> 
       <Image source={fest} style={{marginLeft:13,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:14,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Sub')}>

       <Button title="Others" onPress={() => props.navigation.navigate('Sub')}/> 
       <Image source={require('./Assets/Question.png')} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:13,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Sech')}>

       <Button title="Sche" onPress={() => props.navigation.navigate('Sech')}/> 
       <Image source={Sech} style={{marginLeft:10,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Map')}>

       <Button title="Map" onPress={() => props.navigation.navigate('Map')}/> 
       <Image source={others} style={{marginLeft:10,}}/>
       <Image source={require('./Assets/Line.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Link')}>

       <Button title="Media" onPress={() => props.navigation.navigate('Link')}/> 
       <Image source={link} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:12,}}/>
       </TouchableOpacity>

       </View>
 
       </View>
       </ScrollView>
</View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      HeaderT: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 44,
        marginTop: 0,
        width: 475,
        marginLeft: 115,
    
      },
      navi2:{
        height: 90,
    flexDirection:'row',
    backgroundColor: "white",
      },
      

});

export default MapScreen;
//975-263-6031 = Mrs.English, omg-whe-yqca