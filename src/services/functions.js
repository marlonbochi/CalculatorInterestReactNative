import AsyncStorage from "@react-native-community/async-storage";
import Values from "../Models/Values";

class Functions {
  async saveHistoric(arrayHistorcic) {
    const stringHistorical = await AsyncStorage.getItem("historical");
    let arrayHistorical = JSON.parse(stringHistorical) || [];

    arrayHistorical.push(arrayHistorcic);

    try {
      await AsyncStorage.setItem("historical", JSON.stringify(arrayHistorical));
    } catch (error) {
      // Error saving data
    }
  }

  async getHistorical() {
    return await AsyncStorage.getItem("historical");
  }

  async eraseHistorico() {
    return await AsyncStorage.clear();
  }

  calculateInterests(valueDeposit, valueInterest, months) {
    let valueOld = this.integerToFloat(valueDeposit);
    let newValue = this.integerToFloat(valueDeposit);

    const items = new Array();

    this.saveHistoric({
      valueDeposit: valueDeposit,
      valueInterest: valueInterest,
      months: months
    });

    for (let index = 0; index < parseInt(months); index++) {
      const value = new Values();
      let added =
        Math.round(newValue * (parseInt(valueInterest) / 100) * 100) / 100;
      newValue = Math.round((newValue + added) * 100) / 100;

      value.old = String(valueOld);
      value.month = String(index + 1);
      value.added = String(added);
      value.new = String(newValue);

      valueOld = newValue;

      items.push(value);
    }

    return items;
  }

  integerToFloat(value) {
    const valueFloat = parseFloat(value.replace(/[^\d]+/g, ""));

    return valueFloat / 100;
  }
}

const functions = new Functions();

export default functions;
