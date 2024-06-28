---
outline: deep
---

# TypeScript 常见类型错误 TypeScript 常见类型错误

## 一.类型 EventTarget 上不存在属性 - ts 中的 dom 类型

### 报错描述

在 TypeScript 中，使用事件回调函数的参数 event.target.xxx 时，发生报错：类型'EventTarget 上不存在属性'className'

```ts
//ts并不清楚鼠标点击的位置`event.target`是什么类型
const name = (event.target as HTMLElement).className
```

### 解决办法

1. 显示指定为 dom 类型
   显示的指定`event.target`的类型

```ts
//方法1
const name = (event.target as HTMLElement).className
//方法2
const name = (<HTMLElement>event.target).className
```

2. 更改 event 的类型

```ts
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
}

function handleClick(event: HTMLElementEvent<HTMLElement>) {
  const name = event.target.className
}
```

### 类型解析

- `Element` 是所有`Document`对象元素的基类，只包含一些基本属性和方法。
- `HTMLElement` 是 `HTML` 文档中某个元素的具体类型，该类型包含了所有 `HTML` 元素的共有属性和方法。

### DOM 类型的声明

```ts
interface HTMLElementTagNameMap {
  a: HTMLAnchorElement
  abbr: HTMLElement
  address: HTMLElement
  applet: HTMLAppletElement
  area: HTMLAreaElement
  article: HTMLElement
  aside: HTMLElement
  audio: HTMLAudioElement
  b: HTMLElement
  base: HTMLBaseElement
  basefont: HTMLBaseFontElement
  bdi: HTMLElement
  bdo: HTMLElement
  blockquote: HTMLQuoteElement
  body: HTMLBodyElement
  br: HTMLBRElement
  button: HTMLButtonElement
  canvas: HTMLCanvasElement
  caption: HTMLTableCaptionElement
  cite: HTMLElement
  code: HTMLElement
  col: HTMLTableColElement
  colgroup: HTMLTableColElement
  data: HTMLDataElement
  datalist: HTMLDataListElement
  dd: HTMLElement
  del: HTMLModElement
  details: HTMLDetailsElement
  dfn: HTMLElement
  dialog: HTMLDialogElement
  dir: HTMLDirectoryElement
  div: HTMLDivElement
  dl: HTMLDListElement
  dt: HTMLElement
  em: HTMLElement
  embed: HTMLEmbedElement
  fieldset: HTMLFieldSetElement
  figcaption: HTMLElement
  figure: HTMLElement
  font: HTMLFontElement
  footer: HTMLElement
  form: HTMLFormElement
  frame: HTMLFrameElement
  frameset: HTMLFrameSetElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  head: HTMLHeadElement
  header: HTMLElement
  hgroup: HTMLElement
  hr: HTMLHRElement
  html: HTMLHtmlElement
  i: HTMLElement
  iframe: HTMLIFrameElement
  img: HTMLImageElement
  input: HTMLInputElement
  ins: HTMLModElement
  kbd: HTMLElement
  label: HTMLLabelElement
  legend: HTMLLegendElement
  li: HTMLLIElement
  link: HTMLLinkElement
  main: HTMLElement
  map: HTMLMapElement
  mark: HTMLElement
  marquee: HTMLMarqueeElement
  menu: HTMLMenuElement
  meta: HTMLMetaElement
  meter: HTMLMeterElement
  nav: HTMLElement
  noscript: HTMLElement
  object: HTMLObjectElement
  ol: HTMLOListElement
  optgroup: HTMLOptGroupElement
  option: HTMLOptionElement
  output: HTMLOutputElement
  p: HTMLParagraphElement
  param: HTMLParamElement
  picture: HTMLPictureElement
  pre: HTMLPreElement
  progress: HTMLProgressElement
  q: HTMLQuoteElement
  rp: HTMLElement
  rt: HTMLElement
  ruby: HTMLElement
  s: HTMLElement
  samp: HTMLElement
  script: HTMLScriptElement
  section: HTMLElement
  select: HTMLSelectElement
  slot: HTMLSlotElement
  small: HTMLElement
  source: HTMLSourceElement
  span: HTMLSpanElement
  strong: HTMLElement
  style: HTMLStyleElement
  sub: HTMLElement
  summary: HTMLElement
  sup: HTMLElement
  table: HTMLTableElement
  tbody: HTMLTableSectionElement
  td: HTMLTableDataCellElement
  template: HTMLTemplateElement
  textarea: HTMLTextAreaElement
  tfoot: HTMLTableSectionElement
  th: HTMLTableHeaderCellElement
  thead: HTMLTableSectionElement
  time: HTMLTimeElement
  title: HTMLTitleElement
  tr: HTMLTableRowElement
  track: HTMLTrackElement
  u: HTMLElement
  ul: HTMLUListElement
  var: HTMLElement
  video: HTMLVideoElement
  wbr: HTMLElement
}
```

