const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;
const minUserNameLength = 4;

export const UPDATED_FORM = "UPDATED_FORM";

export const validateInput = (name, value) => {
    let hasError = false;
    let error = '';

    switch (name) {
        case 'email':
            if(value.trim() === '') {
                hasError = true;
                error = 'Debes ingresar un email';
            } else if(!formatEmail.test(value)) {
                hasError = true;
                error = 'El email ingresado no es válido';
            } else {
                hasError = false;
                error = '';
            }
            break;

        case 'password':
            if(value.trim() === '') {
                hasError = true;
                error = 'Debes ingresar una contraseña';
            } else if(value.length < minPasswordLength) {
                hasError = true;
                error = `Debe tener al menos ${minPasswordLength} caracteres`;
            } else {
                hasError = false;
                error = '';
            }
            break;
        
        case 'userProfileName':
            if(value === ''){
                hasError = true;
                error = 'Debes ingresar tu nombre'
            } else if(value.length < minUserNameLength){
                hasError = true;
                error = `Debe tener al menos ${minUserNameLength} caracteres`;
            } else {
                hasError = false;
                error = '';
            }
    
        default:
            break;
    }
    return { hasError, error };
}

export const onInputChange = (name, value, dispatch, formState) => {
    const {hasError, error} = validateInput(name, value);
    
    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if(key === name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }
    
    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid,
        }
    })
}

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);

    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if(key === name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
        }
    })
}