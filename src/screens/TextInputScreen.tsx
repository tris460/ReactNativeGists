import React from 'react'
import { Text, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler'
import useForm from '../hooks/useForm'
import Title from '../component/Title'

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
                    <Title text='Text input' />
                    <Text style={styles.json}>
                        {JSON.stringify(form, null, 2)}
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholder="Name"
                        keyboardType="default"
                        autoCapitalize='words'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => onChange(value, 'email')}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => onChange(value, 'password')}
                        placeholder="Password"
                        keyboardType="visible-password"
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => onChange(value, 'phone')}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default TextInputScreen
