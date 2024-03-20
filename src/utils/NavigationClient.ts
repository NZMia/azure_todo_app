import { NavigationClient, NavigationOptions } from '@azure/msal-browser';
import { NavigateFunction } from 'react-router-dom';

export class CustomNavigationClient implements NavigationClient {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  /**
   * Navigates to other pages within the same web application
   * You can use the useNavigate hook provided by react-router-dom to take advantage of client-side routing
   * @param url
   * @param options
   */
  async navigateInternal(url: string, options: NavigationOptions) {
    const relativePath = url.replace(window.location.origin, '');
    if (options.noHistory) {
      this.navigate(relativePath, { replace: true });
    } else {
      this.navigate(relativePath);
    }

    return false;
  }

  async navigateExternal(
    url: string,
    options: NavigationOptions
  ): Promise<boolean> {
    window.location.href = url;
    return true;
  }
}
