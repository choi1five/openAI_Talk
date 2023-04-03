import { ChangeEvent, useState, useCallback } from 'react';

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return { value, onChange };
};

export default useInput;
