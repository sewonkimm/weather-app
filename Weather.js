import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "Go outside!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "Keep stay inside",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subtitle: "gray...",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Cold",
        subtitle: "Keep your coat on",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Is like rain",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "Don't know what to do",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
      }
}
function Weather({ weathername, temp }){
    return(
        <LinearGradient 
            colors={weatherCases[weathername].colors} 
            style={styles.container} 
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={130} name={weatherCases[weathername].icon} />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weathername].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weathername].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.porpTypes = {
    temp: PropTypes.number.isRequired,
    weathername: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
})