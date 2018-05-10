import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {gray,white,black} from '../utils/colors'
import SubmitButton from './SubmitButton'
import {connect} from 'react-redux'


class AddCard extends Component{
    state={
        questionText:'',
        answerText:''
    };
    render(){
        return(
            <View>
                <Text style={{marginTop:50,alignSelf:'flex-start',fontSize:20}}>Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(questionText) => this.setState({questionText})}
                    value={this.state.text}
                    placeholder='Question'
                    placeholderTextColor={gray}
                    underlineColorAndroid={gray}
                    keyboardType="default"
                />
                <Text style={{marginTop:50,alignSelf:'flex-start',fontSize:20}}>Answer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(answerText) => this.setState({answerText})}
                    value={this.state.text}
                    placeholder='Answer'
                    placeholderTextColor={gray}
                    underlineColorAndroid={gray}
                    keyboardType="default"
                />
                <SubmitButton style={styles.submit}>Submit</SubmitButton>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    textInput: {
        marginTop: 10,
        height: 40,
        width: 400,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'flex-start'

    },
    submit:{
        marginTop:200,
        color:white,
        backgroundColor:black,
        alignSelf:'center'
    }
});
export default connect()(AddCard);