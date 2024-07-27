var posts=["2024/04/11/04-11-命运的齿轮开始转动/","2024/06/15/0615-订票啦/","2022/05/19/2021-2022元旦跨年短信祝福信-x/","2024/07/01/0701/","2022/05/19/2021-2022元旦跨年短信祝福信（原隔壁宿舍523某位同学）/","2024/06/22/6-20-21-毕业啦/","2022/05/19/95/","2022/08/28/bilibiliの回忆/","2024/02/09/2024-新年快乐/","2022/06/14/bit、byte、kb、kb、mb、kib、mib各表示什么意思/","2024/04/04/chatgpt-suno脚本prompt/","2023/06/06/chatgpt解锁开发者模式/","2023/06/05/chatgpt输出图片/","2023/06/06/chatgpt咒语大全/","2023/01/06/darkmode-js-为网站一键添加深色模式/","2023/05/20/chatgpt进入开发者模式/","2023/07/16/gb与gib的区别/","2022/07/31/dos7t3rのpython学习日记/","2024/06/29/happyday▽ʃ♡ƪ-密室＆猫咖/","2022/05/03/hello-world-1/","2024/06/11/hello-world-2/","2024/07/22/hello-world/","2022/06/03/html-title自后向前动态出现/","2022/05/04/html本体实现标题栏闪烁效果/","2022/05/04/html视频背景效果的2种实现方式（css实现本体实现）/","2024/03/09/http状态码说明/","2022/06/14/jsdiv标签实现点击复制功能/","2022/06/13/js实现关闭调试工具解除刷新效果/","2022/06/12/js实现视频背景/","2024/03/08/maccms替换播放地址/","2024/06/12/meyou/","2023/01/06/preferyou秘密胶囊php程序修复版（部署教程）/","2024/04/20/smile/","2024/04/04/sunoai-prompt-suno风格预设/","2022/07/19/wordpress连接数据库失败解决方案-本站亲测！/","2023/04/20/◢-◤/","2022/06/03/【教程】关于aw的一些疑问/","2024/06/12/一个seo友好的robot-txt配置/","2024/06/22/一到晚上就更想他了。。。。/","2023/07/16/使用toastr-alart实现面向用户的报错提示/","2023/12/03/修改sakurairo主题默认的加载效果-应用underical-cc加载效果/","2024/02/06/修改主题评论区：添加自定义文字段/","2023/07/24/全站搬运记录/","2022/07/17/关于原博客的一切前因后果/","2024/06/11/哦？他吗？他是我的/","2022/10/02/处理ajax跨域问题/","2024/06/18/大连之旅/","2022/05/04/如何在html中实现仿gamesense-aimware动态标题/","2024/02/06/如何提问，并获得高回复率-提问的智慧（精缩/","2022/05/04/如何用css实现彩虹变色字体（rainbow-text）/","2024/06/12/宝宝，我想告诉你/","2024/05/26/开启返程/","2022/05/21/我领证辣！-丨-一篇应该是最真实入团经历/","2024/07/24/批量删除wordpress自动裁剪过的照片/","2024/02/06/新年快乐-1/","2023/01/21/新年快乐/","2024/06/22/有时候真的挺服气的/","2023/05/21/期末考试保层次名次计算器-算法解析/","2022/06/13/电影常见版本简单介绍/","2024/06/11/相册/","2024/05/26/第一次🛫经历/","2023/03/05/终于把博客搞好了/","2024/03/08/给网站挂一个会动的灯笼/","2022/08/28/腾讯云服务器部署wordpress添加ssl证书报错解决方案/","2024/07/13/解决mediacms登录-管理页面500error/","2023/03/04/记一次本站全站搬家过程/","2022/05/19/记录一下这学期第二次的电脑课-哈哈哈/","2024/05/25/高考倒计时12天/","2023/11/12/高考倒计时207天/","2023/08/12/高考倒计时299天/","2024/06/02/高考倒计时4天/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };