<template>
  <div class="demo">
    <!-- <ul id="items">
      <li v-for="item in items"
          :key="item.key">{{item.name}}</li>
    </ul> -->
    <el-transfer
      v-model="value"
      :filterable="true"
      :target-order="'push'"
      :render-content="renderFun"
      :data="data"
      @left-check-change="handleLeftChange"
    />
  </div>
</template>

<script>
import Sortable from "sortablejs";
const generateData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    if(i == 4){
      data.push({
      key: i,
      label: `备选项 备选项备选项备选项备选项备选项备选项备选项备选项${i}`
      // disabled: i % 4 === 0
    });
    }else
    data.push({
      key: i,
      label: `备选项 ${i}`
      // disabled: i % 4 === 0
    });
  }
  return data;
};
export default {
  name: "DragSort",
  data() {
    return {
      data: generateData(),
      value: [4,1],
      renderFun(h,option){
        console.log(option)
        //  return <span >{ option.key } - { option.label }</span>;
        return h('el-tooltip',{
          attrs: {
            content: option.label,
            placement: "right"
          }
        },[h('span',{
          attrs: {
            title: option.label
          }
        },`${option.key}--${option.label}`)])
        // return h('span',{
        //   attrs: {
        //     title: option.label
        //   }
        // },`${option.key}--${option.label}`)
      }
    };
  },
  mounted() {
    let el = document
      .querySelector(".el-transfer")
      .querySelectorAll(".el-checkbox-group")[1];
    new Sortable(el, {
      forceFallback: false,
      onUpdate: event => {
        // debugger;
        let box = this.$el
          .querySelector(".el-transfer")
          .querySelectorAll(".el-checkbox-group")[1];
        let nums = this.$el
          .querySelector(".el-transfer")
          .querySelectorAll(".el-checkbox-group")[1].childNodes.length;
        console.log(nums, event.newIndex);
        if (event.newIndex >= nums) {
          return;
        }
        // console.log(event);
        let newIndex = event.newIndex;
        let oldIndex = event.oldIndex;
        let $label = box.children[newIndex];
        let $oldLabel = box.children[oldIndex];
        box.removeChild($label);
        if (newIndex < oldIndex) {
          box.insertBefore($label, $oldLabel);
        } else {
          box.insertBefore($label, $oldLabel.nextSibling);
        }
        let item = this.value.splice(oldIndex, 1);
        this.value.splice(newIndex, 0, item[0]);
      }
    });
  },
  methods: {
    handleLeftChange(arr){
      console.log(arr)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .el-transfer__buttons {
  /deep/ button {
    display: block;
    margin: 0;
    &:first-child {
      margin-bottom: 12px;
    }
  }
}

.demo {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  width: 300px;
  height: 300px;
  background-color: #42b983;
  overflow: scroll;
}
li {
  display: block;
  margin: 20px 10px;
  border: 1px solid #444;
}
a {
  color: #42b983;
}
</style>
