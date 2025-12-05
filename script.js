//function to load cryptocurrencies
async function loadCryptos() {
    console.log("Crypto function ready");
    
    //  API URL for fetching cryptocurrency data
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin,ethereum,solana,dogecoin,ripple,cardano,polkadot,litecoin&order=market_cap_desc";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data); 
}
 loadCryptos();