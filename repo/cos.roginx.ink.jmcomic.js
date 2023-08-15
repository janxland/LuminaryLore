// ==MiruExtension==
// @name         禁漫天堂
// @version      v0.0.2
// @author       ROGINX
// @lang         zh-cn
// @license      MIT
// @package      cos.roginx.ink.jmcomic
// @type         manga
// @icon         https://cdn-msp.jmcomic.me/media/logo/new_logo.png?v=2023080808
// @webSite      https://jmcomic1.me
// ==/MiruExtension==
export default class extends Extension {
  async load() {
    await this.registerSetting({
      title: "启用加载完成漫画自动下载",
      key: "autoDownload",
      type: "toggle",
      description: "启用后会自动下载禁漫",
      defaultValue: "false",
    });
  }
  jmcomic = {
    "bookSourceComment": "",
    "bookSourceGroup": "🎨漫画",
    "bookSourceName": "🎨禁漫天堂(正文有问题)",
    "bookSourceType": 0,
    "bookSourceUrl": "https://jmcomic1.me/",
    "customOrder": 37,
    "enabled": true,
    "enabledExplore": true,
    "exploreUrl": "总排行榜::\/albums?o=mv&page={{page}}\n月排行榜::\/albums?t=m&o=mv&page={{page}}\n周排行榜::\/albums?o=mv&t=w&page={{page}}\n日排行榜::\/albums?o=mv&t=t&page={{page}}\n最新A漫::\/albums?o=mr&page={{page}}\n同人::\/albums\/doujin&page={{page}}\n\n单行本::\/albums\/single?o=mr&page={{page}}\n短篇::\/albums\/short&page={{page}}\n其他::\/albums\/another&page={{page}}\n韩漫::\/albums\/hanman&page={{page}}\n美漫::\/albums\/meiman&page={{page}}\ncosplay::\/albums\/another\/sub\/cosplay&page={{page}}",
    "lastUpdateTime": 1651214216611,
    "respondTime": 180000,
    "ruleBookInfo": {
        "coverUrl": "class.thumb-overlay.2@tag.img@src",
        "init": "",
        "intro": "class.nav-tab-content@class.p-t-5 p-b-5@text",
        "kind": "class.tag-block.3@text",
        "name": "class.panel-heading.0@text"
    },
    "ruleContent": {
        "items":"class.row thumb-overlay-albums@img@data-original",
        "content":"class.row thumb-overlay-albums",
        "imageStyle": "Full",
        "decodeImage": true
    },
    "ruleExplore": {
        "bookList": "class.col-xs-6 col-sm-6 col-md-4 col-lg-3 list-col",
        "bookUrl": "tag.a.0@href",
        "coverUrl": "tag.img@src",
        "intro": "class.p-t-5 p-b-5.7@text",
        "kind": "class.title-truncate@tag.a@text",
        "name": "class.video-title title-truncate m-t-5@text"
    },
    "ruleSearch": {
        "bookList": "class.list-col",
        "playNum":"class.text-white@text",
        "bookUrl": "tag.a.0@href",
        "realUrl":"class.img@data-original",
        "coverUrl": "class.img@data-original",
        "kind": "class.title-truncate tags p-b-5@tag.a@text",
        "name": "tag.img@title",
        "id": "\\/album\\/(.*?)\\/"
    },
    "ruleToc": {
        "chapterList": "class.btn-toolbar.0@tag.a||class.col btn btn-primary dropdown-toggle reading",
        "chapterName": "text",
        "chapterUrl": "href"
    },
    "searchUrl": "https:\/jmcomic1.me\/search\/photos?search_query={{key}}&main_tag=0&page={{page}}",
    "contentUrl":"https:\/jmcomic1.me\/photo\/${id}",
    "weight": 0
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
        // console.log("获取属性选择器",selector?.trim() === "",sq[sq.length-1]);
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
    let url = encodeURIComponent(this.jmcomic.bookSourceUrl+menu["最新A漫"].replace("{{page}}",page))
    const res = await this.request(
      `/api/scrape?url=${url}`,
    );
    let doc = $(jQuery.parseHTML(res))
    let items = this.selector(doc,this.jmcomic.ruleExplore.bookList);
   
    const manga = [];
    items[0].toArray().forEach((element,index) => {
      manga.push({
        title: this.attr($(element),this.jmcomic.ruleExplore.name),
        cover: this.attr($(element),this.jmcomic.ruleExplore.coverUrl),
        update: this.attr($(element),this.jmcomic.ruleExplore.bookUrl),
        url: this.attr($(element),this.jmcomic.ruleExplore.bookUrl),
      });
    });
    return manga;
  }

