## 第一天 vue初步
### vue的特点
  + 渐进式:约束较少，主张较少。用多用少都可以，什么样的网站都能用
  + 轻量级的框架-压缩版92kb
  + 指令系统 v-xxx 搞定一切
  + 虚拟DOM 借鉴react的概念
  + `组件化`
  + `数据双向绑定`(MVVM模式)
### 使用vue的步骤
  1. 安装
  2. 初始化一个vue实例:let vm = new Vue();
  3. 进行具体的配置：el、data、methods...
  ``` js
  <!-- 1.引入vue源码 -->
  <script src="./vue.js"></script>
  <script>
    // 2.实例化，new一个 vue
    let vm = new Vue({
      // 3. 选项参数，加入自己定制的参数
      // 4. el:element 挂载元素,接受的参数格式的字符串，内容是css选择器
      el: '#app', // 这个div以及他的子元素，都会受到vue的控制
      // 5. vue应用中的数据.所有的变量都应该在这里注册
      data: {
        msg: 'hello'
      }
    });
  </script>
  ```
### 引入vue的方式
  > Vue 不支持IE8及以下版本，因为 Vue 使用了IE8无法模拟的ECMAScript5特性。
  + （简易用法）script标签：<script src="./vue.js"></script>
  + （专业用法）npm
### vue的文本插值(mustache)
  #### 符号：{{}}，用来显示变量，也可以包含简单的运算，还可以调用函数
### vue的文本指令(Directives)
  > 格式：v-xxx，通过计算自己表单式中的值，来操作DOM
  1. v-model: 用在表单元素上的指令，可以实现双向绑定,将变量的值显示在输入框中，还可以修改
  2. v-text：将文本显示在标签中：hello、你好
  3. v-html：将带有标签或者样式的文本显示在标签中：`<h1>hello</h1>`、`<mark>你好</mark>`
  4. v-bind指令：绑定标签属性，使属性值成为一个变量:`v-bind:type="type1"`,简写为：`:type="type1"`
  5. v-if指令：条件判断，满足条件时才会显示这个标签。可以单独使用,通过html的操作实现显示隐藏
  6. v-else指令：不能单独出现，要和v-if一起使用。用来表示条件不成立时的情况
  7. v-once指令：单次插值，变量只渲染一次值
  8. v-for指令：循环显示数组、对象、整数中的内容,内容不同，结构重复
      + 数组: v-for="（每一项，下标） in arr"
      + 对象：v-for="(val, key, index) in obj"
      + 整数：v-for="num in 5"
  9. v-on:事件监听，语法糖的写法@
### v-show和v-if的区别：
  > 共同点：条件满足时显示，不满足时不显示
  v-if的显示隐藏是通过html标签实现的，满足时加载标签，不满足时删除标签，改动比较大，会影响后续所有步骤，初始消耗较小；v-show的显示隐藏是通过css实现的，满足时display:block（line-block等），不满足就是display:none，改动较小，影响有限，初始消耗较大。所以频繁切换适合使用v-show，不频繁切换使用v-if，比如登录。

### 动态控制样式:把class与style改成变量
  > classs适合控制多条样式，style适用于单一样式的修改
  + v-bind绑定class
  ``` js
    <h1>绑定class，动态的控制class，适用于修改多条样式</h1>
    <!-- 第一种，变量替换 -->
    <p :class="className">hello</p>
    <!-- 第二种，字符串拼接 -->
    <p :class="className+'-big'">hello</p>
    <!-- 第三种，有判断条件，对象形式.表达式为真，就有class，为假就没有 -->
    <p :class="{red: 1>2, del: 1==1 }">hello</p>
    <!-- 第四种,三元表达式，数组形式,可以添加固定的、不参加判断的class，例如del -->
    <p :class="[1>2 ? 'red' : 'blue','del', {red: 1>2, del: 1==1 }]">hello</p>
  ```
  + v-bind绑定style
  ``` html
    <h1>绑定style，动态的控制style-更精细,适用于修改少数样式的情况</h1>
    <!-- 第一种方式，在style中写具体的样式 -->
    <p :style="{color: color1, 'font-size': size+'px'}">hello</p>
    <!-- 第二种方式,变量替换 -->
    <p :style="freeStyle">hello</p>
    <!-- 第三种方式,变量替换 -->
    <p :style="[style1, style2]">hello</p>
  ```
