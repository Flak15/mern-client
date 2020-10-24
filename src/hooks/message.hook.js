import { useCallback } from 'react';
import M from 'materialize-css';

export const useMessage = () => useCallback((text) => {
  if (text) M.toast({ html: text });
}, []);
