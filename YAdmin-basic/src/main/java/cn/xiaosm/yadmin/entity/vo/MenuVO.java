/**
 * Copyright: 2019-2020，小树苗(www.xiaosm.cn)
 * FileName: MenuVO
 * Author:   Young
 * Date:     2020/6/19 16:20
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.yadmin.entity.vo;

import cn.xiaosm.yadmin.entity.Menu;
import cn.xiaosm.yadmin.exception.SQLOperateException;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/19
 * @since 1.0.0
 */
public class MenuVO extends Menu {

    private String showType; // 数据展示格式默认为 链表
    private boolean includeButton; // 是否包含按钮

    public MenuVO setParentMenu(Integer parentMenu) {
        super.setParentMenu(parentMenu == null || parentMenu <= 0 ? 1 : parentMenu);
        return this;
    }

    public void setShowType(String showType) {
        this.showType = StringUtils.isBlank(showType) ? "list" : showType;
    }

    public MenuVO setId(Integer id) {
        if (id == 1) throw new SQLOperateException("系统保留数据，请勿操作");
        super.setId(id);
        return this;
    }

    public String getShowType() {
        return showType;
    }

    public boolean isIncludeButton() {
        return includeButton;
    }

    public MenuVO setIncludeButton(boolean includeButton) {
        this.includeButton = includeButton;
        return this;
    }
}