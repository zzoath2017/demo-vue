<template>
  <div class="multiSelect">
    <ul id="ul">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="item.checked ? 'active' : ''"
        @click="select(item, index)"
      >
        {{ `${index + 1}. ${item.label}` }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MultiSelect",
  data() {
    return {
      list: [
        {
          label: "a",
          checked: false
        },
        {
          label: "b",
          checked: false
        },
        {
          label: "c",
          checked: false
        },
        {
          label: "d",
          checked: false
        },
        {
          label: "e",
          checked: false
        },
        {
          label: "f",
          checked: false
        },
        {
          label: "g",
          checked: false
        }
      ],
      down: false,
      startInx: -1,
      endInx: -1,
      lastChecked: null,
      onOff: false,
      firstClick: false
    };
  },
  mounted() {
    // window.addEventListener("keydown", e => {
    //   if (e.keyCode === 16 && e.shiftKey) {
    //     this.down = true;
    //   }
    // });
    // window.addEventListener("keyup", e => {
    //   if (e.keyCode === 16 && e.shiftKey) {
    //     this.down = false;
    //   }
    // });
  },
  methods: {
    select(item, index) {
      console.log(item, index);
      // debugger;
      const e = window.event || arguments[0];
      if (!this.lastChecked && !this.firstClick) {
        item.checked = true;
        this.lastChecked = item;
        this.firstClick = true;
        if (this.firstClick) {
          return;
        }
      }
      this.onOff = this.lastChecked.checked ? true : false;
      if (e.shiftKey) {
        let start = this.list.indexOf(item);
        let end = this.list.indexOf(this.lastChecked);
        let arr = this.list
          .slice(Math.min(start, end), Math.max(start, end) + 1)
          .map(el => {
            el.checked = this.onOff;
            return el;
          });
        console.log(arr);
        console.log(start + "+" + end);
      } else {
        item.checked = !item.checked;
      }
      this.lastChecked = item;
    }
  }
};
</script>
<style lang="scss">
.multiSelect {
  ul {
    user-select: none;
    width: 300px;
    height: 200px;
    overflow: auto;
    border: 1px solid springgreen;
    list-style: none;
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      // border-radius: 2px;
      // background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: rgba(14,234,204,0.56)
    }
    li {
      height: 40px;
      line-height: 40px;
      &.active {
        background-color: aquamarine;
        color: hotpink;
      }
    }
  }
}
</style>
