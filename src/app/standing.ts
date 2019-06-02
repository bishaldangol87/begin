export class Rank{
    standings: Standing[];
}

export class Standing{
    table: Table[];
}

export class Table{
    postition: number;
    team: {
        name: string;
    }
    playedGames: number;
    won: number;
    draw:number;
    lost:number;
    points: number;
}