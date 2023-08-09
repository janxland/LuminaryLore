// ==MiruExtension==
// @name         JavBus
// @version      v0.0.2
// @author       ROGINX
// @lang         zh-cn
// @license      MIT
// @package      cos.roginx.ink.javbus
// @type         bangumi
// @icon         https://www.javbus.com/images/logo.png
// @webSite      https://www.javbus.com/
// ==/MiruExtension==

export default class extends Extension {
    jmcomic = {
        "bookSourceComment": "",
        "bookSourceGroup": "ROGINX",
        "bookSourceName": "JavBus",
        "bookSourceType": 2,
        "bookSourceUrl": "https://www.javbus.com/",
        "customOrder": -2085984643,
        "enabled": true,
        "enabledCookieJar": false,
        "enabledExplore": true,
        "exploreUrl": "热门::https://www.91cg2.com/category/jrcg/\n最新::https://www.javbus.com/genre/hd\n动漫::https://v.qq.com/channel/cartoon",
        "lastUpdateTime": 1688004621532,
        "loginUrl": "https:\/\/se8.us\/",
        "respondTime": 36274,
        "ruleBookInfo": {
            "author": ".name@tag.a@text",
            "coverUrl": ".de-info__cover@class.lazy.0@src",
            "intro": ".intro@text",
            "kind": ".comic-status@span.1@text",
            "lastChapter": ".update-time@text",
            "name": ".comic-title@text"
        },
        "ruleContent": {
            "content": "class.rd-article-wr@img@data-original",
            "imageStyle": "FULL"
        },
        "ruleExplore": {
            "bookList": ".movie-box",
            "bookUrl": "tag.a.0@href",
            "coverUrl": "{{bookSourceUrl}}class.photo-frame@tag.img.0@src",
            "intro": "",
            "name": ".photo-info@tag.span@text",
            "lastChapter": ".photo-info@tag.date@text",
        },
        "ruleReview": {},
        "ruleSearch": {
            "bookList": ".common-comic-item",
            "bookUrl": ".cover@href",
            "coverUrl": ".cover@img@data-original",
            "lastChapter": ".h1@text",
            "name": ".comic-feature@text"
        },
        "ruleToc": {
            "chapterList": ".j-chapter-link",
            "chapterName": "text",
            "chapterUrl": "href"
        },
        "searchUrl": "\/index.php\/search?key={{key}}",
        "weight": 0
    }
  handleQuery(queryStr,option){
    let params = this.jmcomic;
    var regex = /{{(.*?)}}/g;
    var replacedString = queryStr.replace(regex, function(match, key) {
      if (typeof params[key] === "function") {
        return params[key](option);
      } else {
        return params[key] || match;
      }
    });
    var emptyString = queryStr.replace(regex, "");
    return [replacedString, emptyString];
  }
  selector(doc,eleStr){
    let sqs = eleStr?.split("||");
    let elements = []
    for (let index0 = 0; index0 < sqs.length; index0++) {
        let selector = "";
        let sq = sqs[index0]?.split("@");
        for (let index = 0; index < sq.length; index++) {
            let regex = /^(\w+)\.([\w\s-]+)(?:\.(\d+))?$/ 
            let parm = sq[index].match(regex);
            if(!parm){
                selector = sq[index]
            } else {
                if(parm[1]=="tag"){
                    selector = selector + parm[2];
                    if(parm[3]) {
                        selector = selector + `:eq(${parm[3]})`
                    }
                }
                if(parm[1]=="class" || parm[1]==""){
                    selector = selector + `[class*='${parm[2]}']`
                    if(parm[3]) {
                        selector = selector + `:eq(${parm[3]})`
                    }
                }
                if(parm[2]=="id"){
                    selector = selector + `[id*='${parm[2]}']`
                }
            }
            selector = selector + " ";
          }
          elements.push(doc.find(selector))
    }
    return elements
  }
  /**
  * 从一个个书中获取属性
  */
  attr(doc,attrStr){
    doc = $(doc);
    let res = "";
    let sqs = attrStr?.split("||");
    for (let index0 = 0; index0 < sqs.length; index0++) {
        let selector = "";
        let sq = sqs[index0]?.split("@");
        for (let index = 0; index < sq.length - 1; index++) {
            let regex = /^(\w+)\.([\w\s-]+)(?:\.(\d+))?$/ 
            let parm = sq[index].match(regex);
            if(!parm){
                selector = sq[index]
            } else {
                if(parm[1]=="tag"){
                    selector = selector + parm[2];
                    if(parm[3]) {
                        selector = selector + `:eq(${parm[3]})`
                    }
                }
                if(parm[1]=="class" || parm[1]==""){
                    selector = selector + `[class*='${parm[2]}']`
                    if(parm[3]) {
                        selector = selector + `:eq(${parm[3]})`
                    }
                }
                if(parm[2]=="id"){
                    selector = selector + `[id*='${parm[2]}']`
                }
            }
            selector = selector + " ";
          }
          if(sq[sq.length-1]){
            if(sq[sq.length-1]=="text"){
                let result =  doc;
                if(selector?.trim() !== "") { result = doc?.find(selector) };
                if(result.length>1) {
                    res = result.map(function(index, item) {
                        return $(item)?.text()
                    });
                } else {
                    res = $(result)?.text()
                }
              } else {
                let result =  doc;
                if(selector?.trim() !== "") { result = doc.find(selector) };
                  if(result.length>1) {
                      res = result.map(function(index, item) {
                          return $(item)?.attr(sq[sq.length-1])
                      });
                  } else {
                      res = $(result)?.attr(sq[sq.length-1])
                  }
              }
          }
    }
    return res;
  }
    async load() {
      await this.registerSetting({
        title: "R18警告",
        key: "quality",
        type: "toggle",
        description: "仅供娱乐，请勿传播",
        defaultValue: "false",
      });
    }
  
