import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCharacterSelectionLabel(): Promise<string> {
    return element(by.css('app-root #label')).getText() as Promise<string>;
  }
}
