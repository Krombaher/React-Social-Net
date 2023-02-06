import React, {FC} from "react";
import {WrappedFieldProps} from "redux-form";

export const Input: FC<WrappedFieldProps> =
    ({
         input,
         meta,
         ...props
     }) => {

    const someError = meta.touched && meta.error

        return (
            <>
                    <input
                        {...input}
                        {...props}
                    />
                {someError && <span style={{color: '#f82121'}}>'required'</span>}
            </>
        )
    }