/**
 * Script Name: neckermann-vakantieservice
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

// Blacklisting URLS causing scripit timeouts as these resouces are unavailable
$browser.addHostnameToBlacklist('cluster.ad-serverparc.nl');
$browser.addHostnameToBlacklist('t.svtrd.com');

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: neckermann-vakantieservice');
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
  log(1, '$browser.get("https://www.neckermann-vakantieservice.nl/")');
  return $browser.get("https://www.neckermann-vakantieservice.nl/"); })

// Step 2
.then(function() {
  log(2, 'setElementSelected "//div[@class=\'bestemmingsformulier\']/form/select//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'bestemmingsformulier\']/form/select//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 3
.then(function() {
  log(3, 'clickElement "input.button.primary"');
  return $browser.waitForAndFindElement(By.css("input.button.primary"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function () {
  log(4, 'verifyTextPresent "Printen"');
  $browser.findElement(By.tagName('body')).getText().then(function (text) { return text.indexOf("Printen") != -1; }).then(function (bool) {
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
