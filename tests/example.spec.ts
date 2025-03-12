import { test, expect } from '@playwright/test';

test('should navigate to the feed page', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.click('text=Feed');
    await expect(page).toHaveURL('http://localhost:3000/feed');
    await expect(page.locator('main')).toBeAttached();
});
