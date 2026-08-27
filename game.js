// =====================================================
// TINY SHOP MANAGER
// =====================================================


// =====================================================
// ITEMS
// =====================================================

const items = [

    { id:1, name:"Apple", icon:"🍎", price:5000, buyPrice:3000 },
    { id:2, name:"Banana", icon:"🍌", price:4000, buyPrice:2500 },
    { id:3, name:"Bread", icon:"🍞", price:7000, buyPrice:4000 },
    { id:4, name:"Milk", icon:"🥛", price:8000, buyPrice:5000 },
    { id:5, name:"Egg", icon:"🥚", price:3000, buyPrice:1800 },
    { id:6, name:"Water", icon:"💧", price:4000, buyPrice:2500 },
    { id:7, name:"Soda", icon:"🥤", price:7000, buyPrice:4000 },
    { id:8, name:"Coffee", icon:"☕", price:10000, buyPrice:6000 },
    { id:9, name:"Chocolate", icon:"🍫", price:12000, buyPrice:7000 },
    { id:10, name:"Cookies", icon:"🍪", price:9000, buyPrice:5500 },
    { id:11, name:"Rice", icon:"🍚", price:15000, buyPrice:9000 },
    { id:12, name:"Noodles", icon:"🍜", price:6000, buyPrice:3500 },
    { id:13, name:"Cheese", icon:"🧀", price:18000, buyPrice:11000 },
    { id:14, name:"Potato", icon:"🥔", price:5000, buyPrice:3000 },
    { id:15, name:"Carrot", icon:"🥕", price:5000, buyPrice:3000 },
    { id:16, name:"Tomato", icon:"🍅", price:6000, buyPrice:3500 },
    { id:17, name:"Chicken", icon:"🍗", price:22000, buyPrice:14000 },
    { id:18, name:"Fish", icon:"🐟", price:20000, buyPrice:12000 },
    { id:19, name:"Beef", icon:"🥩", price:30000, buyPrice:18000 },
    { id:20, name:"Ice Cream", icon:"🍦", price:15000, buyPrice:9000 },
    { id:21, name:"Shampoo", icon:"🧴", price:25000, buyPrice:15000 },
    { id:22, name:"Soap", icon:"🧼", price:7000, buyPrice:4000 },
    { id:23, name:"Toothbrush", icon:"🪥", price:12000, buyPrice:7000 },
    { id:24, name:"Tissue", icon:"🧻", price:11000, buyPrice:6500 },
    { id:25, name:"Perfume", icon:"🌸", price:55000, buyPrice:33000 },
    { id:26, name:"Headphones", icon:"🎧", price:85000, buyPrice:50000 },
    { id:27, name:"Smart Watch", icon:"⌚", price:150000, buyPrice:90000 },
    { id:28, name:"Tablet", icon:"📱", price:350000, buyPrice:210000 },
    { id:29, name:"Laptop", icon:"💻", price:800000, buyPrice:500000 },
    { id:30, name:"Gaming PC", icon:"🖥️", price:1500000, buyPrice:900000 }

];


// =====================================================
// CUSTOMERS
// =====================================================

const customers = [

    { name:"Andi", avatar:"👨" },
    { name:"Budi", avatar:"🧑" },
    { name:"Siti", avatar:"👩" },
    { name:"Maya", avatar:"👩‍🦰" },
    { name:"Doni", avatar:"👨‍🦱" },
    { name:"Rina", avatar:"👩‍🦱" },
    { name:"Kevin", avatar:"👨‍💼" },
    { name:"Lina", avatar:"👩‍💼" }

];


// =====================================================
// CASH
// =====================================================

const cashValues = [

    1000,
    2000,
    5000,
    10000,
    20000,
    50000,
    100000

];


// =====================================================
// GAME STATE
// =====================================================

let money = 150000;

let score = 0;

let highScore =
    Number(
        localStorage.getItem(
            "tinyShopManagerHighScore"
        )
    ) || 0;

let shopLevel = 1;

let day = 1;

let customersServed = 0;

let gameRunning = true;


// =====================================================
// DAY SYSTEM
// =====================================================

/*
    1 DAY = 5 MENIT

    300 detik

    Kita menggunakan 0.1 detik
    sebagai tick.
*/

