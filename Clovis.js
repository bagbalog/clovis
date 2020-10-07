let BI_Clovis = {
    whiteListedKeys: [],
    colorCodeMain: [
        'background: linear-gradient(#73be28, #3bb24a)'
        , 'border: 1px solid #3E0E02'
        , 'color: white'
        , 'display: block'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 20px'
        , 'text-align: center'
        , 'font-weight: bold'
    ].join(';'),
    colorCodeHighlight: [
        'background: linear-gradient(#1496ff, #1e74bb)'
        , 'border: 1px solid #3E0E02'
        , 'color: white'
        , 'display: block'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 2px 2px -2px rgba(0, 0, 0, 0.5), 0 -2px 2px -2px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 20px'
        , 'text-align: center'
        , 'font-weight: bold'
    ].join(';'),
    colorCodeCookies: [
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
    ].join(';'),
    colorCodeMaster: [
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
    ].join(';'),
    colorCodeFinish: [
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
    ].join(';'),
    clovisSearchType: 'both',
    cookieEmoji: String.fromCodePoint(0x1F36A),
    blackListedKeys: ["Back", "Bounce", "Circ", "Elastic", "Expo", "Modernizr", "ShadyCSS", "Sine", "WebComponents", "WindowResize", "YT", "YTConfig", "allCookiesArray", "allCookiesObj", "allCookiesObject", "angular", "angularCacheModuleName", "blackListedKeys", "chrome", "colorCodeCookies", "colorCodeHighlight", "colorCodeMain", "colorCodeMaster", "dT_", "devicePixelRatio", "frames", "globalIterationValue", "grabCookies", "history", "html5", "innerHeight", "innerWidth", "isSecureContext", "length", "locationbar", "masterObject", "masterObject", "menubar", "ng", "ngMaterial", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "personalbar", "ruxitagent", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "scrollbar", "scrollbars", "self", "speechSynthesis", "statusbar", "styleMedia", "toolbar", "top", "visualViewport", "visualViewport", "w", "webkitStorageInfo", "whiteListedKeys", "yt", "ytEventsEventsCounter", "ytPubsubPubsubInstance","globalIterationValue","clovisSearchType","cookieEmoji"],
    init: function() {
        if(!this.globalIterationValue){
            this.globalIterationValue = 5;
        } else if (this.globalIterationValue !== 5){
            console.log('Custom set globalIterationValue ', this.globalIterationValue)
        }
        this.whiteListPrompt();
        this.searchTypePrompt();
        console.log("%c.o88b. db       .d88b.  db    db d888888b .d8888.                  \nd8P  Y8 88      .8P  Y8. 88    88   `88'   88'  YP                  \n8P      88      88    88 Y8    8P    88    `8bo.                    \n8b      88      88    88 `8b  d8'    88      `Y8b.                  \nY8b  d8 88booo. `8b  d8'  `8bd8'    .88.   db   8D                  \n `Y88P' Y88888P  `Y88P'     YP    Y888888P `8888Y'                 \n\nd8888b. db    db                                                    \n88  `8D `8b  d8'                                                    \n88oooY'  `8bd8'                                                     \n88~~~b.    88                                                       \n88   8D    88                                                       \nY8888P'    YP                                                       \n\nd8888b. db    db .d8888. d888888b d8b   db d88888b .d8888. .d8888.  \n88  `8D 88    88 88'  YP   `88'   888o  88 88'     88'  YP 88'  YP  \n88oooY' 88    88 `8bo.      88    88V8o 88 88ooooo `8bo.   `8bo.    \n88~~~b. 88    88   `Y8b.    88    88 V8o88 88~~~~~   `Y8b.   `Y8b.  \n88   8D 88b  d88 db   8D   .88.   88  V888 88.     db   8D db   8D  \nY8888P' ~Y8888P' `8888Y' Y888888P VP   V8P Y88888P `8888Y' `8888Y'  \n\nd888888b d8b   db .d8888. d888888b  d888b  db   db d888888b .d8888. \n  `88'   888o  88 88'  YP   `88'   88' Y8b 88   88 `~~88~~' 88'  YP \n   88    88V8o 88 `8bo.      88    88      88ooo88    88    `8bo.   \n   88    88 V8o88   `Y8b.    88    88  ooo 88~~~88    88      `Y8b. \n  .88.   88  V888 db   8D   .88.   88. ~8~ 88   88    88    db   8D \nY888888P VP   V8P `8888Y' Y888888P  Y888P  YP   YP    YP    `8888Y' ","font-family:monospace;color:default");
        //Grab all objects
        let masterObject = this.objectCrawl(window);

        //Grab all cookies
        let allCookiesObj = this.grabCookies();

        //Log all objects
        console.log('%c All Usable Global Variables ',this.colorCodeMaster);
        console.log(masterObject);

        //Log all cookies
        console.log('%c'+this.cookieEmoji+' All Usable Cookies '+this.cookieEmoji,this.colorCodeCookies);
        console.table(allCookiesObj);

        console.log('%c FINISHED! ', this.colorCodeFinish)

    },
    setIterationValue: function(num) {
        this.globalIterationValue = num;
    },
    whiteListPrompt: function() {
        let whiteListPrompt = prompt("What terms do you want to search the variables for specifically? (Separated by comma) \n\n An example has been logged to the console for some terms we generally recommend, depending on customer.","cart,device,digitalData");

        if(whiteListPrompt.length > 0){
            if(whiteListPrompt.indexOf(',') !== -1){
                let strippedWLKeys = whiteListPrompt.replace(/ /g,'');
                let tempWhiteListedKeys = strippedWLKeys.split(',');
                for(let i=0;i<tempWhiteListedKeys.length; i++){
                    if(tempWhiteListedKeys[i].length > 0){
                        this.whiteListedKeys.push(tempWhiteListedKeys[i])
                    }
                }

            } else {
                whiteListPrompt = whiteListPrompt.replace(/ /g,'');
                this.whiteListedKeys.push(whiteListPrompt);
            }
        }
    },
    searchTypePrompt: function() {
        let searchPrompt = prompt("Do you want to search the Keys, the Values, or Both for the whitelist terms?","Both");
        searchPrompt = searchPrompt.replace(/ /g,'');
        if(searchPrompt.length > 0){
            if(searchPrompt.toLowerCase() === 'both'){
                this.clovisSearchType = 'both';
            }
            if(searchPrompt.toLowerCase() === 'keys' || searchPrompt.toLowerCase() === 'key'){
                this.clovisSearchType = 'keys';
            }
            if(searchPrompt.toLowerCase() === 'values' || searchPrompt.toLowerCase() === 'value'){
                this.clovisSearchType = 'values';
            }
        }
    },
    isBlacklisted: function(src, key) {
        return this.blackListedKeys.includes(key) || this.blackListedKeys.includes(src[key]) || typeof src[key]==="function" || src[key] === undefined || src[key] === null ||src[key] instanceof HTMLElement || Array.isArray(src[key]);
    },
    checkWhitelist: function(src, prop, target, path, numIterations) {
        // console.log(`checking whitelist of ${src}[${prop}] at ${path}`);
        for (let i=0; i<this.whiteListedKeys.length; i++) {
            let key = this.whiteListedKeys[i];
            if(this.clovisSearchType==="both" || this.clovisSearchType==="keys") {
                if(prop.toLowerCase().indexOf(key.toLowerCase())>-1) {
                    console.log('%c ' + key + ' %c found in keys at %c '+path+'.' + prop,this.colorCodeHighlight,this.colorCodeMain,this.colorCodeHighlight);
                    console.log(target);
                }
            }
            if(this.clovisSearchType==="both" || this.clovisSearchType==="values") {
                if(src[prop]) {
                    try{
                        if(!src[prop] instanceof Object){
                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(key.toLowerCase()) > -1){
                                console.log('%c ' + key + ' %c found in values at %c '+path+'.' + prop,this.colorCodeHighlight,this.colorCodeMain,this.colorCodeHighlight);
                                console.log(target);
                            }
                        }
                        else if(numIterations<this.globalIterationValue){
                            if(JSON.stringify(src[prop]).toLowerCase().indexOf(key.toLowerCase()) > -1){
                                console.log('%c ' + key + ' %c found in values at %c '+path+'.' + prop,this.colorCodeHighlight,this.colorCodeMain,this.colorCodeHighlight);
                                console.log(target);
                            }
                        }
                    } catch(e){
                        //Doing nothing for now
                    }
                }
            }
        }
    },
    objectCrawl: function(src, parentKey, currentPath, numIterations) {
        // console.log("Path is currently.. ", currentPath);
        numIterations = numIterations ? numIterations+1 : 1;
        // console.log("Number of iterations so far: ",numIterations);
        let target = {};
        let newPath;
        if(parentKey) {
            //we're not at the top level
            if(currentPath) {
                newPath = currentPath+"."+parentKey;
            } else {
                newPath = parentKey;
            }
        } else {
            newPath = "window";
        }
        //console.log("New path will be: ",newPath);
        for(let prop in src) {
            try {
                // noinspection JSUnfilteredForInLoop
                if(this.isBlacklisted(src, prop)) {
                    continue;
                }
                if(typeof src[prop] !== "function" && src.hasOwnProperty(prop)) {

                    if(typeof src[prop] === 'boolean' || typeof src[prop] === 'number'){
                        target[prop] = src[prop];
                    }
                    if(typeof src[prop] === 'object' && src[prop] !== undefined && src[prop] !== null){
                        if(src[prop] !== src[prop].parent){
                            if(numIterations < this.globalIterationValue){
                                let childObj = this.objectCrawl(src[prop], prop, newPath, numIterations);
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
                    if(typeof src[prop] === 'string'){
                        if(src[prop].length > 0){
                            target[prop] = src[prop];
                        }
                    }
                    this.checkWhitelist(src, prop, target, newPath, numIterations);
                }
            } catch(e) {
                // was probably a function
            }
        }
        if(Object.keys(target).length > 0){
            try{
                JSON.stringify(target);
                return target;
            } catch (err){
                /*console.log(err)*/
            }
        }
    },
    grabCookies: function(){
        let allCookiesArray = document.cookie.split('; ');
        let allCookiesObject = {};
        for(let c in allCookiesArray){
            if(typeof allCookiesArray[c] === 'string'){
                let splitCookies = allCookiesArray[c].split('=');
                if(splitCookies.length > 2){
                    allCookiesObject[allCookiesArray[c].split('=')[0]] = allCookiesArray[c].replace(allCookiesArray[c].split('=')[0]+'=','');
                } else {
                    allCookiesObject[allCookiesArray[c].split('=')[0]] = allCookiesArray[c].split('=')[1];
                }
                let whiteListedKeys = this.whiteListedKeys;
                for(let i=0; i<whiteListedKeys.length; i++){
                    if(allCookiesArray[c].toLowerCase().indexOf(whiteListedKeys[i].toLowerCase()) > -1){
                        console.log('%c '+this.cookieEmoji +' '+whiteListedKeys[i] + ' %c was found in the cookies: %c '+allCookiesArray[c]+' '+this.cookieEmoji,this.colorCodeHighlight,this.colorCodeMain,this.colorCodeHighlight)
                    }
                }
            }
        }
        return allCookiesObject;
    }
};
BI_Clovis.init();
