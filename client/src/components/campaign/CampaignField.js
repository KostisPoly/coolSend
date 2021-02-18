import { TextField } from '@material-ui/core'
import React from 'react'

export default function CampaignField(props) {
    
    let errState = props.meta.touched && (props.meta.error !== undefined);
    let errText = errState ? props.meta.error : '';
    return (
        <div>
            {/* <input {...props.input} /> */}
            <TextField
                error={errState}
                helperText={errText}
                label={props.label}
                fullWidth
                placeholder={props.placeholder}
                variant="outlined"
                margin="normal"
                {...props.input}
            />
        </div>
    )
}
