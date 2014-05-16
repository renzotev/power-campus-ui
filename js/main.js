$("#UPTraDocInformacionGeneral1_txtPerfilProf").keyup(function() {
    var len = this.value.length;
    if (len >= 1501) {
      this.value = this.value.substring(0, 1500);
    } else {
      $('#charNum').text(len);
    }
});

var progress1 = new Charts.CircleProgress(
'chart1', 
'', 
circle_percent,
{
  radius: 65,
  font_color: "#fff",
  fill_color: "#333",
  stroke_width: 50,
  stroke_color: "#1570bc"
});

progress1.draw()