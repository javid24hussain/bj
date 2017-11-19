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

function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: tcuksynthetics');
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
  log(1, '$browser.get("https://www.thomascook.com/")');
  return $browser.get("https://www.thomascook.com/"); })

// Step 2
.then(function() {
  log(2, '$browser.navigate().refresh()');
  return $browser.navigate().refresh(); })

// Step 2.1
.then(function() {
  log(2.1, 'clickElement "span.e108742-close.e108742-close-on-click"');
  return elementIsPresent(By.css("span.e108742-close.e108742-close-on-click"), DefaultTimeout); })
.then(function(found) {
  return $browser.waitForAndFindElement(By.css("span.e108742-close.e108742-close-on-click"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "SearchbarForm-submitBtn"');
  return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "Details"');
  return $browser.waitForAndFindElement(By.linkText("Details"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "Get Quote"');
  return $browser.waitForAndFindElement(By.linkText("Get Quote"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5.1
.then(function() {
  log(5.1, 'clickElement "Closing Help Popup Window"');
  return elementIsPresent(By.xpath("//div[@id=\'bt_invite_box\']/div[2]/img"), DefaultTimeout); })
.then(function(found) {
  return $browser.waitForAndFindElement(By.xpath("//div[@id=\'bt_invite_box\']/div[2]/img"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'clickElement "button.BtnPrimary.u-fullWidth"');
  return $browser.waitForAndFindElement(By.css("button.BtnPrimary.u-fullWidth"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6.1
.then(function() {
  log(6.1, 'clickElement "titleLabel"');
  return $browser.waitForAndFindElement(By.id("titleLabel"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'setElementSelected "//select[@id=\'title\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 8
.then(function() {
  log(8, 'setElementText "name"');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 9
.then(function() {
  log(9, 'sendKeysToElement "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) { el.sendKeys("\\9"); })

// Step 10
.then(function() {
  log(10, 'setElementText "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

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
  log(15, 'setElementSelected "//select[@id=\'addressSelect\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'addressSelect\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 16
.then(function() {
  log(16, 'setElementText "street1"');
  return $browser.waitForAndFindElement(By.id("street1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Pilgrims WAY"); })

// Step 17
.then(function() {
  log(17, 'setElementSelected "//select[@id=\'day\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 18
.then(function() {
  log(18, 'setElementSelected "//select[@id=\'month\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 19
.then(function() {
  log(19, 'setElementSelected "//select[@id=\'year\']//option[19]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[19]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 20
.then(function() {
  log(20, 'setElementSelected "//select[@id=\'year\']//option[19]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[19]"), DefaultTimeout); })
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
  log(23, 'setElementSelected "//select[@id=\'pax-marketing-consent\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'pax-marketing-consent\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 24
.then(function() {
  log(24, 'clickElement "Continue"');
  return $browser.waitForAndFindElement(By.linkText("Continue"), DefaultTimeout); })
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
  log(28, 'setElementSelected "//select[@id=\'day2Room1\']//option[1]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[1]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 29
.then(function() {
  log(29, 'setElementSelected "//select[@id=\'day2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 30
.then(function() {
  log(30, 'setElementSelected "//select[@id=\'day2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 31
.then(function() {
  log(31, 'setElementSelected "//select[@id=\'month2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 32
.then(function() {
  log(32, 'setElementSelected "//select[@id=\'month2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 33
.then(function() {
  log(33, 'setElementSelected "//select[@id=\'year2Room1\']//option[19]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[19]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 34
.then(function() {
  log(34, 'clickElement "paxSubmit"');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 31
.then(function() {
  log(31, 'setElementText "promoCodeInput"');
  return $browser.waitForAndFindElement(By.id("promoCodeInput"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys(); })

.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
  $browser.takeScreenshot();
}, function(err) {
  console.log ('Browser script execution FAILED.');
  throw(err);
  $browser.takeScreenshot();
});

/** END OF SCRIPT **/
