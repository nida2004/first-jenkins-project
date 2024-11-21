
import { test, expect } from '@playwright/test';
test('', async ({ page }) => {

await   page.goto('https://www.youtube.com/');



let searchBox = page.locator("//input[@id='search']");


});

/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">

*/

