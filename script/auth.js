
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      // si el usuario existe quiere decir que inició sesión, se registró o ya tenía sesión iniciada
  
      usersRef.doc(user.uid).get().then(function (doc) {
        if(doc.exists) {
          const data = doc.data();
          userInfo = data;
  
          const url = `profile.html?${data.id}`;
          authProfile.setAttribute('href',url);
  
          if(data.admin) {
            const showAdmin = document.querySelectorAll('.showadmin');
            showAdmin.forEach(function(elem) {
              elem.classList.remove('hidden');
            });
          }
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