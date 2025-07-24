import puppeteer from 'puppeteer';

async function deleteTweets() {
    // First, try to connect to existing Chrome instance
    let browser;
    try {
        console.log('Trying to connect to existing Chrome instance...');
        browser = await puppeteer.connect({
            browserURL: 'http://localhost:9222',
            defaultViewport: { width: 1280, height: 720 }
        });
        console.log('Connected to existing Chrome instance!');
    } catch (error) {
        console.log('Could not connect to existing Chrome. Please:');
        console.log('1. Open Chrome');
        console.log('2. Go to chrome://settings/');
        console.log('3. Enable "Allow Chrome sign-in"');
        console.log('4. Then restart Chrome with: /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222');
        console.log('5. Log into X.com in that Chrome window');
        console.log('6. Then run this script again');
        process.exit(1);
    }

    try {
        const page = await browser.newPage();

        // Set user agent to avoid detection
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        console.log('Navigating to X.com explore page...');
        await page.goto('https://x.com/explore', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });

        // Wait for page to fully load
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Find and click on the search input
        console.log('Looking for search input...');
        const searchSelector = 'input[data-testid="SearchBox_Search_Input"], input[placeholder*="Search"], input[aria-label*="Search"]';
        await page.waitForSelector(searchSelector, { timeout: 10000 });

        // Clear and type the search query
        const searchQuery = 'from:Chiziaruhoma woman';
        console.log(`Searching for: ${searchQuery}`);
        await page.click(searchSelector);

        // Select all text in the input field
        await page.keyboard.down('Meta'); // Use 'Control' on Windows/Linux, 'Meta' on Mac
        await page.keyboard.press('a');
        await page.keyboard.up('Meta');

        await page.type(searchSelector, searchQuery);
        await page.keyboard.press('Enter');

        // Wait for search results to load
        console.log('Waiting for search results to load...');
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Wait for the results section
        await page.waitForSelector('section[aria-labelledby="accessible-list-8"], [data-testid="primaryColumn"]', { timeout: 15000 });

        let deletedCount = 0;
        const maxDeletions = 10; // Limit to prevent infinite loops

        while (deletedCount < maxDeletions) {
            try {
                // Find tweets in the current view
                console.log(`Looking for tweets to delete... (${deletedCount + 1}/${maxDeletions})`);

                const tweets = await page.$$('article[data-testid="tweet"]');

                if (tweets.length === 0) {
                    console.log('No more tweets found.');
                    break;
                }

                console.log(`Found ${tweets.length} tweets in current view`);

                // Try to delete the first tweet
                const tweet = tweets[0];

                // Scroll tweet into view
                await tweet.scrollIntoView();
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Look for the "More" button (three dots menu)
                const moreButton = await tweet.$('[aria-label="More"], [data-testid="caret"]');

                if (!moreButton) {
                    console.log('More button not found in this tweet, skipping...');
                    // Scroll down to try to find more tweets
                    await page.evaluate(() => window.scrollBy(0, 300));
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    continue;
                }

                console.log('Clicking More button...');
                await moreButton.click();
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Look for Delete option in the dropdown menu
                const deleteOption = await page.$('span:has-text("Delete"), [role="menuitem"]:has-text("Delete"), [data-testid="Dropdown"]:has-text("Delete")');

                if (!deleteOption) {
                    console.log('Delete option not found, this might not be your tweet. Skipping...');
                    // Click somewhere else to close the dropdown
                    await page.click('body');
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    continue;
                }

                console.log('Clicking Delete option...');
                await deleteOption.click();
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Wait for confirmation modal and click delete
                console.log('Waiting for confirmation modal...');
                const confirmDeleteButton = await page.waitForSelector(
                    '[data-testid="confirmationSheetConfirm"], button:has-text("Delete"), [role="button"]:has-text("Delete")',
                    { timeout: 5000 }
                );

                if (confirmDeleteButton) {
                    console.log('Confirming deletion...');
                    await confirmDeleteButton.click();
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    deletedCount++;
                    console.log(`Successfully deleted tweet ${deletedCount}`);
                }

                // Add delay to avoid rate limiting
                console.log('Waiting to avoid rate limits...');
                await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 5000)); // Random delay between 5-8 seconds

                // Refresh the page periodically to get fresh results
                if (deletedCount % 3 === 0) {
                    console.log('Refreshing page to get fresh results...');
                    await page.reload({ waitUntil: 'networkidle2' });
                    await new Promise(resolve => setTimeout(resolve, 3000));

                    // Re-do the search
                    await page.click(searchSelector);

                    // Select all text in the input field
                    await page.keyboard.down('Meta'); // Use 'Control' on Windows/Linux, 'Meta' on Mac
                    await page.keyboard.press('a');
                    await page.keyboard.up('Meta');

                    await page.type(searchSelector, searchQuery);
                    await page.keyboard.press('Enter');
                    await new Promise(resolve => setTimeout(resolve, 5000));
                }

            } catch (error) {
                console.log(`Error processing tweet: ${error instanceof Error ? error.message : 'Unknown error'}`);
                // Continue to next iteration
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        console.log(`Process completed. Deleted ${deletedCount} tweets.`);

    } catch (error) {
        console.error('Script error:', error);
    } finally {
        await browser.close();
    }
}

// Run the script
deleteTweets().catch(console.error);
