import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { PortfolioPage } from "../../pages/PortfolioPage/PortfolioPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import App from "../app";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Используйте App как основной элемент
    children: [
      {
        index: true, // Это будет главная страница
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      },
    ],
  },
]);