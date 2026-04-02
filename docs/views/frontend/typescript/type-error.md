---
outline: deep
---

# TypeScript 常见类型错误 TypeScript 常见类型错误

## 类型 EventTarget 上不存在属性 - ts 中的 dom 类型

### 报错描述

在 TypeScript 中，使用事件回调函数的参数 event.target.xxx 时，发生报错：类型'EventTarget 上不存在属性'className'

```ts
//ts并不清楚鼠标点击的位置`event.target`是什么类型
const name = (event.target as HTMLElement).className;
```

### 解决办法

1. 显示指定为 dom 类型
   显示的指定`event.target`的类型

```ts
//方法1
const name = (event.target as HTMLElement).className;
//方法2
const name = (<HTMLElement>event.target).className;
```

2. 更改 event 的类型

```ts
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

function handleClick(event: HTMLElementEvent<HTMLElement>) {
  const name = event.target.className;
}
```

### 类型解析

- `Element` 是所有`Document`对象元素的基类，只包含一些基本属性和方法。
- `HTMLElement` 是 `HTML` 文档中某个元素的具体类型，该类型包含了所有 `HTML` 元素的共有属性和方法。

### DOM 类型的声明

```ts
interface HTMLElementTagNameMap {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  applet: HTMLAppletElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  aside: HTMLElement;
  audio: HTMLAudioElement;
  b: HTMLElement;
  base: HTMLBaseElement;
  basefont: HTMLBaseFontElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  blockquote: HTMLQuoteElement;
  body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  canvas: HTMLCanvasElement;
  caption: HTMLTableCaptionElement;
  cite: HTMLElement;
  code: HTMLElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  data: HTMLDataElement;
  datalist: HTMLDataListElement;
  dd: HTMLElement;
  del: HTMLModElement;
  details: HTMLDetailsElement;
  dfn: HTMLElement;
  dialog: HTMLDialogElement;
  dir: HTMLDirectoryElement;
  div: HTMLDivElement;
  dl: HTMLDListElement;
  dt: HTMLElement;
  em: HTMLElement;
  embed: HTMLEmbedElement;
  fieldset: HTMLFieldSetElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  font: HTMLFontElement;
  footer: HTMLElement;
  form: HTMLFormElement;
  frame: HTMLFrameElement;
  frameset: HTMLFrameSetElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  head: HTMLHeadElement;
  header: HTMLElement;
  hgroup: HTMLElement;
  hr: HTMLHRElement;
  html: HTMLHtmlElement;
  i: HTMLElement;
  iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  marquee: HTMLMarqueeElement;
  menu: HTMLMenuElement;
  meta: HTMLMetaElement;
  meter: HTMLMeterElement;
  nav: HTMLElement;
  noscript: HTMLElement;
  object: HTMLObjectElement;
  ol: HTMLOListElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLOutputElement;
  p: HTMLParagraphElement;
  param: HTMLParamElement;
  picture: HTMLPictureElement;
  pre: HTMLPreElement;
  progress: HTMLProgressElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  s: HTMLElement;
  samp: HTMLElement;
  script: HTMLScriptElement;
  section: HTMLElement;
  select: HTMLSelectElement;
  slot: HTMLSlotElement;
  small: HTMLElement;
  source: HTMLSourceElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  style: HTMLStyleElement;
  sub: HTMLElement;
  summary: HTMLElement;
  sup: HTMLElement;
  table: HTMLTableElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableDataCellElement;
  template: HTMLTemplateElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableHeaderCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLTimeElement;
  title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
}
```

### 常见事件类型的声明

