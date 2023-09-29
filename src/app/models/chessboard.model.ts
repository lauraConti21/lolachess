export class ChessboardModel {
    constructor(
        public chessboardBoxConf = new Array<ChessboardBox>(),
    ) { }

    initChessboar() {
        let chessboardBoxConf: Array<ChessboardBox> = [];
        for (let i = 1; i <= 64; i++) {

            let piece: string | null;

            switch (true) {
                case i == 1:
                case i == 8:
                case i == 57:
                case i == 64:
                    piece = '♖';
                    break;

                case i == 2:
                case i == 7:
                case i == 58:
                case i == 63:
                    piece = '♘';
                    break;

                case i == 3:
                case i == 6:
                case i == 59:
                case i == 62:
                    piece = '♗';
                    break;

                case i == 4:
                case i == 60:
                    piece = '♕';
                    break;

                case i == 5:
                case i == 61:
                    piece = '♔';
                    break;

                case i > 8 && i < 17:
                case i > 48 && i < 57:
                    // case 7:
                    piece = '♙';
                    break;


                default:
                    piece = null
                    break;
            }

            const box = new ChessboardBox(i, piece, i < 32);
            chessboardBoxConf.push(box);
        }

        return chessboardBoxConf;
    }
}



export class ChessboardBox {

    constructor(
        public id: number,
        public piece: string | null,
        public colorWhite: boolean,
    ) { }




}