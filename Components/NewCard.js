import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import SubmitButton from './SubmitButton';
import {white,black,gray} from '../utils/colors';

class NewCard extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput
                    placeholder='new card'
                    placeholderTextColor={gray}
                    defaultValue=''
                    style={styles.input}
                    autoFocus:true
                    keyboardType:default
                />
                <Text style={{height:200}}/>
                <SubmitButton style={styles.submit}>Submit</SubmitButton>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    input:{
        marginTop:20,
        borderRadius:8,
        borderWidth:2,
        flex:1,
        fontSize:20,
        height:50,
        paddingRight:50,
        paddingLeft:50
    },
    container:{
        alignItems:'center',
    },
    question:{
        fontSize:70,
        alignSelf:'center'
    },
    submit:{
        color:white,
        backgroundColor:black
    }
});
export default NewCard;
