import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('Verify item can be added to the cart', async ({ page }) => {

  await login(page, 'standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');
});
