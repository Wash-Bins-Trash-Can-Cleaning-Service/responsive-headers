// headlines.js

const headlines = {
  'wash-bins': {
    text: 'Wash Bins',
    styles: {
      phone: {
        'font-size': '25px'
      },
      tablet: {
        'font-size': '35px'
      },
      desktop: {
        'font-size': '55px'
      }
    }
  }
};

function renderHeadline(id) {
  const headline = headlines[id];
  
  let styles = {};

  const width = window.innerWidth;
  if (width < 768) {
    styles = headline.styles.phone;
  } else if (width >= 768 && width < 1349) {
    styles = headline.styles.tablet;
  } else {
    styles = headline.styles.desktop;
  }

  const h1 = document.createElement('h1');
  Object.assign(h1.style, styles);
  
  h1.innerText = headline.text;

  const div = document.getElementById('headline');
  div.appendChild(h1);
}

window.addEventListener('load', () => {
  renderHeadline('wash-bins');
});
