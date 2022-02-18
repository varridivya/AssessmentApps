/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PRESS_ME } from '../constants/constants';
import PropTypes from 'prop-types';

const Buttons = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={props.style}>
            <Text style={styles.appButtonText}>{PRESS_ME}</Text>
        </TouchableOpacity>

    );
};
Buttons.props = {
    onPress: PropTypes.func,
    style: PropTypes.any,
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
