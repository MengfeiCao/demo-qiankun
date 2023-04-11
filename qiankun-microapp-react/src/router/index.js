import { createBrowserRouter } from 'react-router-dom';
import config from './config';

const router = createBrowserRouter(config, { basename: window.__POWERED_BY_QIANKUN__ ? '/micro-app-react' : '/' });

export default router;