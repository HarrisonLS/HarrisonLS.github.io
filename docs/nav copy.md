---
# description: 前端导航是由茂茂制作并收录了大量高质量前端相关站点，为前端开发工程师提供最简单便捷的网址导航服务
# layoutClass: m-nav-layout
# outline: [2, 3, 4]
---

<!-- <script setup>
// import React from 'react';
// import { NAV_DATA } from './nav/data'
// </script>
<style src="./nav/index.scss"></style> -->

# 前端导航

<!-- ```jsx
/**
 * inline: true
 */
import React from 'react';
import { NAV_DATA } from './nav/data'
const Index = ()=>{

    return (
        <React.Fragment>

{NAV_DATA.map(({ title, items }) => (
<NavLinks key={title} title={title} items={items} />
))}
</React.Fragment>
)
}

export deafult Index
``` -->
```jsx
/**
 * inline: true
 */

import React from 'react';

export default () => <p>我会被直接嵌入</p>;
```
