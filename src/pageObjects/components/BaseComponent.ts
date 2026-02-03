import { Page } from '@playwright/test';

export default class BaseComponent {
	page: Page;

	constructor(page: Page) {
		this.page = page;
	}
}
