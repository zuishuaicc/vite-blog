---
outline: deep
---
## nodejs爬虫爬取网页(crawl)
### 1.使用cheerio
安装依赖
```bash
npm install cheerio
import axios from 'axios'

```
使用
```javascript
import * as cheerio from 'cheerio';
import axios from 'axios';

async function main() {
  const resp = await axios.get('https://baidu.com');
  const $ = cheerio.load(resp.data);
  $('#s-top-left .mnav').each( (i, elem)=> {
    console.log($(elem).text());
  })
}
main()
// 输出结果
// 新闻
// hao123
// 地图
// 贴吧
// 视频
// 图片
// 网盘
// 更多翻译学术文库百科知道健康营销推广直播音乐查看全部百度产品 >
```
### 2.使用puppeteer
安装依赖
```bash
npm install puppeteer

```
使用
```javascript
import puppeteer from 'puppeteer'
async function main () {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    defaultViewport:
    {
      width: 1920,
      height: 1080,
    }
  });
  const page = await browser.newPage();

  console.log(browser)
  await page.goto('https://www.baidu.com/');

  // Set screen size
  // await page.setViewport({
  //   width: 1920,
  //   height: 1080,
  // });

  // Type into search box
  await page.type('#kw.s_ipt', '吴彦祖');

  // Wait and click on first result
  const searchResultSelector = '#normalSugSearchUl';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();
}
main()
```