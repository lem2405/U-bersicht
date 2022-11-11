command: "",

refreshFrequency: 10000000,

render: function (output) {
  return "<iframe width=\"500\" height=\"420\" src=\"netdata.widget/netdata.html\" frameborder=\"0\" allowfullscreen style=\"background-color: black\" allow-transparency=\"true\"></iframe>";
},

style: "        \n\
  top: 250px      \n\
  left: 65px    \n\
  z-index: 1000 \n\
  opacity: 1    \n\
"
