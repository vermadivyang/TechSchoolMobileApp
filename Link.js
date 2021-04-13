import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity, Alert, Platform  } from 'react-native';
import Card from "./Components/AboutPersonCard";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";



const image = {
     uri: "https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/media-1253555773-1534099205.jpg" ,
    width: 375 ,
    height: 100
};
const reading = {
  uri: 'data:image/jpeg;base64,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',
  width: 380,
  height: 200,
  alignItems: 'center',
  marginLeft: 10,
};



const home = {
    uri:'https://lh3.googleusercontent.com/proxy/NGjsMIIc9acP4oUGbFsqIG-WaWfsGU7jZaA4A-Whq4pgg6CeUghyakVGCZRS-dTI_uw1rys_jgV05iWzMXYVijwtN6Jx3aOqsr3kmm7b8Di2Lg-4DHJCotiG6ZgxvdMt9vE4HA',
    width: 30,
    height: 30,  
    justifyContent: 'center',
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
  
  const link = {
    uri:'https://www.pinclipart.com/picdir/middle/451-4511115_the-media-school-for-creative-content-background-online.png',
    width: 30,
    height: 31,  
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
  
  

const LinkScreen = props => {
    return (

        <View style={{flex: 1,}}>
<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>
      <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Media Center</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text style={{  marginLeft: 10, fontSize: 22, fontWeight: 'bold' ,}}>Reading Links:</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 10, color: "blue"}} onPress={() => Linking.openURL('https://www.getepic.com/')}>Epic</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('https://libbyapp.com/welcome')}>Libby</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('http://google.com')}>ReadingHight</Text>

          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>

          <Text style={{  marginLeft: 10, fontSize: 22, fontWeight: 'bold' ,}}>Math Links:</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 10, color: "blue"}} onPress={() => Linking.openURL('https://www.ixl.com/signin')}>IXL</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('https://connected.mcgraw-hill.com/connected/login.do')}>Math House</Text>
          <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('http://google.com')}>MathHight</Text>

          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>
          <Text style={{  fontSize: 50}}></Text>

          <Text style={{  marginLeft: 30, fontSize: 30,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('http://google.com')}>Smybaloo</Text>

          <Text></Text>
      <Text></Text>
      
      
      <MenuProvider style={{ flexDirection: "column", padding:70 }}>
        <Menu onSelect={value => alert(`${value}`)}>

          <MenuTrigger  >
          <Text style={{  marginLeft: 10, fontSize: 22, fontWeight: 'bold' ,}}>Game Links:</Text>
          </MenuTrigger  >

          <MenuOptions>
            <ScrollView>
            <MenuOption value={"Sche"}>
            <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 10, color: "blue"}} onPress={() => Linking.openURL('https://www.getepic.com/')}>CoolMath1</Text>
            </MenuOption>
            <MenuOption value={"Register"}>
            <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('https://libbyapp.com/welcome')}>CoolReading1</Text>
            </MenuOption>
            <MenuOption value={"Download"}>
            <Text style={{  marginLeft: 30, fontSize: 20,  marginTop: 5, color: "blue"}} onPress={() => Linking.openURL('http://google.com')}>SuperHight</Text>
            </MenuOption>
            <MenuOption value={"Closed"}>
              <Text style={{marginLeft: 30, fontSize: 23,}}>Close</Text>
            </MenuOption>
            </ScrollView>
          </MenuOptions>

        </Menu>
      </MenuProvider>



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
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Link')}>

       <Button title="Media" onPress={() => props.navigation.navigate('Link')}/> 
       <Image source={link} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line.png')} style={{marginLeft:12,}}/>
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
        color: '#e3ecff',
        fontWeight: 'bold',
        fontSize: 44,
        marginTop: 0,
        width: 475,
        marginLeft: 80,
    
      },
      navi2:{
        height: 90,
    flexDirection:'row',
    backgroundColor: "white",
      },
      
});

export default LinkScreen;
//          <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
