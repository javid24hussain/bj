/**
 * Script Name: VUNLnewrelic
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

console.log('Starting synthetics script: VUNLnewrelic');
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
  log(1, '$browser.get("https://vrijuit.nl/")');
  return $browser.get("https://vrijuit.nl/"); })

// Step 2
.then(function() {
  log(2, '$browser.navigate().refresh()');
  return $browser.navigate().refresh(); })

// Step 3
.then(function() {
  log(3, 'clickElement "img.img-responsive"');
  return $browser.waitForAndFindElement(By.css("img.img-responsive"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "QsmListerOrFullTextSearch_/sitecore/content/eComHome/Configuration/Common/Components/Solr/EQsmHomeWinter_label"');
  return $browser.waitForAndFindElement(By.id("QsmListerOrFullTextSearch_/sitecore/content/eComHome/Configuration/Common/Components/Solr/EQsmHomeWinter_label"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "Info & prijzen"');
  return $browser.waitForAndFindElement(By.xpath("//a[@id='QsmDetailLink_1']/span"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'clickElement "calcbuttonspan_calctransport"');
  return $browser.waitForAndFindElement(By.id("calcbuttonspan_calctransport"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'clickElement "Deze vakantie boeken"');
  return $browser.waitForAndFindElement(By.linkText("Deze vakantie boeken"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'setElementSelected "//select[@id=\'TravellerDetails_1_gender\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_gender\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 9
.then(function() {
  log(9, 'setElementText "TravellerDetails_1_firstName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_firstName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 10
.then(function() {
  log(10, 'setElementText "TravellerDetails_1_middleName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_middleName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 11
.then(function() {
  log(11, 'setElementText "TravellerDetails_1_lastName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_lastName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 12
.then(function() {
  log(12, 'setElementSelected "//select[@id=\'TravellerDetails_1_days\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_days\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 13
.then(function() {
  log(13, 'setElementSelected "//select[@id=\'TravellerDetails_1_months\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_months\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 14
.then(function() {
  log(14, 'setElementSelected "//select[@id=\'TravellerDetails_1_years\']//option[21]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_years\']//option[21]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 15
.then(function() {
  log(15, 'setElementSelected "//select[@id=\'TravellerDetails_2_gender\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_gender\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 16
.then(function() {
  log(16, 'setElementText "TravellerDetails_2_firstName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_2_firstName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 17
.then(function() {
  log(17, 'setElementText "TravellerDetails_2_middleName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_2_middleName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 18
.then(function() {
  log(18, 'setElementText "TravellerDetails_2_lastName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_2_lastName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 19
.then(function() {
  log(19, 'setElementSelected "//select[@id=\'TravellerDetails_2_days\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_days\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 20
.then(function() {
  log(20, 'setElementSelected "//select[@id=\'TravellerDetails_2_months\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_months\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 21
.then(function() {
  log(21, 'clickElement "foSubmit"');
  return $browser.waitForAndFindElement(By.id("foSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 22
.then(function() {
  log(22, 'clickElement "btnNext"');
  return $browser.waitForAndFindElement(By.id("btnNext"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 23
.then(function() {
  log(23, 'setElementText "TravellerDetails_1_street"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_street"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Rokin"); })

// Step 24
.then(function() {
  log(24, 'setElementText "TravellerDetails_1_houseNumber"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_houseNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1"); })

// Step 25
.then(function() {
  log(25, 'setElementText "TravellerDetails_1_zipCode"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_zipCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1012KT"); })

// Step 26
.then(function() {
  log(26, 'setElementText "TravellerDetails_1_city"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Amsterdam"); })

// Step 27
.then(function() {
  log(27, 'setElementText "TravellerDetails_1_phoneNumber"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_phoneNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("31302357822"); })

// Step 28
.then(function() {
  log(28, 'setElementText "TravellerDetails_1_email1"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_email1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 29
.then(function() {
  log(29, 'setElementText "ConfirmEmailAddress"');
  return $browser.waitForAndFindElement(By.id("ConfirmEmailAddress"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 30
.then(function() {
  log(30, 'setElementText "emergencyContact"');
  return $browser.waitForAndFindElement(By.id("emergencyContact"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test Test"); })

// Step 31
.then(function() {
  log(31, 'setElementText "emergencyPhoneNumber"');
  return $browser.waitForAndFindElement(By.id("emergencyPhoneNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("31302357822"); })

// Step 32
.then(function() {
  log(32, 'clickElement "toPaymentButton"');
  return $browser.waitForAndFindElement(By.id("toPaymentButton"), DefaultTimeout); })
.then(function (el) { el.click(); })

.then(function() {
  log(lastStep, '');
  console.log('Browser script execution SUCCEEDED.');
}, function(err) {
  console.log ('Browser script execution FAILED.');
  throw(err);
});

/** END OF SCRIPT **/
