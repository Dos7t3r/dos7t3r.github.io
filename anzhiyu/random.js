var posts=["posts/d0bb17fb/","posts/2827658/","posts/7c3a05cb/","posts/aea679e0/","posts/56f9d6f6/","posts/e0551e80/","posts/8bc4ff5a/","posts/ec928eb1/","posts/b1cfe2b6/","posts/3dab5d71/","posts/909b7ac/","posts/fdf5275d/","posts/1dbd3ec3/","posts/687a59b1/","posts/1b1ac6d5/","posts/13c70f01/","posts/6624855f/","posts/4a222a4b/","posts/b9640e54/","posts/ee14dff6/","posts/30b1ab81/","posts/5314850/","posts/b6191942/","posts/122aed29/","posts/b7df6500/","posts/9ccb3f1e/","posts/4a5b4d7f/","posts/35930d2d/","posts/815f0d88/","posts/aa458633/","posts/9224bc86/","posts/bb7440f0/","posts/2ef49e1a/","posts/55113733/","posts/1c55acfa/","posts/e6385291/","posts/175afeb3/","posts/94b2fae4/","posts/c81c1b4d/","posts/92a48f4b/","posts/607d3200/","posts/28fbf179/","posts/54882019/","posts/dbde3d36/","posts/e727a867/","posts/eace55e2/","posts/8aeaff03/","posts/1c0e5eb5/","posts/957d926e/","posts/8f48ad/","posts/cb8d3ef7/","posts/d37dab0d/","posts/2b9cc7eb/","posts/2b9cc7eb/","posts/9d6888ca/","posts/9a116840/","posts/12945413/","posts/61fe224a/","posts/56d44f42/","posts/aedf3ce4/","posts/753e0ae3/","posts/9a0d7978/","posts/3669110/","posts/8d747287/","posts/c34adf2c/","posts/fbec1b9b/","posts/16230ed9/","posts/61f02c0c/","posts/c490a0ec/","posts/a05c018a/","posts/97d1f433/"];function toRandomPost(){
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