# 第 6 章 第一组重构

## 6.1 提炼函数（Extract Function）

```js
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  // 内联函数
  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
```

在我看来，一个函数一旦超过 6 行，就开始散发臭味。

短函数常常能让编译器的优化功能运转更良好，因为短函数可以更容易地被缓存。

小函数得有个好名字才行，所以你必须在命名上花心思。起好名字需要练习，不过一旦你掌握了其中的技巧，就能写出很有自描述性的代码。

```js
function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
```

```js
function printOwing(invoice) {
 let outstanding = 0;

 printBanner();

 // calculate outstanding
 for (const o of invoice.orders) {
  outstanding += o.amount;
 }

 // record due date
 const today = Clock.today;
 invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

 printDetails();

 function printDetails() {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
```

## 6.2 内联函数（Inline Function）

```js
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
```

- 检查函数，确定它不具多态性。
- 找出这个函数的所有调用点。
- 将这个函数的所有调用点都替换为函数本体。
- 每次替换之后，执行测试。
- 删除该函数的定义。

## 6.3 提炼变量（Extract Variable）

```js
return (
  order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.quantity * order.itemPrice * 0.1, 100)
);

const basePrice = order.quantity * order.itemPrice;
const quantityDiscount =
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
const shipping = Math.min(basePrice * 0.1, 100);
return basePrice - quantityDiscount + shipping;
```

- 确认要提炼的表达式没有副作用。
- 声明一个不可修改的变量，把你想要提炼的表达式复制一份，以该表达式的结果值给这个变量赋值。
- 用这个新变量取代原来的表达式。
- 测试。

## 6.4 内联变量（Inline Variable）

```js
let basePrice = anOrder.basePrice;
return basePrice > 1000;

return anOrder.basePrice > 1000;
```

## 6.5 改变函数声明（Change Function Declaration）

```js
function circum(radius) {...}

function circumference(radius) {...}
```

一个好名字能让我一眼看出函数的用途，而不必查看其实现代码。

有一个改进函数名字的好办法：先写一句注释描述这个函数的用途，再把这句注释变成函数的名字。

```js
function circum(radius) {
  return circumference(radius);
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}
```

## 6.6 封装变量（Encapsulate Variable）

```js
let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
```

对于所有可变的数据，只要它的作用域超出单个函数，我就会将其封装起来，只允许通过函数访问。

JavaScript 有一种惯例：给取值函数和设值函数起同样的名字，根据有没有传入参数来区分。我把这种做法称为“重载取值/设值函数”（Overloaded Getter Setter）[mf-orgs]，并且我强烈反对这种做法。

## 6.7 变量改名（Rename Variable）

## 6.8 引入参数对象（Introduce Parameter Object）

```js
function amountInvoiced(startDate, endDate) {...}
function amountReceived(startDate, endDate) {...}
function amountOverdue(startDate, endDate) {...}
```

```js
function amountInvoiced(aDateRange) {...}
function amountReceived(aDateRange) {...}
function amountOverdue(aDateRange) {...}
```

## 6.9 函数组合成类（Combine Functions into Class）

## 6.10 函数组合成变换（Combine Functions into Transform）

## 6.11 拆分阶段（Split Phase）
