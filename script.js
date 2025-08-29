// console.log ('hello world');

// // common variables
// const getId = id => document.getElementById (id);

// // history check
// const historyData = [];

// const favCount = getId ('fav-count');
// const copyCount = getId ('copy-count');
// const coinCount = getId ('coin-count');
// const coins = 100;

// coinCount.innerText = coins;

// getId ('main').addEventListener ('click', e => {
//   if (e.target.classList.contains ('fav-count')) {
//     console.log ('You clicked fav!');

//     favCount.innerText = parseInt(favCount.innerText)+1;
//     // extra icon change css
//     e.target.classList.remove ('fa-regular');
//     e.target.classList.add ('fa-solid', 'text-red-500');
//   }

//   // 📋 Copy counter
//   if (e.target.classList.contains ('copy-btn')) {
//     console.log ('You clicked copy!');

//     let current = parseInt (copyCount.innerText);
//     copyCount.innerText = current + 1;

//     // number copy to clipboard
//     const number = e.target
//       .closest ('.btn-parent-div')
//       .querySelector ('p:nth-of-type(2)').innerText;
//     navigator.clipboard.writeText (number).then (() => {
//       alert (`Copied: ${number}`);
//     });
//   }

//   //   coin calculation
//   if (e.target.classList.contains ('call-btn')) {
//     console.log ('You clicked coin!');

//     let current = parseInt (coinCount.innerText);

//     if (current >= 20) {
//       coinCount.innerText = current - 20;

//       const data = {
//         category: e.target
//           .closest ('.btn-parent-div')
//           .querySelector ('p:nth-of-type(3)').innerText,
//         number: e.target
//           .closest ('.btn-parent-div')
//           .querySelector ('p:nth-of-type(2)').innerText,
//         time: new Date ().toLocaleTimeString ([], {
//           hour: '2-digit',
//           minute: '2-digit',
//         }),
//       };

//       historyData.push (data);
//       console.log (historyData);
//       alert ('20 coin deducted!');

//       // render history
//       renderHistory ();
//     } else {
//       alert ('Insufficient coin!');
//     }
//   }

//   function renderHistory () {
//     const historyContainer = getId ('history-items');
//     historyContainer.innerHTML = '';
//   if (historyData.length === 0) {
//     historyContainer.innerHTML = `
//       <h3 class="text-center text-gray-400">No history found!</h3>
//     `;
//     return;
//   }

//     historyData.forEach (item => {
//       const div = document.createElement ('div');
//       div.className =
//         'rounded-lg bg-[#FAFAFA] p-3 mb-3 flex justify-between items-center';
//       div.innerHTML = `
//       <div>
//         <h3 class="text-black font-bold">${item.category}</h3>
//         <p>${item.number}</p>
//       </div>
//       <div>
//         <p>${item.time}</p>
//       </div>
//     `;
//       historyContainer.appendChild (div);
//     });

//     // clear btn click event
//     getId ('clear-history').addEventListener ('click', () => {
//       historyData.length = 0; // empty array
//       renderHistory ();
//     });
//   }
// });

console.log ('hello world');

// common variables
const getId = id => document.getElementById (id);

// history check
const historyData = [];

const favCount = getId ('fav-count');
const copyCount = getId ('copy-count');
const coinCount = getId ('coin-count');
const coins = 100;

coinCount.innerText = coins;

// Clear button click event (add once)
getId ('clear-history').addEventListener ('click', () => {
  historyData.length = 0;
  renderHistory ();
});

// Initial render on page load
renderHistory ();

// main click listener
getId ('main').addEventListener ('click', e => {
  // Fav click
  if (e.target.classList.contains ('fav-count')) {
    favCount.innerText = parseInt (favCount.innerText) + 1;
    e.target.classList.remove ('fa-regular');
    e.target.classList.add ('fa-solid', 'text-red-500');
  }

  // Copy click
  if (e.target.classList.contains ('copy-btn')) {
    copyCount.innerText = parseInt (copyCount.innerText) + 1;

    const number = e.target
      .closest ('.btn-parent-div')
      .querySelector ('p:nth-of-type(2)').innerText;
    navigator.clipboard.writeText (number).then (() => {
      alert (`Copied: ${number}`);
    });
  }

  // Call click
  if (e.target.classList.contains ('call-btn')) {
    let current = parseInt (coinCount.innerText);

    if (current >= 20) {
      coinCount.innerText = current - 20;

      const data = {
        name: e.target
          .closest ('.btn-parent-div')
          .querySelector ('p:nth-of-type(1)').innerText,
        category: e.target
          .closest ('.btn-parent-div')
          .querySelector ('p:nth-of-type(3)').innerText,
        number: e.target
          .closest ('.btn-parent-div')
          .querySelector ('p:nth-of-type(2)').innerText,
        time: new Date ().toLocaleTimeString ([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      historyData.push (data);
      alert (`Calling ${data.name} ${data.number}`);
      renderHistory ();
    } else {
      alert ('Insufficient coin!');
    }
  }
});

// render history function
function renderHistory () {
  const historyContainer = getId ('history-items');
  historyContainer.innerHTML = '';

  if (historyData.length === 0) {
    // No history found
    historyContainer.innerHTML = `
      <h3 class="text-center text-gray-400">No history found!</h3>
    `;
    return;
  }

  historyData.forEach (item => {
    const div = document.createElement ('div');
    div.className = `
      rounded-lg bg-[#FAFAFA] p-3 flex justify-between items-center
      mb-3
      transition hover:shadow-md
    `;
    div.innerHTML = `
      <div>
        <h3 class="text-black font-bold text-[15px]">${item.name}</h3>
        <p class="text-gray-600 text-[13px]">${item.number}</p>
      </div>
      <div>
        <p class="text-gray-500 text-[12px]">${item.time}</p>
      </div>
    `;
    historyContainer.appendChild (div);
  });
}
// mobile menu toggle

const menuBtn = document.getElementById ('menu-btn');
const menu = document.getElementById ('menu');

menuBtn.addEventListener ('click', () => {
  menu.classList.toggle ('hidden');
  menuBtn.innerHTML = menu.classList.contains ('hidden')
    ? `<i class="fa-solid fa-bars text-[18px]"></i>`
    : `<i class="fa-solid fa-xmark text-[18px]"></i>`;
});
