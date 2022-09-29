import React, { forwardRef } from 'react';
import { TextFeild } from '@mui/material';

interface inputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:inputType, ref)) => {
    return(
        <TextFeild
        variant ="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type="text"
        {...props}
        ></TextFeild>

    )
}