### 常见事件类型的声明

```ts
interface GlobalEventHandlersEventMap {
  abort: UIEvent
  animationcancel: AnimationEvent
  animationend: AnimationEvent
  animationiteration: AnimationEvent
  animationstart: AnimationEvent
  auxclick: MouseEvent
  beforeinput: InputEvent
  blur: FocusEvent
  cancel: Event
  canplay: Event
  canplaythrough: Event
  change: Event
  click: MouseEvent
  close: Event
  compositionend: CompositionEvent
  compositionstart: CompositionEvent
  compositionupdate: CompositionEvent
  contextmenu: MouseEvent
  copy: ClipboardEvent
  cuechange: Event
  cut: ClipboardEvent
  dblclick: MouseEvent
  drag: DragEvent
  dragend: DragEvent
  dragenter: DragEvent
  dragleave: DragEvent
  dragover: DragEvent
  dragstart: DragEvent
  drop: DragEvent
  durationchange: Event
  emptied: Event
  ended: Event
  error: ErrorEvent
  focus: FocusEvent
  focusin: FocusEvent
  focusout: FocusEvent
  formdata: FormDataEvent
  gotpointercapture: PointerEvent
  input: Event
  invalid: Event
  keydown: KeyboardEvent
  keypress: KeyboardEvent
  keyup: KeyboardEvent
  load: Event
  loadeddata: Event
  loadedmetadata: Event
  loadstart: Event
  lostpointercapture: PointerEvent
  mousedown: MouseEvent
  mouseenter: MouseEvent
  mouseleave: MouseEvent
  mousemove: MouseEvent
  mouseout: MouseEvent
  mouseover: MouseEvent
  mouseup: MouseEvent
  paste: ClipboardEvent
  pause: Event
  play: Event
  playing: Event
  pointercancel: PointerEvent
  pointerdown: PointerEvent
  pointerenter: PointerEvent
  pointerleave: PointerEvent
  pointermove: PointerEvent
  pointerout: PointerEvent
  pointerover: PointerEvent
  pointerup: PointerEvent
  progress: ProgressEvent
  ratechange: Event
  reset: Event
  resize: UIEvent
  scroll: Event
  scrollend: Event
  securitypolicyviolation: SecurityPolicyViolationEvent
  seeked: Event
  seeking: Event
  select: Event
  selectionchange: Event
  selectstart: Event
  slotchange: Event
  stalled: Event
  submit: SubmitEvent
  suspend: Event
  timeupdate: Event
  toggle: Event
  touchcancel: TouchEvent
  touchend: TouchEvent
  touchmove: TouchEvent
  touchstart: TouchEvent
  transitioncancel: TransitionEvent
  transitionend: TransitionEvent
  transitionrun: TransitionEvent
  transitionstart: TransitionEvent
  volumechange: Event
  waiting: Event
  webkitanimationend: Event
  webkitanimationiteration: Event
  webkitanimationstart: Event
  webkittransitionend: Event
  wheel: WheelEvent
}
```
