// This is a JavaScript file
//Script for Onsen UI
ons.ready(function() {
      console.log("Onsen UI is ready!");
    });

    if (ons.platform.isIPhoneX()) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }