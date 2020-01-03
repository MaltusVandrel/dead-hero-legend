import { Game } from "./game";

export class Criterea{
    private _evaluation:(game:Game)=>boolean;
    constructor(evaluation:(game:Game)=>boolean){
        this._evaluation=evaluation;
    }
    evaluate(game:Game):boolean{
        return this._evaluation(game);
    }
}