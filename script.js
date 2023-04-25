const name_1 = document.getElementById('name_1');
const name_2 = document.getElementById('name_2');
const result = document.getElementById('result');

const button = document.getElementById('submit');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const str_1 = name_1?.value.replace(' ', '').trim();
  const str_2 = name_2?.value.replace(' ', '').trim();
  console.log(name_2);
  if (str_1 === '' || str_2 === '') {
    alert('Enter valid name');
    return;
  }
  const total = getFlamesCount(str_1, str_2);

  let res = flamesResult(total);

  result.innerText = res;
});

function getFlamesCount(n1, n2) {
  const arrN1 = n1.split('');
  const arrN2 = n2.split('');

  let copyN1 = [...arrN1];
  copyN1.forEach((i) => {
    let arrN2Index = arrN2.indexOf(i);

    if (arrN2Index >= 0) {
      let arrN1Index = arrN1.indexOf(i);
      arrN1[arrN1Index] = '*';
      arrN2[arrN2Index] = '*';
    }
  });

  let total = arrN2.filter((i) => i !== '*').length + arrN1.filter((i) => i !== '*').length;

  return total;
}

function flamesResult(total) {
  const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
  const flamesFullForm = {
    F: 'Friends',
    L: 'Love',
    A: 'Affection',
    M: 'Marriage',
    E: 'Enemy',
    S: 'Sister',
  };

  let i = total - 1;

  while (flames.filter((i) => i === '*').length !== 5) {
    if (flames[i] !== '*') {
      flames[i] = '*';
      i = i + total;

      console.log(flames);
    } else {
      i++;
    }
    if (i > 6) {
      i = i % 6;
    }
  }

  return flamesFullForm[flames.filter((i) => i !== '*')[0]];
}
