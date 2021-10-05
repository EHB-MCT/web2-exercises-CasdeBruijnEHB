export default class Team {
    constructor() {
        this.teamname = "Team Rocket";
        this.trainer = 'Brock';
        this.roster = ['Pickachu', 'Meowto'];

    }

    describe() {

        let html = `${this.teamname} is led by ${this.trainer}. With Pokemons ${[...this.roster]}`;
        return html;
    }
}