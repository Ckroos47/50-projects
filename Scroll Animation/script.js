const boxes = document.querySelectorAll('.box')

/* 文档视图或者一个元素在滚动时，会触发元素的scroll事件 */
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {

    /* 返回窗口的文档显示区的高度 */
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}