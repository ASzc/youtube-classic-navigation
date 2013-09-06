// ==UserScript==
// @name                YouTube Classic Navigation
// @version             2013-09-06
// @namespace           https://github.com/ASzc/selfish-youtube
// @description         Block SPF Navigation
// @include             http://youtube.com/watch*
// @include             http://*.youtube.com/watch*
// @include             https://youtube.com/watch*
// @include             https://*.youtube.com/watch*
// @grant               none
// @run-at              document-start
// ==/UserScript==

// Reference: http://userscripts.org/scripts/show/125936

var actionsPerformed = 0;

window.addEventListener('beforescriptexecute', function(e) {

    src = e.target.src;
    if (src.search(/spf-.*\.js/) != -1) {
        e.preventDefault();
        e.stopPropagation();
        actionsPerformed++;
    };

    // When done, remove the listener
    if(actionsPerformed == 1) window.removeEventListener(e.type, arguments.callee, true);

}, true);
