var whiteListedKeys = [];

function whiteListPrompt(){
    console.log('%c General whitelisting terms: ' + ["cart","device","digitalData"], colorCodeMain);
    var whiteListPrompt = prompt("What terms do you want to search the variables for specifically? (Separated by comma) \n\n An example has been logged to the console for some terms we generally recommend, depending on customer.");

    if(whiteListPrompt.length > 0){
       if(whiteListPrompt.indexOf(',') !== -1){
            tempWhiteListedKeys = whiteListPrompt.split(',');
            console.log(tempWhiteListedKeys)
            for(i=0;i<tempWhiteListedKeys.length; i++){
                if(tempWhiteListedKeys[i].length > 0){
                    whiteListedKeys.push(tempWhiteListedKeys[i])
                }
            }

       } else {
            whiteListedKeys.push(whiteListPrompt);
       }
    }
}
whiteListPrompt();

var globalIterationValue = 5;

function iterationLevelsPrompt(){
    var iterationLevels = prompt("Enter a value between 1 and 10 for how many many levels deep into object structures do you want to iterate through. This process looks for whitelist terms, removes empty strings, null values, undefined values, empty objects, functions, etc. \n\n Normally 3 to 5 is sufficient. The higher the value, the longer this will take to process and more matches it can potentially find for whitelisting. Depending on how many globally scoped variables are on the site, this could take several minutes to complete.");
    var iterationValue = parseInt(iterationLevels)
    if(typeof iterationValue === 'number' && iterationValue <= 10 && iterationValue >= 1){
        globalIterationValue = iterationValue;
    }
}
iterationLevelsPrompt();

var blackListedKeys = ["Back", "Bounce", "Circ", "Elastic", "Expo", "Modernizr", "ShadyCSS", "Sine", "WebComponents", "WindowResize", "YT", "YTConfig", "allCookiesArray", "allCookiesObj", "allCookiesObject", "angular", "angularCacheModuleName", "blackListedKeys", "chrome", "colorCodeCookies", "colorCodeHighlight", "colorCodeMain", "colorCodeMaster", "dT_", "devicePixelRatio", "frames", "globalIterationValue", "grabCookies", "history", "html5", "innerHeight", "innerWidth", "isSecureContext", "length", "locationbar", "masterObject", "masterObject", "menubar", "ng", "ngMaterial", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "personalbar", "ruxitagent", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "scrollbar", "scrollbars", "self", "speechSynthesis", "statusbar", "styleMedia", "toolbar", "top", "visualViewport", "visualViewport", "webkitStorageInfo", "whiteListedKeys", "yt", "ytEventsEventsCounter", "ytPubsubPubsubInstance","globalIterationValue"];

var colorCodeMain = [
    'background: linear-gradient(#73be28, #3bb24a)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');

var colorCodeHighlight = [
    'background: linear-gradient(#1496ff, #1e74bb)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');

var colorCodeCookies = [
    'background: linear-gradient(#6f2da8, #8757b6)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');

var colorCodeMaster = [
    'background: linear-gradient(#010101, #373737)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');

var colorCodeFinish = [
    'background: linear-gradient(to right, #73be28, #3bb24a, #1496ff, #1e74bb, #6f2da8, #8757b6)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'padding: 0px 100px 0px 100px'
].join(';');

console.clear()

let iterationCopy10 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7,parent8,parent9) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                target[prop] = src[prop]
                            }
                            if(target[prop] === undefined){
                                delete target[prop]
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined && parent8 !== undefined && parent9 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+parent9+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+parent9+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('10th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, parent9, src)
    }
};

let iterationCopy9 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7,parent8) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(globalIterationValue > 9){
                                if(iterationCopy10(src[prop]) !== undefined){
                                    target[prop] = iterationCopy10(src[prop], parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, prop);
                                }
                            } else {
                                target[prop] = src[prop];
                            } 
                            if(target[prop] === undefined){
                                delete target[prop]
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined && parent8 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('9th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, src)
    }
};

let iterationCopy8 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7) => {
    let target = {};
    let srcKeys = Object.keys(src)

    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(globalIterationValue > 8){
                                if(iterationCopy9(src[prop]) !== undefined){
                                    target[prop] = iterationCopy9(src[prop], parent1, parent2, parent3, parent4, parent5, parent6, parent7, prop);
                                }
                            } else {
                                target[prop] = src[prop];
                            } 
                            if(target[prop] === undefined){
                                delete target[prop]
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('8th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, src)
    }
};

let iterationCopy7 = (src,parent1,parent2,parent3,parent4,parent5,parent6) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(globalIterationValue > 7){
                                if(iterationCopy8(src[prop]) !== undefined){
                                    target[prop] = iterationCopy8(src[prop], parent1, parent2, parent3, parent4, parent5, parent6, prop);
                                }
                            } else {
                                target[prop] = src[prop];
                            } 
                            if(target[prop] === undefined){
                                delete target[prop]
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('7th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, src)
    }
};

let iterationCopy6 = (src,parent1,parent2,parent3,parent4,parent5) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(globalIterationValue > 6){
                                if(iterationCopy7(src[prop]) !== undefined){
                                    target[prop] = iterationCopy7(src[prop], parent1, parent2, parent3, parent4, parent5, prop);
                                }
                            } else {
                                target[prop] = src[prop];
                            } 
                            if(target[prop] === undefined){
                                delete target[prop]
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('6th stack: ' + e)
    }
};

