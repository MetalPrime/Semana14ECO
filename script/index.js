window.addEventListener('load', function () {



    //referencia a la base de datos

    // referencia a la colección usuarios
    const usersRef = firebase.database().ref('semana14');
    
    const authFirebase = firebase.auth();

    usersRef.doc(uid)
    .get()
    .then(function (snapshot) {

        const user = snapshot.data();

        const info__name = document.querySelector('.info__name').innerHTML = `${user.firstname} ${user.lastname}`;
        const info__email = document.querySelector('.info__email').innerHTML = `${user.email}`;
        const info__phone = document.querySelector('.info__phone').innerHTML = `${user.phone}`;


    });


    const btnReturn = document.querySelector('.btnReturn');

    btnReturn.addEventListener('click', function () {
        window.location.href = 'store.html';
    });
});