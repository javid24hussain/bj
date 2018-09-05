/**
 * Script Name: necpath1
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

//SLIDER CHECK START

function elementIsPresent(ele) {
  return $browser.findElements(ele).then(function(found) {
    return found.length > 0;
  })
}
var slider = elementIsPresent(By.css("div.ProductRecs-close"));
var getquote = elementIsPresent(By.linkText("Kies je vlucht"));
var submitextras= elementIsPresent(By.linkText("Deze vakantie boeken"));
var submitextras2=elementIsPresent(By.id("submit-extras") );
//SLIDER CHECK END

// Blacklisting URLS causing scripit timeouts as these resouces are unavailable
$browser.addHostnameToBlacklist('cluster.ad-serverparc.nl');
$browser.addHostnameToBlacklist('api.shoppingminds.net');

/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: necpath1');
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
  log(1, '$browser.get("https://neckermann.nl/")');
  return $browser.get("https://neckermann.nl/"); })

// Step 2
.then(function() {
  log(2, 'clickElement "st_popup_acceptButton"');
  return $browser.waitForAndFindElement(By.id("st_popup_acceptButton"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 3
.then(function() {
  log(3, 'clickElement "div.close"');
  return $browser.waitForAndFindElement(By.css("div.close"), DefaultTimeout); })
.then(function (el) { el.click(); })


// Step 3
.then(function() {
  log(3, 'clickElement "Vliegvakanties"');
  return $browser.waitForAndFindElement(By.partialLinkText("Vliegvakanties"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 4
.then(function() {
  log(4, 'clickElement "SearchbarForm-submitBtn"');
  return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 5
.then(function() {
  log(5, 'clickElement "a.BtnPrimary.detailsBtn"');
  return $browser.waitForAndFindElement(By.css("a.BtnPrimary.detailsBtn"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 6
.then(function() {
  log(6, 'clickElement "//div[@id=\'stickyBreak\']//button[.=\'Bereken mijn totaalprijs\']"');
  return $browser.waitForAndFindElement(By.xpath("//div[@id='priceDetails']//button[.='Bereken mijn totaalprijs']"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 7
.then(function() {
  log(7, 'clickElement "//section[@id=\'priceBreakdown\']/div[1]/div"');
  return $browser.waitForAndFindElement(By.xpath("//section[@id=\'priceBreakdown\']/div[1]/div"), DefaultTimeout); })
.then(function (el) { el.click(); })


//Step 8
.then(function(){
log(2.1,'Close getquote');
	return elementIsPresent(By.linkText("Kies je vlucht")); })
	.then(function(getquote){
		if(getquote === true) {
			console.log("Item located");
	return $browser.findElement(By.linkText("Kies je vlucht"))
	.then(function(el){	el.click();	});}})
/*// Step 8
.then(function() {
  log(8, 'clickElement "Kies je vlucht"');
  return $browser.waitForAndFindElement(By.linkText("Kies je vlucht"), DefaultTimeout); })
.then(function (el) { el.click(); })*/
  
//Step 8.1
.then(function(){
log(8.1,'Close submitextras');
	return elementIsPresent(By.linkText("Deze vakantie boeken")); })
	.then(function(submitextras){
		if(submitextras === true) {
			console.log("Item located");
	return $browser.findElement(By.linkText("Deze vakantie boeken"))
	.then(function(el){	el.click();	});}})


/*// Step 8.1
.then(function() {
  log(8.1, 'clickElement "submit-extras"');
  return $browser.waitForAndFindElement(By.linkText("Deze vakantie boeken"), DefaultTimeout); })
.then(function (el) { el.click(); })*/
 
//Step 9.1
.then(function(){
log(9.1,'Close submitextras2');
	return elementIsPresent(By.id("submit-extras")); })
	.then(function(submitextras2){
		if(submitextras2 === true) {
			console.log("Item located");
	return $browser.findElement(By.id("submit-extras"))
	.then(function(el){	el.click();	});}})




