console.log('Goliath Online')

const body = document.querySelector('body')
const residentBtn = document.querySelector('button')
const baseURL = `https://swapi.dev/api`


function btnClicked() {
    console.log('Data received, TACCOM.')
    axios.get(baseURL +'/planets/2').then((req) => {
        for(i = 0; i < req.data.residents.length; i++){
            axios.get(req.data.residents[i]).then((res) => {
                let{name} = res.data
                // console.log(res)
                 console.log(name)
                 let newHead = document.createElement('h2')
                 newHead.textContent = name
                 body.appendChild(newHead)

            })
        }
            
    
    })
}

residentBtn.addEventListener('click', btnClicked)