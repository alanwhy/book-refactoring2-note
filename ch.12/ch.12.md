# 第 12 章 处理继承关系

## 12.1 函数上移（Pull Up Method）

## 12.2 字段上移（Pull Up Field）

## 12.3 构造函数本体上移（Pull Up Constructor Body）

## 12.4 函数下移（Push Down Method）

## 12.5 字段下移（Push Down Field）

## 12.6 以子类取代类型码（Replace Type Code with Subclasses）

```js
function createEmployee(name, type) {
  return new Employee(name, type);
}


function createEmployee(name, type) {
  switch (type) {
    case "engineer": return new Engineer(name);
    case "salesman": return new Salesman(name);
    case "manager": return new Manager (name);
}
```

## 12.7 移除子类（Remove Subclass）

## 12.8 提炼超类（Extract Superclass）

## 12.9 折叠继承体系（Collapse Hierarchy）

## 12.10 以委托取代子类（Replace Subclass with Delegate）

## 12.11 以委托取代超类（Replace Superclass with Delegate）
