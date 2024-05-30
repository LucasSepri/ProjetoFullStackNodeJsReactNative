import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { AuthContext } from '../../context/AuthContext';

export default function SignIn() {
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function handleLogin() {
        if (email === '' || password === '') {
            return;
        }
        await signIn({ email, password });
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Digite seu Email'
                    style={styles.input}
                    placeholderTextColor={'#F0F0F0'}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder='Digite sua Senha'
                    style={styles.input}
                    placeholderTextColor={'#F0F0F0'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={20} color="#101026" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },
    logo: {
        marginBottom: 60,
        width: '90%',
        height: 150,
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 16,
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#FFF'
    },
    button: {
        width: '95%',
        height: 50,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026'
    }
});