# 第 11 章 重构 API

## 11.1 将查询函数和修改函数分离（Separate Query from Modifier）

```js
function getTotalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}

function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}
function sendBill() {
  emailGateway.send(formatBill(customer));
}
```

## 11.2 函数参数化（Parameterize Function）

## 11.3 移除标记参数（Remove Flag Argument）

## 11.4 保持对象完整（Preserve Whole Object）

## 11.5 以查询取代参数（Replace Parameter with Query）

## 11.6 以参数取代查询（Replace Query with Parameter）

## 11.7 移除设值函数（Remove Setting Method）

## 11.8 以工厂函数取代构造函数（Replace Constructor with Factory Function）

```js
leadEngineer = new Employee(document.leadEngineer, "E");

leadEngineer = createEngineer(document.leadEngineer);

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, "E");
}
```

## 11.9 以命令取代函数（Replace Function with Command）

## 11.10 以函数取代命令（Replace Command with Function）
