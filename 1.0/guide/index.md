## 综述

Slot是。

* 版本：1.0
* 作者：顺堂
* demo：[http://gallery.kissyui.com/slot/1.0/demo/index.html](http://gallery.kissyui.com/slot/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/slot/1.0/index', function (S, Slot) {
         var slot = new Slot('#id',itemHeight,[9,9,9],{speed:10});
    })
* **初始化参数说明
     * 参数1：老虎机的ID
     * 参数2：每个单元的高度
     * 参数3：每个单元的个数
     * 参数4：其他配置项，速度等

## API说明
* **游戏启动  slot.start();
* **游戏停止  slot.stop([],fun);
     * 需要传递参数：停止的位置(如[1,2,3])和callback 