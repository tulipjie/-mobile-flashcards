import React from 'react';
import {  Text, View } from 'react-native';
import Decks from './Components/Decks';
import UnitCard from './Components/UnitCard';
import Quiz from './Components/Quiz';
import NewCard from './Components/NewCard';

export default class App extends React.Component {
  render() {
    return (
      <View >
          <NewCard/>
      </View>
    );
  }
}


