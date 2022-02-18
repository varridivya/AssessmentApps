/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { useSelector } from 'react-redux';
import thumbIcon from '../images/thumbIcon.png';
import Buttons from '../components/Buttons';
import PropTypes from 'prop-types';

const ScreenTwo = (props) => {
    const { name } = useSelector(state => state.userReducer);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameStyle}>Hi, {name}</Text>
            </View>
            <View style={styles.container1}>
                <Buttons onPress={() => props.navigation.navigate('ScreenThree')} style={styles.appButtonContainer} />
                <Buttons style={[styles.appButtonContainer, { backgroundColor: 'grey' }]} onPress={() => props.navigation.navigate('ScreenThree')} />
                <Buttons style={[styles.appButtonContainer, { backgroundColor: '#007bff' }]} onPress={() => props.navigation.navigate('ScreenThree')} />
                <SwipeButton
                    containerStyles={{ borderRadius: 8 }}
                    disabled={false}
                    swipeSuccessThreshold={70}
                    height={45}
                    width={325}
                    title="Slide to continue"
                    onSwipeSuccess={() => props.navigation.navigate('ScreenThree')}
                    railBackgroundColor="white"
                    railStyles={{ borderRadius: 5 }}
                    thumbIconImageSource={thumbIcon}
                    thumbIconStyles={{ borderRadius: 5, backgroundColor: 'black' }}
                />
            </View>
        </View>
    );
};
ScreenTwo.props = {
    navigation: PropTypes.any,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(35,33,49)',
    },
    container1: {
        flex: 1,
        paddingTop: '85%',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'rgb(35,33,49)',
    },
    appButtonContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
        margin: 10,
        color: 'yellow',
    },
});
export { ScreenTwo };
