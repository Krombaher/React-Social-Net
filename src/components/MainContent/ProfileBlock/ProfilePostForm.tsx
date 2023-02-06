import React from 'react'
import s from './ProfileBlock.module.scss'
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../common/FormsControl/Textarea";

export const maxLength100 = maxLengthCreator(100)

export const ProfilePostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.profilePostAdd}>
            <Field
                placeholder={'Enter text...'}
                name={'newPostText'}
                component={Textarea}
                validate={[required, maxLength100]}
            />
            <button>Add Post</button>
        </form>
    )
}
