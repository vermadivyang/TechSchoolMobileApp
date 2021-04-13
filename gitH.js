import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Linking } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/SimpleLineIcons';


class Git extends Component{
    render() {
 	 return (
        <TouchableOpacity
        style={{
            width: 44,
            height: 44,
            marginLeft: 20
        }}

        >
            <Icon name='link' size={30} color='black'/>
        </TouchableOpacity>
 	 )
    };
}

export default withNavigation(Git);