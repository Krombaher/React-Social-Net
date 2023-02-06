import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../Utils/Validators/Validators";
import {maxLength100} from "../MainContent/ProfileBlock/ProfilePostForm";
import {Input} from "../common/FormsControl/Input";
import {FormDataType} from "./Login";

export const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required, maxLength100]} placeholder={'Email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength100]} placeholder={'Password'} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

 export const LoginReduxForm = reduxForm<FormDataType>({
    form:'login'
}) (LoginForm)