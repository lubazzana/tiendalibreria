import { Button, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { signin, signup } from "../../store/actions/auth.action";

import { Input } from "../../components/index";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();

    const title = isLogin ? 'INICIA SESIÓN' : 'REGÍSTRATE';
    const message = isLogin ? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Registrar cuenta' : 'Iniciar sesión';
    const titleButton = isLogin ? 'Ingresar' : 'Crear cuenta';

    const onHandlerAuth = () => {
        dispatch(isLogin ? 
            signin(email, password)
            : signup(email, password)
        );
    }

    const onHandleChange = (text, type) => {
        if(type === 'email') {
            setEmail(text);
        } else {
            setPassword(text)
        }
    }

    const handleChangeAuth = () => {
        setPassword('');
        setEmail('');
        setIsLogin(!isLogin);
    }

    return(
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container}>
                <Input 
                    placeholder='nombre@gmail.com'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    value={email}
                    label='Email'
                />
                <Input 
                    placeholder='********'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    value={password}
                    label='Contraseña'
                />
                <Button 
                    title={titleButton}
                    color={colors.tertiary} 
                    onPress={onHandlerAuth}
                />
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={handleChangeAuth}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

export default AuthScreen;