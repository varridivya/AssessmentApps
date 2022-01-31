import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import { Go_BACK_TO_HOME_TEXT, HOME } from '../constants/constants';

const ScreenThree = ({ navigation }) => {
    const { name } = useSelector(state => state.userReducer);
    return (
        <View style={styles.root}>
            <View>
                <Text style={styles.nameStyle}>Hi, {name}</Text>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>{Go_BACK_TO_HOME_TEXT}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginBtn}>
                    <Text style={styles.loginText}>{HOME}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: { fontSize: 24, fontWeight: 'bold', textAlign: 'right', margin: 10 },
    loginBtn: {
        width: '50%',
        backgroundColor: '#009688',
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
});
export { ScreenThree };