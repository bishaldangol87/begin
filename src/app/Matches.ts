export class Upmatch{
    matches: Match[];
}
export class Match{
    utcDate: string;
    score: Score;
    homeTeam:{
        name:string;
    }
    awayTeam:{
        name:string;
    }
}
export class Score{
    fullTime:{
        homeTeam: number;
        awayTeam: number;
    }
    
}