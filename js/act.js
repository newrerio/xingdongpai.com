//---weixin视频播放js合并到这里 <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
//调用： document.addEventListener('WeixinJSBridgeReady', function() { e[0].play();}, false); 
!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(o,e){if(!o.jWeixin){var n,c={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var n in c)e[c[n]]=n;return e}(),i=o.document,t=i.title,r=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),u=-1!=r.indexOf("wxdebugger"),l=-1!=r.indexOf("micromessenger"),p=-1!=r.indexOf("android"),f=-1!=r.indexOf("iphone")||-1!=r.indexOf("ipad"),m=(n=r.match(/micromessenger\/(\d+\.\d+\.\d+)/)||r.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},v={},S={_completes:[]},y={state:0,data:{}};O(function(){g.initEndTime=L()});var I=!1,_=[],w={config:function(e){B("config",v=e);var t=!1!==v.check;O(function(){if(t)M(c.config,{verifyJsApiList:C(v.jsApiList),verifyOpenTagList:C(v.openTagList)},function(){S._complete=function(e){g.preVerifyEndTime=L(),y.state=1,y.data=e},S.success=function(e){h.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):y.state=-1};var t=S._completes;return t.push(function(){!function(){if(!(d||u||v.debug||m<"6.0.2"||h.systemType<0)){var i=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,w.getNetworkType({isInnerInvoke:!0,success:function(e){h.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;i.src=n}})}}()}),S.complete=function(e){for(var n=0,i=t.length;n<i;++n)t[n]();S._completes=[]},S}()),g.preVerifyStartTime=L();else{y.state=1;for(var e=S._completes,n=0,i=e.length;n<i;++n)e[n]();S._completes=[]}}),w.invoke||(w.invoke=function(e,n,i){o.WeixinJSBridge&&WeixinJSBridge.invoke(e,x(n),i)},w.on=function(e,n){o.WeixinJSBridge&&WeixinJSBridge.on(e,n)})},ready:function(e){0!=y.state?e():(S._completes.push(e),!l&&v.debug&&e())},error:function(e){m<"6.0.2"||(-1==y.state?e(y.data):S._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:C(e.jsApiList)},(e._complete=function(e){if(p){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=a[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){P(c.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||t,desc:e.title||t,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(n){P(c.onMenuShareAppMessage,{complete:function(e){"favorite"===e.scene?M("sendAppMessage",{title:n.title||t,desc:n.desc||"",link:n.link||location.href,img_url:n.imgUrl||"",type:n.type||"link",data_url:n.dataUrl||""}):M("sendAppMessage",{title:n.title||t,desc:n.desc||"",link:n.link||location.href,img_url:n.imgUrl||"",type:n.type||"link",data_url:n.dataUrl||""},n)}},n)},onMenuShareQQ:function(e){P(c.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){P(c.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){P(c.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){P("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){P("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(c.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){M(c.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){M("hideOptionMenu",{},e)},showOptionMenu:function(e){M("showOptionMenu",{},e)},closeWindow:function(e){M("closeWindow",{},e=e||{})},hideMenuItems:function(e){M("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){M("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){M("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){M("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){M(c.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){M(c.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var r=n[t],a={card_id:r.cardId,card_ext:r.cardExt};i.push(a)}M(c.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){M("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var r=n[t],a={card_id:r.cardId,code:r.code};i.push(a)}M(c.openCard,{card_list:i},e)},consumeAndShareCard:function(e){M(c.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){M(c.chooseWXPay,V(e),e)},openEnterpriseRedPacket:function(e){M(c.openEnterpriseRedPacket,V(e),e)},startSearchBeacons:function(e){M(c.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){M(c.stopSearchBeacons,{},e)},onSearchBeacons:function(e){P(c.onSearchBeacons,e)},openEnterpriseChat:function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(n){if(p){var e=n.extraData;if(e)try{n.extraData=JSON.parse(e)}catch(e){n.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},O(function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){O(function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){O(function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){O(function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){O(function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){O(function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(e){O(function(){e({miniprogram:"miniprogram"===o.__wxjs_environment})})}}},T=1,k={};return i.addEventListener("error",function(e){if(!p){var n=e.target,i=n.tagName,t=n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)if(-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=T++,n["wx-id"]=o),k[o])return;k[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),i.addEventListener("load",function(e){if(!p){var n=e.target,i=n.tagName;n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(k[t]=!1)}}},!0),e&&(o.wx=o.jWeixin=w),w}function M(n,e,i){o.WeixinJSBridge?WeixinJSBridge.invoke(n,x(e),function(e){A(n,e,i)}):B(n,i)}function P(n,i,t){o.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),A(n,e,i)}):B(n,t||i)}function x(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function A(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=a[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function C(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=c[t];o&&(e[n]=o)}return e}}function B(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var i=a[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function L(){return(new Date).getTime()}function O(e){l&&(o.WeixinJSBridge?e():i.addEventListener&&i.addEventListener("WeixinJSBridgeReady",e,!1))}});
//---weixin end

! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t() }(this, function() {
    return function(n) {
        function r(e) { if (i[e]) return i[e].exports; var t = i[e] = { exports: {}, id: e, loaded: !1 }; return n[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports }
        var i = {};
        return r.m = n, r.c = i, r.p = "", r(0)
    }([function(e, t, n) { e.exports = n(1) }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = new s(e),
                n = o(s.prototype.request, t);
            return i.extend(n, s.prototype, t), i.extend(n, t), n
        }
        var i = n(2),
            o = n(3),
            s = n(5),
            a = n(6),
            l = r(a);
        l.Axios = s, l.create = function(e) { return r(i.merge(a, e)) }, l.Cancel = n(23), l.CancelToken = n(24), l.isCancel = n(20), l.all = function(e) { return Promise.all(e) }, l.spread = n(25), e.exports = l, e.exports.default = l
    }, function(e, t, n) {
        "use strict";

        function o(e) { return "[object Array]" === u.call(e) }

        function r(e) { return null !== e && "object" == typeof e }

        function i(e) { return "[object Function]" === u.call(e) }

        function s(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), o(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }
        var a = n(3),
            l = n(4),
            u = Object.prototype.toString;
        e.exports = {
            isArray: o,
            isArrayBuffer: function(e) { return "[object ArrayBuffer]" === u.call(e) },
            isBuffer: l,
            isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData },
            isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
            isString: function(e) { return "string" == typeof e },
            isNumber: function(e) { return "number" == typeof e },
            isObject: r,
            isUndefined: function(e) { return void 0 === e },
            isDate: function(e) { return "[object Date]" === u.call(e) },
            isFile: function(e) { return "[object File]" === u.call(e) },
            isBlob: function(e) { return "[object Blob]" === u.call(e) },
            isFunction: i,
            isStream: function(e) { return r(e) && i(e.pipe) },
            isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams },
            isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document },
            forEach: s,
            merge: function n() {
                function e(e, t) { "object" == typeof r[t] && "object" == typeof e ? r[t] = n(r[t], e) : r[t] = e }
                for (var r = {}, t = 0, i = arguments.length; t < i; t++) s(arguments[t], e);
                return r
            },
            extend: function(n, e, r) { return s(e, function(e, t) { n[t] = r && "function" == typeof e ? a(e, r) : e }), n },
            trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }
        }
    }, function(e, t) {
        "use strict";
        e.exports = function(n, r) { return function() { for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t]; return n.apply(r, e) } }
    }, function(e, t) {
        function n(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
        e.exports = function(e) { return null != e && (n(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer); var t }
    }, function(e, t, n) {
        "use strict";

        function i(e) { this.defaults = e, this.interceptors = { request: new s, response: new s } }
        var r = n(6),
            o = n(2),
            s = n(17),
            a = n(18);
        i.prototype.request = function(e) {
            "string" == typeof e && (e = o.merge({ url: e }, arguments[1])), (e = o.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [a, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function(n) { i.prototype[n] = function(e, t) { return this.request(o.merge(t || {}, { method: n, url: e })) } }), o.forEach(["post", "put", "patch"], function(r) { i.prototype[r] = function(e, t, n) { return this.request(o.merge(n || {}, { method: r, url: e, data: t })) } }), e.exports = i
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {!o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
        var i, o = n(2),
            s = n(7),
            a = { "Content-Type": "application/x-www-form-urlencoded" },
            l = {
                adapter: ("undefined" != typeof XMLHttpRequest ? i = n(8) : "undefined" != typeof process && (i = n(8)), i),
                transformRequest: [function(e, t) { return s(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) { return 200 <= e && e < 300 }
            };
        l.headers = { common: { Accept: "application/json, text/plain, */*" } }, o.forEach(["delete", "get", "head"], function(e) { l.headers[e] = {} }), o.forEach(["post", "put", "patch"], function(e) { l.headers[e] = o.merge(a) }), e.exports = l
    }, function(e, t, n) {
        "use strict";
        var i = n(2);
        e.exports = function(n, r) { i.forEach(n, function(e, t) { t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t]) }) }
    }, function(e, t, p) {
        "use strict";
        var h = p(2),
            d = p(9),
            g = p(12),
            m = p(13),
            v = p(14),
            y = p(10),
            x = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || p(15);
        e.exports = function(f) {
            return new Promise(function(n, r) {
                var i = f.data,
                    o = f.headers;
                h.isFormData(i) && delete o["Content-Type"];
                var s = new XMLHttpRequest,
                    e = "onreadystatechange",
                    a = !1;
                if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in s || v(f.url) || (s = new window.XDomainRequest, e = "onload", a = !0, s.onprogress = function() {}, s.ontimeout = function() {}), f.auth) {
                    var t = f.auth.username || "",
                        l = f.auth.password || "";
                    o.Authorization = "Basic " + x(t + ":" + l)
                }
                if (s.open(f.method.toUpperCase(), g(f.url, f.params, f.paramsSerializer), !0), s.timeout = f.timeout, s[e] = function() {
                        if (s && (4 === s.readyState || a) && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:"))) {
                            var e = "getAllResponseHeaders" in s ? m(s.getAllResponseHeaders()) : null,
                                t = { data: f.responseType && "text" !== f.responseType ? s.response : s.responseText, status: 1223 === s.status ? 204 : s.status, statusText: 1223 === s.status ? "No Content" : s.statusText, headers: e, config: f, request: s };
                            d(n, r, t), s = null
                        }
                    }, s.onerror = function() { r(y("Network Error", f, null, s)), s = null }, s.ontimeout = function() { r(y("timeout of " + f.timeout + "ms exceeded", f, "ECONNABORTED", s)), s = null }, h.isStandardBrowserEnv()) {
                    var u = p(16),
                        c = (f.withCredentials || v(f.url)) && f.xsrfCookieName ? u.read(f.xsrfCookieName) : void 0;
                    c && (o[f.xsrfHeaderName] = c)
                }
                if ("setRequestHeader" in s && h.forEach(o, function(e, t) { void 0 === i && "content-type" === t.toLowerCase() ? delete o[t] : s.setRequestHeader(t, e) }), f.withCredentials && (s.withCredentials = !0), f.responseType) try { s.responseType = f.responseType } catch (n) { if ("json" !== f.responseType) throw n }
                "function" == typeof f.onDownloadProgress && s.addEventListener("progress", f.onDownloadProgress), "function" == typeof f.onUploadProgress && s.upload && s.upload.addEventListener("progress", f.onUploadProgress), f.cancelToken && f.cancelToken.promise.then(function(e) { s && (s.abort(), r(e), s = null) }), void 0 === i && (i = null), s.send(i)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var i = n(10);
        e.exports = function(e, t, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, function(e, t, n) {
        "use strict";
        var s = n(11);
        e.exports = function(e, t, n, r, i) { var o = new Error(e); return s(o, t, n, r, i) }
    }, function(e, t) {
        "use strict";
        e.exports = function(e, t, n, r, i) { return e.config = t, n && (e.code = n), e.request = r, e.response = i, e }
    }, function(e, t, n) {
        "use strict";

        function o(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        var s = n(2);
        e.exports = function(e, t, n) {
            if (!t) return e;
            var r;
            if (n) r = n(t);
            else if (s.isURLSearchParams(t)) r = t.toString();
            else {
                var i = [];
                s.forEach(t, function(e, t) { null != e && (s.isArray(e) ? t += "[]" : e = [e], s.forEach(e, function(e) { s.isDate(e) ? e = e.toISOString() : s.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e)) })) }), r = i.join("&")
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(2),
            s = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, r, i = {};
            return e && o.forEach(e.split("\n"), function(e) {
                if (r = e.indexOf(":"), t = o.trim(e.substr(0, r)).toLowerCase(), n = o.trim(e.substr(r + 1)), t) {
                    if (i[t] && 0 <= s.indexOf(t)) return;
                    i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
                }
            }), i
        }
    }, function(e, t, n) {
        "use strict";
        var s = n(2);
        e.exports = s.isStandardBrowserEnv() ? function() {
            function n(e) { var t = e; return i && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), { href: o.href, protocol: o.protocol ? o.protocol.replace(/:$/, "") : "", host: o.host, search: o.search ? o.search.replace(/^\?/, "") : "", hash: o.hash ? o.hash.replace(/^#/, "") : "", hostname: o.hostname, port: o.port, pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname } }
            var r, i = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");
            return r = n(window.location.href),
                function(e) { var t = s.isString(e) ? n(e) : e; return t.protocol === r.protocol && t.host === r.host }
        }() : function() { return !0 }
    }, function(e, t) {
        "use strict";

        function a() { this.message = "String contains an invalid character" }
        var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        (a.prototype = new Error).code = 5, a.prototype.name = "InvalidCharacterError", e.exports = function(e) {
            for (var t, n, r = String(e), i = "", o = 0, s = l; r.charAt(0 | o) || (s = "=", o % 1); i += s.charAt(63 & t >> 8 - o % 1 * 8)) {
                if (255 < (n = r.charCodeAt(o += .75))) throw new a;
                t = t << 8 | n
            }
            return i
        }
    }, function(e, t, n) {
        "use strict";
        var a = n(2);
        e.exports = a.isStandardBrowserEnv() ? {
            write: function(e, t, n, r, i, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), a.isString(r) && s.push("path=" + r), a.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
            remove: function(e) { this.write(e, "", Date.now() - 864e5) }
        } : { write: function() {}, read: function() { return null }, remove: function() {} }
    }, function(e, t, n) {
        "use strict";

        function r() { this.handlers = [] }
        var i = n(2);
        r.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, r.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, r.prototype.forEach = function(t) { i.forEach(this.handlers, function(e) { null !== e && t(e) }) }, e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
        var i = n(2),
            o = n(19),
            s = n(20),
            a = n(6),
            l = n(21),
            u = n(22);
        e.exports = function(t) { return r(t), t.baseURL && !l(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) { delete t.headers[e] }), (t.adapter || a.adapter)(t).then(function(e) { return r(t), e.data = o(e.data, e.headers, t.transformResponse), e }, function(e) { return s(e) || (r(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) }) }
    }, function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(t, n, e) { return r.forEach(e, function(e) { t = e(t, n) }), t }
    }, function(e, t) {
        "use strict";
        e.exports = function(e) { return !(!e || !e.__CANCEL__) }
    }, function(e, t) {
        "use strict";
        e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
    }, function(e, t) {
        "use strict";
        e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
    }, function(e, t) {
        "use strict";

        function n(e) { this.message = e }
        n.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, n.prototype.__CANCEL__ = !0, e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) { t = e });
            var n = this;
            e(function(e) { n.reason || (n.reason = new i(e), t(n.reason)) })
        }
        var i = n(23);
        r.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, r.source = function() { var t; return { token: new r(function(e) { t = e }), cancel: t } }, e.exports = r
    }, function(e, t) {
        "use strict";
        e.exports = function(t) { return function(e) { return t.apply(null, e) } }
    }])
}),
function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        S = T.document,
        r = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        u = s.call(Object),
        v = {},
        y = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, noModule: !0 };

    function _(e, t, n) {
        var r, i = (t = t || S).createElement("script");
        if (i.text = e, n)
            for (r in c) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function b(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var C = function(e, t) { return new C.fn.init(e, t) },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() { return a.call(this) },
        get: function(e) { return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = C.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return C.each(this, e) },
        map: function(n) { return this.pushStack(C.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(a.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || s.call(n) !== u)) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e) { _(e) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(f, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        var e, h, _, o, i, d, f, g, b, l, u, w, T, s, S, m, a, c, v, C = "sizzle" + 1 * new Date,
            y = n.document,
            k = 0,
            r = 0,
            p = se(),
            x = se(),
            P = se(),
            A = function(e, t) { return e === t && (u = !0), 0 },
            O = {}.hasOwnProperty,
            t = [],
            E = t.pop,
            N = t.push,
            D = t.push,
            R = t.slice,
            j = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + M + "*(" + F + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
            z = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            I = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            H = new RegExp("^" + M + "*," + M + "*"),
            B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            W = new RegExp(z),
            U = new RegExp("^" + F + "$"),
            Y = { ID: new RegExp("^#(" + F + ")"), CLASS: new RegExp("^\\.(" + F + ")"), TAG: new RegExp("^(" + F + "|[*])"), ATTR: new RegExp("^" + q), PSEUDO: new RegExp("^" + z), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            re = function() { w() },
            ie = ye(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { D.apply(t = R.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType } catch (n) {
            D = {
                apply: t.length ? function(e, t) { N.apply(e, R.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, s, a, l, u, c, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== T && w(t), t = t || T, S)) {
                if (11 !== p && (l = Q.exec(e)))
                    if (i = l[1]) { if (9 === p) { if (!(s = t.getElementById(i))) return n; if (s.id === i) return n.push(s), n } else if (f && (s = f.getElementById(i)) && v(t, s) && s.id === i) return n.push(s), n } else { if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n; if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(i)), n }
                if (h.qsa && !P[e + " "] && (!m || !m.test(e))) {
                    if (1 !== p) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = C), o = (u = d(e)).length; o--;) u[o] = "#" + a + " " + ve(u[o]);
                        c = u.join(","), f = J.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try { return D.apply(n, f.querySelectorAll(c)), n } catch (e) {} finally { a === C && t.removeAttribute("id") }
                }
            }
            return g(e.replace($, "$1"), t, n, r)
        }

        function se() { var r = []; return function e(t, n) { return r.push(t + " ") > _.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function ae(e) { return e[C] = !0, e }

        function le(e) { var t = T.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function ue(e, t) { for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function pe(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function he(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function de(s) { return ae(function(o) { return o = +o, ae(function(e, t) { for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ge(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (e in h = oe.support = {}, i = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, w = oe.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                return r !== T && 9 === r.nodeType && r.documentElement && (s = (T = r).documentElement, S = !i(T), y !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), h.attributes = le(function(e) { return e.className = "i", !e.getAttribute("className") }), h.getElementsByTagName = le(function(e) { return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length }), h.getElementsByClassName = Z.test(T.getElementsByClassName), h.getById = le(function(e) { return s.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length }), h.getById ? (_.filter.ID = function(e) { var t = e.replace(K, ee); return function(e) { return e.getAttribute("id") === t } }, _.find.ID = function(e, t) { if (void 0 !== t.getElementById && S) { var n = t.getElementById(e); return n ? [n] : [] } }) : (_.filter.ID = function(e) { var n = e.replace(K, ee); return function(e) { var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), _.find.TAG = h.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, _.find.CLASS = h.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e) }, a = [], m = [], (h.qsa = Z.test(T.querySelectorAll)) && (le(function(e) { s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]") }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = Z.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) { h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", z) }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = Z.test(s.compareDocumentPosition), v = t || Z.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) { if (e === t) return u = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && v(y, e) ? -1 : t === T || t.ownerDocument === y && v(y, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === T ? -1 : t === T ? 1 : i ? -1 : o ? 1 : l ? j(l, e) - j(l, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? ce(s[r], a[r]) : s[r] === y ? -1 : a[r] === y ? 1 : 0
                }), T
            }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && w(e), t = t.replace(X, "='$1']"), h.matchesSelector && S && !P[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try { var n = c.call(e, t); if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                return 0 < oe(t, T, null, [e]).length
            }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== T && w(e), v(e, t) }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== T && w(e);
                var n = _.attrHandle[t.toLowerCase()],
                    r = n && O.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== r ? r : h.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, oe.escape = function(e) { return (e + "").replace(te, ne) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(A), u) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
                return l = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (_ = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(K, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = oe.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(d, e, t, g, m) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                h = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = e; s = s[u];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = u = "only" === d && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (h = (a = (r = (i = (o = (s = c)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) { i[d] = [k, a, h]; break }
                                } else if (p && (h = a = (r = (i = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && r[1]), !1 === h)
                                    for (;
                                        (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (p && ((i = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [k, h]), s !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) { var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) { for (var n, r = s(e, o), i = r.length; i--;) e[n = j(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return s(e, 0, t) }) : s }
                },
                pseudos: {
                    not: ae(function(e) {
                        var r = [],
                            i = [],
                            a = f(e.replace($, "$1"));
                        return a[C] ? ae(function(e, t, n, r) { for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i)) }) : function(e, t, n) { return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: ae(function(t) { return function(e) { return 0 < oe(t, e).length } }),
                    contains: ae(function(t) {
                        return t = t.replace(K, ee),
                            function(e) { return -1 < (e.textContent || e.innerText || o(e)).indexOf(t) }
                    }),
                    lang: ae(function(n) {
                        return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(K, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === s },
                    focus: function(e) { return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !_.pseudos.empty(e) },
                    header: function(e) { return G.test(e.nodeName) },
                    input: function(e) { return V.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: de(function() { return [0] }),
                    last: de(function(e, t) { return [t - 1] }),
                    eq: de(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: de(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: de(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: de(function(e, t, n) { for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r); return e }),
                    gt: de(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = _.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) _.pseudos[e] = fe(e);
        for (e in { submit: !0, reset: !0 }) _.pseudos[e] = pe(e);

        function me() {}

        function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function ye(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, s = [k, p];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return s[2] = r[2]; if ((i[c] = s)[2] = a(e, t, n)) return !0 } return !1
            }
        }

        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function _e(e, t, n, r, i) { for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a))); return s }

        function be(h, d, g, m, v, e) {
            return m && !m[C] && (m = be(m)), v && !v[C] && (v = be(v, e)), ae(function(e, t, n, r) {
                var i, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n); return n }(d || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && d ? c : _e(c, a, h, n, r),
                    p = g ? v || (e ? h : u || m) ? [] : t : f;
                if (g && g(f, p, n, r), m)
                    for (i = _e(p, l), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            v(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = v ? j(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = _e(p === t ? p.splice(u, p.length) : p), v ? v(null, t, p, r) : D.apply(t, p)
            })
        }

        function we(e) {
            for (var i, t, n, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = ye(function(e) { return e === i }, s, !0), u = ye(function(e) { return -1 < j(i, e) }, s, !0), c = [function(e, t, n) { var r = !o && (n || t !== b) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n)); return i = null, r }]; a < r; a++)
                if (t = _.relative[e[a].type]) c = [ye(xe(c), t)];
                else {
                    if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) { for (n = ++a; n < r && !_.relative[e[n].type]; n++); return be(1 < a && xe(c), 1 < a && ve(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace($, "$1"), t, a < n && we(e.slice(a, n)), n < r && we(e = e.slice(n)), n < r && ve(e)) }
                    c.push(t)
                }
            return xe(c)
        }
        return me.prototype = _.filters = _.pseudos, _.setFilters = new me, d = oe.tokenize = function(e, t) { var n, r, i, o, s, a, l, u = x[e + " "]; if (u) return t ? 0 : u.slice(0); for (s = e, a = [], l = _.preFilter; s;) { for (o in n && !(r = H.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), s = s.slice(n.length)), _.filter) !(r = Y[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? oe.error(e) : x(e, a).slice(0) }, f = oe.compile = function(e, t) {
            var n, m, v, y, x, r, i = [],
                o = [],
                s = P[e + " "];
            if (!s) {
                for (t || (t = d(e)), n = t.length; n--;)(s = we(t[n]))[C] ? i.push(s) : o.push(s);
                (s = P(e, (m = o, v = i, y = 0 < v.length, x = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = e && [],
                        f = [],
                        p = b,
                        h = e || x && _.find.TAG("*", i),
                        d = k += null == p ? 1 : Math.random() || .1,
                        g = h.length;
                    for (i && (b = t === T || t || i); u !== g && null != (o = h[u]); u++) {
                        if (x && o) {
                            for (s = 0, t || o.ownerDocument === T || (w(o), n = !S); a = m[s++];)
                                if (a(o, t || T, n)) { r.push(o); break }
                            i && (k = d)
                        }
                        y && ((o = !a && o) && l--, e && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = E.call(r));
                            f = _e(f)
                        }
                        D.apply(r, f), i && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(r)
                    }
                    return i && (k = d, b = p), c
                }, y ? ae(r) : r))).selector = e
            }
            return s
        }, g = oe.select = function(e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e,
                c = !r && d(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && S && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(K, ee), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (r = l(s.matches[0].replace(K, ee), J.test(o[0].type) && ge(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && ve(o))) return D.apply(n, r), n; break }
            }
            return (u || f(e, c))(r, t, !S, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = C.split("").sort(A).join("") === C, h.detectDuplicates = !!u, w(), h.sortDetached = le(function(e) { return 1 & e.compareDocumentPosition(T.createElement("fieldset")) }), le(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ue("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), h.attributes && le(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ue("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), le(function(e) { return null == e.getAttribute("disabled") }) || ue(L, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe
    }(T);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;
    var d = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && C(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        w = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = C.expr.match.needsContext;

    function P(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, n, r) { return y(n) ? C.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? C.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? C.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : C.filter(n, e, r) }
    C.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) { return 1 === e.nodeType })) }, C.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (C.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
            return 1 < r ? C.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(O(this, e || [], !1)) },
        not: function(e) { return this.pushStack(O(this, e || [], !0)) },
        is: function(e) { return !!O(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length }
    });
    var E, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || E, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), A.test(r[1]) && C.isPlainObject(t))
                    for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
    }).prototype = C.fn, E = C(S);
    var D = /^(?:parents|prev(?:Until|All))/,
        R = { children: !0, contents: !0, next: !0, prev: !0 };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && C(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), C.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return d(e, "parentNode") }, parentsUntil: function(e, t, n) { return d(e, "parentNode", n) }, next: function(e) { return j(e, "nextSibling") }, prev: function(e) { return j(e, "previousSibling") }, nextAll: function(e) { return d(e, "nextSibling") }, prevAll: function(e) { return d(e, "previousSibling") }, nextUntil: function(e, t, n) { return d(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return d(e, "previousSibling", n) }, siblings: function(e) { return w((e.parentNode || {}).firstChild, e) }, children: function(e) { return w(e.firstChild) }, contents: function(e) { return P(e, "iframe") ? e.contentDocument : (P(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, function(r, i) { C.fn[r] = function(e, t) { var n = C.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (R[r] || C.uniqueSort(n), D.test(r) && n.reverse()), this.pushStack(n) } });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function F(e) { throw e }

    function q(e, t, n, r) { var i; try { e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    C.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(L) || [], function(e, t) { n[t] = !0 }), n) : C.extend({}, r);
        var i, t, o, s, a = [],
            l = [],
            u = -1,
            c = function() {
                for (s = s || r.once, o = i = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length;) !1 === a[u].apply(t[0], t[1]) && r.stopOnFalse && (u = a.length, t = !1);
                r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
            },
            f = { add: function() { return a && (t && !i && (u = a.length - 1, l.push(t)), function n(e) { C.each(e, function(e, t) { y(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== b(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return C.each(arguments, function(e, t) { for (var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= u && u-- }), this }, has: function(e) { return e ? -1 < C.inArray(e, a) : 0 < a.length }, empty: function() { return a && (a = []), this }, disable: function() { return s = l = [], a = t = "", this }, disabled: function() { return !a }, lock: function() { return s = l = [], t || i || (a = t = ""), this }, locked: function() { return !!s }, fireWith: function(e, t) { return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, C.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() { return i },
                    always: function() { return a.done(arguments).fail(arguments), this },
                    catch: function(e) { return s.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return C.Deferred(function(r) {
                            C.each(o, function(e, t) {
                                var n = y(i[t[4]]) && i[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var l = 0;

                        function u(i, o, s, a) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < l)) {
                                            if ((e = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, u(l, o, M, a), u(l, o, F, a)) : (l++, t.call(e, u(l, o, M, a), u(l, o, F, a), u(l, o, M, o.notifyWith))) : (s !== M && (n = void 0, r = [e]), (a || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = a ? e : function() { try { e() } catch (e) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (s !== F && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) { o[0][3].add(u(0, e, y(r) ? r : M, e.notifyWith)), o[1][3].add(u(0, e, y(t) ? t : M)), o[2][3].add(u(0, e, y(n) ? n : F)) }).promise()
                    },
                    promise: function(e) { return null != e ? C.extend(e, s) : s }
                },
                a = {};
            return C.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                s[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() { return a[t[0] + "With"](this === a ? void 0 : this, arguments), this }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = a.call(arguments),
                o = C.Deferred(),
                s = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (q(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(i[t] && i[t].then))) return o.then();
            for (; t--;) q(i[t], s(t), o.reject);
            return o.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) { T.console && T.console.warn && e && z.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { T.setTimeout(function() { throw e }) };
    var I = C.Deferred();

    function $() { S.removeEventListener("DOMContentLoaded", $), T.removeEventListener("load", $), C.ready() }
    C.fn.ready = function(e) { return I.then(e).catch(function(e) { C.readyException(e) }), this }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || I.resolveWith(S, [C]))
        }
    }), C.ready.then = I.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", $), T.addEventListener("load", $));
    var H = function(e, t, n, r, i, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (a in i = !0, n) H(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0, y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) { return u.call(C(e), n) })), t))
                for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        B = /^-ms-/,
        X = /-([a-z])/g;

    function W(e, t) { return t.toUpperCase() }

    function U(e) { return e.replace(B, "ms-").replace(X, W) }
    var Y = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function V() { this.expando = C.expando + V.uid++ }
    V.uid = 1, V.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(L) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !C.isEmptyObject(t) }
    };
    var G = new V,
        Z = new V,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Q.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Z.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({ hasData: function(e) { return Z.hasData(e) || G.hasData(e) }, data: function(e, t, n) { return Z.access(e, t, n) }, removeData: function(e, t) { Z.remove(e, t) }, _data: function(e, t, n) { return G.access(e, t, n) }, _removeData: function(e, t) { G.remove(e, t) } }), C.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Z.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = U(r.slice(5)), K(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { Z.set(this, n) }) : H(this, function(e) { var t; if (o && void 0 === e) { if (void 0 !== (t = Z.get(o, n))) return t; if (void 0 !== (t = K(o, n))) return t } else this.each(function() { Z.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { Z.remove(this, e) }) }
    }), C.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, C.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { C.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return G.get(e, n) || G.access(e, n, { empty: C.Callbacks("once memory").add(function() { G.remove(e, [t + "queue", n]) }) }) }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { C.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = C.Deferred(),
                o = this,
                s = this.length,
                a = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display") },
        ie = function(e, t, n, r) { var i, o, s = {}; for (o in t) s[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = s[o]; return i };

    function oe(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function() { return r.cur() } : function() { return C.css(e, t, "") },
            l = a(),
            u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            c = (C.cssNumber[t] || "px" !== u && +l) && te.exec(C.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) C.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, C.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var se = {};

    function ae(e, t) { for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = G.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = (f = u = l = void 0, u = (a = r).ownerDocument, c = a.nodeName, (f = se[c]) || (l = u.body.appendChild(u.createElement(c)), f = C.css(l, "display"), l.parentNode.removeChild(l), "none" === f && (f = "block"), se[c] = f)))) : "none" !== n && (i[o] = "none", G.set(r, "display", n))); var a, l, u, c, f; for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]); return e }
    C.fn.extend({ show: function() { return ae(this, !0) }, hide: function() { return ae(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { re(this) ? C(this).show() : C(this).hide() }) } });
    var le = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        fe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function pe(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? C.merge([e], n) : n }

    function he(e, t) { for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval")) }
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var de, ge, me = /<|&#?\w+;/;

    function ve(e, t, n, r, i) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) C.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = fe[a] || fe._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            C.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = p[h++];)
            if (r && -1 < C.inArray(o, r)) i && i.push(o);
            else if (u = C.contains(o.ownerDocument, o), s = pe(f.appendChild(o), "script"), u && he(s), n)
            for (c = 0; o = s[c++];) ce.test(o.type || "") && n.push(o);
        return f
    }
    de = S.createDocumentFragment().appendChild(S.createElement("div")), (ge = S.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), de.appendChild(ge), v.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
    var ye = S.documentElement,
        xe = /^key/,
        _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function we() { return !0 }

    function Te() { return !1 }

    function Se() { try { return S.activeElement } catch (e) {} }

    function Ce(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) { for (a in "string" != typeof n && (r = r || n, n = void 0), t) Ce(e, a, n, r, t[a], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) { return C().off(e), s.apply(this, arguments) }).guid = s.guid || (s.guid = C.guid++)), e.each(function() { C.event.add(this, t, i, r, n) })
    }
    C.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, p, h, d, g, m = G.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(ye, i), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) { return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0 }), u = (e = (e || "").match(L) || [""]).length; u--;) h = g = (a = be.exec(e[u]) || [])[1], d = (a[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, c = C.extend({ type: h, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && C.expr.match.needsContext.test(i), namespace: d.join(".") }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, d, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, f, p, h, d, g, m = G.hasData(e) && G.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(L) || [""]).length; u--;)
                    if (h = g = (a = be.exec(t[u]) || [])[1], d = (a[2] || "").split(".").sort(), h) {
                        for (f = C.event.special[h] || {}, p = l[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, d, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) C.event.remove(e, h + t[u], n, r, !0);
                C.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = C.event.fix(e),
                l = new Array(arguments.length),
                u = (G.get(this, "events") || {})[a.type] || [],
                c = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, u), t = 0;
                    (i = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < C(i, this).index(u) : C.find(i, this, null, [u]).length), s[i] && o.push(r);
                        o.length && a.push({ elem: u, handlers: o })
                    }
            return u = this, l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a
        },
        addProp: function(t, e) { Object.defineProperty(C.Event.prototype, t, { enumerable: !0, configurable: !0, get: y(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[C.expando] ? e : new C.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1 }, _default: function(e) { return P(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, C.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, C.event.addProp), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        C.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), C.fn.extend({ on: function(e, t, n, r) { return Ce(this, e, t, n, r) }, one: function(e, t, n, r) { return Ce(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() { C.event.remove(this, e, n, t) }) } });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ee(e, t) { return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

    function Ne(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function De(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Re(e, t) {
        var n, r, i, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e), s = G.set(t, o), u = o.events))
                for (i in delete s.handle, s.events = {}, u)
                    for (n = 0, r = u[i].length; n < r; n++) C.event.add(t, i, u[i][n]);
            Z.hasData(e) && (a = Z.access(e), l = C.extend({}, a), Z.set(t, l))
        }
    }

    function je(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, l, u, c = 0,
            f = n.length,
            p = f - 1,
            h = r[0],
            d = y(h);
        if (d || 1 < f && "string" == typeof h && !v.checkClone && Ae.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            d && (r[0] = h.call(this, e, t.html())), je(t, r, i, o)
        });
        if (f && (t = (e = ve(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = C.map(pe(e, "script"), Ne)).length; c < f; c++) l = e, c !== p && (l = C.clone(l, !0, !0), a && C.merge(s, pe(l, "script"))), i.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, C.map(s, De), c = 0; c < a; c++) l = s[c], ce.test(l.type || "") && !G.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : _(l.textContent.replace(Oe, ""), u, l))
        }
        return n
    }

    function Le(e, t, n) { for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(pe(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && he(pe(r, "script")), r.parentNode.removeChild(r)); return e }
    C.extend({
        htmlPrefilter: function(e) { return e.replace(ke, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, s, a, l, u, c = e.cloneNode(!0),
                f = C.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = pe(c), r = 0, i = (o = pe(e)).length; r < i; r++) a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || pe(e), s = s || pe(c), r = 0, i = o.length; r < i; r++) Re(o[r], s[r]);
                else Re(e, c);
            return 0 < (s = pe(c, "script")).length && he(s, !f && pe(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) { return Le(this, e, !0) },
        remove: function(e) { return Le(this, e) },
        text: function(e) { return H(this, function(e) { return void 0 === e ? C.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return je(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e) }) },
        prepend: function() {
            return je(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ee(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return je(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return je(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return C.clone(this, e, t) }) },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return je(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, s) { C.fn[e] = function(e) { for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), C(r[o])[s](t), l.apply(n, t.get()); return this.pushStack(n) } });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = T), t.getComputedStyle(e) },
        qe = new RegExp(ne.join("|"), "i");

    function ze(e, t, n) { var r, i, o, s, a = e.style; return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !v.pixelBoxStyles() && Me.test(s) && qe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s }

    function Ie(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", ye.removeChild(a), l = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, s, a = S.createElement("div"),
            l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(v, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i } }))
    }();
    var $e = /^(none|table(?!-c[ea]).+)/,
        He = /^--/,
        Be = { position: "absolute", visibility: "hidden", display: "block" },
        Xe = { letterSpacing: "0", fontWeight: "400" },
        We = ["Webkit", "Moz", "ms"],
        Ue = S.createElement("div").style;

    function Ye(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function(e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                if ((e = We[n] + t) in Ue) return e
        }(e) || e), t
    }

    function Ve(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ge(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ne[s], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, i)), "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, i))) : (l += C.css(e, "padding" + ne[s], !0, i), "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, i) : a += C.css(e, "border" + ne[s] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Ze(e, t, n) {
        var r = Fe(e),
            i = ze(e, t, r),
            o = "border-box" === C.css(e, "boxSizing", !1, r),
            s = o;
        if (Me.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return s = s && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }

    function Qe(e, t, n, r, i) { return new Qe.prototype.init(e, t, n, r, i) }
    C.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = ze(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = U(t),
                    l = He.test(t),
                    u = e.style;
                if (l || (t = Ye(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, s, a = U(t); return He.test(t) || (t = Ye(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, n) { if (t) return !$e.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, a, n) : ie(e, Be, function() { return Ze(e, a, n) }) },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = "border-box" === C.css(e, "boxSizing", !1, i),
                    s = n && Ge(e, a, n, o, i);
                return o && v.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - Ge(e, a, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Ve(0, t, s)
            }
        }
    }), C.cssHooks.marginLeft = Ie(v.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), C.each({ margin: "", padding: "", border: "Width" }, function(i, o) { C.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (C.cssHooks[i + o].set = Ve) }), C.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) { for (r = Fe(e), i = t.length; s < i; s++) o[t[s]] = C.css(e, t[s], !1, r); return o }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = Qe).prototype = { constructor: Qe, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px") }, cur: function() { var e = Qe.propHooks[this.prop]; return e && e.get ? e.get(this) : Qe.propHooks._default.get(this) }, run: function(e) { var t, n = Qe.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this } }).init.prototype = Qe.prototype, (Qe.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Qe.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = Qe.prototype.init, C.fx.step = {};
    var Je, Ke, et, tt, nt = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function it() { Ke && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(it) : T.setTimeout(it, C.fx.interval), C.fx.tick()) }

    function ot() { return T.setTimeout(function() { Je = void 0 }), Je = Date.now() }

    function st(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function at(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, s, r = 0,
            i = lt.prefilters.length,
            a = C.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var e = Je || ot(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n); return a.notifyWith(o, [u, n, t]), n < 1 && i ? t : (i || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1) },
            u = a.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Je || ot(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(u, o, c, u.opts)) return y(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(c, at, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, { elem: o, anim: u, queue: u.opts.queue })), u
    }
    C.Animation = C.extend(lt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return oe(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { y(e) ? (t = e, e = ["*"]) : e = e.match(L); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, l, u, c, f = "width" in t || "height" in t,
                p = this,
                h = {},
                d = e.style,
                g = e.nodeType && re(e),
                m = G.get(e, "fxshow");
            for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, p.always(function() { p.always(function() { s.unqueued--, C.queue(e, "fx").length || s.empty.fire() }) })), t)
                if (i = t[r], nt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    h[r] = m && m[r] || C.style(e, r)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (u = m && m.display) && (u = G.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (ae([e], !0), u = e.style.display || u, c = C.css(e, "display"), ae([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (p.done(function() { d.display = u }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", { display: u }), o && (m.hidden = !g), g && ae([e], !0), p.done(function() { for (r in g || ae([e]), G.remove(e, "fxshow"), h) C.style(e, r, h[r]) })), l = at(g ? m[r] : 0, r, p), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) }
    }), C.speed = function(e, t, n) { var r = e && "object" == typeof e ? C.extend({}, e) : { complete: n || !n && t || y(e) && e, duration: e, easing: n && t || t && !y(t) && t }; return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue) }, r }, C.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = C.isEmptyObject(t),
                o = C.speed(e, n, r),
                s = function() {
                    var e = lt(this, C.extend({}, t), o);
                    (i || G.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = C.timers,
                    r = G.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && rt.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = G.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = C.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, r) {
        var i = C.fn[r];
        C.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) }
    }), C.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { C.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), Je = void 0
    }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { Ke || (Ke = !0, it()) }, C.fx.stop = function() { Ke = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() { T.clearTimeout(n) }
        })
    }, et = S.createElement("input"), tt = S.createElement("select").appendChild(S.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = S.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
    var ut, ct = C.expr.attrHandle;
    C.fn.extend({ attr: function(e, t) { return H(this, C.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { C.removeAttr(this, e) }) } }), C.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!v.radioValue && "radio" === t && P(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(L);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ut = { set: function(e, t, n) { return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n } }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ct[t] || C.find.attr;
        ct[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ct[o], ct[o] = r, r = null != s(e, t, n) ? o : null, ct[o] = i), r }
    });
    var ft = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;

    function ht(e) { return (e.match(L) || []).join(" ") }

    function dt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function gt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || [] }
    C.fn.extend({ prop: function(e, t) { return H(this, C.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[C.propFix[e] || e] }) } }), C.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), v.optSelected || (C.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { C.propFix[this.toLowerCase()] = this }), C.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) { C(this).addClass(t.call(this, e, dt(this))) });
            if ((e = gt(t)).length)
                for (; n = this[l++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = ht(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) { C(this).removeClass(t.call(this, e, dt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = gt(t)).length)
                for (; n = this[l++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = ht(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                s = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function(e) { C(this).toggleClass(i.call(this, e, dt(this), t), t) }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0, n = C(this), r = gt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = dt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ht(dt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var mt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) { return null == e ? "" : e + "" })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : ht(C.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : i.length;
                    for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) { for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), C.each(["radio", "checkbox"], function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t) } }, v.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), v.focusin = "onfocusin" in T;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function(e) { e.stopPropagation() };
    C.extend(C.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, l, u, c, f, p = [n || S],
                h = m.call(e, "type") ? e.type : e,
                d = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (d = h.split(".")).shift(), d.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[h] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (a = c.delegateType || h, vt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
                    s === (n.ownerDocument || S) && p.push(s.defaultView || s.parentWindow || T)
                }
                for (i = 0;
                    (o = p[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? a : c.bindType || h, (u = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Y(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !Y(n) || l && y(n[h]) && !x(n) && ((s = n[l]) && (n[l] = null), C.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, yt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, yt), C.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = C.extend(new C.Event, n, { type: e, isSimulated: !0 });
            C.event.trigger(r, null, t)
        }
    }), C.fn.extend({ trigger: function(e, t) { return this.each(function() { C.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return C.event.trigger(e, t, n, !0) } }), v.focusin || C.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { C.event.simulate(r, e.target, C.event.fix(e)) };
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r);
                t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r) - 1;
                t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
            }
        }
    });
    var xt = T.location,
        _t = Date.now(),
        bt = /\?/;
    C.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new T.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t };
    var wt = /\[\]$/,
        Tt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function kt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) C.each(e, function(e, t) { r || wt.test(n) ? i(n, t) : kt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== b(e)) i(n, e);
        else
            for (t in e) kt(n + "[" + t + "]", e[t], r, i)
    }
    C.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) kt(n, e[n], t, i);
        return r.join("&")
    }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !le.test(e)) }).map(function(e, t) { var n = C(this).val(); return null == n ? null : Array.isArray(n) ? C.map(n, function(e) { return { name: t.name, value: e.replace(Tt, "\r\n") } }) : { name: t.name, value: n.replace(Tt, "\r\n") } }).get() } });
    var Pt = /%20/g,
        At = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Rt = {},
        jt = {},
        Lt = "*/".concat("*"),
        Mt = S.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (y(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function qt(t, i, o, s) {
        var a = {},
            l = t === jt;

        function u(e) { var r; return a[e] = !0, C.each(t[e] || [], function(e, t) { var n = t(i, o, s); return "string" != typeof n || l || a[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1) }), r }
        return u(i.dataTypes[0]) || !a["*"] && u("*")
    }

    function zt(e, t) { var n, r, i = C.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && C.extend(!0, e, r), e }
    Mt.href = xt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: xt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Lt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e) },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(jt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, h, r, d, g, i, o, m = C.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                x = C.Deferred(),
                _ = C.Callbacks("once memory"),
                b = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!n)
                                for (n = {}; t = Et.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return d ? p : null },
                    setRequestHeader: function(e, t) { return null == d && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this },
                    overrideMimeType: function(e) { return null == d && (m.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (d) w.always(e[w.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || l; return c && c.abort(t), u(0, t), this }
                };
            if (x.promise(w), m.url = ((e || m.url || xt.href) + "").replace(Dt, xt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(L) || [""], null == m.crossDomain) { r = S.createElement("a"); try { r.href = m.url, r.href = r.href, m.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { m.crossDomain = !0 } }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), qt(Rt, m, t, w), d) return w;
            for (i in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Nt.test(m.type), f = m.url.replace(At, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Pt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (bt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ot, "$1"), o = (bt.test(f) ? "&" : "?") + "_=" + _t++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && w.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && w.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, w, m) || d)) return w.abort();
            if (l = "abort", _.add(m.complete), w.done(m.success), w.fail(m.error), c = qt(jt, m, t, w)) {
                if (w.readyState = 1, g && y.trigger("ajaxSend", [w, m]), d) return w;
                m.async && 0 < m.timeout && (h = T.setTimeout(function() { w.abort("timeout") }, m.timeout));
                try { d = !1, c.send(s, u) } catch (e) {
                    if (d) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, s, a, l, u = t;
                d || (d = !0, h && T.clearTimeout(h), c = void 0, p = r || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) { l.unshift(i); break }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) { o = i; break }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, w, n)), a = function(e, t, n, r) {
                    var i, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {!0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1])); break }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try { t = s(t) } catch (e) { return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(m, a, w, i), i ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = w.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, i = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || u) + "", i ? x.resolveWith(v, [o, u, w]) : x.rejectWith(v, [w, u, s]), w.statusCode(b), b = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [w, m, i ? o : s]), _.fireWith(v, [w, u]), g && (y.trigger("ajaxComplete", [w, m]), --C.active || C.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) { return C.get(e, t, n, "json") },
        getScript: function(e, t) { return C.get(e, void 0, t, "script") }
    }), C.each(["get", "post"], function(e, i) { C[i] = function(e, t, n, r) { return y(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({ url: e, type: i, dataType: r, data: t, success: n }, C.isPlainObject(e) && e)) } }), C._evalUrl = function(e) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, C.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) { C(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = y(t); return this.each(function(e) { C(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { C(this).replaceWith(this.childNodes) }), this }
    }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new T.XMLHttpRequest } catch (e) {} };
    var It = { 0: 200, 1223: 204 },
        $t = C.ajaxSettings.xhr();
    v.cors = !!$t && "withCredentials" in $t, v.ajax = $t = !!$t, C.ajaxTransport(function(i) {
        var o, s;
        if (v.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(It[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), s = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() { 4 === r.readyState && T.setTimeout(function() { o && s() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), C.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), C.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain) return { send: function(e, t) { r = C("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), S.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Ht, Bt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Bt.pop() || C.expando + "_" + _t++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || C.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = T[r], T[r] = function() { o = arguments }, n.always(function() { void 0 === i ? C(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Bt.push(r)), o && y(i) && i(o[0]), o = i = void 0 }), "script" }), v.createHTMLDocument = ((Ht = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ht.childNodes.length), C.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = ve([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes))); var r, i, o }, C.fn.load = function(e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = ht(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && C.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } }), C.expr.pseudos.animated = function(t) { return C.grep(C.timers, function(e) { return t === e.elem }).length }, C.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, l, u = C.css(e, "position"),
                c = C(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, C.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { C.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - C.css(r, "marginTop", !0), left: t.left - i.left - C.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || ye }) }
    }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        C.fn[t] = function(e) {
            return H(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, n) { C.cssHooks[n] = Ie(v.pixelPosition, function(e, t) { if (t) return t = ze(e, n), Me.test(t) ? C(e).position()[n] + "px" : t }) }), C.each({ Height: "height", Width: "width" }, function(s, a) {
        C.each({ padding: "inner" + s, content: a, "": "outer" + s }, function(r, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return H(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i) }, a, n ? e : void 0, n)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { C.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), C.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), C.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = a.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(a.call(arguments))) }).guid = e.guid = e.guid || C.guid++, i }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = P, C.isFunction = y, C.isWindow = x, C.camelCase = U, C.type = b, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return C });
    var Wt = T.jQuery,
        Ut = T.$;
    return C.noConflict = function(e) { return T.$ === C && (T.$ = Ut), e && T.jQuery === C && (T.jQuery = Wt), C }, e || (T.jQuery = T.$ = C), C
}),
function(p, h) {
    "use strict";
    var t, n, d = {},
        r = p.document,
        g = p.GreenSockGlobals = p.GreenSockGlobals || p;
    if (!g.TweenLite) {
        var e, i, o, m, v, y = function(e) {
                var t, n = e.split("."),
                    r = g;
                for (t = 0; t < n.length; t++) r[n[t]] = r = r[n[t]] || {};
                return r
            },
            f = y("com.greensock"),
            x = 1e-10,
            l = function(e) {
                var t, n = [],
                    r = e.length;
                for (t = 0; t !== r; n.push(e[t++]));
                return n
            },
            _ = function() {},
            b = (t = Object.prototype.toString, n = t.call([]), function(e) { return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === n) }),
            w = {},
            T = function(a, l, u, c) {
                this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = u;
                var f = [];
                this.check = function(e) {
                    for (var t, n, r, i, o = l.length, s = o; - 1 < --o;)(t = w[l[o]] || new T(l[o], [])).gsClass ? (f[o] = t.gsClass, s--) : e && t.sc.push(this);
                    if (0 === s && u) {
                        if (r = (n = ("com.greensock." + a).split(".")).pop(), i = y(n.join("."))[r] = this.gsClass = u.apply(u, f), c)
                            if (g[r] = d[r] = i, "undefined" != typeof module && module.exports)
                                if (a === h)
                                    for (o in module.exports = d[h] = i, d) i[o] = d[o];
                                else d[h] && (d[h][r] = i);
                        else "function" == typeof define && define.amd && define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() { return i });
                        for (o = 0; o < this.sc.length; o++) this.sc[o].check()
                    }
                }, this.check(!0)
            },
            s = p._gsDefine = function(e, t, n, r) { return new T(e, t, n, r) },
            S = f._class = function(e, t, n) { return t = t || function() {}, s(e, [], function() { return t }, n), t };
        s.globals = g;
        var a = [0, 0, 1, 1],
            C = S("easing.Ease", function(e, t, n, r) { this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? a.concat(t) : a }, !0),
            k = C.map = {},
            u = C.register = function(e, t, n, r) {
                for (var i, o, s, a, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                    for (o = l[u], i = r ? S("easing." + o, null, !0) : f.easing[o] || {}, s = c.length; - 1 < --s;) a = c[s], k[o + "." + a] = k[a + o] = i[a] = e.getRatio ? e : e[a] || new e
            };
        for ((o = C.prototype)._calcEnd = !1, o.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    n = this._power,
                    r = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : e < .5 ? r / 2 : 1 - r / 2
            }, i = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --i;) o = e[i] + ",Power" + i, u(new C(null, null, 1, i), o, "easeOut", !0), u(new C(null, null, 2, i), o, "easeIn" + (0 === i ? ",easeNone" : "")), u(new C(null, null, 3, i), o, "easeInOut");
        k.linear = f.easing.Linear.easeIn, k.swing = f.easing.Quad.easeInOut;
        var P = S("events.EventDispatcher", function(e) { this._listeners = {}, this._eventTarget = e || this });
        (o = P.prototype).addEventListener = function(e, t, n, r, i) {
            i = i || 0;
            var o, s, a = this._listeners[e],
                l = 0;
            for (this !== m || v || m.wake(), null == a && (this._listeners[e] = a = []), s = a.length; - 1 < --s;)(o = a[s]).c === t && o.s === n ? a.splice(s, 1) : 0 === l && o.pr < i && (l = s + 1);
            a.splice(l, 0, { c: t, s: n, up: r, pr: i })
        }, o.removeEventListener = function(e, t) {
            var n, r = this._listeners[e];
            if (r)
                for (n = r.length; - 1 < --n;)
                    if (r[n].c === t) return void r.splice(n, 1)
        }, o.dispatchEvent = function(e) {
            var t, n, r, i = this._listeners[e];
            if (i)
                for (1 < (t = i.length) && (i = i.slice(0)), n = this._eventTarget; - 1 < --t;)(r = i[t]) && (r.up ? r.c.call(r.s || n, { type: e, target: n }) : r.c.call(r.s || n))
        };
        var A = p.requestAnimationFrame,
            O = p.cancelAnimationFrame,
            E = Date.now || function() { return (new Date).getTime() },
            N = E();
        for (i = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --i && !A;) A = p[e[i] + "RequestAnimationFrame"], O = p[e[i] + "CancelAnimationFrame"] || p[e[i] + "CancelRequestAnimationFrame"];
        S("Ticker", function(e, t) {
            var i, o, s, a, l, u = this,
                c = E(),
                n = !(!1 === t || !A) && "auto",
                f = 500,
                p = 33,
                h = function(e) {
                    var t, n, r = E() - N;
                    f < r && (c += r - p), N += r, u.time = (N - c) / 1e3, t = u.time - l, (!i || 0 < t || !0 === e) && (u.frame++, l += t + (a <= t ? .004 : a - t), n = !0), !0 !== e && (s = o(h)), n && u.dispatchEvent("tick")
                };
            P.call(u), u.time = u.frame = 0, u.tick = function() { h(!0) }, u.lagSmoothing = function(e, t) { return arguments.length ? (f = e || 1e10, void(p = Math.min(t, f, 0))) : f < 1e10 }, u.sleep = function() { null != s && (n && O ? O(s) : clearTimeout(s), o = _, s = null, u === m && (v = !1)) }, u.wake = function(e) { null !== s ? u.sleep() : e ? c += -N + (N = E()) : 10 < u.frame && (N = E() - f + 5), o = 0 === i ? _ : n && A ? A : function(e) { return setTimeout(e, 1e3 * (l - u.time) + 1 | 0) }, u === m && (v = !0), h(2) }, u.fps = function(e) { return arguments.length ? (a = 1 / ((i = e) || 60), l = this.time + a, void u.wake()) : i }, u.useRAF = function(e) { return arguments.length ? (u.sleep(), n = e, void u.fps(i)) : n }, u.fps(e), setTimeout(function() { "auto" === n && u.frame < 5 && "hidden" !== (r || {}).visibilityState && u.useRAF(!1) }, 1500)
        }), (o = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
        var c = S("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, Z) {
                v || m.wake();
                var n = this.vars.useFrames ? G : Z;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        m = c.ticker = new f.Ticker, (o = c.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
        var D = function() {
            v && 2e3 < E() - N && ("hidden" !== (r || {}).visibilityState || !m.lagSmoothing()) && m.wake();
            var e = setTimeout(D, 2e3);
            e.unref && e.unref()
        };
        D(), o.play = function(e, t) { return null != e && this.seek(e, t), this.reversed(!1).paused(!1) }, o.pause = function(e, t) { return null != e && this.seek(e, t), this.paused(!0) }, o.resume = function(e, t) { return null != e && this.seek(e, t), this.paused(!1) }, o.seek = function(e, t) { return this.totalTime(Number(e), !1 !== t) }, o.restart = function(e, t) { return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0) }, o.reverse = function(e, t) { return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1) }, o.render = function(e, t, n) {}, o.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, o.isActive = function() {
            var e, t = this._timeline,
                n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - 1e-7
        }, o._enabled = function(e, t) { return v || m.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1 }, o._kill = function(e, t) { return this._enabled(!1, !1) }, o.kill = function(e, t) { return this._kill(e, t), this }, o._uncache = function(e) { for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline; return this }, o._swapSelfInParams = function(e) { for (var t = e.length, n = e.concat(); - 1 < --t;) "{self}" === e[t] && (n[t] = this); return n }, o._callback = function(e) {
            var t = this.vars,
                n = t[e],
                r = t[e + "Params"],
                i = t[e + "Scope"] || t.callbackScope || this;
            switch (r ? r.length : 0) {
                case 0:
                    n.call(i);
                    break;
                case 1:
                    n.call(i, r[0]);
                    break;
                case 2:
                    n.call(i, r[0], r[1]);
                    break;
                default:
                    n.apply(i, r)
            }
        }, o.eventCallback = function(e, t, n, r) {
            if ("on" === (e || "").substr(0, 2)) {
                var i = this.vars;
                if (1 === arguments.length) return i[e];
                null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = b(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, o.delay = function(e) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay }, o.duration = function(e) { return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration) }, o.totalDuration = function(e) { return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration }, o.time = function(e, t) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time }, o.totalTime = function(e, t, n) {
            if (v || m.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (e < 0 && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        i = this._timeline;
                    if (r < e && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                        for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (M.length && J(), this.render(e, t, !1), M.length && J())
            }
            return this
        }, o.progress = o.totalProgress = function(e, t) { var n = this.duration(); return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio }, o.startTime = function(e) { return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime }, o.endTime = function(e) { return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale }, o.timeScale = function(e) { if (!arguments.length) return this._timeScale; var t, n; for (e = e || x, this._timeline && this._timeline.smoothChildTiming && (n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / e), this._timeScale = e, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline; return this }, o.reversed = function(e) { return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, o.paused = function(e) { if (!arguments.length) return this._paused; var t, n, r = this._timeline; return e != this._paused && r && (v || e || m.wake(), n = (t = r.rawTime()) - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this };
        var R = S("core.SimpleTimeline", function(e) { c.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        (o = R.prototype = new c).constructor = R, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(e, t, n, r) {
            var i, o;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                for (o = e._startTime; i && i._startTime > o;) i = i._prev;
            return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
        }, o._remove = function(e, t) { return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, o.render = function(e, t, n) { var r, i = this._first; for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r }, o.rawTime = function() { return v || m.wake(), this._totalTime };
        var j = S("TweenLite", function(e, t, n) {
                if (c.call(this, t, n), this.render = j.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : j.selector(e) || e;
                var r, i, o, s = e.jquery || e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType),
                    a = this.vars.overwrite;
                if (this._overwrite = a = null == a ? V[j.defaultOverwrite] : "number" == typeof a ? a >> 0 : V[a], (s || e instanceof Array || e.push && b(e)) && "number" != typeof e[0])
                    for (this._targets = o = l(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(i = o[r]) ? "string" != typeof i ? i.length && i !== p && i[0] && (i[0] === p || i[0].nodeType && i[0].style && !i.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(l(i))) : (this._siblings[r] = K(i, this, !1), 1 === a && 1 < this._siblings[r].length && te(i, this, null, 1, this._siblings[r])) : "string" == typeof(i = o[r--] = j.selector(i)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === a && 1 < this._siblings.length && te(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -x, this.render(Math.min(0, -this._delay)))
            }, !0),
            L = function(e) { return e && e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType) };
        (o = j.prototype = new c).constructor = j, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, j.version = "1.20.4", j.defaultEase = o._ease = new C(null, null, 1, 1), j.defaultOverwrite = "auto", j.ticker = m, j.autoSleep = 120, j.lagSmoothing = function(e, t) { m.lagSmoothing(e, t) }, j.selector = p.$ || p.jQuery || function(e) { var t = p.$ || p.jQuery; return t ? (j.selector = t)(e) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
        var M = [],
            F = {},
            q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            z = /[\+-]=-?[\.\d]/,
            I = function(e) { for (var t, n = this._firstPT; n;) t = n.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m(t, this._target || n.t) : t < 1e-6 && -1e-6 < t && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next },
            $ = function(e, t, n, r) {
                var i, o, s, a, l, u, c, f = [],
                    p = 0,
                    h = "",
                    d = 0;
                for (f.start = e, f.end = t, e = f[0] = e + "", t = f[1] = t + "", n && (n(f), e = f[0], t = f[1]), f.length = 0, i = e.match(q) || [], o = t.match(q) || [], r && (r._next = null, r.blob = 1, f._firstPT = f._applyPT = r), l = o.length, a = 0; a < l; a++) c = o[a], h += (u = t.substr(p, t.indexOf(c, p) - p)) || !a ? u : ",", p += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === i[a] || i.length <= a ? h += c : (h && (f.push(h), h = ""), s = parseFloat(i[a]), f.push(s), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: s, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0, f: 0, m: d && d < 4 ? Math.round : 0 }), p += c.length;
                return (h += t.substr(p)) && f.push(h), f.setRatio = I, z.test(t) && (f.end = null), f
            },
            H = function(e, t, n, r, i, o, s, a, l) {
                "function" == typeof r && (r = r(l || 0, e));
                var u = typeof e[t],
                    c = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                    f = "get" !== n ? n : c ? s ? e[c](s) : e[c]() : e[t],
                    p = "string" == typeof r && "=" === r.charAt(1),
                    h = { t: e, p: t, s: f, f: "function" === u, pg: 0, n: i || t, m: o ? "function" == typeof o ? o : Math.round : 0, pr: 0, c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0 };
                return ("number" != typeof f || "number" != typeof r && !p) && (s || isNaN(f) || !p && isNaN(r) || "boolean" == typeof f || "boolean" == typeof r ? (h.fp = s, h = { t: $(f, p ? parseFloat(h.s) + h.c + (h.s + "").replace(/[0-9\-\.]/g, "") : r, a || j.defaultStringFilter, h), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: i || t, pr: 0, m: 0 }) : (h.s = parseFloat(f), p || (h.c = parseFloat(r) - h.s || 0))), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h) : void 0
            },
            B = j._internals = { isArray: b, isSelector: L, lazyTweens: M, blobDif: $ },
            X = j._plugins = {},
            W = B.tweenLookup = {},
            U = 0,
            Y = B.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
            V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            G = c._rootFramesTimeline = new R,
            Z = c._rootTimeline = new R,
            Q = 30,
            J = B.lazyRender = function() {
                var e, t = M.length;
                for (F = {}; - 1 < --t;)(e = M[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                M.length = 0
            };
        Z._startTime = m.time, G._startTime = m.frame, Z._active = G._active = !0, setTimeout(J, 1), c._updateRoot = j.render = function() {
            var e, t, n;
            if (M.length && J(), Z.render((m.time - Z._startTime) * Z._timeScale, !1, !1), G.render((m.frame - G._startTime) * G._timeScale, !1, !1), M.length && J(), m.frame >= Q) {
                for (n in Q = m.frame + (parseInt(j.autoSleep, 10) || 120), W) {
                    for (e = (t = W[n].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete W[n]
                }
                if ((!(n = Z._first) || n._paused) && j.autoSleep && !G._first && 1 === m._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || m.sleep()
                }
            }
        }, m.addEventListener("tick", c._updateRoot);
        var K = function(e, t, n) {
                var r, i, o = e._gsTweenID;
                if (W[o || (e._gsTweenID = o = "t" + U++)] || (W[o] = { target: e, tweens: [] }), t && ((r = W[o].tweens)[i = r.length] = t, n))
                    for (; - 1 < --i;) r[i] === t && r.splice(i, 1);
                return W[o].tweens
            },
            ee = function(e, t, n, r) { var i, o, s = e.vars.onOverwrite; return s && (i = s(e, t, n, r)), (s = j.onOverwrite) && (o = s(e, t, n, r)), !1 !== i && !1 !== o },
            te = function(e, t, n, r, i) {
                var o, s, a, l;
                if (1 === r || 4 <= r) {
                    for (l = i.length, o = 0; o < l; o++)
                        if ((a = i[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                        else if (5 === r) break;
                    return s
                }
                var u, c = t._startTime + x,
                    f = [],
                    p = 0,
                    h = 0 === t._duration;
                for (o = i.length; - 1 < --o;)(a = i[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || ne(t, 0, h), 0 === ne(a, u, h) && (f[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((h || !a._initted) && c - a._startTime <= 2e-10 || (f[p++] = a)));
                for (o = p; - 1 < --o;)
                    if (a = f[o], 2 === r && a._kill(n, e, t) && (s = !0), 2 !== r || !a._firstPT && a._initted) {
                        if (2 !== r && !ee(a, t)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    }
                return s
            },
            ne = function(e, t, n) {
                for (var r = e._timeline, i = r._timeScale, o = e._startTime; r._timeline;) {
                    if (o += r._startTime, i *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return t < (o /= i) ? o - t : n && o === t || !e._initted && o - t < 2 * x ? x : (o += e.totalDuration() / e._timeScale / i) > t + x ? 0 : o - t - x
            };
        o._init = function() {
            var e, t, n, r, i, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!s.immediateRender,
                c = s.ease;
            if (s.startAt) {
                for (r in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {}, s.startAt) i[r] = s.startAt[r];
                if (i.data = "isStart", i.overwrite = !1, i.immediateRender = !0, i.lazy = u && !1 !== s.lazy, i.startAt = i.delay = null, i.onUpdate = s.onUpdate, i.onUpdateParams = s.onUpdateParams, i.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = j.to(this.target, 0, i), u)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { for (r in 0 !== this._time && (u = !1), n = {}, s) Y[r] && "autoCSS" !== r || (n[r] = s[r]); if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== s.lazy, n.immediateRender = u, this._startAt = j.to(this.target, 0, n), u) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = c = c ? c instanceof C ? c : "function" == typeof c ? new C(c, s.easeParams) : k[c] || j.defaultEase : j.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, e = 0; e < o; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (t && j._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, o._initProps = function(e, t, n, r, i) {
            var o, s, a, l, u, c;
            if (null == e) return !1;
            for (o in F[e._gsTweenID] && J(), this.vars.css || e.style && e !== p && e.nodeType && X.css && !1 !== this.vars.autoCSS && function(e, t) {
                    var n, r = {};
                    for (n in e) Y[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!X[n] || X[n] && X[n]._autoCSS) || (r[n] = e[n], delete e[n]);
                    e.css = r
                }(this.vars, e), this.vars)
                if (c = this.vars[o], Y[o]) c && (c instanceof Array || c.push && b(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                else if (X[o] && (l = new X[o])._onInitTween(e, this.vars[o], this, i)) {
                for (this._firstPT = u = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: l._priority, m: 0 }, s = l._overwriteProps.length; - 1 < --s;) t[l._overwriteProps[s]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else t[o] = H.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter, i);
            return r && this._kill(r, e) ? this._initProps(e, t, n, r, i) : 1 < this._overwrite && this._firstPT && 1 < n.length && te(e, this, t, this._overwrite, n) ? (this._kill(t, e), this._initProps(e, t, n, r, i)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), a)
        }, o.render = function(e, t, n) {
            var r, i, o, s, a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
            if (l - 1e-7 <= e && 0 <= e) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (u < 0 || e <= 0 && -1e-7 <= e || u === x && "isPause" !== this.data) && u !== e && (n = !0, x < u && (i = "onReverseComplete")), this._rawPrevTime = s = !t || e || u === e ? e : x);
            else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < u) && (i = "onReverseComplete", r = this._reversed), e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (0 <= u && (u !== x || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !t || e || u === e ? e : x)), (!this._initted || this._startAt && this._startAt.progress()) && (n = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var c = e / l,
                    f = this._easeType,
                    p = this._easePower;
                (1 === f || 3 === f && .5 <= c) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : e / l < .5 ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(e / l);
            if (this._time !== a || n) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void(this._lazy = [e, t]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= e && (this._active = !0), 0 === a && (this._startAt && (0 <= e ? this._startAt.render(e, !0, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, n), t || (this._time !== a || r || n) && this._callback("onUpdate")), i && (!this._gc || n) && (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === l && this._rawPrevTime === x && s !== x && (this._rawPrevTime = 0))
            }
        }, o._kill = function(e, t, n) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : j.selector(t) || t;
            var r, i, o, s, a, l, u, c, f, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
            if ((b(t) || L(t)) && "number" != typeof t[0])
                for (r = t.length; - 1 < --r;) this._kill(e, t[r], n) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; - 1 < --r;)
                        if (t === this._targets[r]) { a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all"; break }
                } else {
                    if (t !== this.target) return !1;
                    a = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (a) { if (u = e || a, c = e !== i && "all" !== i && e !== a && ("object" != typeof e || !e._tempKill), n && (j.onOverwrite || this.vars.onOverwrite)) { for (o in u) a[o] && (f || (f = []), f.push(o)); if ((f || !e) && !ee(this, n, t, f)) return !1 } for (o in u)(s = a[o]) && (p && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (i[o] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
            }
            return l
        }, o.invalidate = function() { return this._notifyPluginsOfEnabled && j._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], c.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -x, this.render(Math.min(0, -this._delay))), this }, o._enabled = function(e, t) {
            if (v || m.wake(), e && this._gc) {
                var n, r = this._targets;
                if (r)
                    for (n = r.length; - 1 < --n;) this._siblings[n] = K(r[n], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return c.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && j._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }, j.to = function(e, t, n) { return new j(e, t, n) }, j.from = function(e, t, n) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new j(e, t, n) }, j.fromTo = function(e, t, n, r) { return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new j(e, t, r) }, j.delayedCall = function(e, t, n, r, i) { return new j(t, 0, { delay: e, onComplete: t, onCompleteParams: n, callbackScope: r, onReverseComplete: t, onReverseCompleteParams: n, immediateRender: !1, lazy: !1, useFrames: i, overwrite: 0 }) }, j.set = function(e, t) { return new j(e, 0, t) }, j.getTweensOf = function(e, t) {
            if (null == e) return [];
            var n, r, i, o;
            if (e = "string" != typeof e ? e : j.selector(e) || e, (b(e) || L(e)) && "number" != typeof e[0]) {
                for (n = e.length, r = []; - 1 < --n;) r = r.concat(j.getTweensOf(e[n], t));
                for (n = r.length; - 1 < --n;)
                    for (o = r[n], i = n; - 1 < --i;) o === r[i] && r.splice(n, 1)
            } else if (e._gsTweenID)
                for (n = (r = K(e).concat()).length; - 1 < --n;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
            return r || []
        }, j.killTweensOf = j.killDelayedCallsTo = function(e, t, n) { "object" == typeof t && (n = t, t = !1); for (var r = j.getTweensOf(e, t), i = r.length; - 1 < --i;) r[i]._kill(n, e) };
        var re = S("plugins.TweenPlugin", function(e, t) { this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = re.prototype }, !0);
        if (o = re.prototype, re.version = "1.19.0", re.API = 2, o._firstPT = null, o._addTween = H, o.setRatio = I, o._kill = function(e) {
                var t, n = this._overwriteProps,
                    r = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = n.length; - 1 < --t;) null != e[n[t]] && n.splice(t, 1);
                for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                return !1
            }, o._mod = o._roundProps = function(e) { for (var t, n = this._firstPT; n;)(t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next }, j._onPluginEvent = function(e, t) {
                var n, r, i, o, s, a = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; a;) {
                        for (s = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                        (a._prev = r ? r._prev : o) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : o = a, a = s
                    }
                    a = t._firstPT = i
                }
                for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), a = a._next;
                return n
            }, re.activate = function(e) { for (var t = e.length; - 1 < --t;) e[t].API === re.API && (X[(new e[t])._propName] = e[t]); return !0 }, s.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, n = e.propName,
                    r = e.priority || 0,
                    i = e.overwriteProps,
                    o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    s = S("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() { re.call(this, n, r), this._overwriteProps = i || [] }, !0 === e.global),
                    a = s.prototype = new re(n);
                for (t in (a.constructor = s).API = e.API, o) "function" == typeof e[t] && (a[o[t]] = e[t]);
                return s.version = e.version, re.activate([s]), s
            }, e = p._gsQueue) { for (i = 0; i < e.length; i++) e[i](); for (o in w) w[o].func || p.console.log("GSAP encountered missing dependency: " + o) }
        v = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var savedScroll, _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

function detectPlatform() {
    var e = navigator.userAgent.toLowerCase(),
        t = -1 < e.indexOf("android"),
        n = -1 < e.indexOf("ipad") || -1 < e.indexOf("iphone") || -1 < e.indexOf("ipod");
    t ? $("body").addClass("is-platform-android") : n ? $("body").addClass("is-platform-ios") : $("body").addClass("is-platform-unknown")
}

function appendVideo() {
    var e = $("#video-loop");
    $(window).width() < 1e3 ? e.append("<source src='video/me540-min.mov' type='video/mp4; codecs=hvc1'>\n<source src='video/me540-min.mp4' type='video/mp4; codecs=avc1'>\n<source src='video/me540-min.ogg' type='video/ogg'>\n<source src='video/me540-min.webm' type='video/webm'>") : e.append("<source src='video/me1080-min.mov' type='video/mp4; codecs=hvc1'>\n<source src='video/me1080-min.mp4' type='video/mp4; codecs=avc1'>\n<source src='video/me1080-min.ogg' type='video/ogg'>\n<source src='video/me1080-min.webm' type='video/webm'>"), e[0].play()

    //必须在weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener('WeixinJSBridgeReady', function() {
        e[0].play();
    }, false);
}

function validateEmail(e) { return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) }

function handleForm() {
    function o(e) { e ? ($("#subscribe-button-label").hide(), $("#subscribe-button-spinner").show(), $("#subscribe-form-submit").prop("disabled", !0)) : ($("#subscribe-button-label").show(), $("#subscribe-button-spinner").hide(), $("#subscribe-form-submit").prop("disabled", !1)) }

    function s() { aw_report_conversion_ios(), fbq("track", "CompleteRegistration"), gtag("event", "submit_success", { event_category: "Subscribe Popup", send_to: "analytics" }), $(".subscribe-form").hide(), $(".subscribe-success").show(), $("#subscribe-success-title").show(), $("#subscribe-default-title").hide(), $(window).scrollTop(0) }

    function i(e, t) {
        AWS.config.region = $("#sns-region").val(), AWS.config.credentials = new AWS.CognitoIdentityCredentials({ IdentityPoolId: $("#sns-IdentityPoolId").val() });
        var n = { email: e, lang: t, token: grecaptcha.getResponse() },
            r = new AWS.SNS,
            i = { Message: JSON.stringify(n), TopicArn: $("#sns-TopicArn").val() };
        r.publish(i, function(e, t) { e ? ($("#subscribe-error-general").show(), o(!1), grecaptcha.reset()) : s() })
    }
    $("#subscribe-form-email").on("input", function() {
        var e = $(this).val();
        $(".subscribe-error").hide(), $(this).removeClass("invalid"), "" !== e ? ($("#subscribe-form-submit").prop("disabled", !1), $("#subscribe-form-email").addClass("has-content")) : ($("#subscribe-form-submit").prop("disabled", !0), $("#subscribe-form-email").removeClass("has-content"))
    }), $("#subscribe-form-email").blur(function() { validateEmail($(this).val()) ? ($(this).removeClass("invalid"), $("#subscribe-error-validation").hide()) : ($(this).addClass("invalid"), $("#subscribe-error-validation").show()) }), $("#subscribe-form").submit(function(e) {
        e.preventDefault();
        var t = $("#subscribe-form-email").val(),
            n = $("#subscribe-form-language").val(),
            r = $("#api-url").val();
        validateEmail(t) && grecaptcha.getResponse() && ($(".subscribe-error").hide(), gtag("event", "submit", { event_category: "Subscribe Popup", send_to: "analytics" }), o(!0), axios({ method: "post", url: r, timeout: 5e3, data: JSON.stringify({ email: t, lang: n, token: grecaptcha.getResponse() }) }).then(function(e) { e.data.success ? s() : "email_exists" === e.data.error_status ? ($("#subscribe-error-existing").show(), o(!1), grecaptcha.reset()) : "captcha_failed" === e.data.error_status ? ($("#subscribe-error-general").show(), o(!1), grecaptcha.reset()) : i(t, n) }).catch(function(e) { i(t, n) }))
    })
}

function trackReachingBottom() {
    // var e = !1;
    // $(window).scroll(function() { $(window).scrollTop() + $(window).height() == $(document).height() && (e || (gtag("event", "bottom", { event_category: "Scroll Reach", send_to: "analytics" }), e = !0)) })
}

function closePopup(e) { $("html, body").removeClass("is-popup-animated"), setTimeout(function() { $("html, body").removeClass(e + "-popup-opened") }, 300) }(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(o, I) {
            var d, S, k, g, $ = function() { o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = $.prototype.setRatio },
                u = _gsScope._gsDefine.globals,
                m = {},
                e = $.prototype = new o("css");
            (e.constructor = $).version = "1.20.4", $.API = 2, $.defaultTransformPerspective = 0, $.defaultSkewType = "compensated", $.defaultSmoothOrigin = !0, e = "px", $.suffixMap = { top: e, right: e, bottom: e, left: e, width: e, height: e, fontSize: e, padding: e, margin: e, perspective: e, lineHeight: "" };
            var P, v, y, H, x, C, A, O, t, n, E = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                N = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                D = /(?:\d|\-|\+|=|#|\.)*/g,
                R = /opacity *= *([^)]*)/i,
                b = /opacity:([^;]*)/i,
                s = /alpha\(opacity *=.+?\)/i,
                w = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                f = function(e, t) { return t.toUpperCase() },
                h = /(?:Left|Right|Width)/i,
                p = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                L = /,(?=[^\)]*(?:\(|$))/gi,
                M = /[\s,\(]/i,
                B = Math.PI / 180,
                X = 180 / Math.PI,
                F = {},
                r = { style: {} },
                q = _gsScope.document || { createElement: function() { return r } },
                z = function(e, t) { return q.createElementNS ? q.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : q.createElement(e) },
                W = z("div"),
                U = z("img"),
                i = $._internals = { _specialProps: m },
                Y = (_gsScope.navigator || {}).userAgent || "",
                V = (t = Y.indexOf("Android"), n = z("a"), y = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || 3 < parseFloat(Y.substr(t + 8, 2))), x = y && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, H = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (C = parseFloat(RegExp.$1)), !!n && (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity))),
                G = function(e) { return R.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                Z = function(e) { _gsScope.console && console.log(e) },
                Q = "",
                J = "",
                K = function(e, t) { var n, r, i = (t = t || W).style; if (void 0 !== i[e]) return e; for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; - 1 < --r && void 0 === i[n[r] + e];); return 0 <= r ? (Q = "-" + (J = 3 === r ? "ms" : n[r]).toLowerCase() + "-", J + e) : null },
                ee = q.defaultView ? q.defaultView.getComputedStyle : function() {},
                te = $.getStyle = function(e, t, n, r, i) { var o; return V || "opacity" !== t ? (!r && e.style[t] ? o = e.style[t] : (n = n || ee(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(a, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == i || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : i) : G(e) },
                ne = i.convertToPixels = function(e, t, n, r, i) {
                    if ("px" === r || !r && "lineHeight" !== t) return n;
                    if ("auto" === r || !n) return 0;
                    var o, s, a, l = h.test(t),
                        u = e,
                        c = W.style,
                        f = n < 0,
                        p = 1 === n;
                    if (f && (n = -n), p && (n *= 100), "lineHeight" !== t || r)
                        if ("%" === r && -1 !== t.indexOf("border")) o = n / 100 * (l ? e.clientWidth : e.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[l ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (u = e.parentNode || q.body, -1 !== te(u, "display").indexOf("flex") && (c.position = "absolute"), s = u._gsCache, a = I.ticker.frame, s && l && s.time === a) return s.width * n / 100;
                                c[l ? "width" : "height"] = n + r
                            }
                            u.appendChild(W), o = parseFloat(W[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(W), l && "%" === r && !1 !== $.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = a, s.width = o / n * 100), 0 !== o || i || (o = ne(e, t, n, r, !0))
                        }
                    else s = ee(e).lineHeight, e.style.lineHeight = n, o = parseFloat(ee(e).lineHeight), e.style.lineHeight = s;
                    return p && (o /= 100), f ? -o : o
                },
                re = i.calculateOffset = function(e, t, n) {
                    if ("absolute" !== te(e, "position", n)) return 0;
                    var r = "left" === t ? "Left" : "Top",
                        i = te(e, "margin" + r, n);
                    return e["offset" + r] - (ne(e, t, parseFloat(i), i.replace(D, "")) || 0)
                },
                ie = function(e, t) {
                    var n, r, i, o = {};
                    if (t = t || ee(e, null))
                        if (n = t.length)
                            for (; - 1 < --n;)(-1 === (i = t[n]).indexOf("-transform") || Le === i) && (o[i.replace(l, f)] = t.getPropertyValue(i));
                        else
                            for (n in t)(-1 === n.indexOf("Transform") || je === n) && (o[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === o[n] && (o[n.replace(l, f)] = t[n]);
                    return V || (o.opacity = G(e)), r = Ve(e, t, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, Fe && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
                },
                oe = function(e, t, n, r, i) {
                    var o, s, a, l = {},
                        u = e.style;
                    for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = n[s]) || i && i[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(c, "") ? o : 0 : re(e, s), void 0 !== u[s] && (a = new _e(u, s, u[s], a)));
                    if (r)
                        for (s in r) "className" !== s && (l[s] = r[s]);
                    return { difs: l, firstMPT: a }
                },
                se = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                le = function(e, t, n) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (n || ee(e))[t] || 0;
                    if (e.getCTM && We(e)) return e.getBBox()[t] || 0;
                    var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        i = se[t],
                        o = i.length;
                    for (n = n || ee(e, null); - 1 < --o;) r -= parseFloat(te(e, "padding" + i[o], n, !0)) || 0, r -= parseFloat(te(e, "border" + i[o] + "Width", n, !0)) || 0;
                    return r
                },
                ue = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    (null == e || "" === e) && (e = "0 0");
                    var n, r = e.split(" "),
                        i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0],
                        o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
                    if (3 < r.length && !t) { for (r = e.split(", ").join(",").split(","), e = [], n = 0; n < r.length; n++) e.push(ue(r[n])); return e.join(",") }
                    return null == o ? o = "center" === i ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + o + (2 < r.length ? " " + r[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(i.replace(c, "")), t.oy = parseFloat(o.replace(c, "")), t.v = e), t || e
                },
                ce = function(e, t) { return "function" == typeof e && (e = e(O, A)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0 },
                fe = function(e, t) { return "function" == typeof e && (e = e(O, A)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0 },
                pe = function(e, t, n, r) { var i, o, s, a, l; return "function" == typeof e && (e = e(O, A)), null == e ? a = t : "number" == typeof e ? a = e : (i = 360, o = e.split("_"), s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : X) - (l ? 0 : t), o.length && (r && (r[n] = t + s), -1 !== e.indexOf("short") && ((s %= i) !== s % 180 && (s = s < 0 ? s + i : s - i)), -1 !== e.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % i - (s / i | 0) * i : -1 !== e.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % i - (s / i | 0) * i)), a = t + s), a < 1e-6 && -1e-6 < a && (a = 0), a },
                he = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                de = function(e, t, n) { return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0 },
                ge = $.parseColor = function(e, t) {
                    var n, r, i, o, s, a, l, u, c, f, p;
                    if (e)
                        if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) n = he[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (r = e.charAt(1)) + r + (i = e.charAt(2)) + i + (o = e.charAt(3)) + o), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (n = p = e.match(E), t) { if (-1 !== e.indexOf("=")) return e.match(N) } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, r = 2 * (l = Number(n[2]) / 100) - (i = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < n.length && (n[3] = Number(n[3])), n[0] = de(s + 1 / 3, r, i), n[1] = de(s, r, i), n[2] = de(s - 1 / 3, r, i);
                            else n = e.match(E) || he.transparent;
                            n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                        }
                    else n = he.black;
                    return t && !p && (r = n[0] / 255, i = n[1] / 255, o = n[2] / 255, l = ((u = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, u === c ? s = a = 0 : (f = u - c, a = .5 < l ? f / (2 - u - c) : f / (u + c), s = u === r ? (i - o) / f + (i < o ? 6 : 0) : u === i ? (o - r) / f + 2 : (r - i) / f + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                },
                me = function(e, t) {
                    var n, r, i, o = e.match(ve) || [],
                        s = 0,
                        a = "";
                    if (!o.length) return e;
                    for (n = 0; n < o.length; n++) r = o[n], s += (i = e.substr(s, e.indexOf(r, s) - s)).length + r.length, 3 === (r = ge(r, t)).length && r.push(1), a += i + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                    return a + e.substr(s)
                },
                ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in he) ve += "|" + e + "\\b";
            ve = new RegExp(ve + ")", "gi"), $.colorStringFilter = function(e) {
                var t, n = e[0] + " " + e[1];
                ve.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = me(e[0], t), e[1] = me(e[1], t)), ve.lastIndex = 0
            }, I.defaultStringFilter || (I.defaultStringFilter = $.colorStringFilter);
            var ye = function(e, t, o, s) {
                    if (null == e) return function(e) { return e };
                    var a, l = t ? (e.match(ve) || [""])[0] : "",
                        u = e.split(l).join("").match(_) || [],
                        c = e.substr(0, e.indexOf(u[0])),
                        f = ")" === e.charAt(e.length - 1) ? ")" : "",
                        p = -1 !== e.indexOf(" ") ? " " : ",",
                        h = u.length,
                        d = 0 < h ? u[0].replace(E, "") : "";
                    return h ? a = t ? function(e) {
                        var t, n, r, i;
                        if ("number" == typeof e) e += d;
                        else if (s && L.test(e)) { for (i = e.replace(L, "|").split("|"), r = 0; r < i.length; r++) i[r] = a(i[r]); return i.join(",") }
                        if (t = (e.match(ve) || [l])[0], r = (n = e.split(t).join("").match(_) || []).length, h > r--)
                            for (; ++r < h;) n[r] = o ? n[(r - 1) / 2 | 0] : u[r];
                        return c + n.join(p) + p + t + f + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, n, r;
                        if ("number" == typeof e) e += d;
                        else if (s && L.test(e)) { for (n = e.replace(L, "|").split("|"), r = 0; r < n.length; r++) n[r] = a(n[r]); return n.join(",") }
                        if (r = (t = e.match(_) || []).length, h > r--)
                            for (; ++r < h;) t[r] = o ? t[(r - 1) / 2 | 0] : u[r];
                        return c + t.join(p) + f
                    } : function(e) { return e }
                },
                xe = function(u) {
                    return u = u.split(","),
                        function(e, t, n, r, i, o, s) { var a, l = (t + "").split(" "); for (s = {}, a = 0; a < 4; a++) s[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0]; return r.parse(e, s, i, o) }
                },
                _e = (i._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, n, r, i, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) t = a[l.v], l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === e || 0 === e)
                        for (l = s.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                    n[o] = i
                                }
                            } else n[o] = n.s + n.xs0;
                            l = l._next
                        }
                }, function(e, t, n, r, i) { this.t = e, this.p = t, this.v = n, this.r = i, r && ((r._prev = this)._next = r) }),
                be = (i._parseToProxy = function(e, t, n, r, i, o) {
                    var s, a, l, u, c, f = r,
                        p = {},
                        h = {},
                        d = n._transform,
                        g = F;
                    for (n._transform = null, F = t, r = c = n.parse(e, t, r, i), F = g, o && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                        if (r.type <= 1 && (h[a = r.p] = r.s + r.c, p[a] = r.s, o || (u = new _e(r, "s", a, u, r.r), r.c = 0), 1 === r.type))
                            for (s = r.l; 0 < --s;) l = "xn" + s, h[a = r.p + "_" + l] = r.data[l], p[a] = r[l], o || (u = new _e(r, l, a, u, r.rxp[l]));
                        r = r._next
                    }
                    return { proxy: p, end: h, firstMPT: u, pt: c }
                }, i.CSSPropTween = function(e, t, n, r, i, o, s, a, l, u, c) { this.t = e, this.p = t, this.s = n, this.c = r, this.n = s || t, e instanceof be || g.push(this.n), this.r = a, this.type = o || 0, l && (this.pr = l, d = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + r : c, i && ((this._next = i)._prev = this) }),
                we = function(e, t, n, r, i, o) { var s = new be(e, t, n, r - n, i, -1, o); return s.b = n, s.e = s.xs0 = r, s },
                Te = $.parseComplex = function(e, t, n, r, i, o, s, a, l, u) {
                    n = n || o || "", "function" == typeof r && (r = r(O, A)), s = new be(e, t, 0, 0, s, u ? 2 : 1, null, !1, a, n, r), r += "", i && ve.test(r + n) && (r = [n, r], $.colorStringFilter(r), n = r[0], r = r[1]);
                    var c, f, p, h, d, g, m, v, y, x, _, b, w, T = n.split(", ").join(",").split(" "),
                        S = r.split(", ").join(",").split(" "),
                        C = T.length,
                        k = !1 !== P;
                    for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (-1 !== (r + n).indexOf("rgb") || -1 !== (r + n).indexOf("hsl") ? (T = T.join(" ").replace(L, ", ").split(" "), S = S.join(" ").replace(L, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), S = S.join(" ").split(",").join(", ").split(" ")), C = T.length), C !== S.length && (C = (T = (o || "").split(" ")).length), s.plugin = l, s.setRatio = u, c = ve.lastIndex = 0; c < C; c++)
                        if (h = T[c], d = S[c], (v = parseFloat(h)) || 0 === v) s.appendXtra("", v, ce(d, v), d.replace(N, ""), k && -1 !== d.indexOf("px"), !0);
                        else if (i && ve.test(h)) b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : ""), w = -1 !== d.indexOf("hsl") && V, x = d, h = ge(h, w), d = ge(d, w), (y = 6 < h.length + d.length) && !V && 0 === d[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(S[c]).join("transparent")) : (V || (y = !1), w ? s.appendXtra(x.substr(0, x.indexOf("hsl")) + (y ? "hsla(" : "hsl("), h[0], ce(d[0], h[0]), ",", !1, !0).appendXtra("", h[1], ce(d[1], h[1]), "%,", !1).appendXtra("", h[2], ce(d[2], h[2]), y ? "%," : "%" + b, !1) : s.appendXtra(x.substr(0, x.indexOf("rgb")) + (y ? "rgba(" : "rgb("), h[0], d[0] - h[0], ",", !0, !0).appendXtra("", h[1], d[1] - h[1], ",", !0).appendXtra("", h[2], d[2] - h[2], y ? "," : b, !0), y && (h = h.length < 4 ? 1 : h[3], s.appendXtra("", h, (d.length < 4 ? 1 : d[3]) - h, b, !1))), ve.lastIndex = 0;
                    else if (g = h.match(E)) {
                        if (!(m = d.match(N)) || m.length !== g.length) return s;
                        for (f = p = 0; f < g.length; f++) _ = g[f], x = h.indexOf(_, p), s.appendXtra(h.substr(p, x - p), Number(_), ce(m[f], _), "", k && "px" === h.substr(x + _.length, 2), 0 === f), p = x + _.length;
                        s["xs" + s.l] += h.substr(p)
                    } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
                    if (-1 !== r.indexOf("=") && s.data) {
                        for (b = s.xs0 + s.data.s, c = 1; c < s.l; c++) b += s["xs" + c] + s.data["xn" + c];
                        s.e = b + s["xs" + c]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                Se = 9;
            for ((e = be.prototype).l = e.pr = 0; 0 < --Se;) e["xn" + Se] = 0, e["xs" + Se] = "";
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, n, r, i, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = r || "", 0 < a ? (s.data["xn" + a] = t + n, s.rxp["xn" + a] = i, s["xn" + a] = t, s.plugin || (s.xfirst = new be(s, "xn" + a, t, n, s.xfirst || s, 0, s.n, i, s.pr), s.xfirst.xs0 = 0)) : (s.data = { s: t + n }, s.rxp = {}, s.s = t, s.c = n, s.r = i)) : s["xs" + a] += t + (r || ""), s
            };
            var Ce = function(e, t) { t = t || {}, this.p = t.prefix && K(e) || e, m[e] = m[this.p] = this, this.format = t.formatter || ye(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0 },
                ke = i._registerComplexSpecialProp = function(e, t, n) {
                    "object" != typeof t && (t = { parser: n });
                    var r, i = e.split(","),
                        o = t.defaultValue;
                    for (n = n || [o], r = 0; r < i.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, new Ce(i[r], t)
                },
                Pe = i._registerPluginProp = function(e) {
                    if (!m[e]) {
                        var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        ke(e, { parser: function(e, t, n, r, i, o, s) { var a = u.com.greensock.plugins[l]; return a ? (a._cssRegister(), m[n].parse(e, t, n, r, i, o, s)) : (Z("Error: " + l + " js file not loaded."), i) } })
                    }
                };
            (e = Ce.prototype).parseComplex = function(e, t, n, r, i, o) {
                var s, a, l, u, c, f, p = this.keyword;
                if (this.multi && (L.test(n) || L.test(t) ? (a = t.replace(L, "|").split("|"), l = n.replace(L, "|").split("|")) : p && (a = [t], l = [n])), l) {
                    for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) t = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, p && ((c = t.indexOf(p)) !== (f = n.indexOf(p)) && (-1 === f ? a[s] = a[s].split(p).join("") : -1 === c && (a[s] += " " + p)));
                    t = a.join(", "), n = l.join(", ")
                }
                return Te(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, o)
            }, e.parse = function(e, t, n, r, i, o, s) { return this.parseComplex(e.style, this.format(te(e, this.p, k, !1, this.dflt)), this.format(t), i, o) }, $.registerSpecialProp = function(e, l, u) { ke(e, { parser: function(e, t, n, r, i, o, s) { var a = new be(e, n, 0, 0, i, 2, n, !1, u); return a.plugin = o, a.setRatio = l(e, t, r._tween, n), a }, priority: u }) }, $.useSVGTransformAttr = !0;
            var Ae, Oe, Ee, Ne, De, Re = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                je = K("transform"),
                Le = Q + "transform",
                Me = K("transformOrigin"),
                Fe = null !== K("perspective"),
                qe = i.Transform = function() { this.perspective = parseFloat($.defaultTransformPerspective) || 0, this.force3D = !(!1 === $.defaultForce3D || !Fe) && ($.defaultForce3D || "auto") },
                ze = _gsScope.SVGElement,
                Ie = function(e, t, n) {
                    var r, i = q.createElementNS("http://www.w3.org/2000/svg", e),
                        o = /([a-z])([A-Z])/g;
                    for (r in n) i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
                    return t.appendChild(i), i
                },
                $e = q.documentElement || {},
                He = (De = C || /Android/i.test(Y) && !_gsScope.chrome, q.createElementNS && !De && (Oe = Ie("svg", $e), Ne = (Ee = Ie("rect", Oe, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Ee.style[Me] = "50% 50%", Ee.style[je] = "scaleX(0.5)", De = Ne === Ee.getBoundingClientRect().width && !(H && Fe), $e.removeChild(Oe)), De),
                Be = function(e, t, n, r, i, o) {
                    var s, a, l, u, c, f, p, h, d, g, m, v, y, x, _ = e._gsTransform,
                        b = Ye(e, !0);
                    _ && (y = _.xOrigin, x = _.yOrigin), (!r || (s = r.split(" ")).length < 2) && (0 === (p = e.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = { x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), s = [(-1 !== (t = ue(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), n.xOrigin = u = parseFloat(s[0]), n.yOrigin = c = parseFloat(s[1]), r && b !== Ue && (f = b[0], p = b[1], h = b[2], d = b[3], g = b[4], m = b[5], (v = f * d - p * h) && (a = u * (d / v) + c * (-h / v) + (h * m - d * g) / v, l = u * (-p / v) + c * (f / v) - (f * m - p * g) / v, u = n.xOrigin = s[0] = a, c = n.yOrigin = s[1] = l)), _ && (o && (n.xOffset = _.xOffset, n.yOffset = _.yOffset, _ = n), i || !1 !== i && !1 !== $.defaultSmoothOrigin ? (a = u - y, l = c - x, _.xOffset += a * b[0] + l * b[2] - a, _.yOffset += a * b[1] + l * b[3] - l) : _.xOffset = _.yOffset = 0), o || e.setAttribute("data-svg-origin", s.join(" "))
                },
                Xe = function(e) {
                    var t, n = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        i = this.nextSibling,
                        o = this.style.cssText;
                    if ($e.appendChild(n), n.appendChild(this), this.style.display = "block", e) try { t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Xe } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                    return i ? r.insertBefore(this, i) : r.appendChild(this), $e.removeChild(n), this.style.cssText = o, t
                },
                We = function(e) { return !(!ze || !e.getCTM || e.parentNode && !e.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return Xe.call(t, !0) } }(e)) },
                Ue = [1, 0, 0, 1, 0, 0],
                Ye = function(e, t) {
                    var n, r, i, o, s, a, l = e._gsTransform || new qe,
                        u = e.style;
                    if (je ? r = te(e, Le, null, !0) : e.currentStyle && (r = (r = e.currentStyle.filter.match(p)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !je || !(a = !ee(e) || "none" === ee(e).display) && e.parentNode || (a && (o = u.display, u.display = "block"), e.parentNode || (s = 1, $e.appendChild(e)), n = !(r = te(e, Le, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, o ? u.display = o : a && Je(u, "display"), s && $e.removeChild(e)), (l.svg || e.getCTM && We(e)) && (n && -1 !== (u[je] + "").indexOf("matrix") && (r = u[je], n = 0), i = e.getAttribute("transform"), n && i && (r = "matrix(" + (i = e.transform.baseVal.consolidate().matrix).a + "," + i.b + "," + i.c + "," + i.d + "," + i.e + "," + i.f + ")", n = 0)), n) return Ue;
                    for (i = (r || "").match(E) || [], Se = i.length; - 1 < --Se;) o = Number(i[Se]), i[Se] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                    return t && 6 < i.length ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                },
                Ve = i.getTransform = function(e, t, n, r) {
                    if (e._gsTransform && n && !r) return e._gsTransform;
                    var i, o, s, a, l, u, c = n && e._gsTransform || new qe,
                        f = c.scaleX < 0,
                        p = Fe && (parseFloat(te(e, Me, t, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                        h = parseFloat($.defaultTransformPerspective) || 0;
                    if (c.svg = !(!e.getCTM || !We(e)), c.svg && (Be(e, te(e, Me, t, !1, "50% 50%") + "", c, e.getAttribute("data-svg-origin")), Ae = $.useSVGTransformAttr || He), (i = Ye(e)) !== Ue) {
                        if (16 === i.length) {
                            var d, g, m, v, y, x = i[0],
                                _ = i[1],
                                b = i[2],
                                w = i[3],
                                T = i[4],
                                S = i[5],
                                C = i[6],
                                k = i[7],
                                P = i[8],
                                A = i[9],
                                O = i[10],
                                E = i[12],
                                N = i[13],
                                D = i[14],
                                R = i[11],
                                j = Math.atan2(C, O);
                            c.zOrigin && (E = P * (D = -c.zOrigin) - i[12], N = A * D - i[13], D = O * D + c.zOrigin - i[14]), c.rotationX = j * X, j && (d = T * (v = Math.cos(-j)) + P * (y = Math.sin(-j)), g = S * v + A * y, m = C * v + O * y, P = T * -y + P * v, A = S * -y + A * v, O = C * -y + O * v, R = k * -y + R * v, T = d, S = g, C = m), j = Math.atan2(-b, O), c.rotationY = j * X, j && (g = _ * (v = Math.cos(-j)) - A * (y = Math.sin(-j)), m = b * v - O * y, A = _ * y + A * v, O = b * y + O * v, R = w * y + R * v, x = d = x * v - P * y, _ = g, b = m), j = Math.atan2(_, x), c.rotation = j * X, j && (d = x * (v = Math.cos(j)) + _ * (y = Math.sin(j)), g = T * v + S * y, m = P * v + A * y, _ = _ * v - x * y, S = S * v - T * y, A = A * v - P * y, x = d, T = g, P = m), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), j = Math.atan2(T, S), c.scaleX = (1e5 * Math.sqrt(x * x + _ * _ + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(S * S + C * C) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(P * P + A * A + O * O) + .5 | 0) / 1e5, x /= c.scaleX, T /= c.scaleY, _ /= c.scaleX, S /= c.scaleY, 2e-5 < Math.abs(j) ? (c.skewX = j * X, T = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(j))) : c.skewX = 0, c.perspective = R ? 1 / (R < 0 ? -R : R) : 0, c.x = E, c.y = N, c.z = D, c.svg && (c.x -= c.xOrigin - (c.xOrigin * x - c.yOrigin * T), c.y -= c.yOrigin - (c.yOrigin * _ - c.xOrigin * S))
                        } else if (!Fe || r || !i.length || c.x !== i[4] || c.y !== i[5] || !c.rotationX && !c.rotationY) {
                            var L = 6 <= i.length,
                                M = L ? i[0] : 1,
                                F = i[1] || 0,
                                q = i[2] || 0,
                                z = L ? i[3] : 1;
                            c.x = i[4] || 0, c.y = i[5] || 0, s = Math.sqrt(M * M + F * F), a = Math.sqrt(z * z + q * q), l = M || F ? Math.atan2(F, M) * X : c.rotation || 0, u = q || z ? Math.atan2(q, z) * X + l : c.skewX || 0, c.scaleX = s, c.scaleY = a, c.rotation = l, c.skewX = u, Fe && (c.rotationX = c.rotationY = c.z = 0, c.perspective = h, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * M + c.yOrigin * q), c.y -= c.yOrigin - (c.xOrigin * F + c.yOrigin * z))
                        }
                        for (o in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = p, c) c[o] < 2e-5 && -2e-5 < c[o] && (c[o] = 0)
                    }
                    return n && ((e._gsTransform = c).svg && (Ae && e.style[je] ? I.delayedCall(.001, function() { Je(e.style, je) }) : !Ae && e.getAttribute("transform") && I.delayedCall(.001, function() { e.removeAttribute("transform") }))), c
                },
                Ge = function(e) {
                    var t, n, r = this.data,
                        i = -r.rotation * B,
                        o = i + r.skewX * B,
                        s = 1e5,
                        a = (Math.cos(i) * r.scaleX * s | 0) / s,
                        l = (Math.sin(i) * r.scaleX * s | 0) / s,
                        u = (Math.sin(o) * -r.scaleY * s | 0) / s,
                        c = (Math.cos(o) * r.scaleY * s | 0) / s,
                        f = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        n = l, l = -u, u = -n, t = p.filter, f.filter = "";
                        var h, d, g = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            v = "absolute" !== p.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            x = r.x + g * r.xPercent / 100,
                            _ = r.y + m * r.yPercent / 100;
                        if (null != r.ox && (x += (h = (r.oxp ? g * r.ox * .01 : r.ox) - g / 2) - (h * a + (d = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * l), _ += d - (h * u + d * c)), v ? y += ", Dx=" + ((h = g / 2) - (h * a + (d = m / 2) * l) + x) + ", Dy=" + (d - (h * u + d * c) + _) + ")" : y += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = t.replace(j, y) : f.filter = y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || R.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && f.removeAttribute("filter")), !v) { var b, w, T, S = C < 8 ? 1 : -1; for (h = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * m)) / 2 + x), r.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (u < 0 ? -u : u) * g)) / 2 + _), Se = 0; Se < 4; Se++) T = (n = -1 !== (b = p[w = ae[Se]]).indexOf("px") ? parseFloat(b) : ne(this.t, w, parseFloat(b), b.replace(D, "")) || 0) !== r[w] ? Se < 2 ? -r.ieOffsetX : -r.ieOffsetY : Se < 2 ? h - r.ieOffsetX : d - r.ieOffsetY, f[w] = (r[w] = Math.round(n - T * (0 === Se || 2 === Se ? 1 : S))) + "px" }
                    }
                },
                Ze = i.set3DTransformRatio = i.setTransformRatio = function(e) {
                    var t, n, r, i, o, s, a, l, u, c, f, p, h, d, g, m, v, y, x, _, b, w, T, S = this.data,
                        C = this.t.style,
                        k = S.rotation,
                        P = S.rotationX,
                        A = S.rotationY,
                        O = S.scaleX,
                        E = S.scaleY,
                        N = S.scaleZ,
                        D = S.x,
                        R = S.y,
                        j = S.z,
                        L = S.svg,
                        M = S.perspective,
                        F = S.force3D,
                        q = S.skewY,
                        z = S.skewX;
                    if (q && (z += q, k += q), !((1 !== e && 0 !== e || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || j || M || A || P || 1 !== N) || Ae && L || !Fe) k || z || L ? (k *= B, w = z * B, T = 1e5, n = Math.cos(k) * O, o = Math.sin(k) * O, r = Math.sin(k - w) * -E, s = Math.cos(k - w) * E, w && "simple" === S.skewType && (t = Math.tan(w - q * B), r *= t = Math.sqrt(1 + t * t), s *= t, q && (t = Math.tan(q * B), n *= t = Math.sqrt(1 + t * t), o *= t)), L && (D += S.xOrigin - (S.xOrigin * n + S.yOrigin * r) + S.xOffset, R += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset, Ae && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), D += .01 * S.xPercent * g.width, R += .01 * S.yPercent * g.height), D < (g = 1e-6) && -g < D && (D = 0), R < g && -g < R && (R = 0)), x = (n * T | 0) / T + "," + (o * T | 0) / T + "," + (r * T | 0) / T + "," + (s * T | 0) / T + "," + D + "," + R + ")", L && Ae ? this.t.setAttribute("transform", "matrix(" + x) : C[je] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : C[je] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + E + "," + D + "," + R + ")";
                    else {
                        if (H && (O < (g = 1e-4) && -g < O && (O = N = 2e-5), E < g && -g < E && (E = N = 2e-5), !M || S.z || S.rotationX || S.rotationY || (M = 0)), k || z) k *= B, m = n = Math.cos(k), v = o = Math.sin(k), z && (k -= z * B, m = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (t = Math.tan((z - q) * B), m *= t = Math.sqrt(1 + t * t), v *= t, S.skewY && (t = Math.tan(q * B), n *= t = Math.sqrt(1 + t * t), o *= t))), r = -v, s = m;
                        else {
                            if (!(A || P || 1 !== N || M || L)) return void(C[je] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + j + "px)" + (1 !== O || 1 !== E ? " scale(" + O + "," + E + ")" : ""));
                            n = s = 1, r = o = 0
                        }
                        c = 1, i = a = l = u = f = p = 0, h = M ? -1 / M : 0, d = S.zOrigin, g = 1e-6, _ = ",", b = "0", (k = A * B) && (m = Math.cos(k), f = h * (l = -(v = Math.sin(k))), i = n * v, a = o * v, h *= c = m, n *= m, o *= m), (k = P * B) && (t = r * (m = Math.cos(k)) + i * (v = Math.sin(k)), y = s * m + a * v, u = c * v, p = h * v, i = r * -v + i * m, a = s * -v + a * m, c *= m, h *= m, r = t, s = y), 1 !== N && (i *= N, a *= N, c *= N, h *= N), 1 !== E && (r *= E, s *= E, u *= E, p *= E), 1 !== O && (n *= O, o *= O, l *= O, f *= O), (d || L) && (d && (D += i * -d, R += a * -d, j += c * -d + d), L && (D += S.xOrigin - (S.xOrigin * n + S.yOrigin * r) + S.xOffset, R += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset), D < g && -g < D && (D = b), R < g && -g < R && (R = b), j < g && -g < j && (j = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (n < g && -g < n ? b : n) + _ + (o < g && -g < o ? b : o) + _ + (l < g && -g < l ? b : l), x += _ + (f < g && -g < f ? b : f) + _ + (r < g && -g < r ? b : r) + _ + (s < g && -g < s ? b : s), P || A || 1 !== N ? (x += _ + (u < g && -g < u ? b : u) + _ + (p < g && -g < p ? b : p) + _ + (i < g && -g < i ? b : i), x += _ + (a < g && -g < a ? b : a) + _ + (c < g && -g < c ? b : c) + _ + (h < g && -g < h ? b : h) + _) : x += ",0,0,0,0,1,0,", x += D + _ + R + _ + j + _ + (M ? 1 + -j / M : 1) + ")", C[je] = x
                    }
                };
            (e = qe.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, ke("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, n, r, i, o, s) {
                    if (r._lastParsedTransform === s) return i;
                    var a, l = (r._lastParsedTransform = s).scale && "function" == typeof s.scale ? s.scale : 0;
                    "function" == typeof s[n] && (a = s[n], s[n] = t), l && (s.scale = l(O, e));
                    var u, c, f, p, h, d, g, m, v, y = e._gsTransform,
                        x = e.style,
                        _ = Re.length,
                        b = s,
                        w = {},
                        T = "transformOrigin",
                        S = Ve(e, k, !0, b.parseTransform),
                        C = b.transform && ("function" == typeof b.transform ? b.transform(O, A) : b.transform);
                    if (S.skewType = b.skewType || S.skewType || $.defaultSkewType, r._transform = S, C && "string" == typeof C && je)(c = W.style)[je] = C, c.display = "block", c.position = "absolute", q.body.appendChild(W), u = Ve(W, null, !1), "simple" === S.skewType && (u.scaleY *= Math.cos(u.skewX * B)), S.svg && (d = S.xOrigin, g = S.yOrigin, u.x -= S.xOffset, u.y -= S.yOffset, (b.transformOrigin || b.svgOrigin) && (C = {}, Be(e, ue(b.transformOrigin), C, b.svgOrigin, b.smoothOrigin, !0), d = C.xOrigin, g = C.yOrigin, u.x -= C.xOffset - S.xOffset, u.y -= C.yOffset - S.yOffset), (d || g) && (m = Ye(W, !0), u.x -= d - (d * m[0] + g * m[2]), u.y -= g - (d * m[1] + g * m[3]))), q.body.removeChild(W), u.perspective || (u.perspective = S.perspective), null != b.xPercent && (u.xPercent = fe(b.xPercent, S.xPercent)), null != b.yPercent && (u.yPercent = fe(b.yPercent, S.yPercent));
                    else if ("object" == typeof b) {
                        if (u = { scaleX: fe(null != b.scaleX ? b.scaleX : b.scale, S.scaleX), scaleY: fe(null != b.scaleY ? b.scaleY : b.scale, S.scaleY), scaleZ: fe(b.scaleZ, S.scaleZ), x: fe(b.x, S.x), y: fe(b.y, S.y), z: fe(b.z, S.z), xPercent: fe(b.xPercent, S.xPercent), yPercent: fe(b.yPercent, S.yPercent), perspective: fe(b.transformPerspective, S.perspective) }, null != (h = b.directionalRotation))
                            if ("object" == typeof h)
                                for (c in h) b[c] = h[c];
                            else b.rotation = h;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = fe(b.x, S.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = fe(b.y, S.yPercent)), u.rotation = pe("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : S.rotation, S.rotation, "rotation", w), Fe && (u.rotationX = pe("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", w), u.rotationY = pe("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", w)), u.skewX = pe(b.skewX, S.skewX), u.skewY = pe(b.skewY, S.skewY)
                    }
                    for (Fe && null != b.force3D && (S.force3D = b.force3D, p = !0), (f = S.force3D || S.z || S.rotationX || S.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == b.scale || (u.scaleZ = 1); - 1 < --_;)(1e-6 < (C = u[v = Re[_]] - S[v]) || C < -1e-6 || null != b[v] || null != F[v]) && (p = !0, i = new be(S, v, S[v], C, i), v in w && (i.e = w[v]), i.xs0 = 0, i.plugin = o, r._overwriteProps.push(i.n));
                    return C = b.transformOrigin, S.svg && (C || b.svgOrigin) && (d = S.xOffset, g = S.yOffset, Be(e, ue(C), u, b.svgOrigin, b.smoothOrigin), i = we(S, "xOrigin", (y ? S : u).xOrigin, u.xOrigin, i, T), i = we(S, "yOrigin", (y ? S : u).yOrigin, u.yOrigin, i, T), (d !== S.xOffset || g !== S.yOffset) && (i = we(S, "xOffset", y ? d : S.xOffset, S.xOffset, i, T), i = we(S, "yOffset", y ? g : S.yOffset, S.yOffset, i, T)), C = "0px 0px"), (C || Fe && f && S.zOrigin) && (je ? (p = !0, v = Me, C = (C || te(e, v, k, !1, "50% 50%")) + "", (i = new be(x, v, 0, 0, i, -1, T)).b = x[v], i.plugin = o, Fe ? (c = S.zOrigin, C = C.split(" "), S.zOrigin = (2 < C.length && (0 === c || "0px" !== C[2]) ? parseFloat(C[2]) : c) || 0, i.xs0 = i.e = C[0] + " " + (C[1] || "50%") + " 0px", (i = new be(S, "zOrigin", 0, 0, i, -1, i.n)).b = c, i.xs0 = i.e = S.zOrigin) : i.xs0 = i.e = C) : ue(C + "", S)), p && (r._transformType = S.svg && Ae || !f && 3 !== this._transformType ? 2 : 3), a && (s[n] = a), l && (s.scale = l), i
                },
                prefix: !0
            }), ke("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ke("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, n, r, i, o) {
                    t = this.format(t);
                    var s, a, l, u, c, f, p, h, d, g, m, v, y, x, _, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = e.style;
                    for (d = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), s = t.split(" "), a = 0; a < w.length; a++) this.p.indexOf("border") && (w[a] = K(w[a])), -1 !== (c = u = te(e, w[a], k, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), f = l = s[a], p = parseFloat(c), v = c.substr((p + "").length), (y = "=" === f.charAt(1)) ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), m = f.substr((h + "").length - (h < 0 ? 1 : 0)) || "") : (h = parseFloat(f), m = f.substr((h + "").length)), "" === m && (m = S[n] || v), m !== v && (x = ne(e, "borderLeft", p, v), _ = ne(e, "borderTop", p, v), "%" === m ? (c = x / d * 100 + "%", u = _ / g * 100 + "%") : "em" === m ? (c = x / (b = ne(e, "borderLeft", 1, "em")) + "em", u = _ / b + "em") : (c = x + "px", u = _ + "px"), y && (f = parseFloat(c) + h + m, l = parseFloat(u) + h + m)), i = Te(T, w[a], c + " " + u, f + " " + l, !1, "0px", i);
                    return i
                },
                prefix: !0,
                formatter: ye("0px 0px 0px 0px", !1, !0)
            }), ke("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(e, t, n, r, i, o) { return Te(e.style, n, this.format(te(e, n, k, !1, "0px 0px")), this.format(t), !1, "0px", i) }, prefix: !0, formatter: ye("0px 0px", !1, !0) }), ke("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, n, r, i, o) {
                    var s, a, l, u, c, f, p = "background-position",
                        h = k || ee(e, null),
                        d = this.format((h ? C ? h.getPropertyValue(p + "-x") + " " + h.getPropertyValue(p + "-y") : h.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(t);
                    if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((f = te(e, "backgroundImage").replace(T, "")) && "none" !== f)) {
                        for (s = d.split(" "), a = g.split(" "), U.setAttribute("src", f), l = 2; - 1 < --l;)(u = -1 !== (d = s[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (c = 0 === l ? e.offsetWidth - U.width : e.offsetHeight - U.height, s[l] = u ? parseFloat(d) / 100 * c + "px" : parseFloat(d) / c * 100 + "%");
                        d = s.join(" ")
                    }
                    return this.parseComplex(e.style, d, g, i, o)
                },
                formatter: ue
            }), ke("backgroundSize", { defaultValue: "0 0", formatter: function(e) { return ue(-1 === (e += "").indexOf(" ") ? e + " " + e : e) } }), ke("perspective", { defaultValue: "0px", prefix: !0 }), ke("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ke("transformStyle", { prefix: !0 }), ke("backfaceVisibility", { prefix: !0 }), ke("userSelect", { prefix: !0 }), ke("margin", { parser: xe("marginTop,marginRight,marginBottom,marginLeft") }), ke("padding", { parser: xe("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ke("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(e, t, n, r, i, o) { var s, a, l; return C < 9 ? (a = e.currentStyle, l = C < 8 ? " " : ",", s = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", t = this.format(t).split(",").join(l)) : (s = this.format(te(e, this.p, k, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, i, o) } }), ke("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ke("autoRound,strictUnits", { parser: function(e, t, n, r, i) { return i } }), ke("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, n, r, i, o) {
                    var s = te(e, "borderTopWidth", k, !1, "0px"),
                        a = this.format(t).split(" "),
                        l = a[0].replace(D, "");
                    return "px" !== l && (s = parseFloat(s) / ne(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(s + " " + te(e, "borderTopStyle", k, !1, "solid") + " " + te(e, "borderTopColor", k, !1, "#000")), a.join(" "), i, o)
                },
                color: !0,
                formatter: function(e) { var t = e.split(" "); return t[0] + " " + (t[1] || "solid") + " " + (e.match(ve) || ["#000"])[0] }
            }), ke("borderWidth", { parser: xe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ke("float,cssFloat,styleFloat", {
                parser: function(e, t, n, r, i, o) {
                    var s = e.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new be(s, a, 0, 0, i, -1, n, !1, 0, s[a], t)
                }
            });
            var Qe = function(e) {
                var t, n = this.t,
                    r = n.filter || te(this.data, "filter") || "",
                    i = this.s + this.c * e | 0;
                100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !te(this.data, "filter")) : (n.filter = r.replace(s, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(R, "opacity=" + i))
            };
            ke("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, n, r, i, o) {
                    var s = parseFloat(te(e, "opacity", k, !1, "1")),
                        a = e.style,
                        l = "autoAlpha" === n;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), l && 1 === s && "hidden" === te(e, "visibility", k) && 0 !== t && (s = 0), V ? i = new be(a, "opacity", s, t - s, i) : ((i = new be(a, "opacity", 100 * s, 100 * (t - s), i)).xn1 = l ? 1 : 0, a.zoom = 1, i.type = 2, i.b = "alpha(opacity=" + i.s + ")", i.e = "alpha(opacity=" + (i.s + i.c) + ")", i.data = e, i.plugin = o, i.setRatio = Qe), l && ((i = new be(a, "visibility", 0, 0, i, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(i.n), r._overwriteProps.push(n)), i
                }
            });
            var Je = function(e, t) { t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(a, "-$1").toLowerCase())) : e.removeAttribute(t)) },
                Ke = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Je(n, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ke("className", {
                parser: function(e, t, n, r, i, o, s) {
                    var a, l, u, c, f, p = e.getAttribute("class") || "",
                        h = e.style.cssText;
                    if ((i = r._classNamePT = new be(e, n, 0, 0, i, 2)).setRatio = Ke, i.pr = -11, d = !0, i.b = p, l = ie(e, k), u = e._gsClassPT) {
                        for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                        u.setRatio(1)
                    }
                    return (e._gsClassPT = i).e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", i.e), a = oe(e, l, ie(e), s, c), e.setAttribute("class", p), i.data = a.firstMPT, e.style.cssText = h, i.xfirst = r.parse(e, a.difs, i, o)
                }
            });
            var et = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, n, r, i, o, s = this.t.style,
                        a = m.transform.parse;
                    if ("all" === this.e) i = !(s.cssText = "");
                    else
                        for (r = (t = this.e.split(" ").join("").split(",")).length; - 1 < --r;) n = t[r], m[n] && (m[n].parse === a ? i = !0 : n = "transformOrigin" === n ? Me : m[n].p), Je(s, n);
                    i && (Je(s, je), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (ke("clearProps", { parser: function(e, t, n, r, i) { return (i = new be(e, n, 0, 0, i, 2)).setRatio = et, i.e = t, i.pr = -10, i.data = r._tween, d = !0, i } }), e = "bezier,throwProps,physicsProps,physics2D".split(","), Se = e.length; Se--;) Pe(e[Se]);
            (e = $.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, n, r) {
                if (!e.nodeType) return !1;
                this._target = A = e, this._tween = n, this._vars = t, O = r, P = t.autoRound, d = !1, S = t.suffixMap || $.suffixMap, k = ee(e, ""), g = this._overwriteProps;
                var i, o, s, a, l, u, c, f, p, h = e.style;
                if (v && "" === h.zIndex && (("auto" === (i = te(e, "zIndex", k)) || "" === i) && this._addLazySet(h, "zIndex", 0)), "string" == typeof t && (a = h.cssText, i = ie(e, k), h.cssText = a + ";" + t, i = oe(e, i, ie(e)).difs, !V && b.test(t) && (i.opacity = parseFloat(RegExp.$1)), t = i, h.cssText = a), t.className ? this._firstPT = o = m.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = o = this.parse(e, t, null), this._transformType) {
                    for (p = 3 === this._transformType, je ? y && (v = !0, "" === h.zIndex && (("auto" === (c = te(e, "zIndex", k)) || "" === c) && this._addLazySet(h, "zIndex", 0)), x && this._addLazySet(h, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (p ? "visible" : "hidden"))) : h.zoom = 1, s = o; s && s._next;) s = s._next;
                    f = new be(e, "transform", 0, 0, null, 2), this._linkCSSP(f, null, s), f.setRatio = je ? Ze : Ge, f.data = this._transform || Ve(e, k, !0), f.tween = n, f.pr = -1, g.pop()
                }
                if (d) {
                    for (; o;) {
                        for (u = o._next, s = a; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : l) ? o._prev._next = o: a = o, (o._next = s) ? s._prev = o : l = o, o = u
                    }
                    this._firstPT = a
                }
                return !0
            }, e.parse = function(e, t, n, r) {
                var i, o, s, a, l, u, c, f, p, h, d = e.style;
                for (i in t) {
                    if ("function" == typeof(u = t[i]) && (u = u(O, A)), o = m[i]) n = o.parse(e, u, i, this, n, r, t);
                    else {
                        if ("--" === i.substr(0, 2)) { this._tween._propLookup[i] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(i) + "", u + "", i, !1, i); continue }
                        l = te(e, i, k) + "", p = "string" == typeof u, "color" === i || "fill" === i || "stroke" === i || -1 !== i.indexOf("Color") || p && w.test(u) ? (p || (u = (3 < (u = ge(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), n = Te(d, i, l, u, !0, "transparent", n, 0, r)) : p && M.test(u) ? n = Te(d, i, l, u, !0, null, n, 0, r) : (c = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "", ("" === l || "auto" === l) && ("width" === i || "height" === i ? (s = le(e, i, k), c = "px") : "left" === i || "top" === i ? (s = re(e, i, k), c = "px") : (s = "opacity" !== i ? 0 : 1, c = "")), (h = p && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), f = u.replace(D, "")) : (a = parseFloat(u), f = p ? u.replace(D, "") : ""), "" === f && (f = i in S ? S[i] : c), u = a || 0 === a ? (h ? a + s : a) + f : t[i], c !== f && ("" !== f || "lineHeight" === i) && (a || 0 === a) && s && (s = ne(e, i, s, c), "%" === f ? (s /= ne(e, i, 100, "%") / 100, !0 !== t.strictUnits && (l = s + "%")) : "em" === f || "rem" === f || "vw" === f || "vh" === f ? s /= ne(e, i, 1, f) : "px" !== f && (a = ne(e, i, a, f), f = "px"), h && (a || 0 === a) && (u = a + s + f)), h && (a += s), !s && 0 !== s || !a && 0 !== a ? void 0 !== d[i] && (u || u + "" != "NaN" && null != u) ? (n = new be(d, i, a || s || 0, 0, n, -1, i, !1, 0, l, u)).xs0 = "none" !== u || "display" !== i && -1 === i.indexOf("Style") ? u : l : Z("invalid " + i + " tween value: " + t[i]) : (n = new be(d, i, s, a - s, n, 0, i, !1 !== P && ("px" === f || "zIndex" === i), 0, l, u)).xs0 = f)
                    }
                    r && n && !n.plugin && (n.plugin = r)
                }
                return n
            }, e.setRatio = function(e) {
                var t, n, r, i = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; i;) {
                            if (t = i.c * e + i.s, i.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), i.type)
                                if (1 === i.type)
                                    if (2 === (r = i.l)) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                    else if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                            else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                            else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                            else {
                                for (n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                i.t[i.p] = n
                            } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                            else i.t[i.p] = t + i.xs0;
                            i = i._next
                        } else
                            for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                    else
                        for (; i;) {
                            if (2 !== i.type)
                                if (i.r && -1 !== i.type)
                                    if (t = Math.round(i.s + i.c), i.type) {
                                        if (1 === i.type) {
                                            for (r = i.l, n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                            i.t[i.p] = n
                                        }
                                    } else i.t[i.p] = t + i.xs0;
                            else i.t[i.p] = i.e;
                            else i.setRatio(e);
                            i = i._next
                        }
            }, e._enableTransforms = function(e) { this._transform = this._transform || Ve(this._target, k, !0), this._transformType = this._transform.svg && Ae || !e && 3 !== this._transformType ? 2 : 3 };
            var tt = function(e) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            e._addLazySet = function(e, t, n) {
                var r = this._firstPT = new be(e, t, 0, 0, this._firstPT, 2);
                r.e = n, r.setRatio = tt, r.data = this
            }, e._linkCSSP = function(e, t, n, r) { return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e }, e._mod = function(e) { for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next }, e._kill = function(e) {
                var t, n, r, i = e;
                if (e.autoAlpha || e.alpha) {
                    for (n in i = {}, e) i[n] = e[n];
                    i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                }
                for (e.className && (t = this._classNamePT) && ((r = t.xfirst) && r._prev ? this._linkCSSP(r._prev, t._next, r._prev._prev) : r === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, r._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== n && t.plugin._kill && (t.plugin._kill(e), n = t.plugin), t = t._next;
                return o.prototype._kill.call(this, i)
            };
            var nt = function(e, t, n) {
                var r, i, o, s;
                if (e.slice)
                    for (i = e.length; - 1 < --i;) nt(e[i], t, n);
                else
                    for (i = (r = e.childNodes).length; - 1 < --i;) s = (o = r[i]).type, o.style && (t.push(ie(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || nt(o, t, n)
            };
            return $.cascadeTo = function(e, t, n) {
                var r, i, o, s, a = I.to(e, t, n),
                    l = [a],
                    u = [],
                    c = [],
                    f = [],
                    p = I._internals.reservedProps;
                for (e = a._targets || a.target, nt(e, u, f), a.render(t, !0, !0), nt(e, c), a.render(0, !0, !0), a._enabled(!0), r = f.length; - 1 < --r;)
                    if ((i = oe(f[r], u[r], c[r])).firstMPT) {
                        for (o in i = i.difs, n) p[o] && (i[o] = n[o]);
                        for (o in s = {}, i) s[o] = u[r][o];
                        l.push(I.fromTo(f[r], t, s, i))
                    }
                return l
            }, o.activate([$]), $
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) { "use strict"; var t = function() { return (_gsScope.GreenSockGlobals || _gsScope).CSSPlugin }; "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t) }(),
    function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t() }(this, function() {
        "use strict";
        var D = function() {};
        D.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var R = "data-scrollmagic-pin-spacer";
        D.Controller = function(e) {
            var n, r, i = "REVERSE",
                t = T.defaults,
                s = this,
                a = L.extend({}, t, e),
                o = [],
                l = !1,
                u = 0,
                c = "PAUSED",
                f = !0,
                p = 0,
                h = !0,
                d = function() { 0 < a.refreshInterval && (r = window.setTimeout(b, a.refreshInterval)) },
                g = function() { return a.vertical ? L.get.scrollTop(a.container) : L.get.scrollLeft(a.container) },
                m = function() { return a.vertical ? L.get.height(a.container) : L.get.width(a.container) },
                v = this._setScrollPos = function(e) { a.vertical ? f ? window.scrollTo(L.get.scrollLeft(), e) : a.container.scrollTop = e : f ? window.scrollTo(e, L.get.scrollTop()) : a.container.scrollLeft = e },
                y = function() {
                    if (h && l) {
                        var e = L.type.Array(l) ? l : o.slice(0);
                        l = !1;
                        var t = u,
                            n = (u = s.scrollPos()) - t;
                        0 !== n && (c = 0 < n ? "FORWARD" : i), c === i && e.reverse(), e.forEach(function(e) { e.update(!0) })
                    }
                },
                x = function() { n = L.rAF(y) },
                _ = function(e) { "resize" == e.type && (p = m(), c = "PAUSED"), !0 !== l && (l = !0, x()) },
                b = function() {
                    if (!f && p != m()) {
                        var t;
                        try { t = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (e) {
                            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        a.container.dispatchEvent(t)
                    }
                    o.forEach(function(e) { e.refresh() }), d()
                };
            this._options = a;
            var w = function(e) { if (e.length <= 1) return e; var t = e.slice(0); return t.sort(function(e, t) { return e.scrollOffset() > t.scrollOffset() ? 1 : -1 }), t };
            return this.addScene = function(e) {
                    if (L.type.Array(e)) e.forEach(function(e) { s.addScene(e) });
                    else if (e instanceof D.Scene)
                        if (e.controller() !== s) e.addTo(s);
                        else if (o.indexOf(e) < 0)
                        for (var t in o.push(e), o = w(o), e.on("shift.controller_sort", function() { o = w(o) }), a.globalSceneOptions) e[t] && e[t].call(e, a.globalSceneOptions[t]);
                    return s
                }, this.removeScene = function(e) {
                    if (L.type.Array(e)) e.forEach(function(e) { s.removeScene(e) });
                    else { var t = o.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), o.splice(t, 1), e.remove()) }
                    return s
                }, this.updateScene = function(e, t) { return L.type.Array(e) ? e.forEach(function(e) { s.updateScene(e, t) }) : t ? e.update(!0) : !0 !== l && e instanceof D.Scene && (-1 == (l = l || []).indexOf(e) && l.push(e), l = w(l), x()), s }, this.update = function(e) { return _({ type: "resize" }), e && y(), s }, this.scrollTo = function(e, t) {
                    if (L.type.Number(e)) v.call(a.container, e, t);
                    else if (e instanceof D.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);
                    else if (L.type.Function(e)) v = e;
                    else {
                        var n = L.get.elements(e)[0];
                        if (n) {
                            for (; n.parentNode.hasAttribute(R);) n = n.parentNode;
                            var r = a.vertical ? "top" : "left",
                                i = L.get.offset(a.container),
                                o = L.get.offset(n);
                            f || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t)
                        }
                    }
                    return s
                }, this.scrollPos = function(e) { return arguments.length ? (L.type.Function(e) && (g = e), s) : g.call(s) }, this.info = function(e) { var t = { size: p, vertical: a.vertical, scrollPos: u, scrollDirection: c, container: a.container, isDocument: f }; return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t }, this.loglevel = function() { return s }, this.enabled = function(e) { return arguments.length ? (h != e && (h = !!e, s.updateScene(o, !0)), s) : h }, this.destroy = function(e) { window.clearTimeout(r); for (var t = o.length; t--;) o[t].destroy(e); return a.container.removeEventListener("resize", _), a.container.removeEventListener("scroll", _), L.cAF(n), null },
                function() {
                    for (var e in a) t.hasOwnProperty(e) || delete a[e];
                    if (a.container = L.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
                    (f = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), p = m(), a.container.addEventListener("resize", _), a.container.addEventListener("scroll", _), a.refreshInterval = parseInt(a.refreshInterval) || t.refreshInterval, d()
                }(), s
        };
        var T = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
        D.Controller.addOption = function(e, t) { T.defaults[e] = t }, D.Controller.extend = function(e) {
            var t = this;
            D.Controller = function() { return t.apply(this, arguments), this.$super = L.extend({}, this), e.apply(this, arguments) || this }, L.extend(D.Controller, t), D.Controller.prototype = t.prototype, D.Controller.prototype.constructor = D.Controller
        }, D.Scene = function(e) {
            var n, l, u = "BEFORE",
                c = "DURING",
                f = "AFTER",
                r = j.defaults,
                p = this,
                h = L.extend({}, r, e),
                d = u,
                g = 0,
                a = { start: 0, end: 0 },
                m = 0,
                i = !0,
                s = {};
            this.on = function(e, i) {
                return L.type.Function(i) && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        n = t[0],
                        r = t[1];
                    "*" != n && (s[n] || (s[n] = []), s[n].push({ namespace: r || "", callback: i }))
                }), p
            }, this.off = function(e, o) {
                return e && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        n = t[0],
                        i = t[1] || "";
                    ("*" === n ? Object.keys(s) : [n]).forEach(function(e) {
                        for (var t = s[e] || [], n = t.length; n--;) { var r = t[n];!r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1) }
                        t.length || delete s[e]
                    })
                }), p
            }, this.trigger = function(e, t) {
                if (e) {
                    var n = e.trim().split("."),
                        r = n[0],
                        i = n[1],
                        o = s[r];
                    o && o.forEach(function(e) { i && i !== e.namespace || e.callback.call(p, new D.Event(r, e.namespace, p, t)) })
                }
                return p
            }, p.on("change.internal", function(e) { "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? x() : "reverse" === e.what && p.update()) }).on("shift.internal", function() { t(), p.update() }), this.addTo = function(e) { return e instanceof D.Controller && l != e && (l && l.removeScene(p), l = e, w(), o(!0), x(!0), t(), l.info("container").addEventListener("resize", _), e.addScene(p), p.trigger("add", { controller: l }), p.update()), p }, this.enabled = function(e) { return arguments.length ? (i != e && (i = !!e, p.update(!0)), p) : i }, this.remove = function() {
                if (l) {
                    l.info("container").removeEventListener("resize", _);
                    var e = l;
                    l = void 0, e.removeScene(p), p.trigger("remove")
                }
                return p
            }, this.destroy = function(e) { return p.trigger("destroy", { reset: e }), p.remove(), p.off("*.*"), null }, this.update = function(e) {
                if (l)
                    if (e)
                        if (l.enabled() && i) {
                            var t, n = l.info("scrollPos");
                            t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, p.trigger("update", { startPos: a.start, endPos: a.end, scrollPos: n }), p.progress(t)
                        } else v && d === c && C(!0);
                else l.updateScene(p, !1);
                return p
            }, this.refresh = function() { return o(), x(), p }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        n = d,
                        r = l ? l.info("scrollDirection") : "PAUSED",
                        i = h.reverse || g <= e;
                    if (0 === h.duration ? (t = g != e, d = 0 === (g = e < 1 && i ? 0 : 1) ? u : c) : e < 0 && d !== u && i ? (d = u, t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, d = c, t = !0) : 1 <= e && d !== f ? (g = 1, d = f, t = !0) : d !== c || i || C(), t) {
                        var o = { progress: g, state: d, scrollDirection: r },
                            s = d != n,
                            a = function(e) { p.trigger(e, o) };
                        s && n !== c && (a("enter"), a(n === u ? "start" : "end")), a("progress"), s && d !== c && (a(d === u ? "start" : "end"), a("leave"))
                    }
                    return p
                }
                return g
            };
            var v, y, t = function() { a = { start: m + h.offset }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration },
                o = function(e) {
                    if (n) {
                        var t = "duration";
                        T(t, n.call(p)) && !e && (p.trigger("change", { what: t, newval: h[t] }), p.trigger("shift", { reason: t }))
                    }
                },
                x = function(e) {
                    var t = 0,
                        n = h.triggerElement;
                    if (l && n) {
                        for (var r = l.info(), i = L.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(R);) n = n.parentNode;
                        var s = L.get.offset(n);
                        r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o]
                    }
                    var a = t != m;
                    m = t, a && !e && p.trigger("shift", { reason: "triggerElementPosition" })
                },
                _ = function() { 0 < h.triggerHook && p.trigger("shift", { reason: "containerResize" }) },
                b = L.extend(j.validate, {
                    duration: function(t) {
                        if (L.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() { return l ? l.info("size") * e : 0 }
                        }
                        if (L.type.Function(t)) { n = t; try { t = parseFloat(n()) } catch (e) { t = -1 } }
                        if (t = parseFloat(t), !L.type.Number(t) || t < 0) throw n && (n = void 0), 0;
                        return t
                    }
                }),
                w = function(e) {
                    (e = arguments.length ? [e] : Object.keys(b)).forEach(function(t) { var n; if (b[t]) try { n = b[t](h[t]) } catch (e) { n = r[t] } finally { h[t] = n } })
                },
                T = function(e, t) {
                    var n = !1,
                        r = h[e];
                    return h[e] != t && (h[e] = t, w(e), n = r != h[e]), n
                },
                S = function(t) { p[t] || (p[t] = function(e) { return arguments.length ? ("duration" === t && (n = void 0), T(t, e) && (p.trigger("change", { what: t, newval: h[t] }), -1 < j.shifts.indexOf(t) && p.trigger("shift", { reason: t })), p) : h[t] }) };
            this.controller = function() { return l }, this.state = function() { return d }, this.scrollOffset = function() { return a.start }, this.triggerPosition = function() { var e = h.offset; return l && (e += h.triggerElement ? m : l.info("size") * p.triggerHook()), e }, p.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (d === f && t || d === c && 0 === h.duration) && C(), t && k()
            }).on("progress.internal", function() { C() }).on("add.internal", function() { k() }).on("destroy.internal", function(e) { p.removePin(e.reset) });
            var C = function(e) {
                    if (v && l) {
                        var t = l.info(),
                            n = y.spacer.firstChild;
                        if (e || d !== c) {
                            var r = { position: y.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                i = L.css(n, "position") != r.position;
                            y.pushFollowers ? 0 < h.duration && (d === f && 0 === parseFloat(L.css(y.spacer, "padding-top")) ? i = !0 : d === u && 0 === parseFloat(L.css(y.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g, L.css(n, r), i && k()
                        } else {
                            "fixed" != L.css(n, "position") && (L.css(n, { position: "fixed" }), k());
                            var o = L.get.offset(y.spacer, !0),
                                s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
                            o[t.vertical ? "top" : "left"] += s, L.css(y.spacer.firstChild, { top: o.top, left: o.left })
                        }
                    }
                },
                k = function() {
                    if (v && l && y.inFlow) {
                        var e = d === c,
                            t = l.info("vertical"),
                            n = y.spacer.firstChild,
                            r = L.isMarginCollapseType(L.css(y.spacer, "display")),
                            i = {};
                        y.relSize.width || y.relSize.autoFullWidth ? e ? L.css(v, { width: L.get.width(y.spacer) }) : L.css(v, { width: "100%" }) : (i["min-width"] = L.get.width(t ? v : n, !0, !0), i.width = e ? i["min-width"] : "auto"), y.relSize.height ? e ? L.css(v, { height: L.get.height(y.spacer) - (y.pushFollowers ? h.duration : 0) }) : L.css(v, { height: "100%" }) : (i["min-height"] = L.get.height(t ? n : v, !0, !r), i.height = e ? i["min-height"] : "auto"), y.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), L.css(y.spacer, i)
                    }
                },
                P = function() { l && v && d === c && !l.info("isDocument") && C() },
                A = function() { l && v && d === c && ((y.relSize.width || y.relSize.autoFullWidth) && L.get.width(window) != L.get.width(y.spacer.parentNode) || y.relSize.height && L.get.height(window) != L.get.height(y.spacer.parentNode)) && k() },
                O = function(e) { l && v && d === c && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail))) };
            this.setPin = function(e, t) {
                if (t = L.extend({}, { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }, t), !(e = L.get.elements(e)[0])) return p;
                if ("fixed" === L.css(e, "position")) return p;
                if (v) {
                    if (v === e) return p;
                    p.removePin()
                }
                var n = (v = e).parentNode.style.display,
                    r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                v.parentNode.style.display = "none";
                var i = "absolute" != L.css(v, "position"),
                    o = L.css(v, r.concat(["display"])),
                    s = L.css(v, ["width", "height"]);
                v.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);
                var a = v.parentNode.insertBefore(document.createElement("div"), v),
                    l = L.extend(o, { position: i ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                if (i || L.extend(l, L.css(v, ["width", "height"])), L.css(a, l), a.setAttribute(R, ""), L.addClass(a, t.spacerClass), y = { spacer: a, relSize: { width: "%" === s.width.slice(-1), height: "%" === s.height.slice(-1), autoFullWidth: "auto" === s.width && i && L.isMarginCollapseType(o.display) }, pushFollowers: t.pushFollowers, inFlow: i }, !v.___origStyle) {
                    v.___origStyle = {};
                    var u = v.style;
                    r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) { v.___origStyle[e] = u[e] || "" })
                }
                return y.relSize.width && L.css(a, { width: s.width }), y.relSize.height && L.css(a, { height: s.height }), a.appendChild(v), L.css(v, { position: i ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (y.relSize.width || y.relSize.autoFullWidth) && L.css(v, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", P), window.addEventListener("resize", P), window.addEventListener("resize", A), v.addEventListener("mousewheel", O), v.addEventListener("DOMMouseScroll", O), C(), p
            }, this.removePin = function(e) {
                if (v) {
                    if (d === c && C(!0), e || !l) {
                        var t = y.spacer.firstChild;
                        if (t.hasAttribute(R)) {
                            var n = y.spacer.style;
                            margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) { margins[e] = n[e] || "" }), L.css(t, margins)
                        }
                        y.spacer.parentNode.insertBefore(t, y.spacer), y.spacer.parentNode.removeChild(y.spacer), v.parentNode.hasAttribute(R) || (L.css(v, v.___origStyle), delete v.___origStyle)
                    }
                    window.removeEventListener("scroll", P), window.removeEventListener("resize", P), window.removeEventListener("resize", A), v.removeEventListener("mousewheel", O), v.removeEventListener("DOMMouseScroll", O), v = void 0
                }
                return p
            };
            var E, N = [];
            return p.on("destroy.internal", function(e) { p.removeClassToggle(e.reset) }), this.setClassToggle = function(e, t) {
                    var n = L.get.elements(e);
                    return 0 !== n.length && L.type.String(t) && (0 < N.length && p.removeClassToggle(), E = t, N = n, p.on("enter.internal_class leave.internal_class", function(e) {
                        var t = "enter" === e.type ? L.addClass : L.removeClass;
                        N.forEach(function(e) { t(e, E) })
                    })), p
                }, this.removeClassToggle = function(e) { return e && N.forEach(function(e) { L.removeClass(e, E) }), p.off("start.internal_class end.internal_class"), E = void 0, N = [], p },
                function() {
                    for (var e in h) r.hasOwnProperty(e) || delete h[e];
                    for (var t in r) S(t);
                    w()
                }(), p
        };
        var j = {
            defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 },
            validate: {
                offset: function(e) { if (e = parseFloat(e), !L.type.Number(e)) throw 0; return e },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = L.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = { onCenter: .5, onEnter: 1, onLeave: 0 };
                    if (L.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) { return !!e }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        D.Scene.addOption = function(e, t, n, r) { e in j.defaults || (j.defaults[e] = t, j.validate[e] = n, r && j.shifts.push(e)) }, D.Scene.extend = function(e) {
            var t = this;
            D.Scene = function() { return t.apply(this, arguments), this.$super = L.extend({}, this), e.apply(this, arguments) || this }, L.extend(D.Scene, t), D.Scene.prototype = t.prototype, D.Scene.prototype.constructor = D.Scene
        }, D.Event = function(e, t, n, r) { for (var i in r = r || {}) this[i] = r[i]; return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this };
        var L = D._util = function(s) {
            var n, e = {},
                a = function(e) { return parseFloat(e) || 0 },
                l = function(e) { return e.currentStyle ? e.currentStyle : s.getComputedStyle(e) },
                r = function(e, t, n, r) {
                    if ((t = t === document ? s : t) === s) r = !1;
                    else if (!f.DomElement(t)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
                    if (n && r) {
                        var o = l(t);
                        i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)
                    }
                    return i
                },
                u = function(e) { return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) { return e[1].toUpperCase() }) };
            e.extend = function(e) {
                for (e = e || {}, n = 1; n < arguments.length; n++)
                    if (arguments[n])
                        for (var t in arguments[n]) arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
                return e
            }, e.isMarginCollapseType = function(e) { return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) };
            var i = 0,
                t = ["ms", "moz", "webkit", "o"],
                o = s.requestAnimationFrame,
                c = s.cancelAnimationFrame;
            for (n = 0; !o && n < t.length; ++n) o = s[t[n] + "RequestAnimationFrame"], c = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
            o || (o = function(e) {
                var t = (new Date).getTime(),
                    n = Math.max(0, 16 - (t - i)),
                    r = s.setTimeout(function() { e(t + n) }, n);
                return i = t + n, r
            }), c || (c = function(e) { s.clearTimeout(e) }), e.rAF = o.bind(s), e.cAF = c.bind(s);
            var f = e.type = function(e) { return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
            f.String = function(e) { return "string" === f(e) }, f.Function = function(e) { return "function" === f(e) }, f.Array = function(e) { return Array.isArray(e) }, f.Number = function(e) { return !f.Array(e) && 0 <= e - parseFloat(e) + 1 }, f.DomElement = function(e) { return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName };
            var p = e.get = {};
            return p.elements = function(e) {
                var t = [];
                if (f.String(e)) try { e = document.querySelectorAll(e) } catch (e) { return t }
                if ("nodelist" === f(e) || f.Array(e))
                    for (var n = 0, r = t.length = e.length; n < r; n++) {
                        var i = e[n];
                        t[n] = f.DomElement(i) ? i : p.elements(i)
                    } else(f.DomElement(e) || e === document || e === s) && (t = [e]);
                return t
            }, p.scrollTop = function(e) { return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0 }, p.scrollLeft = function(e) { return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0 }, p.width = function(e, t, n) { return r("width", e, t, n) }, p.height = function(e, t, n) { return r("height", e, t, n) }, p.offset = function(e, t) {
                var n = { top: 0, left: 0 };
                if (e && e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    n.top = r.top, n.left = r.left, t || (n.top += p.scrollTop(), n.left += p.scrollLeft())
                }
                return n
            }, e.addClass = function(e, t) { t && (e.classList ? e.classList.add(t) : e.className += " " + t) }, e.removeClass = function(e, t) { t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, e.css = function(e, t) {
                if (f.String(t)) return l(e)[u(t)];
                if (f.Array(t)) {
                    var n = {},
                        r = l(e);
                    return t.forEach(function(e) { n[e] = r[u(e)] }), n
                }
                for (var i in t) {
                    var o = t[i];
                    o == parseFloat(o) && (o += "px"), e.style[u(i)] = o
                }
            }, e
        }(window || {});
        return D
    }),
    function(e, t) { "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite) }(this, function(e, a, l) {
        "use strict";
        e.Scene.addOption("tweenChanges", !1, function(e) { return !!e }), e.Scene.extend(function() {
            var i, o = this;
            o.on("progress.plugin_gsap", function() { s() }), o.on("destroy.plugin_gsap", function(e) { o.removeTween(e.reset) });
            var s = function() {
                if (i) {
                    var e = o.progress(),
                        t = o.state();
                    i.repeat && -1 === i.repeat() ? "DURING" === t && i.paused() ? i.play() : "DURING" === t || i.paused() || i.pause() : e != i.progress() && (0 === o.duration() ? 0 < e ? i.play() : i.reverse() : o.tweenChanges() && i.tweenTo ? i.tweenTo(e * i.duration()) : i.progress(e).pause())
                }
            };
            o.setTween = function(e, t, n) {
                var r;
                1 < arguments.length && (arguments.length < 3 && (n = t, t = 1), e = a.to(e, t, n));
                try {
                    (r = l ? new l({ smoothChildTiming: !0 }).add(e) : e).pause()
                } catch (e) { return o }
                return i && o.removeTween(), i = r, e.repeat && -1 === e.repeat() && (i.repeat(-1), i.yoyo(e.yoyo())), s(), o
            }, o.removeTween = function(e) { return i && (e && i.progress(0).pause(), i.kill(), i = void 0), o }
        })
    }), document.addEventListener("DOMContentLoaded", function(e) {
        detectPlatform(), appendVideo(), handleForm(), trackReachingBottom();
        var t = new ScrollMagic.Controller;
        new ScrollMagic.Scene({ triggerElement: "#intro-trigger", triggerHook: "onEnter", reverse: !1, offset: 60 }).setClassToggle(".intro", "is-animated").addTo(t), new ScrollMagic.Scene({ triggerElement: "#reward1-graphics-trigger", triggerHook: "onEnter", reverse: !1, offset: 100 }).setClassToggle(".reward1 .rewards-graphics, .character-fearless", "is-animated").addTo(t), new ScrollMagic.Scene({ triggerElement: "#reward2-graphics-trigger", triggerHook: "onEnter", reverse: !1, offset: 100 }).setClassToggle(".reward2 .rewards-graphics, .character-keep", "is-animated").addTo(t), new ScrollMagic.Scene({ triggerElement: "#reward1-text-trigger", triggerHook: "onEnter", reverse: !1, offset: 100 }).setClassToggle(".reward1 .rewards-text", "is-animated").addTo(t), new ScrollMagic.Scene({ triggerElement: "#reward2-text-trigger", triggerHook: "onEnter", reverse: !1, offset: 100 }).setClassToggle(".reward2 .rewards-text", "is-animated").addTo(t), new ScrollMagic.Scene({ triggerElement: "#bottom-social", triggerHook: "onEnter", reverse: !1, offset: 200 }).setClassToggle(".bottom-social, .characters-spark", "is-animated").addTo(t);
        new ScrollMagic.Scene({ triggerElement: ".intro", triggerHook: 1, duration: "500%" }).setTween(TweenLite.from(".intro-pattern", 1, { y: "-50%" })).addTo(t), new ScrollMagic.Scene({ triggerElement: ".rewards", triggerHook: 1, duration: "500%" }).setTween(TweenLite.from(".rewards-pattern", 1, { y: "-50%", ease: Linear.easeNone })).addTo(t), new ScrollMagic.Scene({ triggerElement: ".bottom", triggerHook: 1, duration: "500%" }).setTween(TweenLite.from(".bottom-pattern", 1, { y: "-50%", ease: Linear.easeNone })).addTo(t)
    }), $(".subscribe-open").click(function() { savedScroll = $(window).scrollTop(), $(window).scrollTop(0), $("html, body").addClass("subscribe-popup-opened"), /**gtag("event", "open", { event_category: "Subscribe Popup", send_to: "analytics" }),*/ setTimeout(function() { $("html, body").addClass("is-popup-animated") }, 10) }), $(".language-open").click(function() { savedScroll = $(window).scrollTop(), $(window).scrollTop(0), $("html, body").addClass("language-popup-opened"), setTimeout(function() { $("html, body").addClass("is-popup-animated") }, 10) }), $(".subscribe-close").click(function() { closePopup("subscribe") }), $(".language-close").click(function() { closePopup("language") }), $(".popup-container, .popup-bg").click(function(e) { e.currentTarget === e.target && closePopup($(this).data("popup")) });