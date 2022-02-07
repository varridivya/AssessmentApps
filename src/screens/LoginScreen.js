/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { setName } from '../redux';
// Native Module
import { NativeModules } from 'react-native';
import { appOnEmulator, LOGIN } from '../constants/constants';

// @flow
const LoginScreen = ({ navigation }) => {

    const { name } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const { DeviceModule } = NativeModules;
    const isEmulator = DeviceModule.isEmulator();
    return (
        <View style={styles.container}>
            {isEmulator && (
                <Text style={styles.yellowText}>{appOnEmulator}</Text>
            )}
            <Text style={styles.headingText}>{LOGIN}</Text>
            <TextInput
                placeholder="Enter Name"
                style={styles.inputView}
                onChangeText={(value) => dispatch(setName(value))}
                value={name}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')} style={styles.loginBtn}>
                <Text style={styles.loginText}>{LOGIN}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        width: '50%',
        backgroundColor: 'green',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },
    loginText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 9,
        borderColor: 'black',
        borderWidth: 2,
        height: '10%',
        justifyContent: 'center',
        padding: 20,
    },
    headingText: {
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export { LoginScreen };
