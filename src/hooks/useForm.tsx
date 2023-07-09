import React, { useState } from 'react'

const useForm = <T extends Object>(initState: T) => {
    const [form, setForm] = useState(initState);

    const onChange = (value: string, field: keyof T) => {
        setForm({
            ...form,
            [field]: value
        })
    }
    return {
        onChange,
        form,
        ...form
    }
}

export default useForm
