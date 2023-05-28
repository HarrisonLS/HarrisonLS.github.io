# 浏览器相关

## async 和 defer 的解析过程
浏览器解析到带 async 属性的 script 标签时，不会中断 html 解析，而是并行下载脚本；当脚本下载完成后，中断解析并执行脚本； 
浏览器解析到带 defer 属性的 script 标签时，不会中断 html 解析，而是并行下载脚本；当浏览器解析完HTML时、DOMContentLoaded 事件即将被触发时，此时再执行下载完成的脚本；