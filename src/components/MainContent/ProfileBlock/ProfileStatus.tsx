import React, {ChangeEvent} from 'react'
import s from './ProfileBlock.module.scss'

export type ProfileStatusPropsType = {
    userId: number
    changeStatusTC:(status:string) => void
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.props.changeStatusTC(this.state.status)
        this.setState({
            editMode: false
        })
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {

        return (
            <div className={s.status}>
                {
                    this.state.editMode
                        ?
                    <div>
                        <input
                            value={this.state.status}
                            style={{width: '350px'}}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onChangeStatus}
                        />
                    </div>
                    :
                    <div>
                        <span onClick={this.activateEditMode}>
                            {this.props.status || 'No status:('}
                        </span>
                    </div>
                }
            </div>
        )
    }
}