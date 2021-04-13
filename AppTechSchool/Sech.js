import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';

const image = {
    uri: "https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/640_360/technique-could-check-integrity-of-computer-chips-and-detect-tampering-325079.jpg" ,
   width: 375 ,
   height: 100
};

const QuestionMark = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
  width: 17,
  height: 17,
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



const SechScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Schedule</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      
      <Text style={{fontSize: 27, marginLeft: 10,}}>Today:</Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>5th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, opinion writing introduction" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, adding decimals" />
      <Com1 text="Music" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>4th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, Adverbs" />
      <Com1 text="Brake" />
      <Com1 text="Reading time, Guest reader" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, Power of 10" />
      <Com1 text="Art" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>3th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, Nouns" />
      <Com1 text="Brake" />
      <Com1 text="Reading time, Swich partners" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, Division 101" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>2th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, poems" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch" />
      <Com1 text="Math, adding" />
      <Com1 text="Art" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>1th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, sentence" />
      <Com1 text="Brake" />
      <Com1 text="Reading time, Pete the cat" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, adding" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>











      <Text></Text>
      <Text></Text>
      <Text></Text>
      
      <Text style={{fontSize: 27, marginLeft: 10,}}>Tomorrow:</Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>5th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, opinion writing imfomation paragraph" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, subtracting decimals" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>4th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, Adverbs in text" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, Power of 10 adding" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>3th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, finding nouns in text and making text with nouns" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, Division part 2" />
      <Com1 text="Art" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>2th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, poem structure" />
      <Com1 text="Brake" />
      <Com1 text="Reading time" />
      <Com1 text="Lunch" />
      <Com1 text="Math, adding 3-digit by 2-digit" />
      <Com1 text="Music" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <View>
      <Text></Text>
      <Text style={{fontSize: 20, marginLeft: 10,}}>1th Grade:</Text>
      <Text></Text>

      <Com1 text="School starts" />
      <Com1 text="What are we doing today?" />
      <Com1 text="Reading class, sentence writing" />
      <Com1 text="Brake" />
      <Com1 text="Reading time, Pete the cat" />
      <Com1 text="Lunch & Brake" />
      <Com1 text="Math, adding test" />
      <Com1 text="Pack up" />
      <Com1 text="School ends" /> 
      </View>

      <Text></Text>
      <Text></Text>


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
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:22,}}/>
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
       <Image source={require('./Assets/Line.png')} style={{marginLeft:7,}}/>
       </View>
 
       </View>
 
</View>

);

    function Com1(props) {
       
    const QuestionMark = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
        width: 17,
        height: 17,
        marginLeft: 10,
      };

    return <View style={{flexDirection: 'row',  borderColor: "black", marginBottom: 1, width: 355, borderWidth: 2, marginLeft: 10, backgroundColor: "lightblue",}}>
    <Text style={{fontSize: 19,  color: "purple",}}>{props.text}</Text>
</View>}
  
  function Greeting1(props) {
    const isHere = props.isHere;
    if (isHere) {
      return null
    }
    return null
}

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

export default SechScreen;
      //<Greeting1 isHere={true} />