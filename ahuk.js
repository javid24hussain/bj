/**
 * Script Name: ahuknr
 * 
 *
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

/** CONFIGURATIONS **/

// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 120000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

var assert = require('assert'),
  By = $driver.By,
  browser = $browser.manage(),
  startTime = Date.now(),
  stepStartTime = Date.now(),
  prevMsg = '',
  prevStep = 0,
  lastStep = 9999,
VARS = {};
// If you don't know what those are, fuggedaboutit!
// VARS = {{scriptManualEntryData}};

var log = function(thisStep, thisMsg) {
  if (thisStep > 1 || thisStep == lastStep) {
    var totalTimeElapsed = Date.now() - startTime;
    var prevStepTimeElapsed = totalTimeElapsed - stepStartTime;
    console.log('Step ' + prevStep + ': ' + prevMsg + ' FINISHED. It took ' + prevStepTimeElapsed + 'ms to complete.');
    $util.insights.set('Step ' + prevStep + ': ' + prevMsg, prevStepTimeElapsed);
    if (DefaultTimeout > 0 && totalTimeElapsed > DefaultTimeout) {
      throw new Error('Script timed out. ' + totalTimeElapsed + 'ms is longer than script timeout threshold of ' + DefaultTimeout + 'ms.');
    }
  }
  if (thisStep > 0 && thisStep != lastStep) {
    stepStartTime = Date.now() - startTime;
    console.log('Step ' + thisStep + ': ' + thisMsg + ' STARTED at ' + stepStartTime + 'ms.');
    prevMsg = thisMsg;
    prevStep = thisStep;
  }
};

//POPUP CHECKER FUNCTIONS START

function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}
var titleLabel = elementIsPresent(By.id("titleLabel"));
var custom = elementIsPresent(By.xpath("//div[@class='ptp-actions-continue']//button[.='Continue with selections']"));
var custom1= elementIsPresent(By.xpath("//div[@class='ptp-actions-continue']//button[.='Continue with selections']"));

//POPUP CHECKER FUNCTIONS END


/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: ahuknr');
console.log('Default timeout is set to ' + (DefaultTimeout/1000) + ' seconds');
console.log('Variables set in this script: ', VARS);

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })

// Step 1
.then(function() {
  log(1, '$browser.get("https://www.airtours.co.uk/")');
  return $browser.get("https://www.airtours.co.uk/"); })

// Step 2
.then(function() {
  log(2, 'clickElement "accept-cookies"');
  return $browser.waitForAndFindElement(By.id("accept-cookies"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "SearchbarForm-submitBtn"');
  return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "a.BtnPrimary.detailsBtn"');
  return $browser.waitForAndFindElement(By.css("a.BtnPrimary.detailsBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "Get Quote"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class='ptp-actions-continue']//button[.='Get Quote']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 18
.then(function() {
  log(18, 'clickElement "submit-extras"');
  return $browser.waitForAndFindElement(By.id("submit-extras"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 83
.then(function() {
  log(83, 'clickElement "//label[@for=\'Extra-AIRPORT_PARKING-yes\']"');
  return $browser.waitForAndFindElement(By.xpath("//label[@for=\'Extra-AIRPORT_PARKING-yes\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 56
.then(function() {
  log(56, 'clickElement "Continue with Holidays Extras"');
  return $browser.waitForAndFindElement(By.css("button.ptp-actions-continue-button"), DefaultTimeout); })
.then(function (el) { el.click(); })
// Step 9
.then(function() {
  log(9, 'setElementText "name"');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 10
.then(function() {
  log(10, 'setElementText "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 8
.then(function() {
  log(8, 'setElementSelected "//select[@id=\'title\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 11
.then(function() {
  log(11, 'setElementText "email"');
  return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 12
.then(function() {
  log(12, 'setElementText "leadPassengerConfirmEmail"');
  return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 13
.then(function() {
  log(13, 'setElementText "postCode"');
  return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("E7 9AL"); })

// Step 14
.then(function() {
  log(14, 'clickElement "Find address"');
  return $browser.waitForAndFindElement(By.linkText("Find address"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 15
.then(function() {
  log(15, 'clickElement "addressSelectLabel"');
  return $browser.waitForAndFindElement(By.id("addressSelectLabel"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 16
.then(function() {
  log(16, 'setElementSelected "//select[@id=\'addressSelect\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'addressSelect\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 17
.then(function() {
  log(17, 'clickElement "//label[@for=\'day\']"');
  return $browser.waitForAndFindElement(By.xpath("//label[@for=\'day\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 18
.then(function() {
  log(18, 'setElementSelected "//select[@id=\'day\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 19
.then(function() {
  log(19, 'setElementSelected "//select[@id=\'month\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 20
.then(function() {
  log(20, 'setElementSelected "//select[@id=\'year\']//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 21
.then(function() {
  log(21, 'setElementText "contactNumber"');
  return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("02072194272"); })

// Step 22
.then(function() {
  log(22, 'setElementSelected "//select[@id=\'pax-marketing-consent\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'pax-marketing-consent\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 23
.then(function() {
  log(23, 'clickElement "Continue"');
  return $browser.waitForAndFindElement(By.linkText("Continue"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 24
.then(function() {
  log(24, 'clickElement "title2Room1Label"');
  return $browser.waitForAndFindElement(By.id("title2Room1Label"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 25
.then(function() {
  log(25, 'setElementSelected "//select[@id=\'title2Room1\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 26
.then(function() {
  log(26, 'setElementText "name2Room1"');
  return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 27
.then(function() {
  log(27, 'setElementText "surname2Room1"');
  return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 28
.then(function() {
  log(28, 'setElementSelected "//select[@id=\'day2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 29
.then(function() {
  log(29, 'setElementSelected "//select[@id=\'month2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 30
.then(function() {
  log(30, 'setElementSelected "//select[@id=\'year2Room1\']//option[14]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[14]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 31
.then(function() {
  log(31, 'clickElement "paxSubmit"');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 32
.then(function () {
  log(32, 'verifyTextPresent "Check your details and pay"');
  $browser.findElement(By.tagName('body')).getText().then(function (text) { return text.indexOf("Check your details and pay") != -1; }).then(function (bool) {
    if (!bool) {
      console.log('verifyTextPresent FAILED.');
      $browser.takeScreenshot();
    } else {
      console.log('verifyTextPresent SUCCEEDED.');
    }
  });
})

// Step 33
.then(function () {
  log(33, 'verifyTextPresent "Card type"');
  $browser.findElement(By.tagName('body')).getText().then(function (text) { return text.indexOf("Card type") != -1; }).then(function (bool) {
    if (!bool) {
      console.log('verifyTextPresent FAILED.');
      $browser.takeScreenshot();
    } else {
      console.log('verifyTextPresent SUCCEEDED.');
    }
  });
})

.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
  $browser.takeScreenshot();
}, function(err) {
  console.log ('Browser script execution FAILED.');
  $browser.takeScreenshot();
  throw(err);
});

/** END OF SCRIPT **/
