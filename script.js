//function to load cryptocurrencies
async function loadCryptos() {
    console.log("Crypto function ready");
    
    //  API URL for fetching cryptocurrency data
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin,ethereum,solana,dogecoin,ripple,cardano,polkadot,litecoin&order=market_cap_desc";

    const response = await fetch(url);
    const data = await response.json();

     const table = document.getElementById("cryptoTable");
    table.innerHTML = "";
    data.forEach(coin => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${coin.image}" width="30">
                ${coin.name}
            </td>
            <td>$${coin.current_price.toLocaleString()} CAD</td>
            <td>${coin.price_change_percentage_24h.toFixed(2)}%</td>
        `;
        table.appendChild(row);
    });



}
document.getElementById("refreshBtn").addEventListener("click", loadCryptos);

 loadCryptos();