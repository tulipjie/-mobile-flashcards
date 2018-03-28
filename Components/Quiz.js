/**
 * Created by sxy on 2018/3/28.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TextButton from './TextButton';
import SubmitButton from './SubmitButton';
import {green,red,white} from '../utils/colors';

class Quiz extends Component{
    state={
        answer:false
    };
    render(){
        return(
           <View style={styles.container}>
               {!this.state.answer
                   ? <View>
                       <Text style={{fontSize:65}}>Does React Native Work with Android?</Text>
                       <TextButton onPress={()=>this.setState({answer:!this.state.answer})}>Answer</TextButton>
                      </View>
                   :<View>
                       <Text style={{fontSize:70}}>Yes!</Text>
                       <TextButton onPress={()=>this.setState({answer:!this.state.answer})}>Question</TextButton>
                   </View>
               }

               <Text style={{height:200}}/>
               <SubmitButton style={styles.correct} >Correct</SubmitButton>
               <SubmitButton style={styles.incorrect}>Incorrect</SubmitButton>
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
    correct:{
        color:white,
        backgroundColor:green,
        borderWidth:0,
        paddingRight:93,
        paddingLeft:93,
    },
    incorrect:{
        color:white,
        backgroundColor:red ,
        marginTop:20,
        borderWidth:0
    }
});

export default Quiz;