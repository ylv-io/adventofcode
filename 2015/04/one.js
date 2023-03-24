const crypto = require("crypto");

const secret_key = "bgvyzdsv";
let i = 1;

while (true) {
  const string_to_hash = `${secret_key}${i}`;
  const hash_object = crypto.createHash("md5");
  const hex_digest = hash_object.update(string_to_hash).digest("hex");
  if (hex_digest.slice(0, 5) === "00000") {
    console.log(i);
    break;
  }
  i++;
}
