# 常用应用记录

## 业务应用

### 带心跳检测和重连机制的 websocket 链接

```jsx
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [message, setMessage] = useState("");
  const ws = useRef(null);
  const maxReconnectAttempts = 5; // 最大重连次数
  let reconnectAttempts = 0; // 当前重连次数
  let isReconnecting = false; // 是否是重连状态
  let heartbeatInterval = null; // 心跳检测定时器

  const connectWebSocket = () => {
    ws.current = new WebSocket("ws://example.com/socket");
    ws.current.onopen = () => {
      console.log("WebSocket connected");
      if (isReconnecting) {
        ws.current.send("Reconnecting..."); // 发送重连信息
      } else {
        ws.current.send("Connected"); // 发送建立连接信息
      }
      isReconnecting = false; // 重连成功后重置重连状态
      reconnectAttempts = 0; // 重连成功后重置重连次数

      // 设置心跳检测定时器，每隔一定时间发送心跳消息
      heartbeatInterval = setInterval(() => {
        ws.current.send("Heartbeat");
      }, 5000); // 每5秒发送一次心跳消息
    };
    ws.current.onmessage = (event) => {
      const data = event.data;
      if (data === "Heartbeat") {
        console.log("Received heartbeat from server");
        // 可以在这里更新心跳时间，以便在超时时进行重连
      } else {
        setMessage(data);
      }
    };
    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
      clearInterval(heartbeatInterval); // 清除心跳检测定时器
      if (reconnectAttempts < maxReconnectAttempts) {
        reconnectAttempts++;
        isReconnecting = true; // 进入重连状态
        setTimeout(connectWebSocket, 3000); // 3秒后重新连接
      } else {
        console.log("Exceeded maximum reconnection attempts");
      }
    };
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = (msg) => {
    if (ws.current) {
      ws.current.send(msg);
    }
  };

  return (
    <div>
      <p>Received message: {message}</p>
      <button onClick={() => sendMessage("Hello")}>Send Message</button>
    </div>
  );
}

export default App;
```

## 功能函数

### 数组菜单转换为 antd 树级菜单结构

```txt
[
    {
        "id": 1,
        "menuName": "系统总览",
        "parentId": 0,
        "createTime": "2023-10-10T16:32:05",
        "updateTime": "2023-10-10T16:32:05"
    },
    {
        "id": 2,
        "menuName": "案件管理",
        "parentId": 0,
        "createTime": "2023-10-10T16:32:26",
        "updateTime": "2023-10-10T16:32:26"
    },
    {
        "id": 3,
        "menuName": "系统管理",
        "parentId": 0,
        "createTime": "2023-10-10T16:32:48",
        "updateTime": "2023-10-10T16:32:48"
    },
]
```

```js
const convertToTree = (menuList) => {
  let map = {};
  let tree = [];

  menuList.forEach(function (item) {
    map[item.id] = {
      key: item.id,
      title: item.menuName,
      children: [],
    };
  });

  menuList.forEach(function (item) {
    if (item.parentId !== 0) {
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    } else {
      tree.push(map[item.id]);
    }
  });
  return tree;
};
```
