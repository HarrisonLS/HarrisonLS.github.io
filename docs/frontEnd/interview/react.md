# React 相关

## React批处理

## React事件合成
## 函数组件对于类组件有什么性能提升？以及怎么做函数组件的性能优化？

## useEffect 里可以使用条件语句吗，并解释其原理。

- 准确来说是 hooks 使用条件判断都可能会影响其使用，每个组件的 hooks 都是以链表的形式存在 memoizedState 中。
- update 阶段，每次调用  useState，链表就会执行 next 向后移动一步。如果将  useState  写在条件判断中，假设条件判断不成立，没有执行里面的  useState  方法，会导致接下来所有的  useState  的取值出现偏移，从而导致异常发生。
- 所以严格来说不是不可用，而是需要覆盖条件判断的所有情况，才不会使链表的取值出现偏移；要使用的话，使用三元表达式是一种解决方式。

## useMemo 和 useCallback 的使用及原理。

## 相关文章