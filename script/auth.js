
let userID;
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      // si el usuario existe quiere decir que inició sesión, se registró o ya tenía sesión iniciada
  
      console.log(user.uid);
      firebase.database().ref('semana14/users/' + user.uid).on('value',function (doc) {
        if(doc.exists) {
          const data = doc.val();
          const userInfo = data;
          console.log(data);
          userID = user.uid;

          
        const info__name = document.querySelector('.info__name');
        const info__email = document.querySelector('.info__email');
        const info__phone = document.querySelector('.info__phone');

        info__name.innerHTML = `${userInfo.name}`;
        info__email.innerHTML = `${userInfo.email}`;
        info__phone.innerHTML = `${userInfo.number}`;
        }
      });
  
    } else {
      // si no existe quiere decir que no ha iniciado sesión o acaba de cerrar sesión
      window.location.href = 'register.html';
    }
  });
  
  // cerrar sesión
  const logOut = document.querySelector('.info__LogOut');

  logOut.addEventListener('click', function(event) {
    event.preventDefault();
    firebase.auth().signOut();
  });