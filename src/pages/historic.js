import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Header, Left, Right, Icon, Button, Body, Title } from "native-base";
import styles from "../styles/styleMain";
import functions from "../services/functions";

export default class Historic extends Component {
  state = {
    historical: []
  };

  componentDidMount() {
    this.getHistorical();
  }

  componentDidUpdate() {
    this.getHistorical();
  }

  static navigationOptions = {
    title: "Histórico"
  };

  getHistorical = () => {
    functions.getHistorical().then(historical => {
        if (historical !== null) {
            this.setState({ historical: JSON.parse(historical) });
        } else {
            this.setState({ historical: [] });
        }
      });
  }

  clearHistoric = () => {
    Alert.alert(
        'Excluir historico',
        'Deseja mesmo excluir o histórico?',
        [
          {
            text: 'Não',
            style: 'cancel',
          },
          {text: 'Sim', onPress: () => {
              functions.eraseHistorico().then(historic => {
                this.getHistorical();
              });
              
          }},
        ],
        {cancelable: false},
      );
  }

  remountHistoric = (valueDeposit, valueInterest, months) => {
    this.props.navigation.navigate('Main', 
        { 
            "valueDeposit": valueDeposit, 
            "valueInterest": valueInterest, 
            "months": months 
        }
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header androidStatusBarColor="#0a54cc" style={styles.headerColor}>
            <Body style={styles.bodyTitle}>
                <Title style={styles.headerTitle}>Histórico</Title>
            </Body>
            <Right >
                <TouchableOpacity style={styles.clearBtn} onPress={this.clearHistoric}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                </TouchableOpacity>
            </Right>
        </Header>
        <ScrollView styles={styles.container}>
          {this.state.historical.length > 0 ? (
            <SafeAreaView style={styles.gridHistoric}>
              <View style={styles.items}>
                <View style={styles.item}>
                  <Text style={styles.itemText}>Valor depositado</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>Juros pro mês</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>Meses</Text>
                </View>
              </View>
              <FlatList
                data={this.state.historical}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.items} >
                      <View style={styles.item}>                        
                        <TouchableOpacity style={styles.setHistoricBtn} onPress={ () => this.remountHistoric(item.valueDeposit, item.valueInterest, item.months) }>
                            <Text style={styles.clearBtnText}>{item.valueDeposit}</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemText}>
                          % {item.valueInterest}
                        </Text>
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemText}>{item.months}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
          ) : (
            <Text />
          )}
        </ScrollView>
      </View>
    );
  }
}
