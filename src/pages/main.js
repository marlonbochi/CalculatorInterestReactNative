import React, { Component } from 'react';
import { Text, View, Alert, TextInput } from 'react-native';
import styles from '../styles/styleMain';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Left, Right, Icon, Button, Body, Title } from 'native-base';
import { TextInputMask } from 'react-native-masked-text'
import functions from '../services/functions';


export default class Main extends Component {
    static navigationOptions = {
        title: 'Início'
    };

    state = {
        valueDeposit: "120000",
        valueInterest: "15",
        months: "12"
    };

    calculate = () => { 
        const items = functions.calculateInterests(this.state.valueDeposit, this.state.valueInterest, this.state.months);
        console.log(items);
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
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                suffixUnit: '',
                                unit: 'R$ '
                            }}
                            value={this.state.valueDeposit}
                            onChangeText={text => {
                                this.setState({
                                    valueDeposit: text
                                })
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.label}>Juros por mês</Text>
                        <TextInputMask style={styles.input}
                            type={'custom'}
                            options={{
                                mask: '99',
                                unit: '% '
                            }}
                            value={this.state.valueInterest}
                            onChangeText={text => {
                                this.setState({
                                    valueInterest: text
                                })
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.label}>Meses para calcular</Text>
                        <TextInputMask style={styles.input}
                            type={'custom'}
                            options={{
                                mask: '99'
                            }}
                            value={this.state.months}
                            onChangeText={text => {
                                this.setState({
                                    months: text
                                })
                            }}
                            keyboardType="numeric"
                        />
                    </View>

                    <TouchableOpacity style={styles.calculateBtn} onPress={this.calculate}>
                        <Text style={styles.calculateBtnText}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    };
}