## 第二天 vue处理表单、事件绑定、生命周期
### 事件绑定：通过v-on添加事件监听
  > 通过v-on绑定一个事件监听。例如：`<input v-on:change="fn1">`,语法糖写法：`<input @blur="fn1">`
  + 没有参数，调用函数时可以省略括号
  + 有自定义的参数，就带上括号，并将参数写在括号里`<input v-on:change="fn1(666,'aaa',{name:'Jack'})">`
  + 如果要传递事件对象，就带上括号，并将$event写在括号里
  + 既要传自定义参数又要有事件对象，那就：`(val1, val2, $event)`
### v-model的实现原理
  + v-on监听输入框的input事件，当用户输入时，触发函数，更新数据,使得页面中的p标签页更新.
  + v-bind绑定输入框的value属性，更新输入框的值.value属性的值是一个变量，和p的内容一致。
  ``` html
    <p>自己实现一个v-model</p>
    <!-- v-bind:value="val2"绑定输入框的value属性，使他成为变量 -->
    <!-- v-on:input="chagneVal"监听事件，当输入框值发生变化时，触发对应的函数，更新数据 -->
    <input type="text" v-bind:value="val2" v-on:input="chagneVal">
    <p>{{val2}}</p>
    <script>
       data: {
          // val2是自己实现的v-model的那个输入框的值
          val2: ''
        },
        chagneVal(e) {
          console.log(e.target.value);
          // 获取输入框的值，并赋值给data中的数据
          this.val2 = e.target.value
        }
    </script>
  ```
### mvvm:model-view-viewModel
  + model:数据模型，处理数据和逻辑
  + view：视图，页面上显示的内容
  + viewModel：vue，在视图和模型之间建立联系
### vue处理表单
  > vue对表单元素的处理:1.获取输入框的值；2.设置输入框的值
  + 文本框：添加v-model指令，对应的变量就是输入框的值，值是str
  + 文本域：添加v-model指令，对应的变量就是输入框的值，值是str
  + 单选框：添加v-model指令，对应的变量就是被选中选项的value值，值是str
  ``` html
    <span>男</span>
    <input type="radio" name="sex" value="male">
    <span>女</span>
    <input type="radio" name="sex" value="female">
  ```
  + 多选框：添加v-model指令，对应的变量就是被选中的那些选项的value值，值是arr
    ``` html
      <span>唱</span>
      <input type="checkbox" name="hobby" value="sing" v-model="val4">
      <span>跳</span>
      <input type="checkbox" name="hobby" value="dance" v-model="val4">
      <span>rap</span>
      <input type="checkbox" name="hobby" value="rap" v-model="val4">
      <span>打篮球</span>
      <input type="checkbox" name="hobby" value="basketball" v-model="val4">
    ```
  + 下拉框：给`<select>`标签添加v-model指令，对应的变量就是被选中的`<option>`的值，值是str
    ``` html
      <label>收货地址：</label>
      <select v-model="val5">
        <option value="beijing">京</option>
        <option value="tianjin">津</option>
        <option value="shanghai">沪</option>
        <option value="chongqing">渝</option>
      </select>
    ```
  + 下拉框多选：给`<select>`标签添加`multiple`属性，改为多选，添加v-model指令，对应的变量就是被选中的那些`<option>`的值，值是arr
    ``` js
      <label>直辖市：</label>
      <select v-model="val7" multiple>
        <option value="beijing">京</option>
        <option value="tianjin">津</option>
        <option value="shanghai">沪</option>
        <option value="chongqing">渝</option>
      </select>
    ```
