import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import SubmitButton from './SubmitButton';
import {white,black,gray} from '../utils/colors';
import {saveDeckTitle} from '../utils/api';
import {connect} from 'react-redux';


class NewDeck extends Component{
    state={
        title:''
    };
   submit=()=>{
       const title=this.state.title;
       saveDeckTitle(title);
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <Text style={{marginTop:50,alignSelf:'flex-start',fontSize:20}}>Deck Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(title) => {this.setState({title})}}
                    value={this.state.title}
                    placeholder='Deck Title'
                    placeholderTextColor={gray}
                    underlineColorAndroid={gray}
                    keyboardType="default"
                />
                <Text style={{height:200}}/>
                <SubmitButton style={styles.submitBtn}  onPress={this.submit}>Submit</SubmitButton>
                <Text>{JSON.stringify(this.state.title)}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    textInput:{
        marginTop:10,
        height: 40,
        width:400,
        borderColor: black,
        borderWidth: 1,
        borderRadius:5,
        alignSelf:'flex-start'

    },
    container:{
        alignItems:'center',
        marginLeft:40
    },
    question:{
        fontSize:70,
        alignSelf:'center'
    },
    submitBtn:{
        color:white,
        backgroundColor:black
    }
});

function mapStateToProps(state) {
    return {
        [state.title]:state.title
    }
}

export default connect (
    mapStateToProps
)(NewDeck);
