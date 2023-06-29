import React, { useRef, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import styles from '../theme/calculatorTheme'
import CalculatorBtn from '../components/CalculatorBtn'

enum Operations {
    addition, subtraction, division, multiplication
}

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState('0');
  const lastOperation = useRef<Operations>();

  const clear = () => {
    setValue('0');
    setPrevValue('0');
  }

  const clearLast = () => {
    if(value.length === 2 && value.startsWith('-')) setValue('0');
    else if(value.length === 1) setValue('0');
    else setValue(value.slice(0, -1));
  }

  const writeNumber = (selectedNumber: string) => {
    // Validate if there's a point
    if(value.includes('.') && selectedNumber === '.') return;
    // Validate if there's a 0
    if(value.startsWith('0') || value.startsWith('-0')) {
        // Validate point
        if(selectedNumber === '.') {
            setValue(value + selectedNumber);
        // Validate if there's a point and other zero
        } else if (selectedNumber === '0' && value.includes('.')) {
            setValue(value + selectedNumber);
        // Validate if there isn't a zero and there's not a point
        } else if (selectedNumber !== '0' && !value.includes('.')) {
            setValue(selectedNumber);
        // Avoid 0000.00
        } else if (selectedNumber === '0' && !value.includes('.')) {
            setValue(selectedNumber);
        } else {
            setValue(value + selectedNumber);
        }
    } else {
        setValue(value + selectedNumber);
    }
  }

  const changeSign = () => {
    if(value.includes('-')) {
        setValue(value.replace('-', ''));
    } else {
        setValue('-' + value);
    }
  }

  const addPrevNumber = () => {
    let data = value;
    if(value.endsWith('.')) data = value.slice(0, -1);
    setPrevValue(data);
    setValue('0');
  }

  const btnAddition = () => {
    addPrevNumber();
    lastOperation.current = Operations.addition;
  }

  const btnDivision = () => {
    addPrevNumber();
    lastOperation.current = Operations.division;
  }

  const btnMultiplication = () => {
    addPrevNumber();
    lastOperation.current = Operations.multiplication;
  }

  const btnSubtraction = () => {
    addPrevNumber();
    lastOperation.current = Operations.subtraction;
  }

  const calculate = () => {
    const num1 = Number(value);
    const num2 = Number(prevValue);

    switch(lastOperation.current) {
        case Operations.addition: 
            setValue(`${num1 + num2}`);
            break;
        case Operations.subtraction: 
            setValue(`${num2 - num1}`);
            break;
        case Operations.division: 
            if(num1 == 0) {
                Alert.alert('Error', 'Cannot divide by 0'); 
                return;
            }
            setValue(`${num2 / num1}`);
            break;
        case Operations.multiplication: 
            setValue(`${num1 * num2}`);
            break;
        default:
            break;
    }
    setPrevValue('0');
  }

  return (
    <View>
        {(prevValue !== '0') && 
            <Text style={styles.answerSmall}>{prevValue}</Text>
        }
      <Text style={styles.answer} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
      <View style={styles.row}>
        <CalculatorBtn
            text={'C'}
            textColor='#000'
            color={'#999'} 
            action={clear}/>
        <CalculatorBtn
            text={'+/-'}
            textColor='#000'
            color={'#999'}
            action={changeSign}/>
        <CalculatorBtn
            text={'del'}
            textColor='#000'
            color={'#999'}
            action={clearLast} />
        <CalculatorBtn
            text={'/'}
            color={'#FF9427'}
            action={btnDivision} />
      </View>
      <View style={styles.row}>
        <CalculatorBtn
            text={'7'}
            action={writeNumber} />
        <CalculatorBtn
            text={'8'}
            action={writeNumber} />
        <CalculatorBtn
            text={'9'}
            action={writeNumber} />
        <CalculatorBtn
            text={'x'}
            color={'#FF9427'}
            action={btnMultiplication} />
      </View>
      <View style={styles.row}>
        <CalculatorBtn
            text={'4'}
            action={writeNumber} />
        <CalculatorBtn
            text={'5'}
            action={writeNumber} />
        <CalculatorBtn
            text={'6'}
            action={writeNumber} />
        <CalculatorBtn
            text={'-'}
            color={'#FF9427'}
            action={btnSubtraction} />
      </View>
      <View style={styles.row}>
        <CalculatorBtn
            text={'1'}
            action={writeNumber} />
        <CalculatorBtn
            text={'2'}
            action={writeNumber} />
        <CalculatorBtn
            text={'3'}
            action={writeNumber} />
        <CalculatorBtn
            text={'+'}
            color={'#FF9427'}
            action={btnAddition} />
      </View>
      <View style={styles.row}>
        <CalculatorBtn
            text={'0'}
            action={writeNumber}
            duplicateSize />
        <CalculatorBtn
            text={'.'}
            action={writeNumber} />
        <CalculatorBtn
            text={'='}
            color={'#FF9427'}
            action={calculate} />
      </View>
    </View>
  )
}

export default Calculator
