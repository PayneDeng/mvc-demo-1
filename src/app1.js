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
    render(container) {
        if (v.el === null) {
            v.el = $(v.html.replace('{{n}}', m.data.n))
                .appendTo($(container))
        }else{
            const newEL = $(v.html.replace('{{n}}', m.data.n))
            v.el.replaceWith(newEL)
            v.el = newEL
        }
    }
}
// 其他都c

const c = {

    init(container) {
        // 第一次渲染html
        v.render(container)
        c.ui = {
// 寻找重要的元素
            button1: $('#add1'),
            button2: $('#minus1'),
            button3: $('#mul2'),
            button4: $('#divide2'),
            number: $('#number'),
        }
        c.bindEvent()
    },
    bindEvent() {
// 绑定鼠标事件
        c.ui.button1.on('click', () => {
            m.data.n += 1
            v.render()
        })
        c.ui.button2.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n -= 1
            localStorage.setItem('n', n)
            c.ui.number.text(n)
        })
        c.ui.button3.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n *= 2
            localStorage.setItem('n', n)
            c.ui.number.text(n)
        })
        c.ui.button4.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n /= 2
            localStorage.setItem('n', n)
            c.ui.number.text(n)
        })
    }
}

export default c








