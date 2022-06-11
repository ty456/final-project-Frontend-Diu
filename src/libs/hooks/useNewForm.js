import { useState } from 'react';
import { isNullProperties } from '../../utils';

export const useNewForm = (props) => {
    const { initialValues, initialErrors = {}, validate = null, onCallback } = props;
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    // 'ok'
    /**
     * Change event handler for `HTMLInputElement` `HTMLSelectElement` `HTMLTextAreaElement`
     * @param e
     */
    const handleChange = (e) => {
        // alert(e.target.value);
        const { name, type, value } = e.target;
        if (validate !== null) {
            const errorsData = validate({
                [name]: value
            });
            setErrors((prevState) => ({...prevState, ...errorsData }));
        }
        if (type === 'checkbox') {
            const { checked } = e.target;
            setValues((prevState) => ({...prevState, [name]: checked }));
        } else {
            setValues((prevState) => ({...prevState, [name]: value }));
        }
    };

    /**
     * Change event handler for `SelectPicker`
     * It's a custom component
     * @param e
     */
    const handleSelectChange = (e) => {
        const { name, value } = e;
        if (validate !== null) {
            const errorsData = validate({
                [name]: value
            });
            setErrors((prevState) => ({...prevState, ...errorsData }));
        }
        setValues((prevState) => ({...prevState, [name]: value }));
    };

    /**
     * Form event submit handler `Form`
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate !== null) {
            const errorsData = validate(values);
            setErrors((prevState) => ({...prevState, ...errorsData }));
            if (errorsData && isNullProperties(errorsData)) onCallback(values);
        } else {
            onCallback(values);
        }
    };

    return {
        values,
        errors,
        setValues,
        setErrors,
        handleChange,
        handleSelectChange,
        handleSubmit,
    };
};