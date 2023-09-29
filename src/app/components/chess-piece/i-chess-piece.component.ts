export interface IChessPieceComponent {
    positionX: number;
    positionY: number;
    color: 'white' | 'black' | 'empty'


    //Ritorna le coordinate delle box in cui il pezzo può muoversi
    select: () => Array<{ positionX: number, positionY: number }>;


    // move: () => void;
}