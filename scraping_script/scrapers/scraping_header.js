let header = new Headers();
// appending all additional data to header before making request
header.append("accept", "application/json, text/plain, */*");
header.append("accept-language", "en-US,en;q=0.9");
header.append("sec-ch-ua", "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"");
header.append("sec-ch-ua-mobile", "?0");
header.append("sec-ch-ua-platform", "\"Windows\"");
header.append("sec-fetch-dest", "empty");
header.append("sec-fetch-mode", "cors");
header.append("sec-fetch-site", "same-origin");
header.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36");

// request obj next to fetch make a GET req, include the header object and redirect
module.exports.requestOptions_GET = {
  method: 'GET',
  headers: header
}

module.exports.requestOptions_POST = (payload) => {
  return {
    method: 'POST',
    body: payload,
    headers: header
  }
}
