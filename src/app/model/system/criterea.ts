import { Game } from "./game";

export class Criterea{
    private _evaluation:(game:Game)=>boolean;

    evaluate(game:Game):boolean{
        return this._evaluation(game);
    }
}