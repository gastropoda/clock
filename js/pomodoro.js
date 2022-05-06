window.onload = function () {
  var canvas = document.getElementById("pomodoro");
  // Create an empty project and a view for the canvas:
  paper.setup(canvas);

  var center = new paper.Point(0, 0);
  var radius = 50;
  var startAngle = - Math.PI / 2;
  var endAngle = Math.PI * 3 / 2;
  var midAngle = startAngle + (endAngle - startAngle) / 2;
  var from = new paper.Point(
    center.x + radius * Math.cos(startAngle),
    center.y + radius * Math.sin(startAngle)
  );
  var through = new paper.Point(
    center.x + radius * Math.cos(midAngle),
    center.y + radius * Math.sin(midAngle)
  );
  var to = new paper.Point(
    center.x + radius * Math.cos(endAngle),
    center.y + radius * Math.sin(endAngle)
  );

  console.log(from, through, to)

  var path = new paper.Path.Arc(from, through, to);
  path.strokeColor = "#CC102D";
  //path.opacity = 0.5;
  path.strokeWidth = 20;

  paper.view.draw();
}
