https://interview-18-one.vercel.app/

<!-- `useBitcoin()` adlı custom hook yazın. Bu özel hook'un döndürdüğü değer Bitcoin'in Amerikan Doları cinsinden değeridir. Her bir dakikada , fiyat yeniden çekilmeli ve döndürülen değişken güncellenmelidir (bu, API'nin fiyatı güncellediği hızdır). Bitcoin'in Amerikan Doları cinsinden değerini almak için şu URL'ye bir GET isteği gönderin: https://api.coindesk.com/v1/bpi/currentprice.json. Ücretsiz API, aşağıdaki formatta bir JSON döner:


{
  "time": {
    "updated": "Jul 4, 2023 21:42:00 UTC",
    "updatedISO": "2023-07-04T21:42:00+00:00",
    "updateduk": "Jul 4, 2023 at 22:42 BST"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "chartName": "Bitcoin",
  "bpi": {
    "USD": {
      "code": "USD",
      "symbol": "&#36;",
      "rate": "19,531.8512",
      "description": "United States Dollar",
      "rate_float": 19531.8512
    },
    "GBP": {
      "code": "GBP",
      "symbol": "&pound;",
      "rate": "16,151.0440",
      "description": "British Pound Sterling",
      "rate_float": 16151.044
    },
    "EUR": {
      "code": "EUR",
      "symbol": "&euro;",
      "rate": "18,730.6351",
      "description": "Euro",
      "rate_float": 18730.6351
    }
  }
}

Geliştirirken API'ye istemleri yanlışlıkla sonsuz bir döngüde göndermemeye dikkat edin, böylece daha sonraki isteklerin engellenmemesi sağlanmış olur. Son olarak, özel hook'unuzu kullanan ve ekran üzerinde fiyatı görüntüleyen bir bileşen oluşturun. Özel hook'tan dönen değer undefined iken , yerine bir loading ekranı görüntüleyin. -->
