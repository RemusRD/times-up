import {Button, Text, View} from "react-native";
import {CountDownTimer} from "../components/CountDownTimer";
import React from "react";

export function Round(props) {
    return <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Button title={"❌"} onPress={props.onGuessed}/>
            <Text>{props.cards[0]}</Text>
            <Button title={"✔️"} onPress={props.onNotGuessed}/>
        </View>
        <CountDownTimer
            initialSeconds={50}
            initialActive={true}
            onFinish={props.onFinish}
        />


    </View>;
}
