const createH1 = () => {
  const h1 = document.createElement('h1');
  
  if (window.innerWidth < 768) {
    h1.style.fontSize = '25px';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1350) {
    h1.style.fontSize = '35px';  
  } else {
    h1.style.fontSize = '55px';
  }

  h1.textContent = 'Wash Bins';
  
  return h1;
}

// Usage
const h1 = createH1();
document.body.appendChild(h1);
