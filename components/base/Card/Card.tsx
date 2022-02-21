import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './cardStyles';


type Props ={
    children: JSX.Element | JSX.Element[],
    style?: any,
    onPress?: () => void
}

const Card = ({ children, onPress, style }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </Pressable>
    )
}

export default Card;