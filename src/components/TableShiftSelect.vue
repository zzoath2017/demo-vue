<template>
  <div class="TableShiftSelect">
    <el-table
      id="myShitTable"
      :data="tableData"
      :cell-class-name="cellClassFn"
      :highlight-current-row="false"
      @cell-mouse-enter="() => {}"
      @cell-click="cellClick"
      @cell-dblclick="cellEdit"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in tableColumns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <!-- <template slot-scope="scope">
          <div>
            <el-input v-model="scope.row[item.prop]"></el-input>
          </div>
        </template> -->
      </el-table-column>
      <!-- <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column> -->
    </el-table>
    <ul v-show="visible" class="rightMenu" :style="rightMenuStyle">
      <li @click="setValue('test')">Set value</li>
      <li @click="setValue(null)">Clear value</li>
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
      tableColumns: [
        {
          prop: "product",
          label: "Product",
          width: 180
        },
        {
          prop: "measurement",
          label: "Measurement",
          width: 180
        },
        {
          prop: "soft_low",
          label: "Soft Low"
        },
        {
          prop: "soft_high",
          label: "Soft High"
        },
          {
            prop: "hard_low",
            label: "Hard Low"
          },
        {
          prop: "hard_high",
          label: "Hard High"
        },
      ],
      tableData: [
        {
          product: "A",
          measurement: "A1",
          soft_low: 1,
          soft_high: 1,
          hard_low: 1,
          hard_high: 1,
        },
        {
          product: "B",
          measurement: "B1",
          soft_low: 1,
          soft_high: 1,
          hard_low: 1,
          hard_high: 1,
        },
        {
          product: "C",
          measurement: "C1",
          soft_low: 1,
          soft_high: 1,
          hard_low: 1,
          hard_high: 1,
        },
        {
          product: "D",
          measurement: "D1",
          soft_low: 1,
          soft_high: 1,
          hard_low: 1,
          hard_high: 1,
        },
        {
          product: "E",
          measurement: "E1",
          soft_low: 1,
          soft_high: 1,
          hard_low: 1,
          hard_high: 1,
        },
        
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
        let {
          rowIndexMin,
          rowIndexMax,
          colIndexMin,
          colIndexMax
        } = this.getMinMaxIndex();

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
      let bodyHeight = document.body.clientHeight;
      let bodyWidth = document.body.clientWidth;
      let rightMenu = document.querySelector(".rightMenu");

      let rightMenuWidth = rightMenu.clientWidth;
      let rightMenuHeight = rightMenu.clientHeight;

      let x = e.clientX,
        y = e.clientY;
      if (bodyHeight - rightMenuHeight - 15 < y) {
        y = bodyHeight - rightMenuHeight - 15;
      }
      if (bodyWidth - rightMenuWidth - 15 < x) {
        x = bodyWidth - rightMenuWidth - 15;
      }
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
      if(colIndex<2){
        this.selectionCell.start = []
        return;
      }
      if (e.shiftKey) {
        this.selectionCell.end = [rowIndex, colIndex];
      } else {
        this.selectionCell.start = [rowIndex, colIndex];
        this.selectionCell.end = [];
      }
      // let classArr = cell.className.split("_");
      // colIndex = Number(classArr[classArr.length - 1]) - 1;
      console.log(rowIndex, colIndex);
      // console.log()
    },
    getMinMaxIndex() {
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
      return { rowIndexMin, rowIndexMax, colIndexMin, colIndexMax };
    },
    setValue(val) {
      // debugger
      if (this.selectionCell.start.length && this.selectionCell.end.length) {
        let {
          rowIndexMin,
          rowIndexMax,
          colIndexMin,
          colIndexMax
        } = this.getMinMaxIndex();
        let data = this.tableData;
        let dataColumns = this.tableColumns;
        let colArr = [];
        for (let i = colIndexMin; i <= colIndexMax; i++) {
          colArr.push(dataColumns[i].prop);
        }
        // debugger
        let newData = data.map((item, index) => {
          if (index >= rowIndexMin && index <= rowIndexMax) {
            colArr.forEach(el => {
              item[el] = val;
            });
            return item;
          } else {
            return item;
          }
        });
        this.tableData = newData;
        this.visible = false;
        this.selectionCell.end = [];
      }
    },
    cellEdit(row, column, cell, event) {
      console.log(row, column, cell, event);
      // if (column.prop != "product" && column.prop != "measurement") {
      // event.target.innerHTML = "";
      // let cellInput = document.createElement("input");
      // cellInput.value = "";
      // cellInput.setAttribute("type", "text");
      // cellInput.style.width = "80%";
      // cell.appendChild(cellInput);
      // cellInput.onblur = function() {
      //   cell.removeChild(cellInput);
      //   event.target.innerHTML = cellInput.value;
      // };
      // }
    }
  }
};
</script>
<style lang="scss">
.TableShiftSelect {
  .el-table--enable-row-hover .el-table__body tr:hover > td.my-active {
    background-color: rgba(74, 149, 235, 0.2);
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
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