/*// Step 9
.then(function() {
  log(9, 'clickElement "submit-extras"');
  return $browser.waitForAndFindElement(By.id("submit-extras"), DefaultTimeout); })
.then(function (el) { el.click(); })*/

// Step 9.1
.then(function() {
  log(9.1, 'clickElement "titleLabel"');
  return $browser.waitForAndFindElement(By.id("titleLabel"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 10
.then(function() {
  log(10, 'setElementSelected "//select[@id=\'title\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 11
.then(function() {
  log(11, 'setElementText "name"');
  return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 12
.then(function() {
  log(12, 'setElementText "middlename"');
  return $browser.waitForAndFindElement(By.id("middlename"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Test"); })

// Step 13
.then(function() {
  log(13, 'clickElement "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 14
.then(function() {
  log(14, 'setElementText "surname"');
  return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Rokin"); })

// Step 15
.then(function() {
  log(15, 'setElementText "email"');
  return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 16
.then(function() {
  log(16, 'setElementText "leadPassengerConfirmEmail"');
  return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test@gmail.com"); })

// Step 17
.then(function() {
  log(17, 'setElementText "street"');
  return $browser.waitForAndFindElement(By.id("street"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Rokin"); })

// Step 18
.then(function() {
  log(18, 'setElementText "houseNumber"');
  return $browser.waitForAndFindElement(By.id("houseNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("31302357822"); })

// Step 19
.then(function() {
  log(19, 'setElementText "houseNumber"');
  return $browser.waitForAndFindElement(By.id("houseNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1"); })

// Step 20
.then(function() {
  log(20, 'setElementText "postCode"');
  return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("1012KT"); })

// Step 21
.then(function() {
  log(21, 'setElementText "city"');
  return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("Amsterdam"); })

// Step 22
.then(function() {
  log(22, 'setElementSelected "//select[@id=\'day\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 23
.then(function() {
  log(23, 'setElementSelected "//select[@id=\'month\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 24
.then(function() {
  log(24, 'setElementSelected "//select[@id=\'year\']//option[14]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[14]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 25
.then(function() {
  log(25, 'setElementText "contactNumber"');
  return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("31302357822"); })

// Step 26
.then(function() {
  log(26, 'setElementText "emergencyName"');
  return $browser.waitForAndFindElement(By.id("emergencyName"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 27
.then(function() {
  log(27, 'setElementText "emergencyPhone"');
  return $browser.waitForAndFindElement(By.id("emergencyPhone"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("31302357822"); })

// Step 28
.then(function() {
  log(28, 'clickElement "Verder"');
  return $browser.waitForAndFindElement(By.linkText("Verder"), DefaultTimeout); })
.then(function (el) { el.click(); })


// Step 29
.then(function() {
  log(29, 'setElementSelected "//select[@id=\'title2Room1\']//option[3]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[3]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 30
.then(function() {
  log(30, 'setElementText "name2Room1"');
  return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 31
.then(function() {
  log(31, 'setElementText "middlename2Room1"');
  return $browser.waitForAndFindElement(By.id("middlename2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 32
.then(function() {
  log(32, 'setElementText "surname2Room1"');
  return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
.then(function (el) {
  el.clear();
  el.sendKeys("test"); })

// Step 33
.then(function() {
  log(33, 'setElementSelected "//select[@id=\'day2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 34
.then(function() {
  log(34, 'setElementSelected "//select[@id=\'month2Room1\']//option[2]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 35
.then(function() {
  log(35, 'setElementSelected "//select[@id=\'year2Room1\']//option[16]"');
  return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[16]"), DefaultTimeout); })
.then(function(el) { el.isSelected()
  .then(function(bool) { if (!bool) { el.click(); } }); })

// Step 36
.then(function() {
  log(36, 'clickElement "paxSubmit"');
  return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
.then(function (el) { el.click(); })

// Step 37
.then(function () {
  log(37, 'verifyTextPresent "Passagiersgegevens"');
  $browser.findElement(By.tagName('body')).getText().then(function (text) { return text.indexOf("Passagiersgegevens") != -1; }).then(function (bool) {
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