### 修饰符
  > 可以串联使用
  + 表单修饰符
    1. number: 只能输入数字。使用场景：购物车、电话号码等纯数字的输入框
    2. lazy：延迟响应。使用场景：防抖节流，v-model默认是input事件；加上.lazy之后，就改成了change事件
    3. trim：去掉首尾空格。使用场景：用户名、密码等
  + 事件修饰符
    1. stop：阻止冒泡
    2. prevent：禁止默认事件，例如右键显示菜单等
    3. capture：优先执行，谁有capture就优先执行谁
    5. self:只触发自己的事件，不包含子元素的事件
    6. once：只执行一次
  + 按键修饰符
    1. 回车键（13）：enter
    2. 删除键： delete
    3. 26个字母： .a/.b/.c/.d等等
    4. .ctrl/.alt等等
    5. `@keyup.ctrl.a` 表示ctrl和a同时按下时才会执行
  + 鼠标修饰符
    1. 左键（默认就是左键，不需要写）left
    2. 右键 right
    3. 中键 middle
    ``` html
      <body>
        <div id="app">
          <h1>修饰符</h1>
          <p>1.v-model的修饰符</p>
          <!-- 数字开头，且数据类型是数字 -->
          <label>只能输入数字number:</label>
          <input type="text" v-model.number="val1">
          <p>{{val1}}</p>
          <!-- 中间的空格会保留 -->
          <label>过滤首尾空格trim:</label>
          <input type="text" v-model.trim="val2">
          <p>{{val2}}</p>
          <label>不再实时监听lazy:</label>
          <!-- 将input事件改为chagne事件 -->
          <input type="text" v-model.lazy="val3">
          <p>{{val3}}</p>
          <hr>
          <p>2.事件修饰符</p>
          <p>阻止默认事件:prevent</p>
          <div class="div1" @contextmenu.prevent="show"></div>
          <hr>
          <p>阻止冒泡</p>
          <div class="div1" @click="log1">
            <div class="div2" @click="log2">
              <div class="div3" @click="log3"></div>
            </div>
          </div>
          <hr>
          <p>优先执行：capture，谁有capture就优先执行谁</p>
          <div class="div1" @click.capture="log1">
            <div class="div2" @click.capture="log2">
              <div class="div3" @click="log3"></div>
            </div>
          </div>
          <hr>
          <p>只执行自己的，不包含子元素：self</p>
          <div class="div1" @click.self="log1">
            <div class="div2" @click="log2">
              <div class="div3" @click="log3"></div>
            </div>
          </div>
          <hr>
          <p>只执行一次：once</p>
          <button @click.once="submit">提交</button>
          <hr>
          <p>3.键盘修饰符</p>
          <input type="text" @keyup.enter="add" v-model="msg">
          <button @click="add">添加</button>
          <input type="text" @keyup.up="up">
          <input type="text" @keyup.a="a">
          <input type="text" @keyup.a.ctrl="keycode">
          <hr>
          <p>4.鼠标修饰符</p>
          <p>.right 监听鼠标右键</p>
          <p>.middle 监听鼠标中键</p>
          <p>.left 监听鼠标左键，写他干啥？？？</p>
          <button @click.right="click">鼠标修饰符</button>
        </div>
        <script src="./vue.js"></script>
        <script>
          let vm = new Vue({
            el: '#app',
            data: {
              val1: 0,
              val2: '',
              val3: '',
              msg: ''
            },
            methods: {
              show() {
                console.log(666);
              },
              log1() {
                console.log('div1');
              },
              log2() {
                console.log('div2');
              },
              log3() {
                console.log('div3');
              },
              submit() {
                alert('submit')
              },
              add() {
                console.log(this.msg);
              },
              up() {
                console.log('up');
              },
              a() {
                console.log('a');
              },
              keycode(e) {
                console.log(e);
              },
              click() {
                console.log(666);
              }
            },
          })
        </script>
      </body>
    ```
