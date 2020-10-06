var whiteListedKeys = [];

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
    , 'line-height: 25px'
    , 'font-size: 25px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'text-decoration: underline'
].join(';');

var colorCodeMaster = [
    'background: linear-gradient(#010101, #373737)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 25px'
    , 'font-size: 25px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'text-decoration: underline'
].join(';');

var colorCodeFinish = [
    'background: linear-gradient(to right, #73be28, #3bb24a, #1496ff, #1e74bb, #6f2da8, #8757b6)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 25px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'padding: 0px 100px 0px 100px'
].join(';');

var clovisSearchType = 'both';

var cookieEmoji = String.fromCodePoint(0x1F36A)

function whiteListPrompt(){
    var whiteListPrompt = prompt("What terms do you want to search the variables for specifically? (Separated by comma) \n\n An example has been logged to the console for some terms we generally recommend, depending on customer.","cart,device,digitalData");

    if(whiteListPrompt.length > 0){
       if(whiteListPrompt.indexOf(',') !== -1){
            let strippedWLKeys = whiteListPrompt.replace(/ /g,'')
            let tempWhiteListedKeys = strippedWLKeys.split(',');
            for(i=0;i<tempWhiteListedKeys.length; i++){
                if(tempWhiteListedKeys[i].length > 0){
                    whiteListedKeys.push(tempWhiteListedKeys[i])
                }
            }

       } else {
            whiteListPrompt = whiteListPrompt.replace(/ /g,'')
            whiteListedKeys.push(whiteListPrompt);
       }
    }
}
whiteListPrompt();

function searchTypePrompt(){
    var searchPrompt = prompt("Do you want to search the Keys, the Values, or Both for the whitelist terms?","Both");
    searchPrompt = searchPrompt.replace(/ /g,'')
    if(searchPrompt.length > 0){
        if(searchPrompt.toLowerCase() == 'both'){
            clovisSearchType = 'both';
        }
        if(searchPrompt.toLowerCase() == 'keys' || searchPrompt.toLowerCase() == 'key'){
            clovisSearchType = 'keys';
        }
        if(searchPrompt.toLowerCase() == 'values' || searchPrompt.toLowerCase() == 'value'){
            clovisSearchType = 'values';
        }   
    }
}
searchTypePrompt()

if(!globalIterationValue){
    var globalIterationValue = 5;
} else if (globalIterationValue !== 5){
    console.log('Custom set globalIterationValue ', globalIterationValue)
}

var blackListedKeys = ["Back", "Bounce", "Circ", "Elastic", "Expo", "Modernizr", "ShadyCSS", "Sine", "WebComponents", "WindowResize", "YT", "YTConfig", "allCookiesArray", "allCookiesObj", "allCookiesObject", "angular", "angularCacheModuleName", "blackListedKeys", "chrome", "colorCodeCookies", "colorCodeHighlight", "colorCodeMain", "colorCodeMaster", "dT_", "devicePixelRatio", "frames", "globalIterationValue", "grabCookies", "history", "html5", "innerHeight", "innerWidth", "isSecureContext", "length", "locationbar", "masterObject", "masterObject", "menubar", "ng", "ngMaterial", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "personalbar", "ruxitagent", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "scrollbar", "scrollbars", "self", "speechSynthesis", "statusbar", "styleMedia", "toolbar", "top", "visualViewport", "visualViewport", "w", "webkitStorageInfo", "whiteListedKeys", "yt", "ytEventsEventsCounter", "ytPubsubPubsubInstance","globalIterationValue","clovisSearchType","cookieEmoji"];

let iterationCopy10 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7,parent8,parent9) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined && parent8 !== undefined && parent9 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4 && prop!==parent5 && prop!==parent6 && prop!==parent7 && prop!==parent8 && prop!==parent9) {
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

                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+parent9+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                            console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+parent9+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                            console.log(target)
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('10th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, parent9, src)
    }
};

let iterationCopy9 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7,parent8) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined && parent8 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4 && prop!==parent5 && prop!==parent6 && prop!==parent7 && prop!==parent8){
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
                                    let childObj = iterationCopy10(src[prop],parent1,parent2,parent3,parent4,parent5,parent6,parent7,parent8,prop)
                                    if(childObj !== undefined){
                                        target[prop] = childObj
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

                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 9){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+parent8+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('9th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, parent8, src)
    }
};

let iterationCopy8 = (src,parent1,parent2,parent3,parent4,parent5,parent6,parent7) => {
    let target = {};
    let srcKeys = Object.keys(src)

    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined && parent7 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4 && prop!==parent5 && prop!==parent6 && prop!==parent7){
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
                                    let childObj = iterationCopy9(src[prop],parent1,parent2,parent3,parent4,parent5,parent6,parent7,prop)
                                    if(childObj !== undefined){
                                        target[prop] = childObj
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


                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 8){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+parent7+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }


                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('8th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, parent7, src)
    }
};

let iterationCopy7 = (src,parent1,parent2,parent3,parent4,parent5,parent6) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4 && prop!==parent5 && prop!==parent6){
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
                                    let childObj = iterationCopy8(src[prop],parent1,parent2,parent3,parent4,parent5,parent6,prop)
                                    if(childObj !== undefined){
                                        target[prop] = childObj
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


                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 7){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('7th stack: ' + e, parent1, parent2, parent3, parent4, parent5, parent6, src)
    }
};

