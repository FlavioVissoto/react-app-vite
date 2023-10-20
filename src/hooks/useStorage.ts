import { AES, enc } from 'crypto-js';
import { useEffect, useState } from 'react';

const secret = '@3esdwrs';

const encryptValue = <T>(value: T): string => {
  const strValue = JSON.stringify(value);
  const cipherText = AES.encrypt(strValue, secret);
  return cipherText.toString();
};

const decryptValue = <T>(value: string | null): T | null => {
  if (!value) {
    return null;
  }

  try {
    const bytes = AES.decrypt(value, secret);
    const decrypted = bytes.toString(enc.Utf8);
    return <T>JSON.parse(decrypted);
  } catch (error) {
    return null;
  }
};

export const useStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(decryptValue(localStorage.getItem(key)) || initialValue);

  useEffect(() => {
    if (key) {
      setValueLocal(key, value);
    } else {
      removeValue(key);
    }
  }, [value]);

  useEffect(() => {
    setValueLocal(key, value);
  }, []);

  const setValueLocal = (key: string, value: T): void => {
    if (value) {
      localStorage.setItem(key, encryptValue(value));
    } else {
      removeValue(key);
    }
  };

  const removeValue = (key: string): void => {
    localStorage.removeItem(key);
  };

  return [value, setValue];
};
