/**
 * Script Name: Neckermann.NL
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

/**CUSTOM FUNCTIONS START*/

// Function To Handling POPUPS
function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}
var popupamount = elementIsPresent(By.css('p.qubit1128-pri > button.BtnPrimary'));

/**CUSTOM FUNCTIONS END*/

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: necnlpt');
console.log('Default timeout is set to ' + (DefaultTimeout/1000) + ' seconds');
console.log('Variables set in this script: ', VARS);

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })

// ===========================HOMEPAGE START================================

// Step 1
.then(function() {
  log(1, 'Homepage: Loading the HomePage');
  return $browser.get("https://neckermann.nl/"); })

// Step 2
.then(function() {
  log(2, 'Homepage: Accepting the Cookies');
  return $browser.waitForAndFindElement(By.id("st_popup_acceptButton"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'Homepage: Closing the Popup on  ');
  return $browser.waitForAndFindElement(By.css("div.close"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'Homepage: Clicking on vliegvakanties');
  return $browser.waitForAndFindElement(By.css("em.fa.fa-chevron-right"), DefaultTimeout); })
.then(function (el) { el.click(); })
// ===========================HOMEPAGE END================================

// ===========================SEARCH BUTTON PAGE START================================
// Step 5
.then(function() {
  log(5, 'Search Button Page: Clicking on the Search Button');
  return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// ===========================SEARCH BUTTON PAGE END================================

// ===========================SRP PAGE START================================

// Step 6
.then(function() {
  log(6, 'SRP Page: Clicking on the First Package');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'SearchResult\']//a[.=\'Info & prijzen\']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// ===========================SRP PAGE END================================

// ===========================PACKAGE PAGE START================================

// Step 7
.then(function() {
  log(7, 'PACKAGE Page: Toggling Sidebar');
  return $browser.waitForAndFindElement(By.css("span.icon.chevronN"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 8
.then(function() {
  log(8, 'PACKAGE Page: Toggling Sidebar 2');
  return $browser.waitForAndFindElement(By.xpath("//div[@class=\'price-ticket\']/div[1]/collapsible[2]/div/collapsible-button/span/span"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 9
.then(function() {
  log(9, 'PACKAGE Page: Clicking on Bereken mijn totaalprijs Button');
  return $browser.waitForAndFindElement(By.css("button.pt-actions-continue-button.BtnPrimary"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 10
.then(function() {
  log(10, 'PACKAGE Page: Toggling Sidebar 3');
  return $browser.waitForAndFindElement(By.xpath("//collapsible-button[@class=\'pt-costing-items-collapse-button\']/span/span"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 11
.then(function() {
  log(11, 'PACKAGE Page: Clicking on Verder Button');
  return $browser.waitForAndFindElement(By.css("button.pt-actions-continue-button.BtnPrimary"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 12
   .then(function() {
     log(12, 'PACKAGE Page: Clicking on Je gegevens Button');
   function scrollWin() { window.scrollTo(0,700); }
   return $browser.waitForAndFindElement(By.css('.BtnPrimary--large:nth-child(2)'), 300000); })
    .then(function(el) { el.click(); })

// Step 13
.then(function(){
log(13,'PACKAGE Page: Checking For Extra Amount Popups');
	return elementIsPresent(By.css('p.qubit1128-pri > button.BtnPrimary')); })
	.then(function(popupamount){
		if(popupamount === true) {
      function scrollWin() { window.scrollTo(0, 952); }
			console.log("PAX Page: Extra Amount Popups Item located");
	  return $browser.findElement(By.css('p.qubit1128-pri > button.BtnPrimary')) 
  .then(function(el){	el.click();	});}})

// ===========================PACKAGE PAGE END================================

// ===========================PASSENGER/PAX DETAILS PAGE START ================================

// Step 14
.then(function() {
  log(14, 'Passenger Details Page: Title ');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 15
.then(function() {
  log(15, 'Passenger Details Page: Name');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 16
.then(function() {
  log(16, 'Passenger Details Page: "middlename"');
  return $browser.waitForAndFindElement(By.id("middlename"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 17
.then(function() {
  log(17, 'Passenger Details Page: "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 18
.then(function() {
  log(18, 'Passenger Details Page:  "email"');
  return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 19
.then(function() {
  log(19, 'Passenger Details Page: "leadPassengerConfirmEmail"');
  return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 20
.then(function() {
  log(20, 'Passenger Details Page: Country');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'country\']//option[1]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 21
.then(function() {
  log(21, 'Passenger Details Page: "street"');
  return $browser.waitForAndFindElement(By.id("street"), DefaultTimeout); })
.then(function (el) { el.sendKeys("\\9"); })

// Step 22
.then(function() {
  log(22, 'Passenger Details Page:  "street"');
  return $browser.waitForAndFindElement(By.id("street"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Amsterdam"); })

// Step 23
.then(function() {
  log(23, 'Passenger Details Page:  "houseNumber"');
  return $browser.waitForAndFindElement(By.id("houseNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1"); })

// Step 24
.then(function() {
  log(24, 'Passenger Details Page:  "postCode"');
  return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1012KT"); })

// Step 25
.then(function() {
  log(25, 'Passenger Details Page:  "city"');
  return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Amsterdam"); })

// Step 26
.then(function() {
  log(26, 'Passenger Details Page: DOB Day');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[7]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 27
.then(function() {
  log(27, 'Passenger Details Page: DOB Month');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[8]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 28
.then(function() {
  log(28, 'Passenger Details Page: DOB Year');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 29
.then(function() {
  log(29, 'Passenger Details Page: "contactNumber"');
  return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("+31302357822"); })

// Step 30
.then(function() {
  log(30, 'Passenger Details Page: "emergencyName"');
  return $browser.waitForAndFindElement(By.id("emergencyName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 31
.then(function() {
  log(31, 'Passenger Details Page: "emergencyPhone"');
  return $browser.waitForAndFindElement(By.id("emergencyPhone"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("+31302357822"); })

// Step 32
.then(function() {
  log(14, 'Passenger Details Page: Title Again');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 32
.then(function() {
  log(20, 'Passenger Details Page: Clicking on "Verder" Button');
  return $browser.waitForAndFindElement(By.linkText("Verder"), DefaultTimeout); })
.then(function (el) { el.click(); })

// ===========================PASSENGER/PAX DETAILS PAGE END ================================

// ===========================EMERGENCY CONTACT PAGE START ================================

// Step 33
.then(function() {
  log(33, 'EMERGENCY Contact Page: Title');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 34
.then(function() {
  log(34, 'EMERGENCY Contact Page: Name');
  return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 35
.then(function() {
  log(35, 'EMERGENCY Contact Page: surname');
  return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 36
.then(function() {
  log(36, 'EMERGENCY Contact Page: DOB Day');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[7]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 37
.then(function() {
  log(37, 'EMERGENCY Contact Page: DOB Month');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[10]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 38
.then(function() {
  log(38, 'EMERGENCY Contact Page: DOB Year');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[15]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 39
.then(function() {
  log(39, 'EMERGENCY Contact Page: Clicking on paxSubmit');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// ===========================EMERGENCY CONTACT PAGE END ================================

// Step 40
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
