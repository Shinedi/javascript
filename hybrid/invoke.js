(function(window, undefined){
    function _invoke(action, data, callback){
        // 拼装schema
        var schema = 'maapp://utils/' + action;
        //拼接参数
        schema += '?a=a'
        var key
        for(key in data) {
            schema += '&' +key + data[key]
        }
        // 处理callback
        var callbackName = ''
        if (typeof callback == 'string') {
            callbackName = callback;
        } else {
            callbackName = action + Date.now();
            window[callbackName] = callback
        }
        schema += '&callback=' + callbackName
        // 触发
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'weixin://dl/scan?k1=v1&callback=_invoke_scan_callback_'
        var body = document.body;
        body.appendChild(iframe);
        setTimeout(function(){
            body.removeChild(iframe);
            iframe = null
        })
    }

    window.invoke = {
        share: function(data, callback){
            _invoke('share', data, callback)
        },
        scan: function(data, callback){
            _invoke('share', data, callback)
        },
        login: function(data, callback){
            _invoke('login', data, callback)
        }
    }
})(window)