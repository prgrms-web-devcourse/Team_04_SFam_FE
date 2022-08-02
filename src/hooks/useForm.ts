import { Values } from '@components/SignUpForm/types';
import React, { useEffect, useState } from 'react';

interface UseFormProps {
  initialValue: Values;
  onSubmit: (values: Values, e?: React.FormEvent<HTMLFormElement>) => void;
  validate: (values: Values) => Values;
}

export const useForm = ({ initialValue, onSubmit, validate }: UseFormProps) => {
  const [values, setValues] = useState<Values>(initialValue);
  const [errors, setErrors] = useState<Values>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    if (isLoading) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsLoading(false);
    }
  }, [errors]);

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