const DAY_DURATION = 300;

let dayTimeLeft =
    DAY_DURATION;

let dayTimerInterval = null;


// =====================================================
// SHOP REST
// =====================================================

let shopResting = false;


// =====================================================
// CUSTOMER TIMER
// =====================================================

let timerInterval = null;

let timeLeft = 60;

let maxTime = 60;


// =====================================================
// UNLOCK
// =====================================================

const unlockLevels = {

    1: [1,2,3],
    2: [4,5],
    3: [6,7,8],
    4: [9],
    5: [10,11,12],
    6: [13,14],
    7: [15,16,17],
    8: [18],
    9: [19,20,21],
    10: [22,23],
    11: [24,25,26],
    12: [27],
    13: [28],
    14: [29],
    15: [30]

};


// =====================================================
// INVENTORY
// =====================================================

let inventory = {};

items.forEach(
    item => {

        inventory[item.id] = 0;

    }
);


inventory[1] = 10;
inventory[2] = 10;
inventory[3] = 10;


// =====================================================
// CURRENT CUSTOMER
// =====================================================

let currentCart = [];

let currentTotal = 0;

let currentPayment = 0;

let currentChange = 0;

let moneyGiven = 0;

let selectedCash = [];


// =====================================================
// DOM
// =====================================================

const moneyEl =
    document.getElementById("money");

const scoreEl =
    document.getElementById("score");

const highScoreEl =
    document.getElementById("highScore");

const shopLevelEl =
    document.getElementById("shopLevel");

const unlockedCountEl =
    document.getElementById("unlockedCount");

const customersServedEl =
    document.getElementById("customersServed");

const dayEl =
    document.getElementById("day");

const inventoryEl =
    document.getElementById("inventory");

const restockListEl =
    document.getElementById("restockList");

const customerCartEl =
    document.getElementById("customerCart");

const totalPriceEl =
    document.getElementById("totalPrice");

const customerPaymentEl =
    document.getElementById("customerPayment");

const changeTargetEl =
    document.getElementById("changeTarget");

const cashButtonsEl =
    document.getElementById("cashButtons");

const moneyGivenEl =
    document.getElementById("moneyGiven");

const selectedCashEl =
    document.getElementById("selectedCash");

const timerTextEl =
    document.getElementById("timerText");

const timerBarEl =
    document.getElementById("timerBar");

const notificationEl =
    document.getElementById("notification");

const resetCashButton =
    document.getElementById("resetCash");

const restButton =
    document.getElementById("restButton");

const shopClosed =
    document.getElementById("shopClosed");

const dayTimerText =
    document.getElementById("dayTimerText");

const dayTimerBar =
    document.getElementById("dayTimerBar");


// =====================================================
// FORMAT MONEY
// =====================================================

function formatMoney(number) {

    return "Rp" +
        Math.floor(number)
            .toLocaleString("id-ID");

}


// =====================================================
// RANDOM
// =====================================================

function randomNumber(min,max) {

    return Math.floor(
        Math.random() *
        (max-min+1)
    ) + min;

}


// =====================================================
// UNLOCKED ITEMS
// =====================================================

function getUnlockedItems() {

    const ids = [];


    for (
        let level = 1;
        level <= shopLevel;
        level++
    ) {

        if (
            unlockLevels[level]
        ) {

            ids.push(
                ...unlockLevels[level]
            );

        }

    }


    return items.filter(
        item =>
            ids.includes(item.id)
    );

}


function isUnlocked(item) {

    return getUnlockedItems()
        .some(
            unlocked =>
                unlocked.id === item.id
        );

}


// =====================================================
// INVENTORY
// =====================================================

