const auth = firebase.auth();

const register = document.querySelector('.register');

    register.addEventListener('submit', function(event){
        const password = register.password.value;
        const confirmedPassword = register.confirmedPassword.value;
        if(password === confirmedPassword){

        event.preventDefault();
    
        const name = register.name.value;
        const number = register.number.value;
        const email = register.email.value;
    
        auth.createUserWithEmailAndPassword(email, password)
        .then(function (credentials) {
            
            const uid = credentials.user.uid;

            const usersRef = firebase.database().ref('semana14/users/' + uid);
    
            usersRef.set({
                name : name,
                number : number,
                email : email,
                password : password,
                id : uid,
            })
            .then(function () {
                window.location.href = 'index.html';
            })
        
        })
    }else {
        alert("Las contraseñas no coinciden");
    }
    });


