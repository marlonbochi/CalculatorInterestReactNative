/** Imports */
import React, { Component } from 'react';
import { Text, View, Alert, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from '../styles/styleMain';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Left, Right, Icon, Button, Body, Title } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import Toast, {DURATION} from 'react-native-easy-toast';
import functions from '../services/functions';
/** Imports */


export default class Main extends Component {

    static navigationOptions = {
        title: 'Início'
    };

    state = {
        valueDeposit: "",
        valueInterest: "",
        months: "",
        items: []
    };

    componentDidUpdate({ navigation }) {        
        // this.setState(
        //     {
        //         "valueDeposit": navigation.getParam('valueDeposit', ''),
        //         "valueInterest": navigation.getParam('valueInterest', ''),
        //         "months": navigation.getParam('months', '')
        //     }
        // );

        // if (this.state.valueInterest == "") {
        //     this.calculate();
        // }
    }

    calculate = () => {
        if (this.state.valueDeposit.replace(/[^\d]+/g,'') == 0 || this.state.valueInterest == 0 || this.state.months == 0) {
            this.refs.toast.show('Preencha todos os campos', 1500);
            this.setState({"items": []});
            return false;
        }
        const items = functions.calculateInterests(this.state.valueDeposit, this.state.valueInterest, this.state.months);
        this.setState({"items": items});
    };

    render() {
        return (
            <View style={styles.container}>
                <Header androidStatusBarColor="#0a54cc" style={styles.headerColor}>
                    <Left>
                        <Button transparent onPress={this.props.navigation.openDrawer}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body style={styles.bodyTitle}>
                        <Title style={ styles.headerTitle }>Calculadora</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={styles.scrollView}>
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
                        <Text style={styles.label}>Juros por mês %</Text>
                        <TextInputMask style={styles.input}
                            type={'custom'}
                            options={{
                                mask: '99'
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

                    {this.state.items.length > 0 ?
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
                                data={this.state.items}
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