//change background color using JavaScript DOM

// steps

// 1. create onload handler
window.onload = function() {
    main()
}

//2. random HeXa color generator
function randomColor1(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

function randomColor2(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

// 3. create main function
function main() {
    const root = document.getElementsByClassName('root')[0]
    const btn = document.getElementsByClassName('btn')[0]
    const output1 = document.getElementById('output1')
    const output2 = document.getElementById('output2')
    
    btn.addEventListener('click', function(){
        const bgColor1 = randomColor1()
        const bgColor2 = randomColor2()
        root.style.backgroundImage = `linear-gradient(to right, ${bgColor1}, ${bgColor2})`
        btn.style.color = bgColor1 // Change Button Text color 
         output1.value = bgColor1.toUpperCase()
         output2.value = bgColor2.toUpperCase()

    })
    const copy1 = document.getElementById('copy1')
    copy1.addEventListener('click', function(){
        navigator.clipboard.writeText(output1.value)

    })
    const copy2 = document.getElementById('copy2')
    copy2.addEventListener('click', function(){
        navigator.clipboard.writeText(output2.value)

    })


}