/**
 * Created by sxy on 2018/3/28.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {gray} from '../utils/colors';

class Decks extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{height:20}}/>
                <Text style={{fontSize:35}}>udacicards</Text>
                <Text style={styles.numberText}>3 cards</Text>
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
        marginRight:10,
        borderBottomWidth:2
    },
    numberText:{
        fontSize:22,
        color:gray
    }
});

export default Decks;