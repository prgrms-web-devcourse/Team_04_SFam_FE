import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

interface UseFormProps<T> {
  initialValue: T;
  initialError: T;
  initialSuccess?: T;
  onSubmit: (values: T, e?: FormEvent<HTMLFormElement>) => void;
  validate?: (values: T) => T;
}

export const useForm = <T>({ initialValue, initialError, initialSuccess, onSubmit, validate }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState<T>(initialError);
  const [success, setSuccess] = useState<T>(initialSuccess as T);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    setIsFirst(true);
    if (validate) {
      setErrors(validate(values));
    } else {
      onSubmit(values);
    }
  };

  useEffect(() => {
    if (isLoading) {
      // FIXME: Overload Error => 임시처리
      if (Object.keys(errors as object).length === 0) {
        onSubmit(values);
      }
      setIsLoading(false);
    }
  }, [errors]);

  useEffect(() => {
    if (isFirst && validate) {
      setErrors(validate(values));
    }
  }, [values]);

  return {
    values,
    errors,
    success,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
