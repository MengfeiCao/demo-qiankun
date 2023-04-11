import App from '../App';
import Test from '../components/Test';
import Else from '../components/Else';
const config = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'test',
    element: <Test />,
  },
  {
    path: 'else',
    element: <Else />,
  },
];
export default config;