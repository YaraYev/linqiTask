import { Locator, Page } from '@playwright/test';
import BasePage from '../BasePage';

export default class LoginPage extends BasePage {
	userNameInput: Locator;
	passwordInput: Locator;
	logInButton: Locator;


	constructor(page: Page) {
		super(page, '/');
		this.userNameInput = page.locator('[data-testid="login-username"]');
		this.passwordInput = page.locator('[data-testid="login-password"]');
		this.logInButton = page.locator('[data-testid="login-submit"]');

	}

	async login(name: string, password: string) {
		await this.userNameInput.fill(name);
		await this.passwordInput.fill(password);
		await this.logInButton.click();
	}
}
