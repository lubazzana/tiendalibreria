import { Button, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import React, { useReducer, useState } from "react";
import { UPDATED_FORM, onFocusOut, onInputChange } from "../../utils/form";
import { signin, signup } from "../../store/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../../components/index";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const initialState = {
    email: { value: '', touched: false, hasError: true, error: '' },
    password: { value: '', touched: false, hasError: true, error: '' },
    isFormValid: false
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            }
        default:
            return state;
    }
}

const AuthScreen = () => {
    const [formState, dispatchFormState ] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const signupError = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const title = isLogin ? 'INICIA SESIÓN' : 'REGÍSTRATE';
    const message = isLogin ? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Registrar cuenta' : 'Iniciar sesión';
    const titleButton = isLogin ? 'Ingresar' : 'Crear cuenta';

    const onHandlerAuth = () => {
        if(isLogin) {
            if(formState.email.hasError === false && formState.password.hasError === false) {
                dispatch(signin(formState.email.value, formState.password.value))
            }
        } else {
            if(formState.email.hasError === false && formState.password.hasError === false) {
                dispatch(signup(formState.email.value, formState.password.value))
            }
        }
    }

    const onHandleChange = (text, type) => {
        onInputChange(type, text, dispatchFormState, formState);
    }

    const onBlurInput = (text, type) => {
        onFocusOut(type, text, dispatchFormState, formState);
    }

    const handleChangeAuth = () => {
        signupError.error = false;
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
                    onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'email')}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    label='Email'
                />
                <Input 
                    placeholder='********'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'password')}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    label='Contraseña'
                />
                <Button 
                    title={titleButton}
                    color={colors.tertiary} 
                    onPress={onHandlerAuth}
                />

                {
                    signupError.error && <Text style={styles.error}> {signupError.message}</Text>
                }
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