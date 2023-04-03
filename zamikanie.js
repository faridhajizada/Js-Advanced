function urlGenerator(domain) {
  return function (url) {
    `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

console.log(comUrl("google"));
console.log(comUrl("netflix"));
