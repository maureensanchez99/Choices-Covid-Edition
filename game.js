const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){

}

function selectOptions(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'You are about to leave your house and realize you forgot to grab your masks.',
        options: [
            {
                text: 'Grab your masks',
            },
            {
                text: 'Leave without them'
            }
        ]
    }
]

startGame()