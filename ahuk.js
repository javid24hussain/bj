/**
 * Script Name: Airtours.CO.UK
 * Last Modified By: Javid
 * What Changes were Made?: Added Browser Sleep in each step
 * 
 * Generated script for New Relic Synthetics
 * Generated using se-builder with New Relic Synthetics Formatter
 *
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

/** CONFIGURATIONS **/

// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 180000;
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
// Uncomment and use this if you're running Se-Builder 2 and used Manual Entry variables.
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

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: darahuk');
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
  return $browser.sleep(10000) })
.then(function () {
  return $browser.waitForAndFindElement(By.id("accept-cookies"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "SearchbarForm-submitBtn"');
  return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "//div[@class=\'SearchResult\']//a[.=\'Details\']"');
  return $browser.sleep(15000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'SearchResult\']//a[.=\'Details\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "button.pt-actions-continue-button.BtnPrimary"');
  return $browser.sleep(15000) })
.then(function () {
  return $browser.waitForAndFindElement(By.css("button.pt-actions-continue-button.BtnPrimary"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'clickElement "submit-extras"');
  return $browser.sleep(27000) })
.then(function () {
  return $browser.waitForAndFindElement(By.id("submit-extras"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'clickElement "submit-extras"');
  return $browser.sleep(27000) })
.then(function () {
  return $browser.waitForAndFindElement(By.id("submit-extras"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'setElementSelected "//select[@id=\'title\']//option[2]"');
  return $browser.sleep(27000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 9
.then(function() {
  log(9, 'setElementText "name"');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 10
.then(function() {
  log(10, 'setElementText "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

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
  log(15, 'setElementSelected "//select[@id=\'addressSelect\']//option[3]"');
  return $browser.sleep(5000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'addressSelect\']//option[3]"), DefaultTimeout); })
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
  log(17, 'setElementSelected "//select[@id=\'day\']//option[6]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[6]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 18
.then(function() {
  log(18, 'setElementSelected "//select[@id=\'month\']//option[6]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[6]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 19
.then(function() {
  log(19, 'setElementSelected "//select[@id=\'year\']//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 20
.then(function() {
  log(20, 'setElementText "contactNumber"');
  return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("02072194272"); })

// Step 21
.then(function() {
  log(21, 'setElementSelected "//select[@id=\'pax-marketing-consent\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'pax-marketing-consent\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 22
.then(function() {
  log(22, 'clickElement "Continue"');
  return $browser.waitForAndFindElement(By.linkText("Continue"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 23
.then(function() {
  log(23, 'setElementSelected "//select[@id=\'title2Room1\']//option[3]"');
  return $browser.sleep(10000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 24
.then(function() {
  log(24, 'setElementText "name2Room1"');
  return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 25
.then(function() {
  log(25, 'setElementText "surname2Room1"');
  return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 26
.then(function() {
  log(26, 'setElementSelected "//select[@id=\'day2Room1\']//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 27
.then(function() {
  log(27, 'setElementSelected "//select[@id=\'month2Room1\']//option[10]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[10]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 28
.then(function() {
  log(28, 'setElementSelected "//select[@id=\'year2Room1\']//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 29
.then(function() {
  log(29, 'clickElement "paxSubmit"');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 61
.then(function() {
  log(61, 'setElementText "promoCode"');
  return $browser.sleep(5000) })
.then(function () {
  return $browser.waitForAndFindElement(By.id("promoCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("TESTPROMO"); })

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
