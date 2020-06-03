var blackListedKeys = ["Back", "Bounce", "Circ", "Elastic", "Expo", "Modernizr", "ShadyCSS", "Sine", "WebComponents", "WindowResize", "YT", "YTConfig", "allCookiesArray", "allCookiesObject", "angular", "angularCacheModuleName","devicePixelRatio", "dT_","chrome", "frames", "history", "html5", "innerHeight", "innerWidth", "isSecureContext", "length", "locationbar", "masterObject","menubar", "ng", "ngMaterial", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "personalbar", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "scrollbar", "scrollbars", "self", "speechSynthesis", "statusbar", "styleMedia", "toolbar", "top", "visualViewport", "visualViewport", "webkitStorageInfo", "yt", "ytEventsEventsCounter", "ytPubsubPubsubInstance"];

var whiteListedKeys = ["cart","device","digitalData"];

let iterationCopy7 = (src,parent1,parent2,parent3,parent4,parent5,parent6) => {
    let target = {};
    let srcKeys = Object.keys(src)
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
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
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined && parent5 !== undefined && parent6 !== undefined){
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+parent6+'.'+prop,'background: green; color: white;')
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
    let srcKeys = Object.keys(src)
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
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
                                target[prop] = iterationCopy7(src[prop],parent1,parent2,parent3,parent4,parent5,prop)
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
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+parent5+'.'+prop,'background: green; color: white;')
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
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
                if (src.hasOwnProperty(prop)) {

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
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }

                    if(parent1 !== undefined && parent2 !== undefined && parent3 !== undefined && parent4 !== undefined){
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+parent4+'.'+prop,'background: green; color: white;')
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
        /*console.log('5th stack: ' + e)*/
    }
};

let iterationCopy4 = (src,parent1,parent2,parent3) => {
    let target = {};
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){

                if (src.hasOwnProperty(prop)) {
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
                                if(iterationCopy5(src[prop]) !== undefined){
                                    target[prop] = iterationCopy5(src[prop],parent1,parent2,parent3,prop)
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
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+parent3+'.'+prop,'background: green; color: white;')
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
        /*console.log('4th stack: ' + e)*/
    }
};

let iterationCopy3 = (src, parent1, parent2) => {
    let target = {};
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
                if (src.hasOwnProperty(prop)) {
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
                                if(iterationCopy4(src[prop]) !== undefined){
                                    target[prop] = iterationCopy4(src[prop],parent1,parent2,prop)
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
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+parent2+'.'+prop,'background: green; color: white;')
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
        /*console.log('3rd stack: ' + e)*/
    }
};

let iterationCopy2 = (src, parent1) => {
    let target = {};
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
                if (src.hasOwnProperty(prop)) {

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
                                if(iterationCopy3(src[prop]) !== undefined){
                                    target[prop] = iterationCopy3(src[prop], parent1, prop)
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
                        for(wlTerm in whiteListedKeys){
                            if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                                console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+prop,'background: green; color: white;')
                                console.log(target)
                            }

                            if(src[prop] && typeof src[prop] === 'string'){
                                if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
                                    console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.'+parent1+'.'+prop,'background: green; color: white;')
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
    try{
        for (let prop in src) {
            if(blackListedKeys.indexOf(prop) == -1){
                if (src.hasOwnProperty(prop)) {

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
                                if(iterationCopy2(src[prop]) !== undefined){
                                    target[prop] = iterationCopy2(src[prop], prop)
                                }
                            }
                        }            
                    }

                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }


                    for(wlTerm in whiteListedKeys){
                        if(prop.toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1 && typeof src[prop] !== 'function' &&  src[prop] !== undefined && src[prop] !== null && blackListedKeys.indexOf(prop) == -1){
                            console.log('%c Found the whitelisted key: [' + whiteListedKeys[wlTerm] + '] at --- window.' + prop,'background: green; color: white;')
                            console.log(target)
                        }

						if(src[prop] && typeof src[prop] === 'string'){
							if(src[prop].toLowerCase().indexOf(whiteListedKeys[wlTerm].toLowerCase()) > -1){
								console.log('%c Found the whitelisted value: [' + whiteListedKeys[wlTerm] + '] at --- window.' + prop,'background: green; color: white;')
								console.log(target)
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
        console.log('1st stack: ' + e)
    }




};

function grabCookies(){
    let target = {};    
    var allCookiesArray = document.cookie.split('; ');
    var allCookiesObject = {};
    for(c in allCookiesArray){
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
        return target
    }
}

console.clear()

var masterObject = iterationCopy1(window)
console.log('%c All Usable Objects (prepend them with window.)','background: black; color: white;')
console.log(masterObject)

var allCookiesObj = grabCookies()
console.log('%c All Usable Cookies','background: blue; color: white;')
console.log(allCookiesObj)