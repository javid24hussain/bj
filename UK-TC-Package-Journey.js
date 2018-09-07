/** CONFIGURATIONS **/

// Script-wide timeout for wait and waitAndFind functions (in ms)
var DefaultTimeout = 25000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

var assert = require('assert'),
  By = $driver.By,
  browser = $browser.manage(),
  startTime = Date.now(),
  stepStartTime = Date.now(),
  lastMsg = '',
  defaultStepTimeout = 25000,
  performanceFailure = false,
  VARS = {};

$util.insights.set('Performance Status', 'PASS');

var log = function(thisStep, msg) {
   if (thisStep > 0) {
     var lastStep = thisStep - 1;
     var lastStepTimeElapsed = Date.now() - (startTime + stepStartTime);
     if (lastStepTimeElapsed > defaultStepTimeout) {
        performanceFailure = true;
     }
     console.log('Step ' + lastStep + ': ' + lastMsg + ' FINISHED. It took ' + lastStepTimeElapsed + 'ms to complete.');
     console.log('-----------------------------------------------------------------------------------------------------------');
     // With Step Names
     //$util.insights.set('Step ' + lastStep + ': ' + lastMsg, lastStepTimeElapsed);

     // With Step Numbers
     $util.insights.set('Step ' + lastStep, lastStepTimeElapsed);
   }
   stepStartTime = Date.now() - startTime;
   console.log('Step ' + thisStep + ': ' + msg + ' STARTED at ' + stepStartTime + 'ms.');
   lastMsg = msg;
 };


function isAlertPresent() {
  try {
    var thisAlert = $browser.switchTo().alert();
    return true;
  } catch (err) { return false; }
}

function isElementSelected(el) { return $browser.findElement(el).isSelected(); }
function isTextPresentIn(text, sourceEl) {
  return sourceEl.getText()
  .then(function (wholetext) {
    return wholetext.indexOf(text) != -1;
  });
}

function isTextPresent(text) {
  return isTextPresentIn(text, $browser.findElement(By.tagName('html')));
}

/** BEGINNING OF SCRIPT **/

log(0, 'init');

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })
  /*
  * Step 1: Go to home page
  */
  .then(function(){
    log(1, '$browser.get("https://www.thomascook.com")');
    $browser.get('https://www.thomascook.com?utm_medium=newrelic&utm_source=newrelic&utm_campaign=newrelic');
	})
/*
  * Step 2: Go to SRP page
  */
  .then(function(){
    log(2, 'Submit SRP search');
    return $browser.waitForAndFindElement(By.id("SearchbarForm-submitBtn"), DefaultTimeout);
  })
  .then(function (el) { el.click();})
  /*
  * Step 3: Go to Accom Page
  */
  .then(function(){
    log(3, 'Click on First SRP Result');
    return $browser.waitForAndFindElement(By.linkText("Details"), DefaultTimeout);
  })
  .then(function (el) { el.click(); })
  /*
  * Step 4: Go to Customise Page
  */
  .then(function() {
    log(4, 'Book Now');
    return $browser.waitForAndFindElement(By.linkText("Book Now"), DefaultTimeout);
  })
  .then(function (el) { el.click(); })

  /*
  * Step 5: Go to Pax Page
  */
  .then(function() {
    log(5, 'Continue with Selections');
    return $browser.waitForAndFindElement(By.xpath("//div[@id=\'priceTicket\']//button[.=\'Continue with selections\']"), DefaultTimeout); })
  .then(function (el) { el.click(); })

  /*
  * Step 6: Fill in Pax Details
  */
  //---------------------------------------------------------------------------------------------------------------------------------------------
  // Fill in the Form Data
  .then(function() {
    log(6, 'Fill In form Data');
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } });
  })
  // First Name
  .then(function() {
    return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout);
  })
  .then(function (el) {
    el.clear();
    el.sendKeys("Test");
  })
  // Last Name
  .then(function() {
    return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout); })
  .then(function (el) {
    el.clear();
    el.sendKeys("Test");
  })
  // Email
  .then(function() {
    return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout);
  })
  .then(function (el) {
    el.clear();
    el.sendKeys("analytics@thomascookonline.com");
  })
  // Lead Pax Email
  .then(function() {
    return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout);
  })
  .then(function (el) {
    el.clear();
    el.sendKeys("analytics@thomascookonline.com");
  })
  // Post Code
  .then(function() {
    return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout);
  })
  .then(function (el) {
    el.clear();
    el.sendKeys("EC1A 4HD");
  })
  // Find Address Button Click
  .then(function() {
    return $browser.waitForAndFindElement(By.linkText("Find address"), DefaultTimeout);
  })
  .then(function (el) { el.click(); })
  // Address Select
  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'addressSelect\']//option[2]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } });
  })
  // Day of DOB
  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[2]"), DefaultTimeout);
  })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } });
  })
  // Month of DOB
  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[2]"), DefaultTimeout);
  })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } });
  })
  // Year of DOB
  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[29]"), DefaultTimeout);
  })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } });
  })
  // Contact Number
  .then(function() {
    return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout);
  })
  .then(function (el) {
    el.clear();
    el.sendKeys("07400000000");
  })
  // Info Checkbox
  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//div[@class=\'checkbox\']/label/input"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (bool) { el.click(); } });
  })

  // Form Filling Complete
  // ----------------------------------------------------------------------------------------------------------------

  /*
  * Step 7: Go to Other Pax Details
  */
  .then(function() {
    log(7, 'clickElement "Continue"');
    return $browser.waitForAndFindElement(By.linkText("Continue"), DefaultTimeout); })
  .then(function (el) { el.click(); })

  /*
  * Step 8: Fill in Additional Pax Info
  */
  .then(function() {
    log(8, 'Form Fill Additional Pax');

    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[4]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } }); })

  .then(function() {
    return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout); })
  .then(function (el) {
    el.clear();
    el.sendKeys("Test"); })

  .then(function() {
    return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout); })
  .then(function (el) {
    el.clear();
    el.sendKeys("Test"); })

  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[4]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } }); })

  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } }); })

  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } }); })

  .then(function() {
    return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[34]"), DefaultTimeout); })
  .then(function(el) { el.isSelected()
    .then(function(bool) { if (!bool) { el.click(); } }); })

  // Form Filling Additional Pax - Complete

  /*
  * Step 9: Go to Payment Details Page
  */
  .then(function() {
    log(9, 'Pax Details Submit');
    return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout); })
  .then(function (el) { el.click(); })

  /*
  * Step 10: Submit Card Details
  */
  .then(function() {
    log(10, 'clickElement "submit-card-details"');
    return $browser.waitForAndFindElement(By.id("submit-card-details"), DefaultTimeout); })

  // After the script has completed, validate if the timing has passed.
  .then(function() {
    if (performanceFailure === true) {
      console.log('Browser Script PERFORMANCE Failure');
      $util.insights.set('Performance Status', 'FAIL');
     	assert(performanceFailure === false);
    }
  })

  .then(function() {
    console.log('Browser script execution SUCCEEDED.');
  }, function(err) {
    console.log ('Browser script execution FAILED.');
    throw(err);
  });

  /** END OF SCRIPT **/
