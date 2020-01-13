import { GameDialog } from "./game-dialog";
import { Game } from "./game";

export class Activity{
    private _action:(game:Game)=>GameDialog;
    private _criterea:(game:Game)=>GameDialog;
    private _running:Boolean;
       
}