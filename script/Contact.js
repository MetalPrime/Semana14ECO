class Contact {
    constructor(contact){
        this.contact = contact;
        this.id = this.contact.id;
        console.log(this.id);
    }
    
    render = () =>{

        let component = document.createElement('article');
        component.classList.add('contact');

        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'X';
        btnDelete.classList.add('contact__delete');

        component.innerHTML = `
        <div class="contact__info">
            <strong class="contact__name">${this.contact.name}</strong>
            <p class="contact__number">${this.contact.phone}</p>
        </div>
        `;

        component.appendChild(btnDelete);

        btnDelete.addEventListener('click', () => {
            firebase.database().ref(`semana14/contacts/${this.id}`).remove();
            console.log(this.id);
        })

        console.log(this.id+"sdfgdf");
        return component;

    }
}