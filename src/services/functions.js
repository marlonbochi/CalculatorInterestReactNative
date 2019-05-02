import { AsyncStorage } from "react-native";
import Values from "../Models/Values";


class Functions {

    async saveHistoric(arrayHistorcic) {

        const stringHistorical = await AsyncStorage.getItem('historical');
        let arrayHistorical = JSON.parse(stringHistorical);

        arrayHistorcic.push(arrayHistorcic);

        _storeData = async () => {
            try {
              await AsyncStorage.setItem('', JSON.stringify(historical));
            } catch (error) {
              // Error saving data
            }
          };
    }

    async getHistorical() {
        const stringHistorical = await AsyncStorage.getItem('historical');
        return JSON.parse(stringHistorical);
    }

    calculateInterests(valueDeposit, valueInterest, months) {
        let valueOld = this.integerToFloat(valueDeposit);
        let newValue = this.integerToFloat(valueDeposit);

        const items = new Array();        
        
        for (let index = 0; index < parseInt(months); index++) {
          const value = new Values();
          let added = Math.round(((newValue * (parseInt(valueInterest) / 100)) * 100)) / 100;
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
        const valueFloat = parseFloat(value);

        return valueFloat / 100;
    }
}

const functions = new Functions();

export default functions;