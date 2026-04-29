class Paint {
    //encargada de manejar el canvas, las herramientas, el historial y la lógica de dibujo

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 1024;
        this.canvas.height = 768;
        this.drawing = false;
        this.color = "#000000";
        this.brushSize = 5;
        //historial de filtros para deshacer
        this.history = [];
        //herramienta por defecto al iniciar el canvas
        this.currentTool = "pencil";
        // Instanciamos la clase Filter y le pasamos esta instancia de Paint para que pueda acceder a sus métodos y propiedades
        this.filterManager = new Filter(this);
    }

    //función para comenzar a dibujar
    startDrawing(x, y) {
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }

    //función para dejar de dibujar
    stopDrawing() {
        if (this.drawing) {
            this.drawing = false;
            this.ctx.closePath();
        }
    }

    //función para guardar el estado del filtro
    saveState() {
        this.history.push(this.canvas.toDataURL());
        document.getElementById("undoBtn").style.display = "block";
    }

    //función para deshacer filtro
    undo() {
        if (this.history.length === 1) {
            if (confirm("Ya no quedan mas filtros para deshacer. Eliminarás la imagen original.")) {
                // Si no hay historial, simplemente limpia el canvas
                this.clear(false);
                document.getElementById("undoBtn").style.display = "none";
            }
            return;
        }
        const img = new Image();
        img.src = this.history.pop();
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0);
        };
    }

    //función para dibujar en el canvas
    draw(x, y) {
        if (!this.drawing) return;
        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = "round";
        if (this.currentTool === "eraser") {
            this.ctx.globalCompositeOperation = "destination-out";
        } else {
            this.ctx.globalCompositeOperation = "source-over";
            this.ctx.strokeStyle = this.color;
        }
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }

    //función para limpiar el canvas
    clear(save = true) {
        if (save && !confirm("¿Estás seguro de que quieres borrar? Perderás todos los cambios."))
            return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalCompositeOperation = "source-over";
        this.currentTool = "pencil"; // Volvemos al lápiz por defecto
        this.history = [];
        document.getElementById("undoBtn").style.display = "none";
    }


    setTool(tool) {
        this.currentTool = tool;
    }
    setColor(color) {
        this.color = color;
    }
    setSize(size) {
        this.brushSize = size;
    }
}