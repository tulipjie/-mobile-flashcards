import React,{Component} from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import {red} from '../utils/colors';

export default function TextButton({children,onPress,style=[]}) {
    return(
        <TouchableOpacity>
            <Text style={[styles.btn,style]} onPress={onPress}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    btn:{
       color:red ,
        fontSize:35,
        alignItems:'center',
        justifyContent:'center'
    }
});