    async latest(page) {
        const regex = /(.+?)::(.+)/g;
        const matches = {};
        let match;

        while ((match = regex.exec(this.jmcomic.exploreUrl)) !== null) {
            const key = match[1].trim();
            const value = match[2].trim();
            matches[key] = value;
        }
        const url = new URL(matches["最新"].replace("{{page}}",page));
        const path = url.pathname;
        const res = await this.request(
            `${path}`,
        );
        let doc = $(jQuery.parseHTML(res))
        let items = this.selector(doc,this.jmcomic.ruleExplore.bookList);
        
        const manga = [];
        items[0].toArray().forEach((element,index) => {
            let url =this.attr($(element),this.jmcomic.ruleExplore.bookUrl)
            let [replacedString, emptyString] = this.handleQuery(this.jmcomic.ruleExplore.coverUrl, {url:url});
            replacedString = replacedString.replace(emptyString,"")
            
            console.log(emptyString);
            let cover = this.attr($(element),emptyString)
            manga.push({
            title: this.attr($(element),this.jmcomic.ruleExplore.name),
            cover: replacedString + cover,
            update: this.attr($(element),this.jmcomic.ruleExplore.lastChapter),
            url: url,
            });
        });
      return manga;
    }
  
    async search(kw, page) {
      //let url = this.jmcomic.searchUrl.startsWith("http") ? url : this.jmcomic.bookSourceUrl + this.jmcomic.searchUrl;
      const res = await this.request(
        `/api/scrape?url=${url.replace("{{key}}",kw).replace("{{page}}",page)}`,
      );
      const manga = [];
      let doc = $(jQuery.parseHTML(res))
      let items = this.selector(doc,this.jmcomic.ruleSearch.bookList);
      items[0].toArray().forEach((element) => {
        let url =this.attr($(element),this.jmcomic.ruleExplore.bookUrl)
        let [replacedString, emptyString] = this.handleQuery(this.jmcomic.ruleSearch.coverUrl, {url:url});
        replacedString = replacedString.replace(emptyString,"")
        manga.push({
          title: this.attr($(element),this.jmcomic.ruleSearch.name),
          cover: replacedString + this.attr($(element),emptyString),
          update: this.attr($(element),this.jmcomic.ruleSearch.lastChapter),
          url: this.attr($(element),this.jmcomic.ruleSearch.bookUrl),
        });
      });
      return manga;
    }
  
    async detail(url) {
        const newurl = new URL(url.startsWith("http") ? url : this.jmcomic.bookSourceUrl + url);
        const path = newurl.pathname;
        const res = await this.request(
            `${path}`,
        );
      let item = $(jQuery.parseHTML(res))
      let chapterItems = this.selector(item,this.jmcomic.ruleToc.chapterList);
      let episodes = [];
      let urls =[];
      chapterItems[0].toArray().forEach((element) => {
        urls.push({
          name: this.attr($(element),this.jmcomic.ruleToc.chapterName),
          url: this.attr($(element),this.jmcomic.ruleToc.chapterUrl),
        });
      });
      episodes.push({
        title:'列表',
        urls:urls
      })
      console.log(this.attr(item,this.jmcomic.ruleBookInfo.coverUrl));
      return {
        title: this.attr(item,this.jmcomic.ruleBookInfo.name),
        cover: this.attr(item,this.jmcomic.ruleBookInfo.coverUrl),
        desc: this.attr(item,this.jmcomic.ruleBookInfo.intro),
        episodes,
      };
    }
  
    async watch(url) {
      let thi = this;
      const res = await this.request(
        `/api/scrape?url=${url.startsWith("http") ? url : this.jmcomic.bookSourceUrl + url}`,
      );
      let images0 = this.attr($(jQuery.parseHTML(res)),this.jmcomic.ruleContent.content).toArray()
      let urls = images0.map(function(link) {
        if (link?.indexOf("http://") === 0 || link?.indexOf("https://") === 0) {
            return link;
        } else {
            return thi.jmcomic.bookSourceUrl + link;
        }
      }).filter(Boolean);
      return {
        urls,
      };
    }
  }
  