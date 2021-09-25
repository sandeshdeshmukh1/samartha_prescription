import React, {useState} from 'react';


export const useForm = (callback:any,initialValue={}) =>{
    const [values, setvalues] = useState(initialValue);

    const onChange = (event :React.ChangeEvent<HTMLInputElement>) =>{
        setvalues({ ...values ,[event.target.name]:event.target.value});

    };
    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        await callback();
    }

    return {
        onChange,
        onSubmit,
        values,
    };
}