let iterationCopy6 = (src,parent1,parent2,parent3,parent4,parent5) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4 && prop!==parent5){
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
                                    let childObj = iterationCopy7(src[prop],parent1,parent2,parent3,parent4,parent5,prop)
                                    if(childObj !== undefined){
                                        target[prop] = childObj
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

                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 6){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('6th stack: ' + e)
    }
};

let iterationCopy5 = (src,parent1,parent2,parent3,parent4) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3 && prop!==parent4){
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
                                        let childObj = iterationCopy6(src[prop],parent1,parent2,parent3,parent4,prop)
                                        if(childObj !== undefined){
                                            target[prop] = childObj
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



                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 5){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('5th stack: ' + e)
    }
};

let iterationCopy4 = (src,parent1,parent2,parent3) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2 && prop!==parent3){
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
                                        let childObj = iterationCopy5(src[prop],parent1,parent2,parent3,prop)
                                        if(childObj !== undefined){
                                            target[prop] = childObj
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


                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 4){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('4th stack: ' + e)
    }
};

let iterationCopy3 = (src, parent1, parent2) => {
    let target = {};
    let srcKeys = Object.keys(src);
    try{
        if(parent1 !== undefined && parent2 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1 && prop!==parent2){
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
                                        let childObj = iterationCopy4(src[prop],parent1,parent2,prop)
                                        if(childObj !== undefined){
                                            target[prop] = childObj
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


                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+parent2+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 3){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+parent2+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
        }
    } catch(e) {
        console.log('3rd stack: ' + e)
    }
};

let iterationCopy2 = (src, parent1) => {
    let target = {};
    let srcKeys = Object.keys(src)

    try{
        if(parent1 !== undefined){
            for (let prop in src) {
                if(blackListedKeys.indexOf(prop) == -1 && blackListedKeys.indexOf(src[prop]) == -1){
                    if (srcKeys.indexOf(prop)>-1 && prop!==parent1){
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
                                        let childObj = iterationCopy3(src[prop],parent1,prop)
                                        if(childObj !== undefined){
                                            target[prop] = childObj
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

                        for(var i=0; i<whiteListedKeys.length; i++){
                            if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                                if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                    console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.'+parent1+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                    console.log(target)
                                }
                            }
        
                            if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                                if(src[prop]){
                                    try{
                                        if(!src[prop] instanceof Object){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target)
                                            }
                                        } else if (globalIterationValue == 2){
                                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                                console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.'+parent1+'.'+prop+' ',colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                                                console.log(target);
                                            }          
                                        }
                                    } catch(wlErr){
                                        //Doing nothing for now
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
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
                                let childObj = iterationCopy2(src[prop],prop)
                                if(childObj !== undefined){
                                    target[prop] = childObj
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
                    if(clovisSearchType == 'both' || clovisSearchType == 'keys'){
                        if(prop.toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                            console.log('%c ' + whiteListedKeys[i] + ' %c found in keys at %c window.' + prop,colorCodeHighlight,colorCodeMain,colorCodeHighlight);
                            console.log(target);
                        }
                    }

                    if(clovisSearchType == 'both' || clovisSearchType == 'values'){
                        if(src[prop]){
                            try{
                                if(!src[prop] instanceof Object){
                                    if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                        console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.' + prop,colorCodeHighlight,colorCodeMain,colorCodeHighlight);
                                        console.log(target);
                                    }  
                                } else if (globalIterationValue == 1){
                                    if(JSON.stringify(src[prop]).toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                                        console.log('%c ' + whiteListedKeys[i] + ' %c found in values at %c window.' + prop,colorCodeHighlight,colorCodeMain,colorCodeHighlight);
                                        console.log(target);
                                    }          
                                }

                            } catch(wlErr){
                                //Doing nothing for now
                            }
                        }
                    }
                }

            }
        }


        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target)
                return target; 
            } catch (err){
                /*console.log(err)*/
            }
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

            for(var i=0; i<whiteListedKeys.length; i++){
                if(allCookiesArray[c].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                    console.log('%c '+cookieEmoji +' '+whiteListedKeys[i] + ' %c was found in the cookies: %c '+allCookiesArray[c]+' '+cookieEmoji,colorCodeHighlight,colorCodeMain,colorCodeHighlight)
                }
            }

        }


    }
    

    if(allCookiesArray.length > 1){
        target["Cookies"] =  allCookiesObject;
        return target;
    }
}

//Grab all objects
var masterObject = iterationCopy1(window);

//Grab all cookies
var allCookiesObj = grabCookies();

//Log all objects
console.log('%c All Usable Global Variables ',colorCodeMaster);
console.log(masterObject);

//Log all cookies
console.log('%c'+cookieEmoji+' All Usable Cookies '+cookieEmoji,colorCodeCookies);
console.table(allCookiesObj.Cookies);

console.log('%c FINISHED! ', colorCodeFinish)