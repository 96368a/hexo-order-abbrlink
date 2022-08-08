'use strict';
let startId;
let datas = [];
function postPermalinkFilter(data) {

    //读取配置中初始id
    if (startId === undefined) {
        startId = this.config.abbrlink.start || 0;
    }

    /*     
    生成id
    逻辑:
        过滤器会把所有文档迭代三遍,
        第一次 伪正序(可能是因为异步导致的部分顺序错乱)
        第二次 正序 (生成id操作)
        第三次 倒序
        在第二次迭代中处理id生成，第一次迭代中收集所有id并做缓存，用于判断第二次迭代开始
        生成id加判断跳过第三次迭代 
    */
    if (datas.includes(data._id)) {
        if (!data.abbrlink) {
            data.abbrlink = startId;
            startId = startId + 1;
        }
    } else {
        datas.push(data._id);
    }

    return data;
}
module.exports = postPermalinkFilter;