  async search(kw, page) {
    let url = encodeURIComponent(this.jmcomic.searchUrl.replace("{{key}}",kw).replace("{{page}}",page))
    const res = await this.request(
      `/api/scrape?url=${url}`,
    );
    const manga = [];
    let doc = $(jQuery.parseHTML(res))
    let items = this.selector(doc,this.jmcomic.ruleSearch.bookList);
    items[0].toArray().forEach((element) => {
      manga.push({
        title: this.attr($(element),this.jmcomic.ruleSearch.name),
        cover: this.attr($(element),this.jmcomic.ruleSearch.coverUrl),
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
    episodes.push({
      title:'开始',
      urls:[{
        name:this.attr($(chapterItems[1]),this.jmcomic.ruleToc.chapterName),
        url:this.attr($(chapterItems[1]),this.jmcomic.ruleToc.chapterUrl),
      }]
    })
    chapterItems[0].toArray().forEach((element) => {
      urls.push({
        name: this.attr($(element),this.jmcomic.ruleToc.chapterName),
        url: this.attr($(element),this.jmcomic.ruleToc.chapterUrl),
      });
    });
    episodes.push({
      title:'章节',
      urls:urls.reverse()
    })
    // console.log(episodes);
    return {
      title: this.attr(item,this.jmcomic.ruleBookInfo.name),
      cover: this.attr(item,this.jmcomic.ruleBookInfo.coverUrl),
      desc: this.attr(item,this.jmcomic.ruleBookInfo.intro),
      episodes,
    };
  }

  async watch(url) {
    const res = await this.request(
      `/api/scrape?url=${this.jmcomic.bookSourceUrl}${url}`,
    );
    let images0 = this.attr($(jQuery.parseHTML(res)),this.jmcomic.ruleContent.items).toArray()
    let urls = images0.map(function(link) {
      if (link?.indexOf("http://") === 0 || link?.indexOf("https://") === 0) {
          return link;
      }
    }).filter(Boolean);
    // console.log(urls);
    return {
      urls,
      decodeImage:function(url){
        return this.decodeImage(url)
      },
    };
  }
  async download(images,filename = undefined) {
    const zip = new JSZip();

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const blob = await fetch(image).then(response => response.blob());
      const fileName = `${i}.webp`;
      zip.file(fileName, blob);
    }

  const content = await zip.generateAsync({ type: 'blob' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = filename || 'images.zip';
  link.click();
  }
  async decodeImage(photoUrl , asyncFun ,image = undefined) {
    let thi = this;
    const regexString = "\\/(\\d+)\\/(\\d+)\\.webp";
    const matches = photoUrl.match(regexString);
    let chapterId = matches?.[1];
    let photoId = matches?.[2];
    if(!chapterId) { return photoUrl; }
    let outputImage = new Image();
    if(chapterId <= 220971) {
        return asyncFun(photoUrl);
    }
    try {
      let md5c = CryptoJS.MD5(chapterId + photoId).toString();
      let c = parseInt(md5c.charAt(md5c.length - 1), 16);
      c >= 10 ? c = c-1 : c = c;
      chapterId >= 421926 ? c = c : c = c + 8
      let mod; chapterId >= 421926 ? mod = 8 : mod = 10;
      const rule = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      let piece; chapterId >= 268850? piece= rule[c % mod] : piece=10;
      if(image){
        // const processedBlob = await new Promise((resolve) => {
        //   const canvas = document.createElement('canvas');
        //   const ctx = canvas.getContext('2d');
        //   canvas.width = image.width;
        //   canvas.height = image.height;
        //   ctx.drawImage(image, 0, 0);
        //   canvas.toBlob((blob) => {
        //     resolve(blob);
        //   }, 'image/webp');
        // });
        // const blobUrl = URL.createObjectURL(processedBlob);
        // outputImage.src = blobUrl;
        return await thi.reverseImage(image, chapterId, piece)
      } else {
        const response = await fetch(photoUrl);
        const buffer = await response.arrayBuffer();
        const uint8Array = new Uint8Array(buffer);
        const blob = new Blob([uint8Array], { type: 'image/webp' });
        const blobUrl = URL.createObjectURL(blob);
        outputImage.src = blobUrl;
        outputImage.onload = async function() {
          asyncFun(await thi.reverseImage(outputImage, chapterId, piece));
          outputImage.onload = null;
        };
      }
    } catch (error) {
      console.error('解密图片失败:', error);
    }
  }
reverseImage(bufferedImage, chapterId, piece ) {
    if (piece === 1) {
      return bufferedImage;
    }
    const height = bufferedImage.height;
    const width = bufferedImage.width;
    const preImgHeight = Math.floor(height / piece);
    if (preImgHeight === 0) {
      return bufferedImage;
    }
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    for (let i = 0; i < piece; i++) {
      let subCanvas = document.createElement('canvas');
      let subContext = subCanvas.getContext('2d');
      subCanvas.width = width;
      subCanvas.height = preImgHeight;
      if (i === piece - 1) {
        subContext.drawImage(bufferedImage, 0, i * preImgHeight, width, height - i * preImgHeight, 0, 0, width, height - i * preImgHeight);
      } else {
        subContext.drawImage(bufferedImage, 0, i * preImgHeight, width, preImgHeight, 0, 0, width, preImgHeight);
      }
      context.drawImage(subCanvas, 0, height - (i + 1) * preImgHeight);
    }
      return canvas.toDataURL('image/webp');
  }
}
