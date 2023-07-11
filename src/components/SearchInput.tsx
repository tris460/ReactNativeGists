import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebounceValue from '../hooks/useDebounceValue';

interface Props {
    onDebounce: (value: string) => void;
}

const SearchInput = ({onDebounce}: Props) => {
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebounceValue(textValue);
    
    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);
    

    return (
        <View style={styles.container}>
            <View style={styles.inputBackground}>
                <TextInput 
                    placeholder='Search pokemon'
                    placeholderTextColor={'#777'}
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue} />
                <Icon
                    name="search-outline"
                    size={20}
                    color={'#777'} />
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
    },
    inputBackground: {
        backgroundColor: '#eee',
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        color: '#000',
        fontSize: 16,
        flex: 1
    }
})

export default SearchInput
