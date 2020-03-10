import './app1.css'
import $ from 'jquery'
// 数据相关的都放到m
const m = {
    data: {
        // 初始化数据
        n: parseInt(localStorage.getItem('n'))
    }
}
// 视图相关的都放到v
const v = {
    el: null,
    html: `
<div>
        <div class="output">
          <span id="number">{{n}}</span>
        </div>
        <div class="actions">
          <button id="add1">+1</button>
          <button id="minus1">-1</button>
          <button id="mul2">*2</button>
          <button id="divide2">÷2</button>
        </div>
 </div>
`,
    init(container) {
        v.el = $(container)
    },
    // 重要代码
    render(n) {
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html.replace('{{n}}', n))
            .appendTo(v.el)

    }
    // 重要代码
}
// 其他都c
const c = {
    init(container) {
        // 第一次渲染html
        v.init(container)
        v.render(m.data.n) // view = render(data)
        c.autoBindEvents()
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'divide'
    },
    add() {
        m.data.n += 1
    },
    minus() {
        m.data.n -= 1
    },
    mul() {
        m.data.n *= 2
    },
    divide() {
        m.data.n /= 2
    },
    autoBindEvents(){
        for (let key in c.events){
            const spaceIndex = key.indexOf(' ')
const part1 = key.slice(0,spaceIndex)
            const part2 = key.slice(spaceIndex)
            console.log(part1, ',' , part2)
        }
    }
}

export default c








