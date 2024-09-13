var btnPlus = document.querySelectorAll('#btnPlus')
var btnMoins = document.querySelectorAll('#btnMoins')



for(let i=0; i<btnPlus.length; i++){
    btnPlus[i].addEventListener('click', function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
    
    
}
   
for(let i=0; i<btnMoins.length; i++){
    
    btnMoins[i].addEventListener('click', function(){
        if(btnMoins[i].nextElementSibling.innerText>0){
        btnMoins[i].nextElementSibling.innerText--
            SommeTotal()
           }
    })
}

    const heartImage = document.getElementsByClassName('heartImage');
    const toggleColorButton = document.getElementsByClassName('Heart');
for(let i=0; i<toggleColorButton.length; i++){
    toggleColorButton[i].addEventListener('click', function() {
        if (heartImage[i].src.includes('https://cdn-icons-png.flaticon.com/512/105/105220.png')) {
            heartImage[i].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bjhvrKW4O8paiEJrdFsw3S-oEPEz6uL3vQ&s';
        } else {
            heartImage[i].src = 'https://cdn-icons-png.flaticon.com/512/105/105220.png';
        }
    });
}

    const removeBtn = document.querySelectorAll('.remove')
    const removeCard = document.querySelectorAll('.card')
    for(let i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', function(){
        if(i<removeCard.length){
            removeCard[i].remove()
            SommeTotal()
        }
    })
}

function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')


    var resultat = 0
    
    for(let i = 0; i< price.length;  i++){
        resultat = resultat + price[i].innerText * qte[i].innerText
    }

    total.innerText = resultat
}
