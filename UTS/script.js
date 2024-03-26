var drop1 = document.getElementById('drop1');
var drop2 = document.getElementById('drop2');
var drop3 = document.getElementById('drop3');

var dropbtn1 = document.getElementById('dropbtn1');
var dropbtn2 = document.getElementById('dropbtn2');
var dropbtn3 = document.getElementById('dropbtn3');

var isButton1Pressed = false;
var isButton2Pressed = false;
var isButton3Pressed = false;

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

dropbtn1.addEventListener('click', function () {
  if (!isButton1Pressed) {
    for (var i = 0; i < 31; i++) {
      var date = document.createElement('li');
      date.className = 'dropdown-item';
      date.textContent = i + 1;

      drop1.appendChild(date);

      date.addEventListener('click', function () {
        var chosen = this.textContent;
        selectItem(chosen, dropbtn1);
      });
    }
  }

  isButton1Pressed = true;
});

dropbtn2.addEventListener('click', function () {
  if (!isButton2Pressed) {
    for (var i = 0; i < month.length; i++) {
      var mth = document.createElement('li');
      mth.className = 'dropdown-item';
      mth.textContent = month[i];

      drop2.appendChild(mth);

      mth.addEventListener('click', function () {
        var chosen = this.textContent;
        selectItem(chosen, dropbtn2);
      });
    }
  }

  isButton2Pressed = true;
});

dropbtn3.addEventListener('click', function () {
  if (!isButton3Pressed) {
    for (var i = 1950; i < 2024; i++) {
      var year = document.createElement('li');
      year.className = 'dropdown-item';
      year.textContent = i;

      drop3.appendChild(year);

      year.addEventListener('click', function () {
        var chosen = this.textContent;
        selectItem(chosen, dropbtn3);
      });
    }
  }

  isButton3Pressed = true;
});

function selectItem(itemText, drop) {
  drop.textContent = itemText;
}
