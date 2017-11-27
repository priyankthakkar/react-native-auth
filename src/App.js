import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: null
        };
        this.renderContent = this.renderContent.bind(this);
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAyiTE4IZbVD1pZKuyEI-h6_E10P4xbslU',
            authDomain: 'auth-bcc83.firebaseapp.com',
            databaseURL: 'https://auth-bcc83.firebaseio.com',
            projectId: 'auth-bcc83',
            storageBucket: 'auth-bcc83.appspot.com',
            messagingSenderId: '268613882703'
        });

        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.setState({
                        loggedIn: true
                    });
                } else {
                    this.setState({
                        loggedIn: false
                    });
                }
            });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
            return (
                <View style={{ flexDirection: 'row', padding: 5 }} >
                    <Spinner size="large" />
                </View>
            );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
