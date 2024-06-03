

## Playwright run tests
* Run command
```
 npx playwright test 
```

<img src=screenshots/createUser.png>
<img src=screenshots/api-data.png>

## Playwright Test Report
* Run command
```
 npx playwright show-report 
 ```
<img src=screenshots/passed.png>
<img src=screenshots/failedUpdate.png>
  
## Allure Report 
* Install Allure Report
```
npm install --save-dev allure-commandline
```
```
npm install --save-dev allure-playwright
```
* Add config allure to playwright.config.ts file 
```
reporter: [['html'], ['allure-playwright']],
```

* Run command for create Allure report 
```
 npx allure serve allure-results
```

<img src=screenshots/allurePassed.png>
<img src=screenshots/allureFailedUpdate.png>




