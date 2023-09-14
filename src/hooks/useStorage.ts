import { useEffect, useState } from 'react';

const decode = <T>(value: T): string => {
  return JSON.stringify(value);
};

const encode = <T>(value: string | null) => {
  if (value) {
    return <T>JSON.parse(value);
  } else {
    return null;
  }
};

export const useStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(encode(localStorage.getItem(key)) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, decode(value));
  }, [value]);

  return [value, setValue];
};
