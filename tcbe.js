/** CONFIGURATIONS **/

// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 180000;
var DefaultTimeoutElement = 15000;
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

//ADVANCE RADIO BUTTON CHECK START

function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}
var advance = elementIsPresent(By.id("UseNoAdvance"));

//ADVANCE RADIO BUTTON CHECK END



/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: ');
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
  log(1, '$browser.get("https://www.thomascook.be/")');
  return $browser.get("https://www.thomascook.be/"); })

// Step 2.1
.then(function() {
  log(2.1, 'clickElement "Ok"');
  return $browser.waitForAndFindElement(By.linkText("Ok"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 2
.then(function() {
  log(2, 'clickElement "QsmListerOrFullTextSearch_/sitecore/content/eComHome/Configuration/common/Components/QSM/Solr/EQsm_FlightHomeLargeRedesign_amount"');
  return $browser.waitForAndFindElement(By.id("QsmListerOrFullTextSearch_/sitecore/content/eComHome/Configuration/common/Components/QSM/Solr/EQsm_FlightHomeLargeRedesign_amount"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "QsmDetailLink_1"');
  return $browser.waitForAndFindElement(By.id("QsmDetailLink_1"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 4 Testing calcbuttonspan_calc to calcbuttonspan_cal
.then(function() {
  log(4, 'clickElement "calcbuttonspan_calc"');
  return $browser.waitForAndFindElement(By.id("calcbuttonspan_calc"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "Reserveer nu"');
  return $browser.waitForAndFindElement(By.linkText("Reserveer nu"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'setElementText "TravellerDetails_1_firstName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_firstName"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 7
.then(function() {
  log(7, 'clickElement "//table[@class=\'personalia\']/tbody/tr[5]/td[2]"');
  return $browser.waitForAndFindElement(By.xpath("//table[@class=\'personalia\']/tbody/tr[5]/td[2]"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'setElementText "TravellerDetails_1_lastName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_lastName"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 9
.then(function() {
  log(9, 'setElementSelected "//select[@id=\'TravellerDetails_1_days\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_days\']//option[2]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 10
.then(function() {
  log(10, 'setElementSelected "//select[@id=\'TravellerDetails_1_months\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_months\']//option[2]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 11
.then(function() {
  log(11, 'setElementSelected "//select[@id=\'TravellerDetails_1_gender\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_gender\']//option[2]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 12
.then(function() {
  log(12, 'setElementText "TravellerDetails_2_firstName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_2_firstName"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 13
.then(function() {
  log(13, 'setElementText "TravellerDetails_2_lastName"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_2_lastName"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 14
.then(function() {
  log(14, 'setElementSelected "//select[@id=\'TravellerDetails_2_days\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_days\']//option[2]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 15
.then(function() {
  log(15, 'setElementSelected "//select[@id=\'TravellerDetails_2_months\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_months\']//option[2]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 16
.then(function() {
  log(16, 'setElementSelected "//select[@id=\'TravellerDetails_2_gender\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_2_gender\']//option[3]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 17
.then(function() {
  log(17, 'clickElement "foSubmit"');
  return $browser.waitForAndFindElement(By.id("foSubmit"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 18
.then(function() {
  log(18, 'clickElement "btnNext"');
  return $browser.waitForAndFindElement(By.id("btnNext"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 19
.then(function() {
  log(19, 'setElementText "TravellerDetails_1_street"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_street"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("Rokin"); })

// Step 20
.then(function() {
  log(20, 'setElementText "TravellerDetails_1_houseNumber"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_houseNumber"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("1"); })

// Step 21
.then(function() {
  log(21, 'setElementText "TravellerDetails_1_zipCode"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_zipCode"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("1012KT"); })

// Step 22
.then(function() {
  log(22, 'setElementText "TravellerDetails_1_city"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Amsterdam"); })

// Step 23
.then(function() {
  log(23, 'setElementSelected "//select[@id=\'TravellerDetails_1_country\']//option[6]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_country\']//option[6]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 24
.then(function() {
  log(24, 'setElementSelected "//select[@id=\'TravellerDetails_1_country\']//option[6]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'TravellerDetails_1_country\']//option[6]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 25
.then(function() {
  log(25, 'setElementText "TravellerDetails_1_mobilePhoneNumber"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_mobilePhoneNumber"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("+31302357822"); })

// Step 26
.then(function() {
  log(26, 'setElementText "TravellerDetails_1_email1"');
  return $browser.waitForAndFindElement(By.id("TravellerDetails_1_email1"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 27
.then(function() {
  log(27, 'setElementText "ConfirmEmailAddress"');
  return $browser.waitForAndFindElement(By.id("ConfirmEmailAddress"), DefaultTimeoutElement); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 27.1
.then(function() {
  log(27.1, 'setElementSelected "//select[@id=\'TravellerDetails_1_country\']//option[6]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id='TravellerDetails_1_MailOpt']//option[3]"), DefaultTimeoutElement); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 28
.then(function() {
  log(28, 'clickElement "toPaymentButton"');
  return $browser.waitForAndFindElement(By.id("toPaymentButton"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 29
.then(function(){
log(29, 'setElementSelected "UseNoAdvance"');
	return elementIsPresent(By.id("UseNoAdvance")); })
	.then(function(advance){
		if(advance === true) {
			console.log("Item located");
	return $browser.findElement(By.id("UseNoAdvance"))
	.then(function(el){	el.click();	});}})

// Step 30.1
.then(function() {
  log(30.1, 'clickElement "Ga verder & kies een betaalmiddel"');
  return $browser.waitForAndFindElement(By.linkText("Ga verder & kies een betaalmiddel"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })

// Step 31
.then(function() {
  log(31, 'clickElement "doPayment_CREDITCARDVISA"');
  return $browser.waitForAndFindElement(By.xpath("//a[@id='doPayment_CREDITCARDVISA']/img"), DefaultTimeoutElement); })
.then(function (el) { el.click(); })


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
