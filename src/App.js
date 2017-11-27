import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAyiTE4IZbVD1pZKuyEI-h6_E10P4xbslU',
            authDomain: 'auth-bcc83.firebaseapp.com',
            databaseURL: 'https://auth-bcc83.firebaseio.com',
            projectId: 'auth-bcc83',
            storageBucket: 'auth-bcc83.appspot.com',
            messagingSenderId: '268613882703'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
