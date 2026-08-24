# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowHandling.spec.js >> dynamic xpath
- Location: tests\windowHandling.spec.js:3:5

# Error details

```
Error: page.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbVL col-12-12"//descendant::div[text()="Apple iPhone 17 Pro (Deep Blue, 512 GB)"]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6287:25)
    at InjectedScript._queryEngineAll (<anonymous>:6960:49)
    at InjectedScript.querySelectorAll (<anonymous>:6947:30)
    at callMatchedElements (eval at evaluate (:311:30), <anonymous>:2:29)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbVL col-12-12"//descendant::div[text()="Apple iPhone 17 Pro (Deep Blue, 512 GB)"]')
    - waiting for "https://www.flipkart.com/search?q=iphone%2017%20pro&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off" navigation to finish...
    - navigated to "https://www.flipkart.com/search?q=iphone%2017%20pro&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"

```