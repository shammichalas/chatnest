
import { useState, useEffect } from 'react';

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    const savedKey = localStorage.getItem('google-ai-api-key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('google-ai-api-key', key);
  };

  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('google-ai-api-key');
  };

  return { apiKey, saveApiKey, clearApiKey };
};
