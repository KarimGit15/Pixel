let color = "black"
red_box = document.querySelector(".red")
blue_box = document.querySelector(".blue")
yellow_box = document.querySelector(".yellow")
green_box = document.querySelector(".green")
turq_box = document.querySelector(".turq")
eraser = document.querySelector(".eraser")


eraser.addEventListener("click", function() {
    color = "gray"
    console.log("Выбран ластик")
}
)
green_box.addEventListener("click", function() {
    color = "green"
    console.log("Выбран зелёный цвет")
}
)
turq_box.addEventListener("click", function() {
    color = "purple"
    console.log("Выбран фиолетовый цвет")
}
)
red_box.addEventListener("click", function() {
    color = "red"
    console.log("Выбран красный цвет")
}
)
blue_box.addEventListener("click", function() {
    color = "blue"
    console.log("Выбран синий цвет")
}
)
yellow_box.addEventListener("click", function() {
    color = "yellow"
    console.log("Выбран жёлтый цвет")
}
)
let container = document.querySelector(".net");
let isDrawing = false;

container.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = color; // Цвет закраски
    isDrawing = true;
});

container.addEventListener("mousemove", function (event) {
    if (isDrawing == true) {
        event.target.style.backgroundColor = color;
    }
});

document.addEventListener("mouseup", function () {
    isDrawing = false;
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    // Создаем canvas элемент
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.net');
    const blocks = document.querySelectorAll('.block');
    
    // Устанавливаем размеры canvas
    const cols = 50; // Количество колонок в сетке
    const rows = 50; // Количество строк в сетке
    const blockSize = 25; // Размер одного блока в пикселях
    
    canvas.width = cols * blockSize;
    canvas.height = rows * blockSize;
    const ctx = canvas.getContext('2d');
    
    // Заливаем canvas цветом фона (серый, как у блоков)
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем каждый блок на canvas
    blocks.forEach((block, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const color = window.getComputedStyle(block).backgroundColor;
        
        ctx.fillStyle = color;
        ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
    });
    
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});