### 监测变化：按照常规写法去做，数据不会修改，或者数据改了页面没改
  + 数组
    1. 通过下标直接修改数组的一整项
      ``` js
        // 错误的方式：this.arr1[3] = 3.5;
        this.arr2.splice(0, 1, {name: 'huawei', price: 8999});
        // 或者通过vue的$set/Vue.set(被修改的数组, index, newValue)
        this.$set(this.arr2, 0, {name: 'huawei', price: 8999})
        // 或者
        Vue.set(this.arr2, 0, {name: 'huawei', price: 8999})
      ```
    2. 通过长度修改数组
      ``` js
        // 错误的方式：this.arr3.length = 1;
        this.arr3.splice(2)
      ```
  + 对象
    1. 新增对象属性
      ``` js
        // 错误的方式
        // this.obj1.job = 'fornt end'
        // 正确的方式
        // this.$set(this.obj1, 'job', 'fornt end');
        Vue.set(this.obj1, 'job', 'fornt end');
      ```
    2. 删除对象属性
      ``` js
        // 错误的方式
        // delete this.obj1.name;
        // 正确的方式
        // this.$delete(this.obj1, 'name');
        Vue.delete(this.obj1, 'name');
      ```
### 生命周期钩子函数
## 第三天 vue的生命周期、侦听器、计算属性和过渡效果
### 生命周期钩子函数:默认是指vue实例的生命周期，类比于人的生老病死
  > 将vue实例划分成8个阶段，每个阶段都有一个函数会被自动调用
  #### 按照先后顺序，有以下八个：
  1. beforeCreate: 什么都没有
  2. created： `很常用!`el没有，有data，有methods等，所以可以在这里调用methods中的函数，执行内容，例如发请求等。
  3. beforeMount： el有了,出现vDom和重新渲染
  4. mounted： 视图的渲染已经完成了。如果请求依赖某些数据，可以放在这里执行
  5. beforeUpdate：修改实例中的数据，通常使用这个钩子函数。可能会反复执行vDom和重新渲染
  6. updated： 已经更新完成，可能会反复执行
  7. beforeDestroy：销毁前，销毁watch、子组件、事件监听（v-on）、手动销毁自己添加的事件监听（remove）、定时器
  8. destroyed：已经销毁完毕
### 计算属性：一个用来做计算的属性，多对一
  > 计算属性的特点：1.作为属性调用，不带括号，类似data中的一个属性；2.依赖缓存，性能较好；3.解耦，在模板中写简单的逻辑，复杂的过程放在js中。不要将js和模板混在一起。

  ``` js
    computed: {
      // 解耦
      reverseStr() {
        return this.message.split('').reverse().join('')
      },
      // 总数量
      totalNum() {
        let num = 0;
        this.cart.forEach(item => {
          num += item.num
        });
        return num
      },
      // 总金额
      totalPrice() {
        let num = 0;
        console.log('computed');
        this.cart.forEach(item => {
          num += item.num * item.price
        });
        return num
      }
    }
  ```
  ##### 计算属性默认使用get，当直接修改计算属性的值时，会触发set的执行`this.totalNum = 1000`
