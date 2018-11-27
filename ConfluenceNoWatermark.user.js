// ==UserScript==
// @name         Confluence No Watermark
// @namespace    https://aopod.com/
// @homepage     https://aopod.com/
// @version      0.1
// @description  Remove watermarks on Confluence Wiki
// @author       aopod
// @match        *REPLACE MACH HERE*
// @updateURL    https://github.com/aopod/ConfluenceNoWatermark/raw/master/ConfluenceNoWatermark.user.js
// @grant        none
// ==/UserScript==

/*
 * Notice: Please replace @match to pattern like: https://wiki.aopod.com/*
 */

(function(document) {
    'use strict';

    const removeAllMasks = () => {
        const masks = document.querySelectorAll('.mask_div');
        for (const mask of masks) {
            if (mask.id.indexOf('mask_div') == 0) {
                mask.parentNode.removeChild(mask);
            }
        }
    };
    removeAllMasks();
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type == 'childList') {
                const mask = document.querySelector('.mask_div');
                if (mask) {
                    removeAllMasks();
                }
                break;
            }
        }
    });
    observer.observe(document.body, {childList: true});
})(document);