/**
 * Script Name: ThomasCook Sports
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
var DefaultTimeout = 60000;
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

console.log('Starting synthetics script: ThomasCook Sports');
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
  log(1, '$browser.get("https://www.thomascooksport.com/")');
  return $browser.get("https://www.thomascooksport.com/"); })

// Step 2
.then(function() {
  log(2, 'mouseOverElement "//div[2]/div"');
  return $browser.waitForAndFindElement(By.xpath("//div[2]/div"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 3
.then(function() {
  log(3, '$browser.navigate().refresh()');
  return $browser.navigate().refresh(); })

// Step 4
.then(function() {
  log(4, 'mouseOverElement "div.opening-times.active"');
  return $browser.waitForAndFindElement(By.css("div.opening-times.active"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 5
.then(function() {
  log(5, 'mouseOverElement "//div[2]/div/div/div/div/div[9]/div/p"');
  return $browser.waitForAndFindElement(By.xpath("//div[2]/div/div/div/div/div[9]/div/p"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 6
.then(function() {
  log(6, 'mouseOverElement "//div[@class=\'global-masthead\']/div[1]/div/div/div[1]/div[2]"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']/div[1]/div/div/div[1]/div[2]"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 7
.then(function() {
  log(7, 'mouseOverElement "//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 8
.then(function() {
  log(8, 'mouseOverElement "//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]/div"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]/div"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 9
.then(function() {
  log(9, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Le Mans \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Le Mans \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 10
.then(function() {
  log(10, 'mouseOverElement "//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]/div"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']/div[2]/div/div/div/div/div/div/ul/li[4]/div"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 11
.then(function() {
  log(11, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Football \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Football \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 12
.then(function() {
  log(12, 'mouseOverElement "div.dropdown-menu-container"');
  return $browser.waitForAndFindElement(By.css("div.dropdown-menu-container"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 13
.then(function() {
  log(13, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Premier League \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Premier League \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 14
.then(function() {
  log(14, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Arsenal FC \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Arsenal FC \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 15
.then(function() {
  log(15, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Everton \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Everton \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 16
.then(function() {
  log(16, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Leicester City \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Leicester City \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 17
.then(function() {
  log(17, 'mouseOverElement "//div[@class=\'global-masthead\']//a[.=\'Liverpool FC \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Liverpool FC \']"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 18
.then(function() {
  log(18, 'clickElement "//div[@class=\'global-masthead\']//a[.=\'Liverpool FC \']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'global-masthead\']//a[.=\'Liverpool FC \']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 19
.then(function() {
  log(19, 'mouseOverElement "p.title"');
  return $browser.waitForAndFindElement(By.css("p.title"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 20
.then(function() {
  log(20, 'mouseOverElement "p.title"');
  return $browser.waitForAndFindElement(By.css("p.title"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 21
.then(function() {
  log(21, 'mouseOverElement "div.col-xs-24.sub-banner-title"');
  return $browser.waitForAndFindElement(By.css("div.col-xs-24.sub-banner-title"), DefaultTimeout); })
.then(function (el) { $browser.actions().mouseMove(el).perform(); })

// Step 22
.then(function() {
  log(22, 'clickElement "button.button.green-button"');
  return $browser.waitForAndFindElement(By.css("button.button.green-button"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 23
.then(function() {
  log(23, 'setElementSelected "//div[@class=\'options-panel\']//select[.=\'012\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'options-panel\']//select[.=\'012\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 24
.then(function() {
  log(24, 'setElementSelected "//div[@class=\'options-panel\']/div[3]/div[1]/select//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'options-panel\']/div[3]/div[1]/select//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 25
.then(function() {
  log(25, 'clickElement "selbut"');
  return $browser.waitForAndFindElement(By.id("selbut"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 26
.then(function() {
  log(26, 'clickElement "Choose this hotel"');
  return $browser.waitForAndFindElement(By.linkText("Choose this hotel"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 27
.then(function() {
  log(27, 'setElementText "login_username"');
  return $browser.waitForAndFindElement(By.id("login_username"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("wipro.dapes@wipro.com"); })

// Step 28
.then(function() {
  log(28, 'setElementText "login_password"');
  return $browser.waitForAndFindElement(By.id("login_password"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Wipro@123"); })

// Step 29
.then(function() {
  log(29, 'clickElement "login_submit"');
  return $browser.waitForAndFindElement(By.id("login_submit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 30
.then(function() {
  log(30, 'clickElement "//form[@id=\'pass_assignment\']//button[.=\'Continue to secure payment\']"');
  return $browser.waitForAndFindElement(By.xpath("//form[@id=\'pass_assignment\']//button[.=\'Continue to secure payment\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
}, function(err) {
  console.log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/
