import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../styles/styleMain';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Main extends Component {
    static navigationOptions = {
        title: 'Calculadora de juros'
    };

    render() {
        return(
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
        )
    };
}