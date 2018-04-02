<template>
  <div class="hello">
       <div class="example">
           Lodash_Example:
       </div>
       <div class="content">
         <p>_.chunk(array, [size=1])</p>
         <p>将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。</p>
         <p>_.chunk(['a', 'b', 'c', 'd'], 2)</p>
         <p>part1:{{chunk[0]}}</p>
         <p>part2:{{chunk[1]}}</p>
       </div>
       <div class="content">
         <p>_.compact(arrary)</p>
         <p>创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。</p>
         <p>_.compact([0,1,false,2,"",undefined,3]):&nbsp;&nbsp;&nbsp;&nbsp;{{compact}}</p>
       </div>
       <div class="content">
         <p>_.difference(array, [values])</p>
         <p>创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。</p>
         <p>_.difference([3,2,1,4],[2,1])</p>
         <p>返回:&nbsp;&nbsp;&nbsp;{{difference}}</p>
       </div>
       <div class="content">
         <p>_.slice(array, [start=0], [end=array.length])</p>
         <p>裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。 </p>
          <p>Note: 这个方法用于代替 Array#slice 来确保数组正确返回。</p>
          <p>_.slice([0,1,2,3,4],[start=1],[end=3])</p>
          <p>{{slice}}</p>
       </div>
       <div class="more">
         <a href="http://www.css88.com/doc/lodash/#_chunkarray-size1" target="_blank" role="button">More</a>
       </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../public/style/_common.scss";
.hello {
  & .example {
    margin: 20px auto;
    width: 100%;
    font: 24px/1.5 "Microsoft YaHei";
    color: orangered;
    padding: 20px;
    box-sizing: border-box;
  }
  & .content {
    margin: 30px auto;
    font: 24px/1.5 "Microsoft YaHei";
    color: #00ccff;
    width: 100%;
    padding: 20px;  
     box-sizing: border-box;
  }
  & .more {
    width: 100px;
    height: 40px;
    margin: 20px auto;
    & a {
      display: inline-block;
      border-radius: 6px;
      width: inherit;
      height: inherit;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      background: #00ccff;
      color: #ffffff;
      font-family: "Microsoft YaHei";
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>


<script>
export default {
  name: "Lodash",
  data() {
    return {
      chunk: [],
      compact: [],
      difference: [],
      slice: _.slice([0, 1, 2, 3, 4], [1], [3])
    };
  },
  mounted() {
    this.compact = _.compact([0, 1, false, 2, "", undefined, 3]);
    this.chunk = _.chunk(["a", "b", "c", "d"], 2);
    this.difference = _.difference([3, 2, 1, 4], [2, 1]);
  }
};
</script>


