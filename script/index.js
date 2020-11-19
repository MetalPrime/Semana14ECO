window.addEventListener('load', function () {



    //referencia a la base de datos

    // referencia a la colección usuarios
    const auth = firebase.auth();
    /*const usersRef = firebase.database().ref('semana14/users'+uid);

    usersRef
    .get()
    .then(function (snapshot) {

        const user = snapshot.data();


    });**/


    const logOut = document.querySelector('.info__LogOut');

    logOut.addEventListener('click', function () {
        window.location.href = 'login.html';
    });

    const contacts__add = document.querySelector('.contacts__add');
    const modal = document.querySelector('.modal');

    contacts__add.addEventListener('click', function(){
        modal.classList.remove('hidden');
    });

    const modal__close = modal.querySelector('.modal__close');
    modal__close.addEventListener('click',function (params) {
        modal.classList.add('hidden');
    });
    
});