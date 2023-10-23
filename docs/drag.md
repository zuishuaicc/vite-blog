# js实现拖拽
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
    <style type="text/css">
      #div1 {
        width: 350px;
        height: 70px;
        padding: 10px;
        border: 1px solid #aaaaaa;
      }
      #div2 {
        width: 350px;
        height: 70px;
        padding: 10px;
        border: 1px solid #aaaaaa;
      }
    </style>
    <script>
      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        console.log('drop1',ev)
        ev.target.appendChild(document.getElementById(data));
      }
      function drop2(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        console.log('drop2',data)
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <p>拖动 RUNOOB.COM 图片到矩形框中:</p>

    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <br />
    <div id="div2" ondrop="drop2(event)" ondragover="allowDrop(event)">
      <img
        decoding="async"
        loading="lazy"
        id="drag"
        src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        draggable="true"
        ondragstart="drag(event)"
        width="336"
        height="69"
      />
    </div>
  </body>
</html>
```