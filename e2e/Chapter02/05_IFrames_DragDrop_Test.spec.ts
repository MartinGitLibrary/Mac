import { test, expect } from '@playwright/test';

test('Title: Handling IFrames, Drag and Drop elements using playwright', async({ page }) => {

    await page.goto('https://jqueryui.com/droppable');

    const iframe = page.frameLocator('[class="demo-frame"]'); // try the same for inline SF scroll

    // drag element, drop element

    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);

})