---
outline: deep
---

## 可拖拽canvas
```html
<!DOCTYPE html>
<html>
<head>
    <title>拖动点位改变形状</title>
    <style>
        #canvas {
            border: 1px solid black;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="500" height="500"></canvas>

    <script>
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var points = [
            { x: 100, y: 100, draggable: true },
            { x: 200, y: 100, draggable: true },
            { x: 200, y: 200, draggable: true },
            { x: 100, y: 200, draggable: true }
        ];
        var selectedPoint = null;
        var mouseOffset = { x: 0, y: 0 };

        function draw() {
            // 清空画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 绘制图片或其他内容
            // ...

            // 绘制点位
            ctx.fillStyle = 'red';
            points.forEach(function(point) {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
                ctx.fill();
            });

            // 绘制连线
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (var i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.closePath();
            ctx.stroke();
        }
        // 判断点击的哪个点
        function checkPointCollision(x, y) {
            for (var i = 0; i < points.length; i++) {
                var point = points[i];
                var distance = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2));
                if (distance <= 5) {
                    return point;
                }
            }
            return null;
        }
        // 鼠标down事件
        function onMouseDown(event) {
            var rect = canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            selectedPoint = checkPointCollision(mouseX, mouseY);
            if (selectedPoint) {
                mouseOffset.x = mouseX - selectedPoint.x;
                mouseOffset.y = mouseY - selectedPoint.y;
            }
        }
        // 鼠标移动事件
        function onMouseMove(event) {
            if (selectedPoint) {
                var rect = canvas.getBoundingClientRect();
                var mouseX = event.clientX - rect.left;
                var mouseY = event.clientY - rect.top;
                selectedPoint.x = mouseX - mouseOffset.x;
                selectedPoint.y = mouseY - mouseOffset.y;
                draw();
            }
        }
        // 鼠标up事件
        function onMouseUp(event) {
            selectedPoint = null;
            mouseOffset = { x: 0, y: 0 };
        }
        // canvas监听事件
        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);

        draw();
    </script>
</body>
</html>
```
## canvas添加水印
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <div id="info" onclick="alert(1)" >
            123456
        </div>
        <script>
          //  (function () {
             
          // )();
          function __canvasWM({
                container = document.body,
                width = '300px',
                height = '200px',
                textAlign = 'center',
                textBaseline = 'middle',
                font = "20px Microsoft Yahei",
                fillStyle = 'rgba(184, 184, 184, 0.6)',
                content = '水印',
                rotate = '45',
                zIndex = 10000
              } = {}) {
                const args = arguments[0];
                //生成canvas
                const canvas = document.createElement('canvas');
        
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                const ctx = canvas.getContext("2d");
        
                ctx.textAlign = textAlign;
                ctx.textBaseline = textBaseline;
                ctx.font = font;
                ctx.fillStyle = fillStyle;
                ctx.rotate(Math.PI / 180 * rotate);
                ctx.fillText(content, parseFloat(width) / 4, parseFloat(height) / 4);
        
                const base64Url = canvas.toDataURL();

                const __wm = document.querySelector('.__wm');
                //创建div
                const watermarkDiv = __wm || document.createElement("div");
                const styleStr = `
                  position:fixed;
                  top:0;
                  left:0;
                  bottom:0;
                  right:0;
                  width:100%;
                  height:100%;
                  z-index:${zIndex};
                  pointer-events:none;
                  background-repeat:repeat;
                  background-image:url('${base64Url}')`;
        
                watermarkDiv.setAttribute('style', styleStr);
                //添加__wm类名
                watermarkDiv.classList.add('__wm');
        
                if (!__wm) {
                  container.insertBefore(watermarkDiv, container.firstChild);
                }
                
                if (typeof module != 'undefined' && module.exports) {  //CMD
                    module.exports = __canvasWM;
                } else if (typeof define == 'function' && define.amd) { // AMD
                    define(function () {
                      return __canvasWM;
                    });
                } else {
                    window.__canvasWM = __canvasWM;
                }
              }
            
            // 调用
            __canvasWM({
              content: '水印123456789'
            });
        </script>
    </body>
</html>
```