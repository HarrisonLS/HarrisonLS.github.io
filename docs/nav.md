---
nav: 指南
group: 基础
order: 5
mobile: false
---

# 写组件 demo

### 直接嵌入文档

配置 `inline` 为 `true` 则不会展示包裹器、直接在文档里嵌入 demo：

<pre lang="markdown">
```jsx
/**
 * inline: true
 */

import React from 'react';

export default () => &lt;p&gt;我会被直接嵌入&lt;/p&gt;;
```
</pre>

就像这样：

```jsx
/**
 * inline: true
 */

import React from "react";

export default () => <p>我会被直接嵌入</p>;
```
