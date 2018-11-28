/**
 * Script Name: necpath1
 */

// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 160000;

// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

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

// Blacklisting URLS causing scripit timeouts as these resouces are unavailable
$browser.addHostnameToBlacklist('cluster.ad-serverparc.nl');
$browser.addHostnameToBlacklist('api.shoppingminds.net');
$browser.addHostnameToBlacklist('https://tdn.r42tag.com/perm/104/prod?ck=104&cv={%221%22:true,%222%22:true}')
/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: necpath1');
console.log('Default timeout is set to ' + (DefaultTimeout / 1000) + ' seconds');
console.log('Variables set in this script: ', VARS);

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
    $browser.addHeader('User-Agent', UserAgent);
    console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function() {})

    .then(function() {
        log(1, 'Open "https://neckermann.nl/"');
        return $browser.get("https://neckermann.nl/");
    })

    .then(function() {
        log(2, 'clickElement "Accept cookies"');
        return $browser.waitForAndFindElement(By.xpath('//*[@id="st_popup_acceptButton"]'), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(3, 'clickElement "Close the popup"');
        return $browser.waitForAndFindElement(By.xpath('//*[@id="aanbod"]'), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(4, 'clickElement "Vliegvakanties"');
        return $browser.waitForAndFindElement(By.partialLinkText("Vliegvakanties"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(5, 'clickElement "Zoek mijn vliegvakantie"');
        return $browser.waitForAndFindElement(By.xpath('//*[@id="SearchbarForm-submitBtn"]/span'), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(6, 'clickElement "Info & prijzen"');
        return $browser.waitForAndFindElement(By.xpath('//*[@id="content-container"]/search-results-page/div[3]/div/package-list/div/div[1]/package-card/article/footer/div/a'), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(7, 'clickElement "Bereken mijn totaalprijs"');

         function scrollWin() {
    window.scrollTo(0,700);
}
        return $browser.waitForAndFindElement(By.css('button.pt-actions-continue-button.BtnPrimary'), 300000);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(8, 'clickElement "Deze vakantie boeken"');

        function scrollWin() {
    window.scrollTo(0,700);
}
        return $browser.waitForAndFindElement(By.xpath('//div[1]/accommodation-page/div[4]/div[2]/price-ticket/pt-sticky/div/div/ng-transclude/div/div[3]/div/button'), 300000);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(9, 'clickElement "Je gegevens"');


        function scrollWin() {
    window.scrollTo(0,700);
}
        // return $browser.waitForAndFindElement(By.partialLinkText("Je gegevens"), DefaultTimeout);
        return $browser.waitForAndFindElement(By.xpath('//div[1]/customize-page/div[3]/div[2]/price-ticket/pt-sticky/div/div/ng-transclude/div/div[3]/div/button'), 300000);
    })
    .then(function(el) {
        el.click();
    })

    /*.then(function() {
        log(10, 'clickElement "Geen bustransfer"');
        return $browser.waitForAndFindElement(By.xpath('//*[@id="pageTop"]/div[20]/div/div/div/div[2]/div[3]/p[1]/button'), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })*/
    

    // passenger form
    .then(function() {
        log(11, 'setElementSelected "title"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title\']//option[2]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(12, 'setElementText "name"');
        return $browser.waitForAndFindElement(By.id("name"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("givenname");
    })

    .then(function() {
        log(13, 'sendKeysToElement "middlename"');
        return $browser.waitForAndFindElement(By.id("middlename"), DefaultTimeout);
    })
    .then(function(el) {
        el.sendKeys("\\9");
    })

    .then(function() {
        log(14, 'setElementText "surname"');
        return $browser.waitForAndFindElement(By.id("surname"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("namefirst");
    })

    .then(function() {
        log(15, 'setElementText "email"');
        return $browser.waitForAndFindElement(By.id("email"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("test@mail.com");
    })

    .then(function() {
        log(16, 'setElementText "leadPassengerConfirmEmail"');
        return $browser.waitForAndFindElement(By.id("leadPassengerConfirmEmail"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("test@mail.com");
    })

    .then(function() {
        log(17, 'setElementSelected "country"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'country\']//option[1]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(18, 'setElementText "street"');
        return $browser.waitForAndFindElement(By.id("street"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("straat");
    })

    .then(function() {
        log(19, 'setElementText "houseNumber"');
        return $browser.waitForAndFindElement(By.id("houseNumber"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("30");
    })

    .then(function() {
        log(20, 'setElementText "postCode"');
        return $browser.waitForAndFindElement(By.id("postCode"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("1521NG");
    })

    .then(function() {
        log(21, 'setElementText "city"');
        return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("Amsterdam");
    })

    .then(function() {
        log(22, 'setElementSelected "day of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day\']//option[20]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(23, 'setElementSelected "month of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month\']//option[3]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(24, 'setElementSelected "year of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year\']//option[20]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(25, 'setElementText "contactNumber"');
        return $browser.waitForAndFindElement(By.id("contactNumber"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("0000000000");
    })

    .then(function() {
        log(26, 'clickElement "emergencyName"');
        return $browser.waitForAndFindElement(By.id("emergencyName"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(27, 'setElementText "emergencyName"');
        return $browser.waitForAndFindElement(By.id("emergencyName"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("Voor- en achternaam");
    })

    .then(function() {
        log(28, 'setElementText "emergencyPhone"');
        return $browser.waitForAndFindElement(By.id("emergencyPhone"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("0000000000");
    })

    .then(function() {
        log(29, 'clickElement "Verder"');
        return $browser.waitForAndFindElement(By.linkText("Verder"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(30, 'clickElement "Verder"');
        return $browser.waitForAndFindElement(By.xpath("//a/span[2]"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })
/*
    .then(function() {
        log(31, 'setElementSelected "second passenger"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'title2Room1\']//option[2]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(32, 'setElementText "name2Room1"');
        return $browser.waitForAndFindElement(By.id("name2Room1"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("voornam");
    })

    .then(function() {
        log(33, 'sendKeysToElement "middlename2Room1"');
        return $browser.waitForAndFindElement(By.id("middlename2Room1"), DefaultTimeout);
    })
    .then(function(el) {
        el.sendKeys("\\9");
    })

    .then(function() {
        log(34, 'setElementText "surname2Room1"');
        return $browser.waitForAndFindElement(By.id("surname2Room1"), DefaultTimeout);
    })
    .then(function(el) {
        el.clear();
        el.sendKeys("achternaam");
    })

    .then(function() {
        log(35, 'setElementSelected "pax 2 - day of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'day2Room1\']//option[2]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(36, 'setElementSelected "pax 2 - month of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'month2Room1\']//option[2]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(37, 'setElementSelected "pax 2 - year of birth"');
        return $browser.waitForAndFindElement(By.xpath("//select[@id=\'year2Room1\']//option[5]"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(38, 'clickElement "paxSubmit"');
        return $browser.waitForAndFindElement(By.id("paxSubmit"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(39, 'clickElement "label.FormField-labelCheckbox.FormField-labelCheckbox--e"');
        return $browser.waitForAndFindElement(By.css("label.FormField-labelCheckbox.FormField-labelCheckbox--e"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(40, 'setElementSelected "tAndCCheck"');
        return $browser.waitForAndFindElement(By.id("tAndCCheck"), DefaultTimeout);
    })
    .then(function(el) {
        el.isSelected()
            .then(function(bool) {
                if (!bool) {
                    el.click();
                }
            });
    })

    .then(function() {
        log(41, 'clickElement "submit-card-details"');
        return $browser.waitForAndFindElement(By.id("submit-card-details"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    .then(function() {
        log(42, '$browser.switchTo().frame("payOgone-iframe")');
        return $browser.switchTo().frame('payOgone-iframe');
    })

    .then(function() {
        log(43, 'clickElement "//form/table/tbody/tr[2]/td[3]/input[1]"');
        return $browser.waitForAndFindElement(By.xpath("//form/table/tbody/tr[2]/td[3]/input[1]"), DefaultTimeout);
    })
    .then(function(el) {
        el.click();
    })

    /*
    // Step 44
    .then(function(){
      log(43, 'clickElement "  "');
      return $browser.waitForAndFindElement(By.xpath(''), DefaultTimeout); })
    .then(function (el) { el.click(); })

    */

    .then(function() {
        log(lastStep, '');
        console.log('Browser script execution SUCCEEDED.');
        $browser.takeScreenshot();
    }, function(err) {
        console.log('Browser script execution FAILED.');
        $browser.takeScreenshot();
        throw (err);
    });

/** END OF SCRIPT **/
