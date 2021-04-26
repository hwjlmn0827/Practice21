<template>
    <div id="example-2">
        <!-- `greet` 是在下面定义的方法名 -->
        <button v-on:click="greet">Greet</button>
    </div>
</template>

<script>
import Vue from 'vue'
var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

example2.greet()

// 在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器（如何单独运行vue文件 ）
// 1. npm install -g @vue/cli-service-global
// 2.vue serve App.vue
// 3.vue build App.vue 将目标文件构建成生产环境的包

</script>