```ts
interface GlobalEventHandlersEventMap {
  abort: UIEvent;
  animationcancel: AnimationEvent;
  animationend: AnimationEvent;
  animationiteration: AnimationEvent;
  animationstart: AnimationEvent;
  auxclick: MouseEvent;
  beforeinput: InputEvent;
  blur: FocusEvent;
  cancel: Event;
  canplay: Event;
  canplaythrough: Event;
  change: Event;
  click: MouseEvent;
  close: Event;
  compositionend: CompositionEvent;
  compositionstart: CompositionEvent;
  compositionupdate: CompositionEvent;
  contextmenu: MouseEvent;
  copy: ClipboardEvent;
  cuechange: Event;
  cut: ClipboardEvent;
  dblclick: MouseEvent;
  drag: DragEvent;
  dragend: DragEvent;
  dragenter: DragEvent;
  dragleave: DragEvent;
  dragover: DragEvent;
  dragstart: DragEvent;
  drop: DragEvent;
  durationchange: Event;
  emptied: Event;
  ended: Event;
  error: ErrorEvent;
  focus: FocusEvent;
  focusin: FocusEvent;
  focusout: FocusEvent;
  formdata: FormDataEvent;
  gotpointercapture: PointerEvent;
  input: Event;
  invalid: Event;
  keydown: KeyboardEvent;
  keypress: KeyboardEvent;
  keyup: KeyboardEvent;
  load: Event;
  loadeddata: Event;
  loadedmetadata: Event;
  loadstart: Event;
  lostpointercapture: PointerEvent;
  mousedown: MouseEvent;
  mouseenter: MouseEvent;
  mouseleave: MouseEvent;
  mousemove: MouseEvent;
  mouseout: MouseEvent;
  mouseover: MouseEvent;
  mouseup: MouseEvent;
  paste: ClipboardEvent;
  pause: Event;
  play: Event;
  playing: Event;
  pointercancel: PointerEvent;
  pointerdown: PointerEvent;
  pointerenter: PointerEvent;
  pointerleave: PointerEvent;
  pointermove: PointerEvent;
  pointerout: PointerEvent;
  pointerover: PointerEvent;
  pointerup: PointerEvent;
  progress: ProgressEvent;
  ratechange: Event;
  reset: Event;
  resize: UIEvent;
  scroll: Event;
  scrollend: Event;
  securitypolicyviolation: SecurityPolicyViolationEvent;
  seeked: Event;
  seeking: Event;
  select: Event;
  selectionchange: Event;
  selectstart: Event;
  slotchange: Event;
  stalled: Event;
  submit: SubmitEvent;
  suspend: Event;
  timeupdate: Event;
  toggle: Event;
  touchcancel: TouchEvent;
  touchend: TouchEvent;
  touchmove: TouchEvent;
  touchstart: TouchEvent;
  transitioncancel: TransitionEvent;
  transitionend: TransitionEvent;
  transitionrun: TransitionEvent;
  transitionstart: TransitionEvent;
  volumechange: Event;
  waiting: Event;
  webkitanimationend: Event;
  webkitanimationiteration: Event;
  webkitanimationstart: Event;
  webkittransitionend: Event;
  wheel: WheelEvent;
}
```

## 限制对象中两个属性的值为相同的类型

1. 直接对指定类型对象限制

```ts
// 基础表类型（替换为你实际的 TableRecord）
interface TableRecord {
  key: string;
  name: string;
  age: number;
  address: string;
}

// 步骤2：核心 - 用 infer 实现自动推导 + 类型绑定
// 定义工具类型：提取对象的 key 类型并绑定 dataIndex
type ColumnWithInfer<K extends keyof TableRecord> = {
  title: string;
  key: K;
  dataIndex: K;
};

// 步骤3：最终 Column 类型 - 让 TS 自动推断 K 的类型
export type Column<T> = {
  [K in keyof T]: ColumnWithInfer<K>;
}[keyof T];

// ---------------------- 测试用例 ----------------------
// ✅ 正确用法：无需传泛型，TS 自动推导 key/dataIndex 类型
const nameColumn: Column = {
  title: "姓名",
  key: "name", // TS 自动推断 K = 'name'
  dataIndex: "name", // 必须和 key 一致，否则报错
};

const ageColumn: Column = {
  title: "年龄",
  key: "age", // TS 自动推断 K = 'age'
  dataIndex: "age",
};

// ❌ 错误用法：key/dataIndex 类型不一致，TS 直接报错
// const errorColumn: Column = {
//   title: '错误示例',
//   key: 'name',
//   dataIndex: 'age' // 类型不匹配，触发报错：Type '"age"' is not assignable to type '"name"'
// };

// ❌ 错误用法：key 不是合法类型，TS 报错
// const invalidKeyColumn: Column = {
//   title: '错误示例',
//   key: 'invalidKey', // 类型 '"invalidKey"' 不是 ValidColumnKey 的子类型
//   dataIndex: 'invalidKey'
// };
```

2. 使用泛型对通用类型对象限制

```ts
// 通用 Column 类型：支持任意表类型，自动推导 key/dataIndex
export type Column<RecordType> = {
  [K in keyof RecordType]: {
    title: string;
    key: K;
    dataIndex: K;
  };
}[keyof RecordType];

// 测试：自定义表类型
interface UserRecord {
  key: number;
  id: number;
  username: string;
  email: string;
}

// ✅ 自动推导 UserRecord 的合法键
const userColumn: Column<UserRecord> = {
  title: "用户名",
  key: "username",
  dataIndex: "username", // 自动匹配 key 类型
};

console.log(userColumn);

// ❌ 类型不一致，报错
// const wrongUserColumn: Column<UserRecord> = {
//   title: '邮箱',
//   key: 'email',
//   dataIndex: 'id' // Type '"id"' is not assignable to type '"email"'
// };
```
