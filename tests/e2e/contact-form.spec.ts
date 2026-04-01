import { test, expect } from '@playwright/test';

/**
 * Contact form E2E tests for clinic-demo.
 * Verifies that the Tally iframe form is properly embedded and accessible.
 * 
 * Note: Since the form is a Tally iframe embed, we verify:
 * 1. The iframe is present with correct attributes
 * 2. The page loads without console errors
 * 3. The form section is visible and accessible
 * 4. The form is responsive on mobile devices
 */

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out known third-party errors (e.g., from Tally embed)
    const criticalErrors = consoleErrors.filter(
      (err) => !err.includes('tally') && !err.includes('iframe')
    );

    expect(criticalErrors).toHaveLength(0);
  });

  test('contact form section is visible', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('contact form has proper heading text', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection.locator('h2')).toContainText('Get In Touch');
  });

  test('Tally iframe is present with correct attributes', async ({ page }) => {
    const iframe = page.frameLocator('iframe[title="Contact Form"]');
    await expect(iframe).toBeAttached();
  });

  test('Tally iframe has proper dimensions', async ({ page }) => {
    const contactSection = page.locator('#contact');
    const iframe = contactSection.locator('iframe[title="Contact Form"]');
    
    // Verify iframe has width set
    const width = await iframe.getAttribute('width');
    expect(width).toBe('100%');
  });

  test('form is accessible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('contact section has proper padding on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const contactSection = page.locator('#contact');
    const paddingClass = await contactSection.getAttribute('class');
    expect(paddingClass).toContain('py-16');
  });
});

test.describe('Page Navigation', () => {
  test('can navigate to contact section via anchor link', async ({ page }) => {
    await page.goto('/#contact');
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });
});