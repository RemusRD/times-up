import React, {useState, useEffect} from 'react';
import {View, Text, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';

export const CountDownTimer = (props) => {
    let {seconds, active, onFinish} = props
    const [secondsLeft, setSecondsLeft] = useState(seconds);
    const [isActive, setIsActive] = useState(active);
    let navigation = useNavigation();

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSecondsLeft(seconds);
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
};
