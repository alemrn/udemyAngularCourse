export class Person {
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

    // public name?: string;
    // private _address?: string | undefined;

    constructor(public name:string, private _address: string = 'No Address') {}

}

export class Hero extends Person{
    constructor(public alterEgo: string, public age: number, public realName : string) {
        super(realName, 'New York');
    }
}

const ironman = new Hero('Iron man', 45, 'Tony');
console.log(ironman);
