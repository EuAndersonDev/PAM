document.getElementById('shapeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const sides = parseInt(document.getElementById('sides').value);
  const canvas = document.getElementById('shapeCanvas');
  const ctx = canvas.getContext('2d');
  
  // Configurações do canvas
  canvas.width = 300;
  canvas.height = 300;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (sides < 3 || sides > 100) {
    alert('Por favor, insira um número entre 3 e 100.');
    return;
  }

  // Cálculo para desenhar o polígono
  const radius = 100; // raio do polígono
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const angleStep = (2 * Math.PI) / sides;

  ctx.beginPath();
  
  for (let i = 0; i < sides; i++) {
    const x = centerX + radius * Math.cos(i * angleStep - Math.PI / 2);
    const y = centerY + radius * Math.sin(i * angleStep - Math.PI / 2);
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  
  ctx.closePath();
  ctx.stroke();
});