### 侦听器：监听某一个变量，一对多
  > 监听数据的变化，做出响应，牵一发而动全身.一个根本原因的变化，造成其它数据的变化
  + 函数形式:函数的名字就是要监听的数据。两个参数：newVal、oldVal
    ``` js
      watch: {
        // age是被监听的数据
        age(newVal, oldVal) {
          console.log('年龄变化了','newVal:',newVal, 'oldVal:',oldVal);
          if(newVal>18) {
            alert('恭喜！你可以做一些成年人做的事了');
          }
        }
      },
    ```
  + 对象形式
    1. deep: 默认为false，改成true时就是深监听
    2. immediate： 立即执行
    ``` js
      watch: {
        // age是被监听的数据
        age: {
          handler(newVal) {
            console.log('newVal:',newVal);
          }
        },
        person: {
          handler(newVal) {
            console.log('偷袭'+newVal.age+'岁的老同志');
            if(newVal.age > 18) {
              console.log('打工人，打工魂，打工人是人上人')
            }
          },
          // 深监听
          deep: true,
          // 立即执行
          immediate: true
        }
      },
    ```
  #### 计算属性和侦听的区别：
    + 1.一个数据的变化会影响多个数据时，用侦听。侦听变化的根源，监听最本质的原因。例如：会员积分 => 会员等级 => 会员折扣 => 消费金额。又比如：颜值提升=>TFBOYS做你男票=>上热搜=>微博炸了
    + 2.多个数据的变化会影响一个数据时，用计算属性。得出一个结果，受多个因素影响。例如：购物车的A商品数量、B商品数量、C商品数量
  #### 计算属性和方法的区别：
      + 1.方法每调用一次就执行一次，计算属性会使用缓存；
      + 2.方法没有缓存，计算属性有缓存；
      + 3.当源数据变化时，方法和计算属性都会更新。
### 过滤器（fliter,符号是管道符：|）
  > 作用：格式化文本
  + 在局部声明时，写做filters： {}
  + 在全局声明时，写做Vue.filter()
  + 格式如下：`{{数据 | 过滤器1 | 过滤器2 | 过滤器3(参数)}}`,也可以这样写：`v-bind:id="idName | format2"`
  ``` js
    filters: {
      过滤器1: function(val){

      },
      过滤器2: function(val){

      },
      过滤器3: function(val, 参数) {
        <!-- val是之前运算的结果 -->
        <!-- 参数是传过来的值 -->
      }
    }
  ```
  + 1.过滤器的使用流程：先注册后使用（|）
  + 2.全局注册、局部注册
  + 3.串联使用：可以串联使用，参数是上一次的结果
  + 4.传参：第一个参数是上一次的结果，第二个参数是过滤器传过来的值
### 过渡效果
  > vue通过控制class，来实现过渡的效果.使元素的变化更加自然、不生硬

  1.添加transition组件，将要添加过渡效果的代码放到组件中
  2.写具体的渐变的css代码
  3.css名是相对固定的：v-enter、v-enter-active、v-enter-to、v-leave、v-leave-active、v-leave-to
  4.如果页面中有多个元素需要添加过渡效果，就需要自定义class名，通过transition组件的name属性实现。
    以下六个默认的class
  + v-enter
  + v-enter-active
  + v-enter-to
  + v-leave
  + v-leave-active
  + v-leave-to

  如果没有声明transition中的name属性，就是用v-xx的class。如果有多个元素需要过渡效果，为了加以区分，就在transition组件中添加不同的name属性，对应的class就改为name-xxx
  示例代码：（需要引入animate.css）
  ``` html
  <body>
    <div id="app">
      <h1>过渡效果</h1>
      <button @click="isShow = !isShow">toggle</button>
      <p>v-xxx是默认的class名，vue会自动添加这些class</p>
      <p>通过transition组件的name属性，可以修改过渡效果的class名</p>
      <transition>
        <p v-show="isShow">我有过渡效果</p>
      </transition>
      <hr>
      <transition name="ma">
        <p v-show="isShow">我也有过渡效果</p>
      </transition>
      <hr>
      <transition
        leave-active-class="animate__bounceIn"
        enter-active-class="animate__bounceOut">
        <p v-show="isShow">我还有过渡效果</p>
      </transition>
    </div>
    <script src="./vue.js"></script>
    <script>
      let vm = new Vue({
        el: '#app',
        data: {
          isShow: true
        }
      })
    </script>
  </body>
  ```
