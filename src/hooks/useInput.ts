import { useCallback, useState } from 'react';

function useInput() {
  const [value, setValue] = useState<string>('');

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return { value, onChangeValue };
}

export default useInput;
