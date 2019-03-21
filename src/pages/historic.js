import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right, Icon, Button, Body, Title } from 'native-base'
import styles from '../styles/styleMain';

export default class Historic extends Component {
    static navigationOptions = {
        "title": "Histórico"
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header androidStatusBarColor="#0a54cc" style={styles.headerColor}>
                    <Left>
                        <Button transparent onPress={this.props.navigation.openDrawer}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body style={styles.bodyTitle}>
                        <Title style={ styles.headerTitle }>Histórico</Title>
                    </Body>
                    <Right />
                </Header>
                <View styles={styles.container}>
                    <Text>Tela ainda não construida</Text>
                </View>
            </View>
        );
    };
};