## 番外篇(二)：git和码云的使用流程
 + 创建仓库（以码云为例）
    1. 点击新建仓库，填写仓库名称、路径、是否开源；语言选择js，.gitignore模板选择SublimeText，如果开源，许可证选择MIT
    2. 勾选“使用README文件初识化这个仓库”，其他选项勾不勾选都行；点击创建即可
    3. 页面会跳转到新仓库的页面，点击“克隆/下载”按钮，会看到一个链接，选择HTTPS的链接，复制
    4. 新建一个空文件夹，右键打开git Bash，执行 git clone xxxx（xxxx是刚刚复制的仓库地址）即可克隆
  + 第一天要做的事情：
    1. 上班第一天 git clone xxxxxxx（填项目地址)
    2. 写代码
    3. git status 查看状态
    4. git add . 提交所有文件
    5. git commit -m '注释，说明这次提交的代码有什么功能，修改了什么bug'
    6. git push origin xxxx(xxxx是分支名)

  + 第二天要做的事情：
    1. git pull 获取最新代码
    2. 写代码
    3. git status 查看状态
    4. git add . 提交所有文件
    5. git commit -m '注释'
    6. git push

  + 提交流程
    1. git status 查看当前状态，例如所在分支，修改文件等
    2. git diff / 或者在项目文件夹中右键， 找到 git GUI here 查看具体的文件和代码
    3. git add . 暂存文件，句点表示所有
    4. git commit -m '' 提交修改，引号中写注释，说明这次修改的内容
    5. git push 推送到远端服务器，这样同事们就可以看到了

  + 其他命令
    1. git log 查看历史记录
    2. git reset 版本回退（git add 之后用）
    3. git checkout . 舍弃修改，慎用！！！！会将你没有保存的代码全部删掉（git add 之前用）
    4. git checkout 分支名 切换到另一个分支，需要先提交你的代码。不要和上一个搞混了
    5. git checkout -b 分支名 新建分支并切换过去
    6. git merge xxxx分支名 合并xxx分支到当前分支
  ## 番外篇(二)：数组的遍历方法
  + filter:只返回符合条件的数据项
  ``` js
    let arr1 = [1,2,3,4,5,6,7,8,9];
    arr1.filter(item => {
      return item > 10
    })
    let arr2 = [
        {name: 'Jack', age: 18, sex: 1},
        {name: 'Tom', age: 20, sex: 1},
        {name: 'Rose', age: 8, sex: 0}
    ];
    arr2.filter(person => {
        return person.age > 15
    })
    let arr3 = [
      {name: 'option1', checked: true},
      {name: 'option2', checked: false},
      {name: 'option3', checked: false},
      {name: 'option4', checked: true}
    ]
  ```
  + some:只要有一项满足条件，就返回true
  ``` js  
  arr3.some(item=>{
      return item.checked
    })
  ```
  + every:要求每一项都满足条件，才返回true
  ```
    arr3.every(item=>{
      return item.checked
    })
  ```

## 第四天 组件初步
### 组件的介绍和使用
  > 组件的概念：为了更加方便地复用代码，将代码封装为组件(component)使用
### 组件的使用流程和注意事项
  + 1.注册：全局注册、局部注册
  + 2.当做标签使用
  + 3.组件模板中有且只有一个根元素，通常是div
  + 4.组件的data选项应该是一个有返回值的函数。如果用对象，就会造成数据的共享。使用有返回值的函数，使用组件时会调用函数，返回一个值。这些值就是互相独立的。
  + 5.组件名大小写，在js中用小驼峰的形式，在html中使用中划线的形式。
  + 6.组件名不要和w3c已有的标签名重复
