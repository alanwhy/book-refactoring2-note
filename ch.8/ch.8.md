# 第 8 章 搬移特性

## 8.1 搬移函数（Move Function）

## 8.2 搬移字段（Move Field）

- 确保源字段已经得到了良好封装。
- 测试。
- 在目标对象上创建一个字段（及对应的访问函数）。
- 执行静态检查。
- 确保源对象里能够正常引用目标对象。

## 8.3 搬移语句到函数（Move Statements into Function）

## 8.4 搬移语句到调用者（Move Statements to Callers）

## 8.5 以函数调用取代内联代码（Replace Inline Code with Function Call）

## 8.6 移动语句（Slide Statements）

## 8.7 拆分循环（Split Loop）

## 8.8 以管道取代循环（Replace Loop with Pipeline）

```js
const names = [];
for (const i of input) {
  if (i.job === "programmer") names.push(i.name);
}

const names = input.filter((i) => i.job === "programmer").map((i) => i.name);
```

```js
function acquireData(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}
```

```js
// 优化后
function acquireData(input) {
  const lines = input.split("\n");
  return lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((fields) => fields[1].trim() === "India")
    .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}
```

## 8.9 移除死代码（Remove Dead Code）
