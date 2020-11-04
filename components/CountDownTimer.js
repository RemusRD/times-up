import React, {useState, useEffect} from 'react';
import {View, Text, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';

export const CountDownTimer = ({initialSeconds, initialActive, onFinish}) => {
    const navigation = useNavigation()
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(initialActive);


    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSecondsLeft(initialSeconds);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (secondsLeft === 0) {
                    setIsActive(false)
                    onFinish(navigation)
                    clearInterval(interval)
                } else {
                    setSecondsLeft(secondsLeft - 1);
                }
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, secondsLeft]);

    return (
        <View>
            <Text>{secondsLeft}</Text>
            <View>
                <Button
                    onPress={toggle}
                    title={isActive ? "Pause" : "Start"}/>
                <Button onPress={reset} title={"Reset"}/>
            </View>
        </View>
    );
}
