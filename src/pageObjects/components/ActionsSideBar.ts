import { expect, Locator, Page } from "@playwright/test";
import BaseComponent from "./BaseComponent";

export default class ActionsSideBar extends BaseComponent {

  root: Locator;
  panel: Locator;
  processStart: Locator;
  closeBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.root = page.locator('#SidebarActions-Content');
    this.panel = page.locator('.ms-Panel-main').filter({
      has: this.root,
    });
    this.processStart = this.root.locator('[data-testid="pd-actions-11"]');
    this.closeBtn = this.panel.getByRole('button', { name: 'Close' });
  }

  async expectVisible(): Promise<void> {
    await expect(this.root).toBeVisible();
  }

  async expectProcessStartVisible(): Promise<void> {
    await expect(this.processStart).toBeVisible();
  }

  async expectHidden(): Promise<void> {
    await expect(this.root).toBeHidden();
  }

  async close(): Promise<void> {
    await this.closeBtn.click();
    await this.expectHidden();
  }
}