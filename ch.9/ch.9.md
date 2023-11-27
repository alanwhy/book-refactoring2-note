# 第 9 章 重新组织数据

## 9.1 拆分变量（Split Variable）

## 9.2 字段改名（Rename Field）

## 9.3 以查询取代派生变量（Replace Derived Variable with Query）

```js
get discountedTotal() {return this._discountedTotal;}
set discount(aNumber) {
 const old = this._discount;
 this._discount = aNumber;
 this._discountedTotal += old - aNumber;
}


get discountedTotal() {return this._baseTotal - this._discount;}
set discount(aNumber) {this._discount = aNumber;}
```

## 9.4 将引用对象改为值对象（Change Reference to Value）

## 9.5 将值对象改为引用对象（Change Value to Reference）
