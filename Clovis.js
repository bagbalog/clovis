function Clovis(){
	var keys=Object.keys(window);
    	keys.sort()
	var allUsableVariables = {};
	/*Stuff we never want to see based on the variable name*/
	var blackListedKeys = ["Back", "Bounce", "Circ", "Elastic", "Expo", "Modernizr", "ShadyCSS", "Sine", "WebComponents", "WindowResize", "YT", "YTConfig", "allCookiesArray", "allCookiesObject", "allUsableVariables", "angular", "angularCacheModuleName", "applicationCache", "c", "com", "countFunctions", "countFunctionsEnum", "crypto", "devicePixelRatio", "document", "dT_", "frames", "history", "html5", "i", "innerHeight", "innerWidth", "isSecureContext", "length", "locationbar", "menubar", "ng", "ngMaterial", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "personalbar", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "scrollbar", "scrollbars", "self", "speechSynthesis", "statusbar", "styleMedia", "toolbar", "top", "visualViewport", "visualViewport", "webkitStorageInfo", "x", "yt", "ytEventsEventsCounter", "ytPubsubPubsubInstance"];
	for (var i in keys){
		/*If it is is not in our blacklist*/
		if(blackListedKeys.indexOf(keys[i]) === -1){
			/*Get rid of any null values and any functions*/
			if(window[keys[i]] !== null && typeof window[keys[i]] !== 'function'){
				/*Get rid of any HTML elements being returned*/
				if(window[keys[i]] instanceof HTMLElement === false){
					/*Get rid of any Arrays and boil it down to just Objects*/
					if(typeof window[keys[i]] == 'object'){
						if(Array.isArray(window[keys[i]]) === false){
							/*Check if all the values in this object are functions on an enumerable object*/
							var thisEnumObjKeys = Object.keys(window[keys[i]]);
							var countFunctionsEnum = 0;
							for (var x in thisEnumObjKeys){
								if(typeof window[keys[i]][thisEnumObjKeys[x]] == 'function'){
									countFunctionsEnum++;
								}
							}
							/*If all the values are not functions, we can still potentially use something from this. (Enumerable Object)*/
							if(countFunctionsEnum !== thisEnumObjKeys.length){
								if( !(keys[i] in allUsableVariables) ){
									allUsableVariables[keys[i]] = window[keys[i]];
									console.log(keys[i], window[keys[i]]);
								}
							}
							/*Check if all the values in this object are functions on a NON-enumerable object*/
							var thisObjKeys = Object.keys(Object.getPrototypeOf(window[keys[i]]));
							var countFunctions = 0;
							for (var x in thisObjKeys){
								if(typeof window[keys[i]][thisObjKeys[x]] == 'function'){
									countFunctions++;
								}
							}
							/*If all the values are not functions, we can still potentially use something from this. (NON-enumerable Object)*/
							if(countFunctions !== thisObjKeys.length){
								if( !(keys[i] in allUsableVariables) ){
									allUsableVariables[keys[i]] = window[keys[i]];
									console.log(keys[i], window[keys[i]]);
								}
							}
						}
					} else {
						/*If it's a string*/
						if(typeof window[keys[i]] == 'string'){
							/*Only log it if the string actually has some value in it. */
							if(window[keys[i]].length > 0){
								if( !(keys[i] in allUsableVariables) ){
									allUsableVariables[keys[i]] = window[keys[i]];
									console.log(keys[i], window[keys[i]]);
								}
							}
						} else {
							/*This must be a number or potentially anything else I haven't accounted for.*/
							if(window[keys[i]]){
								if(!(keys[i] in allUsableVariables)){
									allUsableVariables[keys[i]] = window[keys[i]];
									console.log(keys[i], window[keys[i]]);
								}
							}
						}
					}
				}
			}
		}
	}
	/*Show the cookies too*/
	var allCookiesArray = document.cookie.split('; ');
	var allCookiesObject = {};
	for(c in allCookiesArray){
		allCookiesObject[allCookiesArray[c].split('=')[0]] = allCookiesArray[c].split('=')[1];
	}
    
    if(allCookiesArray.length > 1){
	    console.log(allCookiesObject);
    }
}
Clovis();