### 其他注意事项
  + 组件的注册
      1. 全局注册:在vue示例之外注册，格式：Vue.component('name',{options})
      2. 局部注册:在vue示例之外注册，格式：
      ``` js
        el: '#app',
        data: {},
        // 组件的局部注册
        components: {
          'component1':{
            template: `<div>
            我是第一个vue组件<input v-model="name">
            </div>
            `,
            data() {
              return {
                name: 'Jack'
              }
            }
          }
        }
      ```
  + 组件的命名
      1. 避免和HTML已有的元素同名，不要叫div、span等
      2. 注意大小写的区分，在js中使用小驼峰的写法，html（就是template）中写成对应的中划线形式
      > Unknown custom element: `<vfooter>` - did you register the component correctly?
      > 翻译：未知的自定义元素： `<vfooter>`-你是否正确地注册了组件？报这个错是因为单词拼错或者大小写错误造成的无法找到对应的组件
  + 组件的data必须是函数
    >The "data" option should be a function that returns a per-instance value in component definitions. 翻译：'data'这个选项应该是一个带有返回值的函数
    
    组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。
  + 组件的template要包含有且只有一个根元素
    >Component template should contain exactly one root element. 翻译：组件的template应该包含一个确切的根元素（就是最大的元素，别的元素都是它的子元素）
  + 组件的嵌套
    1. 外层的比价大的是父组件，内层的比较小的是子组件
    2. 使用子组件的步骤：
        1. 引入子组件，import xxx from xxx
        2. 在父组件中注册子组件，components选项，注意es6的缩写形式
        3. 通过标签使用子组件
### vue的脚手架：vue cli
  > 目的是为了更加方便地创建项目。通过脚手架从头搭建vue项目（npm:node package manger，node的包管理器）
### vue的版本
  + vue的语法版本： 2.6。最新版：3.0
  + vue的脚手架版本： 3.0/4.0新版本（@vue/cli）   2.0老版本(vue-cli)
### 安装脚手架：`npm install -g @vue/cli`
### 兼容老版本命令：`npm install -g @vue/cli-init`
### 搭建项目：
  >单页面应用：SPA：single page application，项目只有一个HTML页面，就是`index.html`。页面跳转实际上是组件在切换
  1. 检查并安装node，安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org
  2. npm install webpack -g  -g表示全局安装
  3. npm install vue-cli -g   vue-cli是脚手架，是搭建vue工程的工具，新版本的名字叫@vue/cli
  4. vue init webpack demo(项目名称)
  5. eslint/两个test不需要安装，别的直接回车
  6. cd demo
  7. npm run dev
## 第五天 组件进阶
### 动态组件:通过is属性显示不同的组件
  1. 模拟路由的切换，在同一个页面显示不同的组件
  2. 特殊情况下，标签嵌套不合理。先写成正确的嵌套方式，在标签中使用is属性引入组件
  ``` html
    <div :is="comName"></div>
    <!-- 通过切换comName的值来实现组件的变化 -->
  ```
  或者
  ``` html
    <ul>
      <child></child>
      <!-- 子组件的内容是div -->
    </ul>
  <!-- 应该写成：  -->
    <ul>
      <li is="child"></li>
    </ul>
  ```
### 组件缓存:<keep-alive></keep-alive>
  > 通过`<keep-alive>`这个标签，将组件缓存起来，使得失活组件的数据状态得以保存，方便下次继续使用
   ``` js
    <keep-alive>
      <div :is="comName"></div>
    </keep-alive>
  ```