let iterationCopy5 = (src,parent1,parent2,parent3,parent4) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                if(globalIterationValue > 5){
                                    if(iterationCopy6(src[prop]) !== undefined){
                                        target[prop] = iterationCopy6(src[prop], parent1, parent2, parent3, parent4, prop);
                                    }
                                } else {
                                    target[prop] = src[prop];
                                }
                                if(target[prop] === undefined){
                                    delete target[prop]
                                }         
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('5th stack: ' + e)
    }
};

let iterationCopy4 = (src,parent1,parent2,parent3) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {
                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                if(globalIterationValue > 4){
                                    if(iterationCopy5(src[prop]) !== undefined){
                                        target[prop] = iterationCopy5(src[prop], parent1, parent2, parent3, prop);
                                    }
                                } else {
                                    target[prop] = src[prop];
                                }
                                if(target[prop] === undefined){
                                    delete target[prop]
                                }
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }

                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('4th stack: ' + e)
    }
};

let iterationCopy3 = (src, parent1, parent2) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {
                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                if(globalIterationValue > 3){
                                    if(iterationCopy4(src[prop]) !== undefined){
                                        target[prop] = iterationCopy4(src[prop], parent1, parent2, prop);
                                    }
                                } else {
                                    target[prop] = src[prop];
                                }
                                if(target[prop] === undefined){
                                    delete target[prop]
                                }
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+parent2+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('3rd stack: ' + e)
    }
};

let iterationCopy2 = (src, parent1) => {
    let target = {};
    let srcKeys = Object.keys(src)

    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                if(globalIterationValue > 2){
                                    if(iterationCopy3(src[prop]) !== undefined){
                                        target[prop] = iterationCopy3(src[prop], parent1, prop);
                                    }
                                } else {
                                    target[prop] = src[prop];
                                }
                                if(target[prop] === undefined){
                                    delete target[prop]
                                }
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }


                    if(parent1 !== undefined){
                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.'+parent1+'.'+prop+' ',colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('2nd stack: ' + e)
    }
};

let iterationCopy1 = (src) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        for(let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                if (srcKeys.indexOf(prop) > -1) {

                    if(typeof src[prop] === 'function'){
                        continue;
                    }

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }


                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        /*Get rid of any HTML elements or Arrays and boil it down to just Objects*/
                        if(src[prop] instanceof HTMLElement === false && Array.isArray(src[prop]) === false){
                            if(src[prop] !== src[prop].parent){
                                if(globalIterationValue > 1){
                                    if(iterationCopy2(src[prop]) !== undefined){
                                        target[prop] = iterationCopy2(src[prop], prop)
                                    }
                                } else {
                                    target[prop] = src[prop]
                                }
                                if(target[prop] === undefined){
                                    delete target[prop]
                                }
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

            
                    for(var i=0; i<whiteListedKeys.length; i++){
                        //console.log(whiteListedKeys[i])
                        if(typeof whiteListedKeys[i] === 'string'){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.' + prop,colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight);
                                console.log(target);
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: %c ' + whiteListedKeys[i] + ' %c at %c window.' + prop,colorCodeMain,colorCodeHighlight,colorCodeMain,colorCodeHighlight);
                                    console.log(target);
                                }
                            }
                        }
                    }
                }
            }
        }


        if(Object.keys(target).length > 0){
            return target; 
        }
    } catch(e) {
        console.log('1st stack: ' + e);
    }




};

function grabCookies(){
    let target = {};    
    var allCookiesArray = document.cookie.split('; ');
    var allCookiesObject = {};
    for(let c in allCookiesArray){
        if(typeof allCookiesArray[c] === 'string'){
            var splitCookies = allCookiesArray[c].split('=');
            if(splitCookies.length > 2){
                allCookiesObject[allCookiesArray[c].split('=')[0]] = allCookiesArray[c].replace(allCookiesArray[c].split('=')[0]+'=','');
            } else {
                allCookiesObject[allCookiesArray[c].split('=')[0]] = allCookiesArray[c].split('=')[1];
            }
        }


    }
    

    if(allCookiesArray.length > 1){
        target["Cookies"] =  allCookiesObject;
        return target;
    }
}

var masterObject = iterationCopy1(window);
console.log('%c All Usable Objects (prepend them with window.) ',colorCodeMaster);
console.log(masterObject);


var allCookiesObj = grabCookies();
console.log('%c All Usable Cookies ',colorCodeCookies);
console.log(allCookiesObj);

console.log('%c FINISHED! ', colorCodeFinish)