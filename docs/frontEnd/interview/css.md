# CSS 面试相关

## 垂直居中方式

- flex 布局

```css
.container {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.boc {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

- 绝对定位 + margin

```css
.container {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  position: relative;
}
.box {
  width: 100px;
  height: 100px;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: blue;
}
```

- 绝对定位 + transform

```css
.container {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  position: relative;
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  background: blue;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* 或者是负margin值 根据box大小计算 */
  /* margin-left: -50px; */
  /* margin-top:-50px; */
}
```

- grid 布局

```css
.container {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: grid;
}
.box {
  width: 100px;
  height: 100px;
  background: blue;
  margin: auto;
}
```
