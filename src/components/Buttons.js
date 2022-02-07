/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PRESS_ME } from '../constants/constants';

const Buttons = ({ onPress, style }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={style}>
                <Text style={styles.appButtonText}>{PRESS_ME}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});
export default Buttons;
