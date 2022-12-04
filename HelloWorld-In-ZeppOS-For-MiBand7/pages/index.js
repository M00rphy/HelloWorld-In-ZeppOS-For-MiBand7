import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                /*
                0	zh-CN	简体中文
                1	zh-TW	繁体中文（中国台湾）
                2	en-US	英语（美国）
                */
                const language = hmSetting.getLanguage();
                switch (language) {
                    case 0:
                        var text="这是一段测试多语言功能的文字，点击LOGO将跳转下一页"
                        break;
                    case 1:
                        var text="這是一段測試多語言功能的文字，點擊LOGO將跳轉下一頁"
                        break;
                    case 2:
                        var text="This is a text to test the multilingual function, click LOGO to jump to the next page"
                        break;
                }

                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const icon = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 80,
                    src: 'icon.png'
                });
                const info = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 150,//100
                    w: 192,
                    h: 300,
                    color: 16777215,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: text
                });

                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                logo.addEventListener(hmUI.event.CLICK_DOWN, function () {
                    hmApp.gotoPage({ url: 'pages/HomePage', param: '' })

                })
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}