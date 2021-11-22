let walletList = document.querySelectorAll('.wallet__list')

for (let i = 0; i < walletList.length; i++) {
    walletList[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let j = 0; j < walletList.length; j++) {
            walletList[j].classList.remove('wallet__list__selected')
        }
        walletList[i].classList.add('wallet__list__selected')
    })
}