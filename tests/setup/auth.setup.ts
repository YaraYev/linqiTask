import { test as setup, expect } from '@playwright/test';
import LoginPage from '../../src/pageObjects/LoginPage/LoginPage';

const STORAGE_STATE_PATH = 'playwright/.auth/user.json';

setup('Login and save storage state', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
        process.env.CREDENTIALS_USERNAME!,
        process.env.CREDENTIALS_PASSWORD!
    );
    await expect(page).not.toHaveURL(/login/i);

    await page.context().storageState({
        path: STORAGE_STATE_PATH,
    });
});