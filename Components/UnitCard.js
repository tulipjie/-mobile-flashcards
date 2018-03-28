/**
 * Created by sxy on 2018/3/28.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SubmitButton from './SubmitButton';
import {gray,white,black} from  '../utils/colors';

class UnitCard extends Component{
    render(){
        return (
           <View style={styles.container}>
               <Text style={{height:20}}/>
               <Text style={{fontSize:70}}>udacicards</Text>
               <Text style={styles.numberText}>3 cards</Text>
               <Text style={{height:200}}/>
               <SubmitButton>Add Card</SubmitButton>
               <SubmitButton style={styles.quizBtn}>Start Quiz</SubmitButton>
           </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding:40,
        marginTop:20,
        marginLeft:10,
        marginRight:10
    },
    numberText:{
        fontSize:35,
        color:gray,
        padding:20
    },
    quizBtn:{
        color:white,
        backgroundColor:black,
        marginTop:20
    }
});
export default UnitCard;