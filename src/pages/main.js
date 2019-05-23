/** Imports */
import React, { Component } from 'react';
import { Text, View, Alert, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from '../styles/styleMain';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Left, Right, Icon, Button, Body, Title } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import Toast, {DURATION} from 'react-native-easy-toast';
import { NavigationEvents } from 'react-navigation';
import functions from '../services/functions';

/** Imports */


export default class Main extends Component {

    constructor(props) {
        super(props);

        this.valueDeposit = "";
        this.valueInterest = "";
        this.months = "";
        this.items = [];

        this.state = { refresh: false };
    }

    static navigationOptions = {
        title: 'Início'
    };

    getHistoricInfo() {

        if (this.props.navigation.getParam("valueDeposit", "") != "") {

            this.valueDeposit = this.props.navigation.getParam("valueDeposit", "");
            this.valueInterest = this.props.navigation.getParam("valueInterest", "");
            this.months = this.props.navigation.getParam("months", "");
            
            this.calculate(false);
        }
    };

    calculate(save){
        if (this.valueDeposit.replace(/[^\d]+/g,'') == 0 || this.valueInterest == 0 || this.months == 0) {
            this.refs.toast.show('Preencha todos os campos', 1500);
            this.items = [];
            return false;
        }
        const items = functions.calculateInterests(this.valueDeposit, this.valueInterest, this.months, save);
        this.items = items;

        if (save) {
            this.setState({refresh: !this.state.refresh});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={this.getHistoricInfo()} />
                <Header androidStatusBarColor="#0a54cc" style={styles.headerColor}>                    
                    <Body style={styles.bodyTitle}>
                        <Title style={ styles.headerTitle }>Calculadora</Title>
                    </Body>
                </Header>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.label}>Valor depositado</Text>
                        <TextInputMask
                            style={styles.input}
                            ref="valueDeposit"
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                suffixUnit: '',
                                unit: 'R$ '
                            }}
                            value={this.valueDeposit}
                            onChangeText={text => {
                                this.valueDeposit = text
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.label}>Juros por mês %</Text>
                        <TextInputMask style={styles.input}
                            type={'custom'}
                            options={{
                                mask: '99'
                            }}
                            value={this.valueInterest}
                            onChangeText={text => {
                                this.valueInterest = text
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
                            value={this.months}
                            onChangeText={text => {
                                this.months = text
                            }}
                            keyboardType="numeric"
                        />
                    </View>

                    <TouchableOpacity style={styles.calculateBtn} onPress={() => { this.calculate(true); }}>
                        <Text style={styles.calculateBtnText}>Calcular</Text>
                    </TouchableOpacity>

                    {this.items.length > 0 ?
                        (
                        <SafeAreaView style={styles.grid}>
                            <View style={styles.items}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Mês</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Anterior</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Add</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Novo</Text>
                                </View>
                            </View>
                            <FlatList                            
                                data={this.items}
                                extraData={this.state.refresh}
                                keyExtractor={item => item.month}
                                renderItem={({ item }) => {
                                    return (
                                    <View style={styles.items}>
                                        <View style={styles.item}>
                                            <Text style={styles.itemText}>{item.month}</Text>
                                        </View>
                                        <View style={styles.item}>
                                            <Text style={styles.itemText}>{item.old}</Text>
                                        </View>
                                        <View style={styles.item}>
                                            <Text style={styles.itemText}>{item.added}</Text>
                                        </View>
                                        <View style={styles.item}>
                                            <Text style={styles.itemText}>{item.new}</Text>
                                        </View>
                                    </View>
                                    );
                                }}
                            />
                        </SafeAreaView>)
                        : <Text></Text>
                    }
                </ScrollView>
                <Toast ref="toast" position="bottom" />
            </View >
        )
    };
}