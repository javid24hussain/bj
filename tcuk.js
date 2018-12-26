/**
 * Script Name: Thomascook.com
 * Last Modified By: Javid
 * What is modified? : Recreated the script with browser sleep, changed useragent,
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
var UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0";

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

//CONDITION CHECKER FUNCTIONS START

function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}
var invite = elementIsPresent(By.xpath("//div[@id='e108742-promo-lightbox']/span"));
var cookie = elementIsPresent(By.linkText("Close"));
var help = elementIsPresent(By.xpath("//div[@id=\'bt_invite_box\']/div[2]/img"));

//CONDITION CHECKER FUNCTIONS END

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: Thomascook.com Booking Journey');
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
  return $browser.get("https://www.thomascook.com/search?sbDepAirport=0&depAirport=0&origin=Any%20Airport&resortCode=any&goingTo=All%20Destinations&occupation=2&when=any&start=0&end=9&flexible=false&sort=recommendation_asc"); })


// Step 2
.then(function() {
  log(2, 'clickElement "Closing Help Popup Window"');
    return $browser.sleep(10000) })
.then(function () {
  return elementIsPresent(By.xpath("//div[@id='e108742-promo-lightbox']/span")); })
	.then(function(invite){
		if(invite === true) {
			console.log("Item locaeted");
	return $browser.findElement(By.xpath("//div[@id='e108742-promo-lightbox']/span"))
	.then(function(el){	el.click();	});}})

// Step 2.2 cookie POP UP CHECK POINT
.then(function() {
  log(2.2, 'clickElement "accept-cookies"');
  return elementIsPresent(By.linkText("Close")); })
	.then(function(cookie){
		if(cookie === true) {
			console.log("Item located");
	return $browser.findElement(By.linkText("Close"))
	.then(function(el){	el.click();	});}})

// Step 3
//.then(function() {
//  log(3, 'clickElement "SearchbarForm-submitBtn"');
//    return $browser.sleep(5000) })
//.then(function () {
//  return $browser.waitForAndFindElement(By.xpath("/html/body/div[2]/div[3]/div/div/pbw-root/sl-packages-bar/form/button/span"), DefaultTimeout); })
//.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "//div[@class=\'SearchResult\']//a[.=\'Details\']"');
    return $browser.sleep(10000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'SearchResult\']//a[.=\'Details\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "button.pt-actions-continue-button.BtnPrimary"');
    return $browser.sleep(15000) })
.then(function () {
  return $browser.waitForAndFindElement(By.css("button.pt-actions-continue-button.BtnPrimary"), DefaultTimeout); })
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
  log(6, 'clickElement "button.pt-actions-continue-button.BtnPrimary"');
    return $browser.sleep(15000) })
.then(function () {
  return $browser.waitForAndFindElement(By.css("button.pt-actions-continue-button.BtnPrimary"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'setElementSelected "//select[@id=\'title\']//option[2]"');
    return $browser.sleep(5000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 8
.then(function() {
  log(8, 'setElementText "name"');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 9
.then(function() {
  log(9, 'setElementText "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 10
.then(function() {
  log(10, 'clickElement "manual-address-entry"');
  return $browser.waitForAndFindElement(By.id("manual-address-entry"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 11
.then(function() {
  log(11, 'setElementText "address-line1"');
  return $browser.waitForAndFindElement(By.id("address-line1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1 EARLHAM GROVE"); })

// Step 12
.then(function() {
  log(12, 'setElementText "street1"');
  return $browser.waitForAndFindElement(By.id("street1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Pilgrims WAY"); })

// Step 13
.then(function() {
  log(13, 'setElementText "city"');
  return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Working"); })

// Step 14
.then(function() {
  log(14, 'setElementSelected "//select[@id=\'country\']//option[1]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'country\']//option[1]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })
  
// Step 15
.then(function() {
  log(15, 'setElementText "postCode"');
  return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("E7 9AL"); })

// Step 16
.then(function() {
  log(16, 'setElementSelected "//select[@id=\'day\']//option[9]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[9]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 17
.then(function() {
  log(17, 'setElementSelected "//select[@id=\'month\']//option[5]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[5]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 18
.then(function() {
  log(18, 'setElementSelected "//select[@id=\'year\']//option[11]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[11]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 19
.then(function() {
  log(19, 'setElementText "contactNumber"');
  return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("02072194272"); })

// Step 20
.then(function() {
  log(20, 'setElementText "email"');
  return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 21
.then(function() {
  log(21, 'setElementText "leadPassengerConfirmEmail"');
  return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

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
    return $browser.sleep(15000) })
.then(function () {
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 26
.then(function() {
  log(26, 'setElementText "name2Room1"');
  return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 27
.then(function() {
  log(27, 'setElementText "surname2Room1"');
  return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 28
.then(function() {
  log(28, 'setElementSelected "//select[@id=\'day2Room1\']//option[19]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[19]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 29
.then(function() {
  log(29, 'setElementSelected "//select[@id=\'month2Room1\']//option[11]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[11]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 30
.then(function() {
  log(30, 'setElementSelected "//select[@id=\'year2Room1\']//option[15]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 31
.then(function() {
  log(31, 'clickElement "paxSubmit"');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 32
.then(function() {
  log(32, 'setElementText "promoCode"');
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
