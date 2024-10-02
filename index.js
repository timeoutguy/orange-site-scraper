import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = browser.newPage();

    await page.goto("https://www.google.com");
})()