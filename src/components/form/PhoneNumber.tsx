import 'react-international-phone/style.css';

import {
    BaseTextFieldProps,
    TextField,
} from '@mui/material';
import React from 'react';
import {
    defaultCountries,
    usePhoneInput,
} from 'react-international-phone';

export interface MUIPhoneProps extends BaseTextFieldProps {
    value: string;
    onChange: (phone: string) => void;
}

export const MuiPhone: React.FC<MUIPhoneProps> = ({
    value,
    onChange,
    ...restProps
}) => {

    const { inputValue, handlePhoneValueChange, inputRef } =
        usePhoneInput({
            defaultCountry: 'ru',
            value,
            countries: defaultCountries,
            onChange: (data) => {
                onChange(data.phone === '+8' ? '+7' : data.phone)
            },
        });

    return (
        <TextField
            sx={{ color: 'white' }}
            variant="outlined"
            color="primary"
            placeholder='+7 (XXX) XXX-XX-XX'
            focused
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            error={!inputValue}
            required
            inputRef={inputRef}
            {...restProps}
        />
    );
};

export default MuiPhone