import {AsyncStorage} from 'react-native';

const DECKS_STORAGE_KEY='WordsCard:card';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results=>JSON.parse(results))
}
export function getDeck() {
    
}
export function saveDeckTitle(title) {
     return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
         [title]:{
             title
         }
     }))
}
export function addCardDeck({question,answer,title}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results)=> {
            const data = JSON.parse(results);
            data[title] = {
                [title]: {
                    title,
                    questions: {
                        question,
                        answer
                    }
                }
            }
        })
}
