/**
 * @file setting.js
 * @author mengke01
 * @date 
 * @description
 * 设置项目
 */

define(
    function(require) {
        return {
            'unicode': require('../dialog/setting-unicode'),
            'name': require('../dialog/setting-name'),
            'adjust-pos': require('../dialog/setting-adjust-pos'),
            'adjust-glyf': require('../dialog/setting-adjust-glyf'),
            'metrics': require('../dialog/setting-metrics'),
            'online': require('../dialog/font-online'),
            'glyf': require('../dialog/setting-glyf')
        };
    }
);