function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  
  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length';
  var i, j; // Used as a temporary index.

  var words = [];
  var asciiLength = ascii[lengthProperty];
  
  var hash = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];

  var k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  var hashBitLength = asciiLength * 8;
  var wordsLength = ((hashBitLength + 64) >>> 9 << 4) + 16;
  
  for (i = 0; i < wordsLength; i++) {
    words[i] = 0;
  }
  for (i = 0; i < asciiLength; i++) {
    words[i >>> 2] |= (ascii.charCodeAt(i) & 255) << (24 - (i % 4) * 8);
  }
  words[asciiLength >>> 2] |= 128 << (24 - (asciiLength % 4) * 8);
  words[wordsLength - 1] = hashBitLength;

  for (i = 0; i < wordsLength; i += 16) {
    var w = words.slice(i, i + 16);
    var oldHash = hash.slice(0);

    for (j = 0; j < 64; j++) {
      if (j >= 16) {
        var w15 = w[j - 15];
        var w2 = w[j - 2];
        var s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
        var s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
        w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
      }
      
      var a = hash[0], b = hash[1], c = hash[2], d = hash[3];
      var e = hash[4], f = hash[5], g = hash[6], h = hash[7];
      
      var s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      var maj = (a & b) ^ (a & c) ^ (b & c);
      var t2 = s0 + maj;
      
      var s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      var ch = (e & f) ^ (~e & g);
      var t1 = h + s1 + ch + k[j] + w[j];

      hash[7] = hash[6];
      hash[6] = hash[5];
      hash[5] = hash[4];
      hash[4] = (d + t1) | 0;
      hash[3] = hash[2];
      hash[2] = hash[1];
      hash[1] = hash[0];
      hash[0] = (t1 + t2) | 0;
    }

    for (j = 0; j < 8; j++) {
      hash[j] = (hash[j] + oldHash[j]) | 0;
    }
  }

  var finalHex = '';
  for (i = 0; i < 8; i++) {
    var word = hash[i];
    finalHex += ((word >>> 24) & 255).toString(16).padStart(2, '0') +
               ((word >>> 16) & 255).toString(16).padStart(2, '0') +
               ((word >>> 8) & 255).toString(16).padStart(2, '0') +
               (word & 255).toString(16).padStart(2, '0');
  }
  return finalHex;
}

console.log("Hash of Dhonijohny:", sha256("Dhonijohny"));
console.log("Expected: 1824b346dfd511433da2bc62b5e59b98a2e635b132fc71df1c1d9eccd5d1fad7");
