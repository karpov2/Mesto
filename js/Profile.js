class Profile {
    constructor(params) {
        console.log('class Profile');
        // Профиль: "Имя" и "О себе"
        this.name = rootMasterContainer.querySelector(`.${params.name}`);
        this.info = rootMasterContainer.querySelector(`.${params.info}`);
    }

    add(name, info) {
        console.log('class Profile -- metod: add');
        this.name.textContent = name;
        this.info.textContent = info;
    }

    addValue() {
        console.log('class Profile -- metod: addValue');
        formEdit.value(
            this.name.textContent,
            this.info.textContent
        );
    }
}