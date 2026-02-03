import BasePage from "../BasePage";
import { Locator, Page } from '@playwright/test';
import SideBarMenu from "../components/SideBarMenu";

export default class HomePage extends BasePage {
    title: Locator;
    sideBarMenu: SideBarMenu;

    constructor(page: Page) {
        super(page, '/userDashboard');

        this.title = page.locator('[data-testid="UserDashboard_Title"]');
        this.sideBarMenu = new SideBarMenu(page);
    }

    async clickSideBarProcesses() {
        await this.sideBarMenu.processesBtn.click();
    }

}
