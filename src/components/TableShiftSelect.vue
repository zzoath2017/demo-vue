<template>
  <div class="TableShiftSelect">
    <el-table
      id="myShitTable"
      :data="tableData"
      :cell-class-name="cellClassFn"
      :highlight-current-row="false"
      @cell-mouse-enter="() => {}"
      @cell-click="cellClick"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <ul v-show="visible" class="rightMenu" :style="rightMenuStyle">
      <li>Set value</li>
      <li>Clear value</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TableShiftSelect",
  data() {
    return {
      visible: false,
      rightMenuStyle: {
        left: 0,
        top: 0
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      selectionCell: {
        start: [],
        end: []
      }
    };
  },
  computed: {
    cellClassFn() {
      if (this.selectionCell.start.length && this.selectionCell.end.length) {
        let rowIndexMax = Math.max(
          this.selectionCell.start[0],
          this.selectionCell.end[0]
        );
        let rowIndexMin = Math.min(
          this.selectionCell.start[0],
          this.selectionCell.end[0]
        );
        let colIndexMax = Math.max(
          this.selectionCell.start[1],
          this.selectionCell.end[1]
        );
        let colIndexMin = Math.min(
          this.selectionCell.start[1],
          this.selectionCell.end[1]
        );

        console.log(rowIndexMin, rowIndexMax);
        console.log(colIndexMin, colIndexMax);
        return ({ row, column, rowIndex, columnIndex }) => {
          if (
            rowIndex >= rowIndexMin &&
            rowIndex <= rowIndexMax &&
            columnIndex >= colIndexMin &&
            columnIndex <= colIndexMax
          ) {
            return "my-active";
          } else {
            return;
          }
        };
      } else {
        return ({ row, column, rowIndex, columnIndex }) => {
          console.log(row, column, rowIndex, columnIndex);
        };
      }
      // console.log(rowIndex, columnIndex);
    }
  },
  mounted() {
    let dom = document.querySelector("#myShitTable");
    dom.oncontextmenu = () => {
      return false;
    };
    dom.addEventListener("contextmenu", e => {
      e.preventDefault();
      if (e.cancelBubble && typeof e.cancelBubble === "function") {
        e.cancelBubble();
      } else {
        e.stopPropagation();
      }
      this.visible = true;
      let x = e.clientX,
        y = e.clientY;
      this.rightMenuStyle = {
        left: x + "px",
        top: y + "px"
      };
    });
  },
  methods: {
    cellClick(row, col, cell, e) {
      // cell.style.backgroundColor = "rgba(74,149,235,.2)";
      // console.log(e.shiftKey);
      // console.log(row,col,cell,e)
      let tr = cell.parentNode;
      let tbody = tr.parentNode;
      let trChildren = tr.childNodes;
      let arrLike = tbody.childNodes;
      // let arr = Array.from(arrLike);
      // console.log(arr instanceof Array)
      let rowIndex, colIndex;
      // get rowIndex
      for (let i = 0; i < arrLike.length; i++) {
        if (arrLike[i] == tr) {
          rowIndex = i;
          break;
        }
      }

      // get colIndex
      for (let i = 0; i < trChildren.length; i++) {
        if (trChildren[i] == cell) {
          colIndex = i;
          break;
        }
      }
      if (e.shiftKey) {
        this.selectionCell.end = [rowIndex, colIndex];
      } else {
        this.selectionCell.start = [rowIndex, colIndex];
      }
      // let classArr = cell.className.split("_");
      // colIndex = Number(classArr[classArr.length - 1]) - 1;
      console.log(rowIndex, colIndex);
      // console.log()
    }
  }
};
</script>
<style lang="scss">
.TableShiftSelect {
 .el-table--enable-row-hover .el-table__body tr:hover>td.my-active {
   background-color: rgba(74, 149, 235, 0.2);
 }
 .el-table--enable-row-hover .el-table__body tr:hover>td {
   background-color: #fff;
 }
  user-select: none;
  .rightMenu {
    list-style: none;
    background-color: #fff;
    position: fixed;
    width: 100px;
    border: none;
    padding: 0;
    text-align: center;
    z-index: 999;
    li {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #dcdfe6;
      &:hover {
        cursor: pointer;
        color: cadetblue;
      }
      &:last-child {
        border: none;
      }
    }
  }
}
.my-active {
  background-color: rgba(74, 149, 235, 0.2);
}
</style>
