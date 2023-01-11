import React from 'react';
import { setCookie } from 'nookies';
import {Button} from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import {RegisterFormSchema} from "../../../utils/validations"
import {FormField} from "../../FormField";
import {CreateUserDto, LoginDto} from "../../../utils/api/types";
import {UserApi} from "../../../utils/api";
import Alert from "@mui/material/Alert";

interface RegisterFormProps {
    onOpenRegister: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenRegister, onOpenLogin}) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    });

    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await UserApi.register(dto);
            console.log(data);
            setCookie(null,'token',data.token, {
                maxAge: 30 * 23 * 60 * 60,
                path: '/',
            })
            setErrorMessage('');
        } catch (err: any) {
            console.warn('Ошибка при регистрации' , err)
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };

    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullName" label="Имя и фамилия"/>
                <FormField name="email" label="Почта"/>
                <FormField name="password" label="Пароль"/>
                {errorMessage && <Alert severity="error" className="mb-20">{errorMessage}</Alert>}
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid || form.formState.isSubmitting} onClick={onOpenRegister} type="submit"
                                color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};
