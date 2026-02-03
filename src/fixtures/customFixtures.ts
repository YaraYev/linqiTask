import { test as base } from '@playwright/test';
import HomePage from '../pageObjects/HomePage/HomePage';
import ProcessDashboardPage from '../pageObjects/ProcessDashboardPage/ProcessDashboardPage';

type Fixtures = {
    homePage: HomePage;
    processDashboardPage: ProcessDashboardPage;
};

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    processDashboardPage: async ({ page }, use) => {
        await use(new ProcessDashboardPage(page));
    },
});