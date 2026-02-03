import BasePage from "../BasePage";
import { Locator, Page } from '@playwright/test';
import ActionsSideBar from "../components/ActionsSideBar";
import ProcessCanvas from "../components/ProcessCanvas";

export default class ProcessDesignerPage extends BasePage {

    processNameInput: Locator;
    actionsBtn: Locator;
    saveBtn: Locator;
    saveIconOk: Locator;
    actionsSideBar: ActionsSideBar;
    processCanvas: ProcessCanvas;

    constructor(page: Page) {
        super(page, '/processDesigner');

        this.processNameInput = page.locator('[data-testid="txt-processName"]');
        this.actionsBtn = page.locator('[data-testid="pdActions-click"]');
        this.saveBtn = page.locator('[data-testid="pdSave-click"]');
        this.saveIconOk = this.page.locator('[data-icon-name="lq-icons-circle-ok"]');
        this.actionsSideBar = new ActionsSideBar(page);
        this.processCanvas = new ProcessCanvas(page);
    }

    async fillProcessName(name: string) {
        await this.processNameInput.fill(name);
    }

    async save() {
        await this.saveBtn.click();
    }

    async openActionsSidebar(): Promise<void> {
        await this.actionsBtn.click();
        await this.actionsSideBar.expectVisible();
    }

    async dragProcessStartToCanvas(): Promise<void> {
        await this.actionsSideBar.expectProcessStartVisible();
        await this.processCanvas.expectVisible();

        await this.processCanvas.dropFrom(this.actionsSideBar.processStart);
    }

    async closeActionsSidebar(): Promise<void> {
        await this.actionsSideBar.close();
    }
}