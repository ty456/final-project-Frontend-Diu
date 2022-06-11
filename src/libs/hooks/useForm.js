import { useState } from 'react';

export const useForm = (
    callback,
    validator
) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        const { name, type, value, checked, required } = e.target;
        let fieldValue = value;
        if (type === 'checkbox') {
            fieldValue = checked;
        }
        if (required) {
            const error = validator(name, fieldValue);
            setValues((prevState) => ({...prevState, [name]: fieldValue }));
            setErrors((prevState) => ({...prevState, [name]: error }));
        } else {
            setValues((prevState) => ({...prevState, [name]: fieldValue }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const elements = e.target;
        const valueData = {};
        const errorData = {};

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].tagName === 'INPUT' || elements[i].tagName === 'TEXTAREA') {
                const { name, type, value, checked, required } = elements[i];

                if (required) {
                    errorData[name] = validator(name, value);
                }

                if (value === '' || value === null) {
                    delete valueData[name];
                } else {
                    if (type === 'checkbox') {
                        valueData[name] = checked;
                    } else {
                        valueData[name] = value;
                    }
                }
            }
        }

        setValues((prevState) => ({...prevState, ...valueData }));
        setErrors((prevState) => ({...prevState, ...errorData }));

        if (Object.values(errorData).every((o) => o === null)) {
            callback();
        }
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        changeHandler,
        submitHandler,
    };
};