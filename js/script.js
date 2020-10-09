const lista = document.getElementById("lista");
const nameIn = document.getElementById("name");
const emailIn = document.getElementById("email");
const sizeIn = document.getElementById("large");
const btnForm = document.getElementById("btnForm");

function stopDefAction(evt) {
    evt.preventDefault();
}
    
document.getElementById('btnForm').addEventListener(
    'click', stopDefAction, false
);

(() => {
    btnForm.addEventListener("click", function () {
        const cadastro = {
            name: nameIn.value,
            emailIn: emailIn.value,            
        };

        return firebase.database().ref().child('cadastro').push(cadastro).key;
    });
})()

firebase.database().ref('cadastro').on('value', snapshot => {
    lista.innerHTML="";
    snapshot.forEach(item => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name +' => ' + item.val().emailIn));
        lista.appendChild(li);
    });
})
