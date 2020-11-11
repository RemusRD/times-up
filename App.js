import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {Round} from "./screens/Round";
import FinishedRound from "./screens/FinishedRound";

const Stack = createStackNavigator();

function NavStack({children}) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#621FF7',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            {children}
        </Stack.Navigator>
    );
}

export default function App() {
    let cards = ["abeja", "águila", "araña", "avispa", "ballena", "bisonte", "búfalo", "burro", "caballo", "camello", "canario", "cangrejo", "canguro", "caracol", "cebra", "cerdo", "chimpancé", "ciervo", "cisne", "cocodrilo", "elefante", "escarabajo", "escorpión", "foca", "gallina", "gallo", "gato", "golondrina", "hipopótamo", "hormiga", "jabalí", "jirafa", "león", "loro", "mosca", "mosquito", "oso", "oveja", "perdiz", "perro", "pingüino", "pollo", "saltamontes", "serpiente", "tigre", "topo", "toro", "tortuga", "vaca", "zorro"]
    const [remainingCards, setRemainingCards] = useState(shuffle(cards));
    const [guessedCards] = useState([]);
    const [notGuessedCards] = useState([]);
    const [score, setScore] = useState(0)


    return (
        <NavigationContainer>
            <NavStack>
                <Stack.Screen
                    name="Round">
                    {props => <Round {...props} onGuessed={notGuessedCard}
                                     cards={remainingCards}
                                     onNotGuessed={guessedCard}
                                     onFinish={(navigation) => navigation.navigate("FinishedRound",
                                         {cards: guessedCards.concat(notGuessedCards)})}
                    />}
                </Stack.Screen>
                <Stack.Screen
                    name="FinishedRound"
                    component={FinishedRound}
                />
            </NavStack>
        </NavigationContainer>
    );


    function guessedCard() {
        guessedCards.push({
            name: remainingCards[0],
            guessed: true
        })
        setRemainingCards(remainingCards.slice(1))
    }

    function notGuessedCard() {
        notGuessedCards.push({
            name: remainingCards[0],
            guessed: false
        })
        setRemainingCards(remainingCards.slice(1))
    }


}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
