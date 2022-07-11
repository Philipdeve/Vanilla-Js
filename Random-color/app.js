const button = document.querySelector('button')
const h2 = document.querySelector('h2')

button.addEventListener('click', () => {
    const randomColor = generateRandomColor() 
    document.body.style.backgroundColor = randomColor

})

const generateRandomColor = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    // const r = 2
    // const g = 2
    // const b = 2

    if(r < 4 & g < 4 & b < 4){
        h2.style.color = "white"
        return `rgb(${r}, ${g}, ${b})`
    }else{
        h2.style.color = "black"
        return `rgb(${r}, ${g}, ${b})`
    }
    
}