### 组件传值
  #### 父传子
  > 父组件中有这个数据，子组件没有这个数据，但是还想要，所以父组件传给他
  1. 传值，放在子组件的标签属性中`<child :name="name1" :age="age1"></child>`
  2. 通过props接受,然后当做data中的数据使用
      ``` html
          // 父组件中：
          <child :info="val"></child>
          // 子组件中：
          Vue({
            props: ['info'...]
          })
          // 接收后就可以当成data中的数据来使用
        ```
  3. props验证
      > 将props的值从数组换成对象，不符合条件时会在控制台报错：Invalid prop:......
    
      可以校验的类型有：
        + 数据的类型`{type: Array}`
        + 数据的必填`requiered`
        + 默认值`default`
        + 自定义的校验器`validator`
  4. 单向数据流：数据单向下行，只能由父组件传给子组件，子组件不能改父组件的数据，避免数据混乱
      > Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.
      > - - - 
      > 不要修改props因为当父组件再次渲染时，这个值会重新。取而代之，使用data属性或计算属性来保存这个值。这个特点叫做单向数据流，即数据只能单向下行流动，由父传子，反过来就不行。目的：减少修改数据的入口，防止数据出错时难以维护。
  5. 子组件修改数据的方式:声明一个新的变量，来存放数据
      1. data
      ``` js
      data() {
        return {
          myVal1: this.val1
        }
      }
      ```
      2. computed
      ``` js
      computed: {
        newVal1() {
          return this.val1
        }
      }
      ```
  #### 子传父
  > 子组件中有这个数据，父组件没有这个数据，但是还想要，所以子组件传给他
  1. 在子组件中通过$emit发射自定义是事件，第一个参数是事件名，第二个参数是要携带的数据`this.$emit('chuandi', arg)`,向上发射给父组件
  2. 在父组件中监听这个事件，接收数据
  ``` html
  <!-- 监听子组件的事件，获取数据 -->
  <day0504
    @chuandi="getData"
    @input="showData">
  </day0504>
  methods: {
    getData(val1) {
      console.log(val1);
    },
    showData(val) {
      this.info3 = val
    }
  }
  ```
  #### 组件传值：兄弟传值
  > 两个组件是兄弟关系，从A传给B。
  1. 在mian.js声明一个空实例（bus或者eventbus），添加到vue实例上
  2. 在A中通过空实例发射
  ``` js
    this.bus.$emit('bus', this.msg)
  ```
  3. 在B中通过空实例监听
  ``` js
    mounted(){
      this.bus.$on('bus',(val) => {
        console.log(val)
      })
    }
  ```
  ####  ref属性：引用，作用类似jq的class选择器、id选择器,即通过ref选择元素，方便后续操作
  > 先给要找的目标添加ref属性：`<div ref="refname">xxx</div>` 或者 `<component ref="name"></component>`
  1. 查找普通元素：`this.$refs.ul`
  2. 查找组件：`this.$refs.comli`
  3. 查找循环的元素：`this.$refs.comli2[0]`
  #### scoped:是指`<style>`标签的scoped属性
  + `Add "scoped" attribute to limit CSS to this component only`
  + 翻译：添加scoped属性，来限制css代码仅作用于当前组件
  #### 引入第三方资源
  1. npm install 下载对应的资源
  2. 引入到项目中,在main.js中`import $ from 'jquery'`
  3. 将jq添加到vue的原型链上，方便全局使用`Vue.prototype.$ = $;`
  4. 在项目中使用jq的功能`this.$('.div1').toggle(1000)`
  #### 插槽:在组件标签中显示内容,插槽就是一个容器
  1. 匿名插槽:收容无家可归的标签`<slot></slot>`
  2. 具名插槽:各回各家，各找各妈`<slot name="xxx"></slot>`
  3. 作用域插槽：可以传递数据
## 第六天  路由基础
### 前端路由和后端路由
### 前后端分离的开发模式：前后端之间通过接口文档交互，后端只提供数据。政府、银行的项目可能还会用前后端不分离的开发模式。
### SPA：单页面应用（single page application）
### vue路由：url和组件的对应关系
### 流程
  1. 安装：`npm install vue-router`
  2. 引入：在main.js引入，添加到vue实例中，这是vue的一个选项
### 路由模式：带有#的哈希模式和不带#的history模式
### 路由跳转方式：声明式和编程式
### 页面传参：少量的数据，通过url参数的形式在页面之间传递
