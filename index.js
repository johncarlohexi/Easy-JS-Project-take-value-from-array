const getCustomName = document.getElementById('getname');
const generateBtn = document.querySelector('.generate')

// Names
const phNames = ['Oliver', 'mhike', 'malvar', 'dp']
const jpNames = ['reigne', 'zy', 'murata', 'jay-ar']
const phNames2 = ['pop', 'corn', 'yeah']
const jpNames2 = ['lol', 'lmao', 'party']
//

const story = document.querySelector('.story-container')
const storyP = document.querySelector('.story')

let jpStory =  ':insertJPNAME: ay pumuntang gifu eki, at siya ay nag arral. :insertJPNAME2: is gwapo at ito ay @'
let phStory =  ':insertPHNAME: ay pumuntang mce, at siya ay nag study. :insertPHNAME2: is pangit at si @'


// Radio Buttons 
generateBtn.addEventListener('click', function(){
    const japanR = document.querySelector('#japan')
    const phR = document.querySelector('#ph')

    const getPhName = getName(phNames)
    const getjpName = getName(jpNames)
    const getPhName2 = getName(phNames2)
    const getJpName2 = getName(jpNames2)

    let getCNValue = getCustomName.value;
    let newJPStory = jpStory.replace('@', getCNValue)
    let newPHStory = phStory.replace('@', getCNValue)

        if (japanR.checked == true) {
            newJPStory = newJPStory.replaceAll(':insertJPNAME2:', getJpName2)
            newJPStory = newJPStory.replaceAll(':insertJPNAME:', getjpName)
            storyP.textContent = newJPStory;
        } else if (phR.checked == true) {
            newPHStory = newPHStory.replace(':insertPHNAME:', getPhName)
            newPHStory = newPHStory.replace(':insertPHNAME2:', getPhName2)
            storyP.textContent = newPHStory
        }
})

function getName(array) {
    const random = [Math.floor(Math.random() * array.length)]
    return array[random]
}





