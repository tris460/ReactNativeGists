import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler'
import useForm from '../hooks/useForm'

const TextInputScreen = () => {
    const {form, onChange} = useForm({
        phone: 0,
        email: '',
        password: '',
        name: '',
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Text Input
                    </Text>
                    <Text style={{fontSize: 18, color: '#000', marginTop: 15}}>
                        {JSON.stringify(form, null, 2)}
                    </Text>
                    <TextInput
                        style={s.textInput}
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholder="Name"
                        keyboardType="default"
                        autoCapitalize='words'
                    />
                    <TextInput
                        style={s.textInput}
                        onChangeText={(value) => onChange(value, 'email')}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={s.textInput}
                        onChangeText={(value) => onChange(value, 'password')}
                        placeholder="Password"
                        keyboardType="visible-password"
                    />
                    <TextInput
                        style={s.textInput}
                        onChangeText={(value) => onChange(value, 'phone')}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const s = StyleSheet.create({
    textInput: {
        borderColor: '#999', 
        borderWidth: 2, 
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
    }
})

export default TextInputScreen
