//服务器返回时间处理

function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  
  // 时间格式化
  export function formatDate(date, fmt) {
      //获取年份
      //y+ 表示可以传入多个y，+表示可以有一个或多个
      //例 yy 返回19，yyyy返回2019
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
      //
      //
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
  
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
  
    return fmt;
  }  