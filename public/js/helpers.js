// ========================================
// debounce
// ========================================

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Usage
// var myEfficientFn = debounce(function() {
//     // All the taxing stuff you do
// }, 250);
// window.addEventListener('resize', myEfficientFn);

// ========================================
// once
// ========================================

function once(fn, context) {
    var result;

    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

// Usage
// var canOnlyFireOnce = once(function() {
//     console.log('Fired!');
// });

// canOnlyFireOnce(); // "Fired!"
// canOnlyFireOnce(); // nada

// ========================================
// getAbsoluteUrl
// ========================================

var getAbsoluteUrl = (function() {
    var a;

    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;

        return a.href;
    };
})();

// Usage
// getAbsoluteUrl('/something'); // http://davidwalsh.name/something

// ========================================
// sheet
// ========================================

var sheet = (function() {
    // Create the <style> tag
    var style = document.createElement('style');

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute('media', 'screen')
    // style.setAttribute('media', 'only screen and (max-width : 1024px)')

    // WebKit hack :(
    style.appendChild(document.createTextNode(''));

    // Add the <style> element to the page
    document.head.appendChild(style);

    return style.sheet;
})();

// Usage
// sheet.insertRule("header { float: left; opacity: 0.8; }", 1);