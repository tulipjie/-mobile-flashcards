/**
 * Created by sxy on 2018/3/28.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {gray} from '../utils/colors';
import UnitCard from './UnitCard';
import TextButton from './TextButton';
import {getDecks} from '../utils/api';
class Decks extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={{height:20}}/>
                <TextButton style={{fontSize:35}} onPress={()=>this.props.navigation.navigate(
                    'UnitCard'
                )} >deck</TextButton>
                <Text style={styles.numberText}>3 cards</Text>
                <Text>{JSON.stringify(this.props)}</Text>
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