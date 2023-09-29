export class ChessboardModel {
    constructor(
        public player = 'white',
        public chessboardBoxConf = new Array<ChessboardBox>(),
    ) {
        this.chessboardBoxConf = this.initChessboard();
    }

    initChessboard() {
        let chessboardBoxConf: Array<ChessboardBox> = [];
        for (let i = 1; i <= 64; i++) {

            let piece: ChessboardBox = new ChessboardBox(
                parseInt((i / 8).toString()) + 1,
                i % 8,
                'void',
                'void'
            )

            switch (true) {
                case i == 1:
                case i == 8:
                case i == 57:
                case i == 64:
                    piece.piece = 'rook';
                    break;

                case i == 2:
                case i == 7:
                case i == 58:
                case i == 63:
                    piece.piece = 'knight';
                    break;

                case i == 3:
                case i == 6:
                case i == 59:
                case i == 62:
                    piece.piece = 'bishop';
                    break;

                case i == 4:
                case i == 60:
                    piece.piece = 'queen';
                    break;

                case i == 5:
                case i == 61:
                    piece.piece = 'king';
                    break;

                case i > 8 && i < 17:
                case i > 48 && i < 57:
                    piece.piece = 'pawn';
                    break;
            }

            chessboardBoxConf.push(piece);
        }

        return chessboardBoxConf;
    }
}



export class ChessboardBox {

    constructor(
        // public id: number,
        public positionX: number,
        public positionY: number,
        public color: 'white' | 'black' | 'void',
        public piece: 'queen' | 'king' | 'rook' | 'knight' | 'bishop' | 'pawn' | 'void',
    ) { }




}