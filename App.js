import React from 'react';
import {  Text, View,StatusBar} from 'react-native';
import Decks from './Components/Decks';
import UnitCard from './Components/UnitCard';
import Quiz from './Components/Quiz';
import AddCard from './Components/AddCard'
import NewDeck from './Components/NewDeck';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Reducers';
import {purple,white} from './utils/colors'
import {TabNavigator,StackNavigator} from 'react-navigation';
import {Contacts} from 'expo';

function UdaciStatusBar({backgroundColor,...props}){
    return (
        <View style={{backgroundColor,height:Contacts.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )

}
const Tabs=TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    AddEntry: {
        screen:NewDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
},{
    navigationOptions:{
        header:null
    },
    tabBarOptions:{
        activeTintColor:white,
        style:{
            height:56,
            backgroundColor: purple,
            shadowColor:'rgba(0,0,0,0.24)',
            shadowOffset:{
                width:0,
                height:3
            },
            shadowRadius:6,
            shadowOpacity:1
        }
    }
});

const MainNavigator=StackNavigator({
    Home:{
        screen:Tabs
    },
    UnitCard:{
        screen:UnitCard,
        navigationOptions:{
            headerTintColor:white,
            headerStyle:{
                backgroundColor:purple
            },
            title:'UNIT CARD'
        }
    },
    Quiz:{
        screen:Quiz,
        navigationOptions:{
            headerTintColor:white,
            headerStyle:{
                backgroundColor:purple
            },
            title:'QUESTION'
        }
    },
    AddCard:{
        screen:AddCard,
        navigationOptions:{
            headerTintColor:white,
            headerStyle:{
                backgroundColor:purple
            },
            title:'ADD CARD'
        }

    }
});
export default class App extends React.Component {
  render() {
    const store=createStore(reducer);
    return (
        <Provider  store={store}>
          <View style={{flex:1}}>
              <UdaciStatusBar backgroundColor={white} barStyle="light-content"/>
              <MainNavigator/>
          </View>
        </Provider>
    );
  }
}


