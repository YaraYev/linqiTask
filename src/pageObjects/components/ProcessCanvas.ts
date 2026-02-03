import { Locator, Page, expect } from '@playwright/test';
import BaseComponent from './BaseComponent';

export default class ProcessCanvas extends BaseComponent {
  readonly root: Locator;

  constructor(page: Page) {
    super(page);

    this.root = page.locator('.linqi-graph-panZoomablePaperCanvas');
  }

  async expectVisible(): Promise<void> {
    await expect(this.root).toBeVisible();
  }

  async dropFrom(source: Locator): Promise<void> {
    await source.scrollIntoViewIfNeeded();
    await expect(source).toBeVisible();

    const sourceBox = await source.boundingBox();
    if (!sourceBox) throw new Error('Source bounding box not found');

    const targetBox = await this.root.boundingBox();
    if (!targetBox) throw new Error('Canvas bounding box not found');

    const target = {
      x: targetBox.x + targetBox.width / 2,
      y: targetBox.y + targetBox.height / 2,
    };

    await this.page.mouse.move(
      sourceBox.x + sourceBox.width / 2,
      sourceBox.y + sourceBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.mouse.move(target.x, target.y, { steps: 20 });
    await this.page.mouse.up();
  }

  async expectNodeCount(count: number): Promise<void> {
    await expect(
      this.page.locator('.linqi-graph-nodeContainer')
    ).toHaveCount(count);
  }

}