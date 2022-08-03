import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

export const useForm = <T>({
  initialValue,
  onSubmit,
  validate,
}: {
  initialValue: T;
  onSubmit: (values: T, e?: FormEvent<HTMLFormElement>) => void;
  validate: (values: T) => T;
}) => {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState<T>(initialValue);
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
    if (isFirst) {
      setErrors(validate(values));
    }
  }, [values]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
