import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('Verify user can login with valid credentials', async ({ page }) => {
 
  await login(page, 'standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});