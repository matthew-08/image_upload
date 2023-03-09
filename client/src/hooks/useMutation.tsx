import { useState } from 'react';

const useMutation = ({ url, method = 'POST' }) => {
  const [state, setState] = useState({
    loading: false,
    error: '',
  });

  const fn = async (data) => {
    setState((prev) => ({ ...prev, loading: true }));

    await fetch('http://localhost:3000/', {
      method,
      credentials: 'include',
      headers: {
        'Content-Type:': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return { ...state, mutate: fn };
};

export default useMutation;
