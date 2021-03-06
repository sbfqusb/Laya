/*
* name;
*/
class StringUtils extends BaseClass {
    
    constructor() {
        super();
    }

    /**
     * 去掉前后空格
     * @param str {string}
     * @returns {string}
     */
    trimSpace(str) {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    }

    /**
     * 获取字符串长度，中文为2
     * @param str {string}
     */
    getLength(str) {
        let strArr = str.split("");
        let length = 0;
        for (let i = 0; i < strArr.length; i++) {
            let s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            } else {
                length += 1;
            }
        }
        return length;
    }

    /**
     * 判断一个字符串是否包含中文
     * @param str {string}
     * @returns {boolean}
     */
    isChinese(str) {
        let reg = /^.*[\u4E00-\u9FA5]+.*$/;
        return reg.test(str);
    }

}