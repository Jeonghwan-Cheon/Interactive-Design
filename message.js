export class Message {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
    }

    setMessage(str, stageWidth, stageHeight) {
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;

        const adjustFontSize = Math.min(stageWidth, stageHeight)*0.9

        const myMessage = str;

        const fontWidth = adjustFontSize * 7 / 8;
        const fontSize = adjustFontSize / 20;
        
        const fontName = 'Josefin Sans';

        this.ctx.clearRect(0, 0, stageWidth, stageHeight);
        this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
        this.ctx.fillStyle = `rgba(0, 0, 0, 1)`;
        this.ctx.textBaseline = `middle`;
        const fontPos = this.ctx.measureText(myMessage);
        this.ctx.fillText(
            myMessage,
            (stageWidth - fontPos.width) / 2,
            fontPos.actualBoundingBoxAscent +
            fontPos.actualBoundingBoxDescent +
            ((stageHeight - fontSize) / 2)
        );

        return this.ctx;
    }
}