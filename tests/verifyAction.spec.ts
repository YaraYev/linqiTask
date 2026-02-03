import { expect } from '@playwright/test';
import { test } from '../src/fixtures/customFixtures';
import { faker } from '@faker-js/faker';

test('Verifying adding and saving of action process', async ({
  homePage,
  processDashboardPage,
}) => {
  const processName = faker.word.sample({ length: 5 });

  await homePage.navigate();
  await expect(homePage.title, 'Home page title should be "Create dashboard sequence"').toHaveText('Create dashboard sequence');

  await homePage.clickSideBarProcesses();
  await expect(processDashboardPage.createProcessBtn, 'Expected "Create process" button to be visible after clicking "Processes"').toBeVisible();

  const processDesignerPage = await processDashboardPage.createProcess();
  await processDesignerPage.fillProcessName(processName);
  await processDesignerPage.openActionsSidebar();
  await processDesignerPage.dragProcessStartToCanvas();
  await processDesignerPage.closeActionsSidebar();
  await processDesignerPage.save();

  await expect(processDesignerPage.saveIconOk,
    'Expected success icon to appear after saving the process').toBeVisible();
  await expect(processDesignerPage.processNameInput, `Expected process name to be "${processName}" after saving`).toHaveValue(processName);

  await processDesignerPage.processCanvas.expectNodeCount(1);
});