function renderInventory() {

    inventoryEl.innerHTML = "";


    items.forEach(
        item => {

            const unlocked =
                isUnlocked(item);


            const div =
                document.createElement("div");


            div.className =
                "inventory-item";


            if (!unlocked) {

                div.classList.add("locked");

                div.innerHTML = `

                    <div class="inventory-icon">
                        🔒
                    </div>

                    <span class="inventory-name">
                        ${item.name}
                    </span>

                    <span class="lock-text">
                        LOCKED
                    </span>

                `;

            }

            else {

                let stockClass =
                    "stock-good";


                if (
                    inventory[item.id] <= 3
                ) {

                    stockClass =
                        "stock-low";

                }


                if (
                    inventory[item.id] <= 0
                ) {

                    stockClass =
                        "stock-empty";

                }


                div.innerHTML = `

                    <div class="inventory-icon">
                        ${item.icon}
                    </div>

                    <span class="inventory-name">
                        ${item.name}
                    </span>

                    <span class="inventory-price">
                        ${formatMoney(item.price)}
                    </span>

                    <span class="inventory-stock ${stockClass}">
                        Stock: ${inventory[item.id]}
                    </span>

                `;

            }


            inventoryEl.appendChild(div);

        }
    );

}


// =====================================================
// RESTOCK
// =====================================================

let restockAmounts = {};


items.forEach(
    item => {

        restockAmounts[item.id] = 1;

    }
);


function renderRestock() {

    restockListEl.innerHTML = "";


    getUnlockedItems()
        .forEach(
            item => {

                const div =
                    document.createElement("div");


                div.className =
                    "restock-item";


                div.innerHTML = `

                    <div class="restock-item-icon">
                        ${item.icon}
                    </div>

                    <div class="restock-info">

                        <strong>
                            ${item.name}
                        </strong>

                        <span>
                            ${formatMoney(item.buyPrice)}
                            / unit
                        </span>

                    </div>

                    <div class="restock-controls">

                        <button
                            onclick="changeRestock(${item.id},-1)">
                            −
                        </button>

                        <span
                            class="restock-quantity"
                            id="restockQty-${item.id}">
                            ${restockAmounts[item.id]}
                        </span>

                        <button
                            onclick="changeRestock(${item.id},1)">
                            +
                        </button>

                        <button
                            class="restock-buy"
                            onclick="buyStock(${item.id})">
                            BUY
                        </button>

                    </div>

                `;


                restockListEl.appendChild(div);

            }
        );

}


function changeRestock(id,amount) {

    restockAmounts[id] += amount;


    if (
        restockAmounts[id] < 1
    ) {

        restockAmounts[id] = 1;

    }


    if (
        restockAmounts[id] > 50
    ) {

        restockAmounts[id] = 50;

    }


    const element =
        document.getElementById(
            `restockQty-${id}`
        );


    if (element) {

        element.textContent =
            restockAmounts[id];

    }

}


function buyStock(id) {

    const item =
        items.find(
            item =>
                item.id === id
        );


    const quantity =
        restockAmounts[id];


    const cost =
        item.buyPrice *
        quantity;


    if (
        money < cost
    ) {

        showNotification(
            "❌ Uang toko tidak cukup!",
            "error"
        );

        return;

    }


    money -= cost;

    inventory[id] += quantity;


    showNotification(
        `📦 ${quantity} ${item.name} berhasil direstock.`,
        "success"
    );


    updateUI();

}


// =====================================================
// CUSTOMER CART
// =====================================================

function renderCustomerCart() {

    customerCartEl.innerHTML = "";


    currentCart.forEach(
        order => {

            const div =
                document.createElement("div");


            div.className =
                "cart-item";


            div.innerHTML = `

                <span class="cart-icon">
                    ${order.item.icon}
                </span>

                <span class="cart-name">
                    ${order.item.name}
                </span>

                <span class="cart-quantity">
                    × ${order.quantity}
                </span>

                <span class="cart-price">
                    ${formatMoney(
                        order.item.price *
                        order.quantity
                    )}
                </span>

            `;


            customerCartEl.appendChild(div);

        }
    );

}


// =====================================================
// CREATE CUSTOMER
// =====================================================

