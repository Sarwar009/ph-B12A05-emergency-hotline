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

getId ('main').addEventListener ('click', e => {
  if (e.target.classList.contains ('fav-count')) {
    console.log ('You clicked fav!');

    favCount.innerText = parseInt(favCount.innerText)+1;
    // extra icon change css
    e.target.classList.remove ('fa-regular');
    e.target.classList.add ('fa-solid', 'text-red-500');
  }

  // 📋 Copy counter
  if (e.target.classList.contains ('copy-btn')) {
    console.log ('You clicked copy!');

    let current = parseInt (copyCount.innerText);
    copyCount.innerText = current + 1;

    // number copy to clipboard
    const number = e.target
      .closest ('.btn-parent-div')
      .querySelector ('p:nth-of-type(2)').innerText;
    navigator.clipboard.writeText (number).then (() => {
      alert (`Copied: ${number}`);
    });
  }

  //   coin calculation
  if (e.target.classList.contains ('call-btn')) {
    console.log ('You clicked coin!');

    let current = parseInt (coinCount.innerText);

    if (current >= 20) {
      coinCount.innerText = current - 20;

      const data = {
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
      console.log (historyData);
      alert ('20 coin deducted!');

      // render history
      renderHistory ();
    } else {
      alert ('Insufficient coin!');
    }
  }

  function renderHistory () {
    const historyContainer = getId ('history');
    historyContainer.innerHTML = `
    <div class="flex justify-between items-center mb-3">
      <div class="flex gap-2 items-center">
        <img src="./assets/coin.png" alt="" class="w-[32px] h-[32px]" />
        <h3 class="font-bold text-[18px]">History</h3>
      </div>
      <button id="clear-history"
        class="px-[32px] py-[8px] bg-[#00A63E] text-white font-semibold rounded-[25px] shadow-md hover:bg-white hover:text-black transition border border-[#D4D6D5]">
        Clear
      </button>
    </div>
  `;

    historyData.forEach (item => {
      const div = document.createElement ('div');
      div.className =
        'rounded-lg bg-[#FAFAFA] p-3 mb-3 flex justify-between items-center';
      div.innerHTML = `
      <div>
        <h3 class="text-black font-bold">${item.category}</h3>
        <p>${item.number}</p>
      </div>
      <div>
        <p>${item.time}</p>
      </div>
    `;
      historyContainer.appendChild (div);
    });

    // clear btn click event
    getId ('clear-history').addEventListener ('click', () => {
      historyData.length = 0; // empty array
      renderHistory ();
    });
  }
});
