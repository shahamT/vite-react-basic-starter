import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentTitle(customTitle) {
  const location = useLocation();

  useEffect(() => {
    if (customTitle) {
      document.title = customTitle;
      return;
    }

    const path = location.pathname;

    let title = 'My App'; // default title

    switch (true) {

        case path === '/home':
          title = 'Home';
          break;
        case path === '/about':
          title = 'About';
          break;

      case path === '/login':
        title = 'Login';
        break;
      case path === '/signup':
        title = 'Signup';
        break;

      default:
        title = 'My App';
    }

    document.title = title;
  }, [customTitle, location.pathname]);
}