function createCustomer() {

    if (
        !gameRunning ||
        shopResting
    ) {

        return;

    }


    const availableItems =
        getUnlockedItems()
            .filter(
                item =>
                    inventory[item.id] > 0
            );


    if (
        availableItems.length === 0
    ) {

        showNotification(
            "⚠️ Semua barang habis! Restock dulu.",
            "error"
        );


        startIdleTimer();

        return;

    }


    const customer =
        customers[
            randomNumber(
                0,
                customers.length - 1
            )
        ];


    document.getElementById(
        "customerName"
    ).textContent =
        customer.name;


    document.getElementById(
        "customerAvatar"
    ).textContent =
        customer.avatar;


    document.getElementById(
        "customerMessage"
    ).textContent =
        getCustomerMessage();


    createCart(
        availableItems
    );


    calculatePayment();


    resetCash();


    if (
        currentCart.length <= 3
    ) {

        maxTime = 35;

    }

    else if (
        currentCart.length <= 6
    ) {

        maxTime = 50;

    }

    else if (
        currentCart.length <= 10
    ) {

        maxTime = 65;

    }

    else {

        maxTime = 85;

    }


    timeLeft = maxTime;


    startTimer();

}


// =====================================================
// CUSTOMER MESSAGE
// =====================================================

function getCustomerMessage() {

    const messages = [

        "Saya mau belanja beberapa barang.",

        "Tolong cepat ya, saya sedang buru-buru.",

        "Saya butuh banyak barang hari ini.",

        "Semoga stoknya lengkap.",

        "Saya mau belanja cukup banyak.",

        "Saya bayar sekarang.",

        "Tolong jangan sampai salah kembalian."

    ];


    return messages[
        randomNumber(
            0,
            messages.length - 1
        )
    ];

}


// =====================================================
// CREATE CART
// =====================================================

function createCart(availableItems) {

    currentCart = [];


    const maxItems =
        Math.min(
            availableItems.length,
            15
        );


    const itemCount =
        randomNumber(
            1,
            maxItems
        );


    const shuffled =
        [...availableItems]
            .sort(
                () =>
                    Math.random()-0.5
            );


    for (
        let i=0;
        i<itemCount;
        i++
    ) {

        const item =
            shuffled[i];


        const maxQuantity =
            Math.min(
                inventory[item.id],
                10
            );


        const quantity =
            randomNumber(
                1,
                maxQuantity
            );


        currentCart.push({

            item:item,

            quantity:quantity

        });

    }


    renderCustomerCart();

}


// =====================================================
// TOTAL
// =====================================================

function calculateTotal() {

    let total = 0;


    currentCart.forEach(
        order => {

            total +=
                order.item.price *
                order.quantity;

        }
    );


    return total;

}


// =====================================================
// PAYMENT
// =====================================================

function calculatePayment() {

    currentTotal =
        calculateTotal();


    const payments = [

        50000,
        100000,
        200000,
        500000,
        1000000,
        2000000

    ];


    let possible =
        payments.filter(
            value =>
                value > currentTotal
        );


    if (
        possible.length === 0
    ) {

        currentPayment =
            Math.ceil(
                (
                    currentTotal +
                    randomNumber(1,5)
                    * 100000
                )
                /
                100000
            )
            *
            100000;

    }

    else {

        currentPayment =
            possible[
                randomNumber(
                    0,
                    possible.length-1
                )
            ];

    }


    currentChange =
        currentPayment -
        currentTotal;


    totalPriceEl.textContent =
        formatMoney(currentTotal);


    customerPaymentEl.textContent =
        formatMoney(currentPayment);


    changeTargetEl.textContent =
        formatMoney(currentChange);

}


// =====================================================
// CASH BUTTONS
// =====================================================

function renderCashButtons() {

    cashButtonsEl.innerHTML = "";


    cashValues.forEach(
        value => {

            const button =
                document.createElement("button");


            button.textContent =
                formatMoney(value);


            button.addEventListener(
                "click",
                () => {

                    addCash(value);

                }
            );


            cashButtonsEl.appendChild(
                button
            );

        }
    );

}


function addCash(value) {

    if (
        !gameRunning ||
        shopResting
    ) {

        return;

    }


    moneyGiven += value;

    selectedCash.push(value);


    renderSelectedCash();

}


// =====================================================
// RENDER SELECTED CASH
// =====================================================

