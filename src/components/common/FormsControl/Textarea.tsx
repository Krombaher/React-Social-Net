import React, {FC} from "react";
import {WrappedFieldProps} from "redux-form";
import s from './Textarea.module.scss'

export const Textarea: FC<WrappedFieldProps> =
    ({
         input,
         meta,
         ...props
     }) => {

    const someError = meta.touched && meta.error

        return (
            <>
                    <textarea
                        className={someError ? s.textareaFormControl + ' ' + s.errorInput : s.textareaFormControl}
                        {...input}
                        {...props}
                    />
                {someError && <span style={{color: '#f82121'}}>'some error'</span>}
            </>
        )
    }