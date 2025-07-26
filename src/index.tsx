import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/router';
import './index.scss';
import * as ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);