function renderSelectedCash() {

    selectedCashEl.innerHTML = "";


    selectedCash.forEach(
        (value,index) => {

            const span =
                document.createElement("span");


            span.textContent =
                formatMoney(value);


            /*
                Klik pecahan yang sudah dipilih
                juga bisa menghapus pecahan tersebut.
            */

            span.addEventListener(
                "click",
                () => {

                    moneyGiven -= value;

                    selectedCash.splice(
                        index,
                        1
                    );


                    renderSelectedCash();

                }
            );


            selectedCashEl.appendChild(
                span
            );

        }
    );


    moneyGivenEl.textContent =
        formatMoney(moneyGiven);

}


// =====================================================
// RESET CASH
// =====================================================

/*
    INI FIX UNTUK TOMBOL RESET.

    Event listener dibuat langsung
    setelah DOM ditemukan.
*/

resetCashButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        resetCash();

    }
);


function resetCash() {

    moneyGiven = 0;

    selectedCash = [];


    /*
        Bersihkan semua pecahan.
    */

    selectedCashEl.innerHTML = "";


    moneyGivenEl.textContent =
        formatMoney(0);


    showNotification(
        "🔄 Kembalian di-reset.",
        "info"
    );

}


// =====================================================
// COMPLETE SALE
// =====================================================

document.getElementById(
    "completeSale"
).addEventListener(
    "click",
    completeSale
);


function completeSale() {

    if (
        !gameRunning ||
        shopResting
    ) {

        return;

    }


    if (
        moneyGiven !== currentChange
    ) {

        score =
            Math.max(
                0,
                score-30
            );


        showNotification(
            "❌ Kembalian salah!",
            "error"
        );


        updateUI();

        return;

    }


    clearInterval(
        timerInterval
    );


    currentCart.forEach(
        order => {

            inventory[
                order.item.id
            ] -= order.quantity;

        }
    );


    let profit = 0;


    currentCart.forEach(
        order => {

            profit +=
                (
                    order.item.price -
                    order.item.buyPrice
                )
                *
                order.quantity;

        }
    );


    money += profit;


    customersServed++;


    let earnedScore = 100;


    currentCart.forEach(
        order => {

            earnedScore +=
                order.quantity *
                10;

        }
    );


    earnedScore +=
        Math.floor(
            timeLeft * 2
        );


    score += earnedScore;


    updateHighScore();


    showNotification(
        `✅ Sale complete! +${formatMoney(profit)} profit`,
        "success"
    );


    updateUI();


    setTimeout(
        () => {

            if (
                gameRunning &&
                !shopResting
            ) {

                createCustomer();

            }

        },
        800
    );

}


// =====================================================
// CUSTOMER TIMER
// =====================================================

function startTimer() {

    clearInterval(
        timerInterval
    );


    updateTimer();


    timerInterval =
        setInterval(
            () => {

                if (
                    !gameRunning ||
                    shopResting
                ) {

                    return;

                }


                timeLeft -= 0.1;


                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    customerTimeout();

                }

            },
            100
        );

}


function startIdleTimer() {

    clearInterval(
        timerInterval
    );


    maxTime = 30;

    timeLeft = 30;


    timerInterval =
        setInterval(
            () => {

                if (
                    !gameRunning ||
                    shopResting
                ) {

                    return;

                }


                timeLeft -= 0.1;


                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    gameOver();

                }

            },
            100
        );

}


function updateTimer() {

    timerTextEl.textContent =
        Math.ceil(
            Math.max(
                0,
                timeLeft
            )
        );


    const percentage =
        Math.max(
            0,
            (
                timeLeft /
                maxTime
            ) * 100
        );


    timerBarEl.style.width =
        percentage + "%";


    if (
        percentage <= 25
    ) {

        timerBarEl.style.background =
            "#ef4444";

    }

    else if (
        percentage <= 50
    ) {

        timerBarEl.style.background =
            "#f59e0b";

    }

    else {

        timerBarEl.style.background =
            "#38bdf8";

    }

}


// =====================================================
// DAY TIMER
// =====================================================

function startDayTimer() {

    clearInterval(
        dayTimerInterval
    );


    updateDayTimer();


    dayTimerInterval =
        setInterval(
            () => {

                if (
                    !gameRunning
                ) {

                    return;

                }


                /*
                    PERHATIKAN:

                    Tidak ada pengecekan
                    shopResting di sini.

                    Jadi walaupun toko
                    istirahat, waktu hari
                    tetap berjalan.
                */

                dayTimeLeft -= 0.1;


                updateDayTimer();


                if (
                    dayTimeLeft <= 0
                ) {

                    nextDay();

                }

            },
            100
        );

}


