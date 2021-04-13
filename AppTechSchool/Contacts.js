import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';
import Card2 from "./Components/ContactCard";

const image = {
    uri: "https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/640_360/technique-could-check-integrity-of-computer-chips-and-detect-tampering-325079.jpg" ,
   width: 375 ,
   height: 100
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
  
  const others = {
    uri:'https://lh3.googleusercontent.com/proxy/Uslv9yrL6SmtgqfML85ol_-1-rf0gALYIWrataNWoQHhG8Po4-O-u4RCkJHHU1aYSBIuGX7d-HHb-ygOGbUQ-grHLv8xpoH70Wvc7AmDJd6X20iG5gqN9ZuAbDMJPxmJPyhZS9gb0oJsMIxes1EDrSQMAUvTTD8g--gCH_L81BH6oAfubKVhi_wU2ZQr',
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
  
  

const ContactScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Contacts</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      

      <Card2 title="Contact Tech School at:" imageSS={require('./Assets/TechSchoolImage.jpg')} content="123-456-7890" content2="TechSchool.Suport@gmail.com" content3="Tech.teachers@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs.Principle at:" imageSS={require('./Assets/dogP.jpg')} content="321-654-0987" content2="Principle.Tech@gmail.com" content3="Principle.Suport@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mr.Math&Sci\ at:" imageSS={require('./Assets/MathChalk.jpg')} content="314-195-5091" content2="Math&Science.Tech@gmail.com" content3="Math.Science@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs.Enlish at:" imageSS={require('./Assets/BooksEnlish.jpg')} content="877-788-8787" content2="English.Tech@gmail.com" content3="Enlish.Teach@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs.Art&Music at:" imageSS={require('./Assets/TvArt.jpg')} content="111-222-2633" content2="Art&Music.Tech@gmail.com" content3="Art.Music@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mr.Gym at:" imageSS={require('./Assets/Gym.jpg')} content="882-777-5559" content2="Gym.Tech@gmail.com" content3="Gym.Teach@yahoo.com"/>


    </View>

</ScrollView>

<View style={styles.navi2}>
       <View>
       <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
       <Image source={home} style={{marginLeft:12,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:10,}}/>
       </View>

       <View>
       <Button title="Staff" onPress={() => props.navigation.navigate('About')}/> 
       <Image source={about} style={{marginLeft:9,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </View>

       <View>
       <Button title="Contacts" onPress={() => props.navigation.navigate('Contacts')}/> 
       <Image source={contact} style={{marginLeft:22,}}/>
       <Image source={require('./Assets/Line.png')} style={{marginLeft:22,}}/>
       </View>

       <View>
       <Button title="Festivals" onPress={() => props.navigation.navigate('Fest')}/> 
       <Image source={fest} style={{marginLeft:16,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:18,}}/>
       </View>

       <View>
       <Button title="Others" onPress={() => props.navigation.navigate('Sub')}/> 
       <Image source={others} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:13,}}/>
       </View>

       <View>
       <Button title="Sech" onPress={() => props.navigation.navigate('Sech')}/> 
       <Image source={Sech} style={{marginLeft:10,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </View>
 
       </View>

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
        marginLeft: 115,
    
      },
      navi2:{
        height: 80,
    flexDirection:'row',
    backgroundColor: "white",
      },
      

});

export default ContactScreen;
//975-263-6031 = Mrs.Enlish, omg-whe-yqca