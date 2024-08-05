const skills: string[] = ['Bash', 'Counter', 'healing'];

interface Character {
    name: string;
    hp: number;
    skills?: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 0
}

console.log(skills);

export { };