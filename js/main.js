"use strict";

const newArr = [];
let random;
const sort = [];
const win = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function Table() {
  let tbl = document.getElementById("tbl");
  let tr = "";

  for (let i = 0; i < 16; i++) {
    newArr.push(i + 1);
  }
  for (let i = 0; i < 4; i++) {
    tr += `<tr>`;

    for (let j = 0; j < 4; j++) {
      random = Math.floor(Math.random() * newArr.length);
      let splice = newArr.splice(random, 1)[0];
      tr += `
                <td id=${splice} onclick="Click(${splice})" class="border-1">${splice}</td>
            `;
    }
    tr += `</tr>`;
  }
  tbl.innerHTML = tr;
}
Table();

function Click(id) {
  let td = document.getElementById(id);
  sort.push(id);
  if (sort[0] == 1) {
    if ((td.style.backgroundColor = "green")) {
      td.style.pointerEvents = "none";
    }
  } else {
    td.style.backgroundColor = "red";
    setTimeout(() => {
      alert("Your are looser please start one :)");
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  for (let i = 0; i < sort.length; i++) {
    for (let j = i + 1; j < sort.length; j++) {
      if (sort[0] == 1) {
        td.style.backgroundColor = "green";
        td.style.pointerEvents = "none";
        if (sort[i] + 1 == sort[j]) {
          break;
        } else {
          setTimeout(() => {
            alert("Your are looser :)");
          }, 100);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          td.style.backgroundColor = "red";
        }
      } else {
        td.style.backgroundColor = "red";
      }
    }
  }

  if (id == 16) {
    if (td.style.backgroundColor == "green") {
      setTimeout(() => {
        alert("Conguratulations You are winner");
      }, 800);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }

  console.log(sort);
}
