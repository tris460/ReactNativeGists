import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBackground}>
                <TextInput 
                    placeholder='Search pokemon'
                    placeholderTextColor={'#777'}
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false} />
                <Icon
                    name="search-outline"
                    size={20}
                    color={'#777'} />
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {},
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
