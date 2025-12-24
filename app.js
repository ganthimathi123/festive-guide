function getFestival() {
  const festival = document.getElementById("festivalInput").value.toLowerCase();
  const output = document.getElementById("output");

  output.classList.remove("hidden");

  if (festival.includes("diwali")) {
    output.innerHTML = `
      <h3>🪔 Diwali</h3>
      <ul>
        <li>Early morning oil bath</li>
        <li>Wear new clothes</li>
        <li>Light diyas</li>
        <li>Prepare sweets</li>
      </ul>
      <p><b>Local note:</b> Morning celebration in Tamil Nadu.</p>
    `;
  } 
  else if (festival.includes("pongal")) {
    output.innerHTML = `
      <h3>🌾 Pongal</h3>
      <ul>
        <li>Harvest festival</li>
        <li>Prepare sweet & ven pongal</li>
        <li>Draw kolam</li>
        <li>Thank Sun God</li>
      </ul>
    `;
  } 
  else if (festival.includes("navaratri")) {
    output.innerHTML = `
      <h3>🌺 Navaratri</h3>
      <ul>
        <li>9-day festival</li>
        <li>Keep golu dolls</li>
        <li>Offer sundal</li>
        <li>Evening pooja</li>
      </ul>
    `;
  } 
  else {
    output.innerHTML = `
      <p>Try typing <b>Diwali</b>, <b>Pongal</b>, or <b>Navaratri</b></p>
    `;
  }
}
