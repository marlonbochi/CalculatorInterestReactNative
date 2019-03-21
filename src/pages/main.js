import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../styles/styleMain';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Left, Right, Icon, Button, Body, Title } from 'native-base'


export default class Main extends Component {
    static navigationOptions = {
        title: 'Início'
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
                        <Title style={ styles.headerTitle }>Calc. de juros</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.label}>Valor depositado</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.label}>Juros por mês</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.label}>Meses para calcular</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.calculateBtn}>
                        <Text style={styles.calculateBtnText}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    };
}