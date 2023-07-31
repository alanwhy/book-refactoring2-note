## 3.1 神秘命名（Mysterious Name）

## 3.2 重复代码（Duplicated Code）

## 3.3 过长函数（Long Function）

## 3.4 过长参数列表（Long Parameter List）

## 3.5 全局数据（Global Data）

## 3.6 可变数据（Mutable Data）

## 3.7 发散式变化（Divergent Change）

如果某个模块经常因为不同的原因在不同的方向上发生变化，发散式变化就出现了。

## 3.8 霰弹式修改（Shotgun Surgery）

## 3.9 依恋情结（Feature Envy）

## 3.10 数据泥团（Data Clumps）

## 3.11 基本类型偏执（Primitive Obsession）

## 3.12 重复的 switch （Repeated Switches）

## 3.13 循环语句（Loops）

## 3.14 冗赘的元素（Lazy Element）

## 3.15 夸夸其谈通用性（Speculative Generality）

## 3.16 临时字段（Temporary Field）

## 3.17 过长的消息链（Message Chains）

## 3.18 中间人（Middle Man）

## 3.19 内幕交易（Insider Trading）

## 3.20 过大的类（Large Class）

## 3.21 异曲同工的类（Alternative Classes with Different Interfaces）

## 3.22 纯数据类（Data Class）

## 3.23 被拒绝的遗赠（Refused Bequest）

按传统说法，这就意味着继承体系设计错误。你需要为这个子类新建一个兄弟类，再运用函数下移（359）和字段下移（361）把所有用不到的函数下推给那个兄弟。这样一来，超类就只持有所有子类共享的东西。你常常会听到这样的建议：所有超类都应该是抽象（abstract）的。

## 3.24 注释（Comments）