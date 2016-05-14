var exec = require('child_process').exec;
module.exports = function(type) {
  var userType = type
  var singleUserType = userType[0]
  if(singleUserType == 'front' || 'front-end' || 'frontend' || 'frontEnd' || 'f') {
    exec('touch index.html && mkdir js && mkdir css && cd js && touch scripts.js && mkdir lib && touch vendor.min.js && cd .. && cd .. && cd css && touch styles.css && mkdir lib && touch vendor.min.css && cd .. && cd ..')
    //exec("echo '<!doctype html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <meta name=\"description\" content=\"Description Here\">\r\n  <meta name=\"author\" content=\"Your Name\">\r\n\r\n  <title>Your Title<\/title>\r\n  <link rel=\"stylesheet\" type=\"text\/css\" href=\".\/css\/lib\/vendor.min.css\" \/>\r\n  <link rel=\"stylesheet\" type=\"text\/css\" href=\".\/css\/styles.css\" \/>\r\n  <link rel=\"shortcut icon\" type=\"image\/png\" href=\"\/favicon.png\" \/>\r\n  <link rel=\"shortcut icon\" type=\"image\/png\" href=\"http:\/\/kingpixil.github.io\/DayFiftyNine\/favicon.png\" \/>\r\n  <script src=\"\/public\/js\/analytics.js\"><\/script>\r\n\r\n<\/head>\r\n\r\n<body>\r\n  Body Content\r\n  <script type=\"text\/javascript\" src=\".\/js\/lib\/vendor.min.js\"><\/script>\r\n'  <script type=\"text\/javascript\" src=\".\/js\/scripts.js\"><\/script>\r\n<\/body>\r\n\r\n<\/html>' > index.html && mkdir js && mkdir css && cd js && touch scripts.js && mkdir lib && touch vendor.min.js && cd .. && cd .. && cd css && touch styles.css && mkdir lib && touch vendor.min.css && cd .. && cd ..")
  }
}
