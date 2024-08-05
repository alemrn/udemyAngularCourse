export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Alejandro'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Eli']
}

const printChildre = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);
}

printChildre(passenger1);