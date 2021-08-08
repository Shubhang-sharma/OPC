
  const canvas = document.querySelector('.nodework');
  const node = document.getElementById('main4');
  var width = canvas.width = node.clientWidth;
  var height = canvas.height = node.clientHeight;
  const ctx = canvas.getContext('2d');
  canvas.style.zindex = 100000;

  // ctx.fillStyle = '#1c3e51';
  // ctx.circle(width/2,height/2,50);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
