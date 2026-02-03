import BasePage from "../BasePage";
import { Locator, Page } from '@playwright/test';
import ProcessDesignerPage from "../ProcessDesignerPage/ProcessDesignerPage";


export default class ProcessDashboardPage extends BasePage {
    createProcessBtn: Locator;

    constructor(page: Page) {
        super(page, '/processDashboard');

        this.createProcessBtn = page.locator(
            '[data-testid="processList-addProcess-click"]'
        );
    }

    async createProcess(): Promise<ProcessDesignerPage> {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.createProcessBtn.click(),
        ]);

        await newPage.waitForLoadState('domcontentloaded');
        return new ProcessDesignerPage(newPage);
    }
}