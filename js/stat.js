// stats.js
'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256,1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150; // px
  var columnWidth = 40; // px
  var captionHeight = 20; // px
  var playerColorOwn = 'rgba(255,0,0,1)';
  var step = (histogramHeight) / (max - 0);

  var indent = 50; // px;
  var initialX = 140; // px;
  var initialY = 50; // px;


  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), initialX + (columnWidth + indent) * i, initialY + (histogramHeight - times[i] * step) + captionHeight);
    if (names[i] === 'Вы') {
      ctx.fillStyle = playerColorOwn;
    } else {
      ctx.fillStyle = 'rgba(0,0,256, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (columnWidth + indent) * i, initialY + (histogramHeight - times[i] * step) + captionHeight * 2, columnWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (columnWidth + indent) * i, initialY + (histogramHeight) + captionHeight * 2.5);
  }
};
