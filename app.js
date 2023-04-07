//change background color using JavaScript DOM

// steps

//Global  variables
let toastMsg = null

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

        // remove existing toast message
        if(toastMsg !== null){
            toastMsg.remove();
        }
        generateToastMsg(`${output1.value} copied`)

    })
    const copy2 = document.getElementById('copy2')
    copy2.addEventListener('click', function(){
        navigator.clipboard.writeText(output2.value)

        // remove existing toast message
        if(toastMsg !== null){
            toastMsg.remove();
        }
        generateToastMsg(`${output2.value} copied`)
    })


    // step 5: active toast message
    function generateToastMsg(msg){
        toastMsg = document.createElement('p')
        
        // step 6: create dynamic toast message (color code)
        toastMsg.innerText = msg
        document.body.appendChild(toastMsg)
        // toastMsg.classList.add("toast-message") // anther way to add class below
        toastMsg.className = 'toast-message toast-msg-in'
        console.log('color copied');

        // remove the toast message when user clicks inside the toast message
        toastMsg.addEventListener('click', function(){
            toastMsg.classList.remove('toast-msg-in');
            toastMsg.classList.add('toast-msg-out');


            // step 7: clear toast message
            // remove toast message permanently when user clicked  it.
            toastMsg.addEventListener("animationend", function(){
                toastMsg.remove();
                toastMsg = null;v // remove previous toast message
            })
        });

        setTimeout(() => {
            document.body.removeChild(toastMsg)
        }, 4000)
    }


}

