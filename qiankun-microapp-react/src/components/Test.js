import api from '@/api';
import { useEffect } from 'react';
function Test() {
  useEffect(() => {
    api.get('/currentUser').then(res => {
      console.log(res);
    })
  }, []);
  return [<div key="1">123</div>, <div key="2">456</div>]
}

export default Test;