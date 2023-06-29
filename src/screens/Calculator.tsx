import React from 'react'
import styles from '../theme/calculatorTheme'
import CalculatorBtn from '../components/CalculatorBtn'
import { View, Text } from 'react-native'
import useCalculator from '../hooks/useCalculator'

const Calculator = () => {
  const {
    prevValue,
    value,
    clear,
    clearLast,
    changeSign,
    btnAddition,
    btnDivision,
    btnMultiplication,
    btnSubtraction,
    writeNumber,
    calculate,
  } = useCalculator();
  
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
