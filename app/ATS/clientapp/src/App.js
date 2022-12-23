import './App.css';
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};
