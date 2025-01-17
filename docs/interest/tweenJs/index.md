# TweenJS

[tweenJs 仓库](https://github.com/tweenjs/tween.js)

## 基础使用示例

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Tween.js Example</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/tween.js/r16/Tween.min.js"></script>
  </head>
  <body>
    <div id="number">0</div>
    <script>
      var numberElement = document.getElementById("number");
      var number = { value: 0 };

      var tween = new TWEEN.Tween(number)
        .to({ value: 100 }, 1000) // to方法：传入结束点的最终值，以及动画花费多少时间两个参数
        .easing(TWEEN.Easing.Quadratic.InOut) // 封装好的 Easing 缓动函数
        .onUpdate(function () {
          numberElement.textContent = number.value.toFixed(0);
        })
        .start();

      function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();
      }
      animate();
    </script>
  </body>
</html>
```

## 回调函数

1. **onStart**

   - **说明**：动画开始时执行，只执行一次。如果使用 `repeat()` 重复补间，不会重复运行 `onStart`。
     ```javascript
     tween.onStart((obj) => {
       console.log("动画开始", obj);
     });
     ```

2. **onStop**

   - **说明**：通过 `stop()` 方法显式停止补间时执行，但在正常完成时并且在停止任何可能的链补间之前执行补间。
     ```javascript
     tween.onStop((obj) => {
       console.log("动画停止", obj);
     });
     ```

3. **onUpdate**

   - **说明**：每次补间更新时执行，返回实际更新后的值。
     ```javascript
     tween.onUpdate((obj) => {
       console.log("动画更新", obj);
     });
     ```

4. **onComplete**

   - **说明**：当补间正常完成（即不停止）时执行。
     ```javascript
     tween.onComplete((obj) => {
       console.log("动画完成", obj);
     });
     ```

5. **onRepeat**
   - **说明**：当补间动画完成，即将进行重复动画的时候执行。
     ```javascript
     tween.onRepeat((obj) => {
       console.log("动画重复", obj);
     });
     ```

## easing 缓动函数

线性（Linear）

- TWEEN.Easing.Linear.None：线性缓动，即匀速变化。

二次（Quadratic）

- TWEEN.Easing.Quadratic.In：二次方缓动，开始时加速。
- TWEEN.Easing.Quadratic.Out：二次方缓动，结束时减速。
- TWEEN.Easing.Quadratic.InOut：二次方缓动，开始时加速，结束时减速。

三次（Cubic）

- TWEEN.Easing.Cubic.In：三次方缓动，开始时加速。
- TWEEN.Easing.Cubic.Out：三次方缓动，结束时减速。
- TWEEN.Easing.Cubic.InOut：三次方缓动，开始时加速，结束时减速。

四次（Quartic）

- TWEEN.Easing.Quartic.In：四次方缓动，开始时加速。
- TWEEN.Easing.Quartic.Out：四次方缓动，结束时减速。
- TWEEN.Easing.Quartic.InOut：四次方缓动，开始时加速，结束时减速。

五次（Quintic）

- TWEEN.Easing.Quintic.In：五次方缓动，开始时加速。
- TWEEN.Easing.Quintic.Out：五次方缓动，结束时减速。
- TWEEN.Easing.Quintic.InOut：五次方缓动，开始时加速，结束时减速。

正弦（Sinusoidal）

- TWEEN.Easing.Sinusoidal.In：正弦缓动，开始时加速。
- TWEEN.Easing.Sinusoidal.Out：正弦缓动，结束时减速。
- TWEEN.Easing.Sinusoidal.InOut：正弦缓动，开始时加速，结束时减速。

指数（Exponential）

- TWEEN.Easing.Exponential.In：指数缓动，开始时加速。
- TWEEN.Easing.Exponential.Out：指数缓动，结束时减速。
- TWEEN.Easing.Exponential.InOut：指数缓动，开始时加速，结束时减速。

圆形（Circular）

- TWEEN.Easing.Circular.In：圆形缓动，开始时加速。
- TWEEN.Easing.Circular.Out：圆形缓动，结束时减速。
- TWEEN.Easing.Circular.InOut：圆形缓动，开始时加速，结束时减速。

弹性（Elastic）

- TWEEN.Easing.Elastic.In：弹性缓动，开始时像弹簧一样回弹。
- TWEEN.Easing.Elastic.Out：弹性缓动，结束时像弹簧一样回弹。
- TWEEN.Easing.Elastic.InOut：弹性缓动，开始和结束时都像弹簧一样回弹。

回弹（Back）

- TWEEN.Easing.Back.In：回弹缓动，开始时超过范围后回弹。
- TWEEN.Easing.Back.Out：回弹缓动，结束时超过范围后回弹。
- TWEEN.Easing.Back.InOut：回弹缓动，开始和结束时都超过范围后回弹。

反弹（Bounce）

- TWEEN.Easing.Bounce.In：反弹缓动，开始时像球一样反弹。
- TWEEN.Easing.Bounce.Out：反弹缓动，结束时像球一样反弹。
- TWEEN.Easing.Bounce.InOut：反弹缓动，开始和结束时都像球一样反弹。

## 参考文章

[tween.js 用户指南](https://tweenjs.github.io/tween.js/docs/user_guide_zh-CN.html)

[Threejs 进阶之十二：Threejs 与 Tween.js 结合创建动画](https://cloud.tencent.com/developer/article/2278381)
