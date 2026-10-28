# 李鹏伟 · 个人主页

仿照 [liyu95.com](https://liyu95.com/) 的风格搭建的学术个人主页，托管在 GitHub Pages 上。

- **网站地址**：<https://pengweili.github.io/>
- **技术栈**：纯静态 HTML + CSS + 原生 JavaScript，**不需要安装任何工具、不需要编译**
- **更新方式**：所有内容都在 `data/` 目录下的三个文件里，改文字即可

---

## 一、文件结构

```
pengweili.github.io/
├── index.html            首页（个人简介 + 动态 + 研究方向 + 教育 + 代表作 + 荣誉 + 学生工作）
├── publications.html     论文页
├── awards.html           荣誉奖励页
├── activities.html       经历页（学生工作 / 助教 / 学术活动 / 志愿）
├── cv.html               简历页（可按 Ctrl+P 直接导出 PDF）
├── 404.html              找不到页面时的提示页
│
├── data/                 ★ 所有文字内容都在这里 ★
│   ├── site.js           个人信息、简介、研究方向、教育背景、最新动态
│   ├── publications.js   论文列表
│   └── awards.js         科研项目、荣誉奖励、学生工作、助教、学术活动、志愿服务
│
├── assets/
│   ├── css/style.css     配色与排版（改主色只需要改两行）
│   ├── js/app.js         渲染引擎（负责把 data 里的内容画成网页，一般不用动）
│   └── img/              头像与网站图标
│
└── README.md             本文件
```

**记住一句话：改内容只碰 `data/` 里的三个文件。**

---

## 二、本地预览

直接双击 `index.html` 就能在浏览器里看效果（无需启动服务器）。

> 浏览器打开的是本地文件时，地址栏里不会出现 `?lang=en`，中英切换仍然可以正常用，
> 因为语言偏好存在浏览器的 localStorage 里。

---

## 三、常用的更新操作

### 1. 发了一篇新论文

打开 `data/publications.js`，找到最合适的那个分组（比如 `key: "first-author"`），
在 `items: [` 后面**加一段**：

```js
{
  date: "2027.03",                          // 显示在左侧
  featured: true,                            // 想在首页"代表性论文"里显示就加这一行，否则删掉
  title: "论文的英文标题，照抄即可",
  authors: "Li P, Wang X, Ni J",
  venue: "Nature Communications",            // 期刊名，会自动变成斜体
  cite: "2027, 18: 1234",                    // 卷期页码
  role: { zh: "独立第一作者", en: "Sole first author" },
  tags: ["SCI 一区"],                        // 标签，不要就写 []
  doi: "10.1038/s41467-027-xxxxx-x",         // 有 DOI 填 DOI；没有就写 ""（会自动变成 Scholar 搜索链接）
  summary: {
    zh: "一句话说明这篇论文做了什么。",
    en: "One-sentence description of the paper."
  }
},
```

> 别忘了每段结尾的**英文逗号** `,`。

### 2. 拿了一个新奖

打开 `data/awards.js`，在 `awardGroups` 里对应的等级（国家级 / 省级 / 校级）下加一行：

```js
{ date: { zh: "2027.03", en: "Mar 2027" },
  text: { zh: "奖项名称", en: "Award name" },
  org: { zh: "颁奖单位", en: "Awarding body" },
  home: true },          // 想在首页"重点荣誉"里显示就写 home: true
```

### 3. 更新"最新动态"

打开 `data/site.js`，在 `news: [` 后面加一段（不用管顺序，页面会自动按时间倒序排列）：

```js
{
  date: { zh: "2027.05", en: "May 2027" },
  text: { zh: "动态内容，可以用 **粗体** 和 *斜体*。",
          en: "Optional English version." }
},
```

### 4. 换头像

用一张**正方形**照片覆盖 `assets/img/avatar.jpg`（建议 500×500 像素以上）。
如果有清晰度更高的版本，也顺便覆盖 `assets/img/avatar@2x.jpg`（高清屏会用这张）。

### 5. 换主题色

打开 `assets/css/style.css`，最上面找到：

```css
--accent: #0f6b5c;        /* 主色 */
--accent-deep: #0a5348;   /* 深一点的同色系 */
```

改成你喜欢的颜色即可（比如深蓝 `#1d4ed8` / `#1e3a8a`）。深色模式会自动跟随系统设置。

### 6. 中英双语怎么写

凡是写成 `{ zh: "中文", en: "English" }` 的地方，右上角 `EN / 中文` 按钮可以一键切换。
如果中英文完全一样（比如 `"2026.08"`），直接写成普通字符串就行。

> **注意**：中文里如果需要引号，请用 `「」` 或 `『』`。
> 直接用英文双引号 `"` 会打断 JavaScript 字符串，导致整页变空白。

---

## 四、发布到 GitHub Pages（只需做一次）

### 第 1 步：在 GitHub 上建仓库

登录 GitHub → 右上角 `+` → `New repository`：

- **Repository name**：`pengweili.github.io`（必须完全一致，网址才会是 `https://pengweili.github.io/`）
- 可见性：**Public**
- **不要**勾选 "Add a README file"（我们本地已经有了）

### 第 2 步：把本地文件推上去

在这个文件夹里打开终端（右键 → "在终端中打开"），依次执行：

```bash
git remote add origin https://github.com/pengweili/pengweili.github.io.git
git branch -M main
git push -u origin main
```

如果提示需要登录，用 GitHub 用户名 + **Personal Access Token**（在 GitHub → Settings →
Developer settings → Personal access tokens 里生成，勾选 `repo` 权限）作为密码。

### 第 3 步：开启 Pages

仓库页面 → `Settings` → 左侧 `Pages`：

- **Source**：`Deploy from a branch`
- **Branch**：`main`，目录选 `/ (root)`
- 点 `Save`

等 1—2 分钟，访问 <https://pengweili.github.io/> 就能看到了。

---

## 五、以后怎么更新

```bash
# 1. 改 data/ 里的内容（或换头像）
# 2. 本地双击 index.html 确认效果没问题
# 3. 提交并推送
git add -A
git commit -m "更新：新增 XX 论文"
git push
```

推送后约 1 分钟，线上自动更新。

也可以直接在 GitHub 网页上编辑：打开仓库里的 `data/publications.js` → 右上角铅笔图标 →
改完点 `Commit changes`，同样会自动生效。

---

## 六、待补充的内容

以下几处是申请表里没有、需要你自己填的，填了会更完整：

| 位置 | 需要补充的内容 |
| --- | --- |
| `data/publications.js` → `co-author` 分组 | 2 篇合作论文的**标题**（*Nature Communications* 三作 2026.07、*Nature Water* 四作 2026.01），目前显示"题目待补充" |
| `data/publications.js` → `co-author` 分组 | 你说"共 7 篇"，目前列了 5 篇已发表，还差 2 篇合作论文 |
| `data/publications.js` 各条目的 `doi` | 填上 DOI 后，点击标题会直接打开期刊页面（现在是 Google Scholar 搜索） |
| `data/awards.js` | 粘细菌那篇预印本的 DOI 在申请表里和 ESKAPE 那篇重复了，建议核对后补上 |
| `data/site.js` → `person.links` | 如果有 Google Scholar / ORCID / ResearchGate，可以再加一条链接 |
| `data/awards.js` → `awardGroups` | 若 2025—2026 学年国家奖学金已正式获评，记得加一行 |

---

## 七、常见问题

**页面一片空白？**
多半是某个 `.js` 文件里少了一个逗号、或多了一个英文引号。按 `F12` 打开开发者工具 →
`Console` 面板，红色报错会直接告诉你出错的行号。

**改了内容线上没变化？**
1. 确认已经 `git push`；
2. 等 1—2 分钟（GitHub Pages 有构建延迟）；
3. 强制刷新页面：`Ctrl + F5`。

**想加一个新页面？**
复制 `awards.html` 改个文件名，把 `data-page="awards"` 改成新名字，
再在 `assets/js/app.js` 的 `RENDERERS` 和 `navItems()` 里各加一行即可。

---

最后更新：2026 年 10 月
