import BaseComponent from "./BaseComponent";
import { Locator, Page } from '@playwright/test';

export default class SideBarMenu extends BaseComponent {
    container: Locator;
    processesBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.container = page.locator('[data-testid="mainNaviagtion"]');
        this.processesBtn = this.container.locator('[data-testid="mainNav-Prozess-Dashboard"]');
    }
}