window.addEventListener('load', function () {

    const contacts__list = document.querySelector('.contacts__list');

    const contacts = firebase.database().ref('semana14/contacts');

    contacts.on('value', function (elem) {
        let paintContact;
        elem.forEach(
            element => {
                value = element.val();
                paintContact = new Contact(value);
                console.log(value.uid);
                firebase.auth().onAuthStateChanged(function(user) {
                    if(user){
                        if(user.uid===value.uid){
                            contacts__list.appendChild(paintContact.render());
                        }
                    }
                });
                
                
                
            });
    });


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

    const add = document.querySelector('.add');

    add.addEventListener('submit',function (params) {
        params.preventDefault();

        const name = add.name.value;
        const phone = add.phone.value;

        const contactsRef = firebase.database().ref('semana14/contacts').push();

        const newContact = {
            name : name,
            phone : phone,
            uid : userID,
            id : contactsRef.key,
            
        }

        contactsRef.set(newContact).then(function (params) {
            add.name.value = '';
            add.phone.value = '';
        });
    });
    
});