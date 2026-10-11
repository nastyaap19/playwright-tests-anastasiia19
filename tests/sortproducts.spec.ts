import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('Products can be sorted by name and price', async ({ page }) => {

    await login(page, 'standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const sort = page.locator('[data-test="product-sort-container"]');
    const firstProduct = page.locator('[data-test="inventory-item-name"]').first();

    await sort.selectOption('za');
    await expect(firstProduct).toHaveText('Test.allTheThings() T-Shirt (Red)');

    await sort.selectOption('az');
    await expect(firstProduct).toHaveText('Sauce Labs Backpack');

    await sort.selectOption('lohi');
    await expect(firstProduct).toHaveText('Sauce Labs Onesie');

    await sort.selectOption('hilo');
    await expect(firstProduct).toHaveText('Sauce Labs Fleece Jacket');
});

