# 第 10 章 简化条件逻辑

## 10.1 分解条件表达式（Decompose Conditional）

```js
if (!aDate.isBefore(plan.summerStart) &amp;&amp; !aDate.isAfter(plan.summerEnd))
 charge = quantity * plan.summerRate;
else
 charge = quantity * plan.regularRate + plan.regularServiceCharge;


if (summer())
 charge = summerCharge();
else
 charge = regularCharge();
```

## 10.2 合并条件表达式（Consolidate Conditional Expression）

```js
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

if (isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}
```

## 10.3 以卫语句取代嵌套条件表达式（Replace Nested Conditional with Guard Clauses）

```js
function getPayAmount() {
  let result;
  if (isDead) result = deadAmount();
  else {
    if (isSeparated) result = separatedAmount();
    else {
      if (isRetired) result = retiredAmount();
      else result = normalPayAmount();
    }
  }
  return result;
}

function getPayAmount() {
  if (isDead) return deadAmount();
  if (isSeparated) return separatedAmount();
  if (isRetired) return retiredAmount();
  return normalPayAmount();
}
```

## 10.4 以多态取代条件表达式（Replace Conditional with Polymorphism）

```js
switch (bird.type) {
 case 'EuropeanSwallow':
  return "average";
 case 'AfricanSwallow':
  return (bird.numberOfCoconuts > 2) ? "tired" : "average";
 case 'NorwegianBlueParrot':
  return (bird.voltage > 100) ? "scorched" : "beautiful";
 default:
  return "unknown";


class EuropeanSwallow {
 get plumage() {
  return "average";
 }
class AfricanSwallow {
 get plumage() {
   return (this.numberOfCoconuts > 2) ? "tired" : "average";
 }
class NorwegianBlueParrot {
 get plumage() {
   return (this.voltage > 100) ? "scorched" : "beautiful";
}
```

## 10.5 引入特例（Introduce Special Case）

???

## 10.6 引入断言（Introduce Assertion）
