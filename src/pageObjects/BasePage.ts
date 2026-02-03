import { Page } from '@playwright/test';

export default class BasePage {
	pageUrl: string;
	page: Page;

	constructor(page: Page, pageUrl: string) {
		this.page = page;
		this.pageUrl = pageUrl;
	}

	async navigate() {
		await this.page.goto(this.pageUrl);
		await this.page.waitForLoadState('domcontentloaded');
		await this.page.waitForLoadState('networkidle');
	}
}