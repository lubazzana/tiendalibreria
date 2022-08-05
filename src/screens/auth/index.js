import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { colors } from "../../constants/themes/colors";
import { signup } from "../../store/actions/auth.action";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const title = 'REGÍSTRATE';
    const message = '¿Ya tienes una cuenta?';
    const messageAction = 'Registrar cuenta';
    const messageTarget = 'Registrar cuenta';
    const titleButton = 'Crear cuenta'

    const onHandlerAuth = () => {
        dispatch(signup(email, password));
    }

    const onHandleChange = (text, type) => {
        if(type === 'email') {
            setEmail(text);
        } else {
            setPassword(text)
        }
    }

    return(
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='nombre@gmail.com'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => onHandleChange(text, 'email')}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='********'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                />
                <Button 
                    title={titleButton}
                    color={colors.tertiary} 
                    onPress={onHandlerAuth}
                />
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log(messageTarget)}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

export default AuthScreen;