<template>
  <div>
    <button @click="handleDownload">下载</button>
    <div id="demo">
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
       <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
       <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
       <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
       <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
      <p>
        test1
      </p>
      <p>
        test2
      </p>
      <p>
        test3
      </p>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  name: "Html2canvasDemo",
  data() {
    return {};
  },
  methods: {
    handleDownload() {
        let dom = document.querySelector('#demo')
        dom.style.height = dom.scrollHeight + 'px';
      html2canvas(dom,{
        height: dom.scrollHeight,
        // windowHeight: 1466
        // y: -500
        // windowHeight: 466
      }).then(function(canvas) {
        console.log(canvas)
        let dataUrl = canvas.toDataURL();
        console.log(dataUrl.length)
        console.log(dataUrl)
        var blob = canvas.msToBlob();
        navigator.msSaveBlob(blob,'test.png');
        // const aLink = document.createElement("a");
        // aLink.setAttribute("href", dataUrl);
        // document.body.appendChild(aLink);
        // aLink.download = "spliltTable.png";
        // aLink.click();
        // document.body.removeChild(aLink);

      });
    }
  }
};
</script>
<style lang="scss">
#demo {
  width: 100%;
  height: 200px;
  background-color: aquamarine;
  overflow: scroll;
}
</style>
