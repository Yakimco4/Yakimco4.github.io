window.onload = () => {
  const colors = ["AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",];
  const fonts = ['Arial',
    'Verdana',
    'Helvetica',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT'];
  //colour buttons
  const borderColor = document.querySelector(".pictures");
  const nextBtn = document.querySelector('.nextBtn');
  const prevBtn = document.querySelector('#previous');
  const colIndex = document.querySelector('.colIndex');
  let colourIndex = 0;

  nextBtn.addEventListener('click', () => {
    colourIndex = colourIndex + 1;
    borderColor.style.borderColor = colors[colourIndex];
    colIndex.innerHTML = colors[colourIndex];

  });

  prevBtn.addEventListener('click', () => {
    colourIndex = colourIndex - 1;
    borderColor.style.borderColor = colors[colourIndex];
    colIndex.innerHTML = colors[colourIndex];
  });

  //text styles
  //text buttons
  const previousStyle = document.querySelector('#prevStyle');
  const nextStyle = document.querySelector('.nextStyle');
  const inversion = document.querySelector('.inversion');
  const text = document.getElementsByTagName('p');
  const styleIndexspan = document.querySelector('.styleIndex');
  let styleIndex = 0;

  previousStyle.addEventListener('click', () => {
    styleIndex = styleIndex - 1;
    text[0].style.fontFamily = fonts[styleIndex];
    styleIndexspan.innerHTML = fonts[styleIndex]
  });

  nextStyle.addEventListener('click', () => {
    styleIndex = styleIndex + 1;
    text[0].style.fontFamily = fonts[styleIndex];
    styleIndexspan.innerHTML = fonts[styleIndex];
  });

  //boldness
  const bold = document.querySelector('.bolder');
  const thin = document.querySelector('.thiner');
  let font_weight = 400;

  bold.addEventListener('click', () => {
    if (font_weight < 900) {
      font_weight = font_weight + 100
    }
    else { font_weight = 900; }
    invText.style.fontWeight = font_weight;
  })

  thin.addEventListener('click', () => {
    font_weight = font_weight - 100;
    invText.style.fontWeight = font_weight;
  })

  //inversion
  const invText = document.querySelector('.text1');
  inversion.addEventListener('click', () => {

    invText.style.color = 'white'
    invText.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'white';
  });

}