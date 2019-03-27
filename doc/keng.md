# 坑点集合
## 样式坑
- 设置page标签的height：100% 必须在根组件上设置

文件路径：/src/app.wpy
```
<style lang="less">
page {
  height: 100%;
}
</style>
```
## slot坑

- 页面上 自定义的父组件slot多个自定义的子组件，子组件需要用原生标签包裹

文件路径：/pages/home.wpy
```
<Stair class="stair_container">
    <view slot="lefts" class="lefts">
        <StairLeft :source.sync="dataLabel"/>
    </view>
    <view slot="rights" data="dataproduct" class="rigths">
        <StairRight/>
    </view>
</Stair>
```
文件路径：/components/home/stair.wpy
```
  <view class="stair">
    <slot name="lefts">默认标题1</slot>
    <slot name="rights">默认标题2</slot>
  </view>
```
## repeat坑
- repeat一个自定义子组件的坑，子组件只可静态展示数据。无法根据prop做任何计算。请不要repeat自定义组件

文件路径：/components/home/stairLeft.wpy

```
<repeat for="{{source}}" key="index" index="index" item="item">
    <view
    wx:if="{{(item.type=='text')}}"
    class="{{actIndex==index?'left_item actived_left_item':'left_item'}}"
    @tap="clickItem({{item.id}}, {{index}})"
    >{{item.name}}</view>
    <view wx:else class="left_item left_button">
    <text>分类设置</text>
    </view>
</repeat>
```
## 引用第三方组件库 vant
 - 将vant的dist拷贝到/components/vant
 - 只能在page组件用引用，在component中引用失效，注意引用路径，引用后则此page中子组件都可用

文件路径：/src/home/home.wpy
 ```
config = {
    usingComponents: {
      'van-icon': '/components/vant/icon/index'
    }
};
 ```