// =====================================================
// DAY TIMER UI
// =====================================================

function updateDayTimer() {

    const minutes =
        Math.floor(
            dayTimeLeft / 60
        );


    const seconds =
        Math.floor(
            dayTimeLeft % 60
        );


    dayTimerText.textContent =

        String(minutes)
            .padStart(2,"0")
        +
        ":"
        +
        String(seconds)
            .padStart(2,"0");


    const percentage =
        (
            dayTimeLeft /
            DAY_DURATION
        )
        * 100;


    dayTimerBar.style.width =
        Math.max(
            0,
            percentage
        )
        + "%";

}


// =====================================================
// NEXT DAY
// =====================================================

function nextDay() {

    day++;


    dayTimeLeft =
        DAY_DURATION;


    /*
        Bonus saat hari baru.
    */

    score +=
        500;


    updateHighScore();


    showNotification(

        `🌅 HARI ${day}! +500 SCORE`,

        "info"

    );


    updateUI();

}


// =====================================================
// REST / OPEN SHOP
// =====================================================

restButton.addEventListener(
    "click",
    toggleRest
);


function toggleRest() {

    if (
        !gameRunning
    ) {

        return;

    }


    shopResting =
        !shopResting;


    if (
        shopResting
    ) {

        /*
            Toko tutup.

            Customer timer berhenti.
        */

        clearInterval(
            timerInterval
        );


        restButton.textContent =
            "▶️ BUKA TOKO";


        restButton.classList.add(
            "resting"
        );


        shopClosed.classList.remove(
            "hidden"
        );


        showNotification(
            "☕ Toko sedang istirahat. Waktu hari tetap berjalan.",
            "info"
        );

    }

    else {

        /*
            Toko buka kembali.
        */

        restButton.textContent =
            "☕ ISTIRAHAT";


        restButton.classList.remove(
            "resting"
        );


        shopClosed.classList.add(
            "hidden"
        );


        showNotification(
            "🏪 Toko kembali buka!",
            "success"
        );


        createCustomer();

    }

}


// =====================================================
// UPGRADE
// =====================================================

function getUpgradeCost() {

    return Math.floor(
        50000 *
        Math.pow(
            1.55,
            shopLevel-1
        )
    );

}


function getNextUnlock() {

    return unlockLevels[
        shopLevel+1
    ] || [];

}


function renderNextUnlock() {

    const container =
        document.getElementById(
            "nextUnlock"
        );


    container.innerHTML = "";


    const nextIds =
        getNextUnlock();


    if (
        nextIds.length === 0
    ) {

        container.innerHTML =
            "<span>🎉 Semua item sudah terbuka!</span>";

        return;

    }


    nextIds.forEach(
        id => {

            const item =
                items.find(
                    item =>
                        item.id === id
                );


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "unlock-item";


            div.textContent =
                `${item.icon} ${item.name}`;


            container.appendChild(div);

        }
    );

}


document.getElementById(
    "upgradeButton"
).addEventListener(
    "click",
    upgradeShop
);


function upgradeShop() {

    const cost =
        getUpgradeCost();


    if (
        !unlockLevels[
            shopLevel+1
        ]
    ) {

        showNotification(
            "🎉 Semua 30 item sudah terbuka!",
            "info"
        );

        return;

    }


    if (
        money < cost
    ) {

        showNotification(
            `❌ Uang kurang ${formatMoney(cost-money)}`,
            "error"
        );

        return;

    }


    money -= cost;


    shopLevel++;


    const newItems =
        unlockLevels[
            shopLevel
        ];


    newItems.forEach(
        id => {

            inventory[id] = 3;

        }
    );


    showNotification(
        `🎉 Upgrade Level ${shopLevel}! ${newItems.length} item baru terbuka.`,
        "success"
    );


    updateUI();

}


// =====================================================
// HIGH SCORE
// =====================================================

function updateHighScore() {

    if (
        score > highScore
    ) {

        highScore =
            score;


        localStorage.setItem(
            "tinyShopManagerHighScore",
            highScore
        );

    }

}


