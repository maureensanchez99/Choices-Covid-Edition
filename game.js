const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option)) 
            optionButtonsElement.appendChild(button)
        }   
    })        
}  
 
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    
}

const textNodes = [
    {
        id: 1,
        text: 'You are about to leave your house and realize you forgot to grab your masks. Do you go back in and grab them or just leave without them?',
        options: [
            {
                text: 'Grab your masks',
                setState: {haveMasks: true},
                nextText: 2
            },
            {
                text: 'Leave without them',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame()