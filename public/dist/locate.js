(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{VxyW:function(o,t,a){"use strict";a.r(t),a.d(t,"locate",(function(){return i}));var n=a("mUSF");const i=()=>{$d.append("<blockquote id='fileSize'></blockquote>"),Object(n.i)("Fetching local information from the SCiPNET database","Decoding...",(function(){$.getJSON("https://en.wikipedia.org/api/rest_v1/page/summary/"+country.replace(/ /g,"_"),(function(o){window.countryDescription=o.extract_html||"N/A",Object(n.h)(),noscroll=!0,Object(n.c)(`<blockquote class="location">\n          <h1 class="locationHead">SCiPNET GEOLOCATION DATABASE</h1>\n          <div style="float:left;max-width:305px">\n            <locationtag>Your Current Location:</locationtag>\n            <locationdata style="font-size: 25px;margin: 5px 5px 15px 0px;line-height: 1;display: flex;align-items: center;"">${countryOfficalName} (${countryCode})<img src="/src/images/UN.svg" class="isUN"></img></locationdata>\n            <locationtag>Located City/Region:</locationtag>\n            <locationdata>${countryRegion}</locationdata>\n            <locationtag>Possible Located City (Approximation):</locationtag>\n            <locationdata>${countryCity}</locationdata>\n            <locationtag>Timezone:</locationtag>\n            <locationdata>${countryTimezone} (${countryUtc})</locationdata>\n            <locationtag>Capital/Major Area:</locationtag>\n            <locationdata>${countryCapital}</locationdata>\n            <locationtag>Continent, Sub Region:</locationtag>\n            <locationdata>${countryCon}, ${countrySubRe}</locationdata>\n            <locationtag>Border:</locationtag>\n            <locationdata>${countryBorder}</locationdata>\n            <locationtag>Country Status:</locationtag>\n            <locationdata>${countryStatus}</locationdata>\n            <img src="https://cache.ip-api.com/${countrylong},${countrylat},10" width="250px" onerror="this.style.display='none'" class="countryMap" style="margin: 20px 0 70px 0;height:268px">\n            <img src="/src/images/scp.svg" width="50px" class="smallSCPLogo">\n          </div>\n          <div class="locationInfo">\n            <img src="${countryFlag}" class="flag" width="200px" onerror="this.style.display='none'">\n            <hr>\n            <locationtag>Common Name:</locationtag>\n            <locationdata>${countryCommonName}</locationdata>\n            <locationtag>Population:</locationtag>\n            <locationdata>${countryPopulation}</locationdata>\n            <locationtag>Area (km²):</locationtag>\n            <locationdata>${countryArea}</locationdata>\n            <locationtag>Currency:</locationtag>\n            <locationdata>${countryCurrency}</locationdata>\n            <locationtag>IDD Country Code:</locationtag>\n            <locationdata>${countryCallingCode}</locationdata>\n            <locationtag>Popular Language(s):</locationtag>\n            <locationdata>${countryLanguages.toUpperCase()}</locationdata>\n            <locationtag>Demonym:</locationtag>\n            <locationdata>${countryDemonym}</locationdata>\n            <locationtag>Description:</locationtag>\n            <locationdata class="description" style="font-size: 10px;">${countryDescription}</locationdata>\n          </div>\n          </blockquote>`),countryisUN?$d.find(".isUN").show():$d.find(".isUN").hide()}))}))}}}]);