// =====================================================
// UI
// =====================================================

function updateUI() {

    moneyEl.textContent =
        formatMoney(money);


    scoreEl.textContent =
        score;


    highScoreEl.textContent =
        highScore;


    shopLevelEl.textContent =
        shopLevel;


    unlockedCountEl.textContent =
        `${getUnlockedItems().length} / 30`;


    customersServedEl.textContent =
        customersServed;


    dayEl.textContent =
        day;


    document.getElementById(
        "upgradeLevel"
    ).textContent =
        shopLevel;


    const upgradeCost =
        getUpgradeCost();


    document.getElementById(
        "upgradeCost"
    ).textContent =
        formatMoney(upgradeCost);


    document.getElementById(
        "upgradeDescription"
    ).textContent =

        getNextUnlock().length
        ?
        `Upgrade membuka ${getNextUnlock().length} item baru.`
        :
        "Semua item sudah terbuka.";


    const upgradeButton =
        document.getElementById(
            "upgradeButton"
        );


    if (
        !unlockLevels[
            shopLevel+1
        ]
    ) {

        upgradeButton.disabled =
            true;

        upgradeButton.textContent =
            "🎉 MAX LEVEL";

    }

    else {

        upgradeButton.disabled =
            money < upgradeCost;

        upgradeButton.textContent =
            "⬆️ UPGRADE SHOP";

    }


    renderInventory();

    renderRestock();

    renderNextUnlock();

    updateDayTimer();

}


// =====================================================
// NOTIFICATION
// =====================================================

let notificationTimeout;


function showNotification(
    message,
    type
) {

    notificationEl.textContent =
        message;


    notificationEl.className =
        "notification show "
        + type;


    clearTimeout(
        notificationTimeout
    );


    notificationTimeout =
        setTimeout(
            () => {

                notificationEl.classList.remove(
                    "show"
                );

            },
            2300
        );

}


// =====================================================
// CUSTOMER TIMEOUT
// =====================================================

function customerTimeout() {

    if (
        shopResting
    ) {

        return;

    }


    score =
        Math.max(
            0,
            score-50
        );


    showNotification(
        "😡 Customer pergi karena terlalu lama!",
        "error"
    );


    updateUI();


    setTimeout(
        () => {

            if (
                gameRunning &&
                !shopResting
            ) {

                createCustomer();

            }

        },
        900
    );

}


// =====================================================
// GAME OVER
// =====================================================

function gameOver() {

    gameRunning =
        false;


    clearInterval(
        timerInterval
    );


    clearInterval(
        dayTimerInterval
    );


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    document.getElementById(
        "finalMoney"
    ).textContent =
        formatMoney(money);


    document.getElementById(
        "finalDay"
    ).textContent =
        day;


    document.getElementById(
        "finalHighScore"
    ).textContent =
        highScore;


    document.getElementById(
        "gameOver"
    ).classList.remove(
        "hidden"
    );

}


// =====================================================
// RESTART
// =====================================================

document.getElementById(
    "restartButton"
).addEventListener(
    "click",
    restartGame
);


function restartGame() {

    clearInterval(
        timerInterval
    );


    clearInterval(
        dayTimerInterval
    );


    money = 150000;

    score = 0;

    shopLevel = 1;

    day = 1;

    customersServed = 0;

    gameRunning = true;

    shopResting = false;

    timeLeft = 60;

    maxTime = 60;

    dayTimeLeft =
        DAY_DURATION;


    items.forEach(
        item => {

            inventory[item.id] = 0;

        }
    );


    inventory[1] = 10;

    inventory[2] = 10;

    inventory[3] = 10;


    resetCash();


    restButton.textContent =
        "☕ ISTIRAHAT";


    restButton.classList.remove(
        "resting"
    );


    shopClosed.classList.add(
        "hidden"
    );


    document.getElementById(
        "gameOver"
    ).classList.add(
        "hidden"
    );


    updateUI();

    startDayTimer();

    createCustomer();

}


// =====================================================
// START GAME
// =====================================================

renderCashButtons();

updateUI();

startDayTimer();

createCustomer();