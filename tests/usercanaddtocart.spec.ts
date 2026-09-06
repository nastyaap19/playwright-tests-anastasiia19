import { test, expect } from '@playwright/test';

test('Verify item can be added to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
  
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');
  });
  