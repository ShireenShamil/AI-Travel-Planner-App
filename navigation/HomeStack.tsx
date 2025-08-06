import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export type HomeStackParamList = {
    HomeMain: undefined;
    NewTrip: undefined;
    PlanTrip: {trip:any};
    AIChat: undefined;
    MapScreen: undefined;
}

export type TabNavigatorParamList = {
    Home: undefined;
    Guides: undefined;
    Profile : undefined;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList & TabNavigatorParamList>
const HomeStack = () => {

    const Navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Home Stack</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   
});

export default HomeStack;