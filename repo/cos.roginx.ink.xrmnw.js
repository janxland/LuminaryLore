// ==MiruExtension==
// @name         秀人美女
// @version      v0.0.2
// @author       ROGINX
// @lang         zh-cn
// @license      MIT
// @package      cos.roginx.ink.xrmnw
// @type         manga
// @icon         https://www.xrmn02.cc/img/logo.png
// @webSite      https://www.xrmn02.cc/
// ==/MiruExtension==

export default class extends Extension {
    jmcomic1 = {
        
    }
    jmcomic = {
      "bookSourceComment": "",
      "bookSourceGroup": "🎨美女图",
      "bookSourceName": "🎨秀人美女网",
      "bookSourceType": 0,
      "bookSourceUrl": "https://www.xrmn02.cc/",
      "customOrder": 37,
      "enabled": true,
      "enabledExplore": true,
      "exploreUrl": "最新::\/zx.html\n推荐::\/tj.html\n热门:\/rm.html\n日排行榜::\/albums?o=mv&t=t?page={{key}}\n最新A漫::\/albums?o=mr?page={{key}}\n同人::\/albums\/doujin?page={{key}}\n\n单行本::\/albums\/single?o=mr?page={{key}}\n短篇::\/albums\/short?page={{key}}\n其他::\/albums\/another?page={{key}}\n韩漫::\/albums\/hanman?page={{key}}\n美漫::\/albums\/meiman?page={{key}}\ncosplay::\/albums\/another\/sub\/cosplay?page={{key}}",
      "lastUpdateTime": 1651214216611,
      "respondTime": 180000,
      "ruleBookInfo": {
          "coverUrl": "{{bookSourceUrl}}class.content_left@tag.img.0@src",
          "init": "",
          "intro": "class.jianjie@text",
          "kind": "class.item_info@tag.span.1@text",
          "name": "tag.h1.0@text"
      },
      "ruleContent": {
          "items":"class.content_left@tag.img@src",
          "content":"class.content_left",
          "imageStyle": "Full",
          "decodeImage": true
      },
      "ruleExplore": {
          "bookList": "class.i_list list_n2",
          "bookUrl": "tag.a.0@href",
          "coverUrl": "{{bookSourceUrl}}tag.img.0@src",
          "intro": "class.meta-title@text",
          "kind": "class.postlist-imagenum@tag.span@text",
          "name": "class.meta-title@text"
      },
      "ruleSearch": {
          "bookList": "class.list@class.node@class.sousuo",
          "playNum":"class.text-white@text",
          "bookUrl": "tag.a.0@href",
          "coverUrl": "{{bookSourceUrl}}{{cover}}",
          "kind": "class.description@tag.p.1@text",
          "name": "tag.a.0@text",
          "id": "\\/album\\/(.*?)\\/"
      },
      "ruleToc": {
          "chapterList": "class.content_left@class.page@tag.a",
          "chapterName": "text",
          "chapterUrl": "href"
      },
      "searchUrl": "https://www.xrmn02.cc/plus/search/index.asp?keyword={{key}}&searchtype=titlekeywords&p={{page}}",
      "contentUrl":"https:\/www.xrmn02.cc\/photo\/${id}",
      "weight": 0,
      "cover":function(option){
        var regex = /\/(\d+)\.html/;
        var match = option?.url.match(regex);
        if (match && match[1]) {
        var dynamicValue =  match[1].slice(4);
            return `/UploadFile/pic/${dynamicValue}.jpg`
        } else {
            return "/UploadFile/pic/13607.jpg"
        }
      }
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
      const menuRegex = /([^:]+)::([^:\n]+)/g;
      let menu = {};
      let match;
      while ((match = menuRegex.exec(this.jmcomic.exploreUrl)) !== null) {
        const menuName = match[1].trim();
        const menuUrl = match[2].trim();
        menu[menuName] = menuUrl;
      }
      const res = await this.request(
        `/api/scrape?url=${this.jmcomic.bookSourceUrl}${menu["最新"].replace("{{page}}",page)}`,
      );
      let doc = $(jQuery.parseHTML(res))
      let items = this.selector(doc,this.jmcomic.ruleExplore.bookList);
     
      const manga = [];
      items[0].toArray().forEach((element,index) => {
        let url =this.attr($(element),this.jmcomic.ruleExplore.bookUrl)
        let [replacedString, emptyString] = this.handleQuery(this.jmcomic.ruleExplore.coverUrl, {url:url});
        replacedString = replacedString.replace(emptyString,"")
        manga.push({
          title: this.attr($(element),this.jmcomic.ruleExplore.name),
          cover: replacedString + this.attr($(element),emptyString),
          update: this.attr($(element),this.jmcomic.ruleExplore.bookUrl),
          url: url,
        });
      });
      return manga;
    }
  
    async search(kw, page) {
      const res = await this.request(
        `/api/scrape?url=${this.jmcomic.searchUrl.replace("{{key}}",kw).replace("{{page}}",page)}`,
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
          cover: replacedString + "",
          update: this.attr($(element),this.jmcomic.ruleSearch.playNum),
          url: this.attr($(element),this.jmcomic.ruleSearch.bookUrl),
        });
      });
      return manga;
    }
  
    async detail(url) {
      const res = await this.request(
        `/api/scrape?url=${this.jmcomic.bookSourceUrl}${url}`,
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
      let [replacedString, emptyString] = this.handleQuery(this.jmcomic.ruleBookInfo.coverUrl, {});
      replacedString = replacedString.replace(emptyString,"")
      return {
        title: this.attr(item,this.jmcomic.ruleBookInfo.name),
        cover: replacedString + this.attr(item,emptyString),
        desc: this.attr(item,this.jmcomic.ruleBookInfo.intro),
        episodes,
      };
    }
  
    async watch(url) {
      let thi = this;
      const res = await this.request(
        `/api/scrape?url=${this.jmcomic.bookSourceUrl}${url}`,
      );
      let images0 = this.attr($(jQuery.parseHTML(res)),this.jmcomic.ruleContent.items).toArray()
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
  