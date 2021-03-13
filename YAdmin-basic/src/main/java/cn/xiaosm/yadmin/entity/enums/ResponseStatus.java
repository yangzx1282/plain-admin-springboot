/**
 * Copyright: 2019-2020，小树苗(www.xiaosm.cn)
 * FileName: ResponseCode
 * Author:   Young
 * Date:     2020/6/13 15:23
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.yadmin.entity.enums;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/13
 * @since 1.0.0
 */
public enum ResponseStatus {

    FAIL(500, "失败"),
    SUCCESS(200, "成功"),
    ERROR(400, "请求出现错误"),
    AUTHENTICATION_EXPIRE(401, "身份认证过期，请重新登录"),
    AUTHORITIES_DENIED(403, "权限不足"),
    DATA_NULL(404, "查询数据空"),
    OAUTH_UNBIND(4000, "快捷登录失败");

    private int code;
    private String msg;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    ResponseStatus(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

}