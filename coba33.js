console.log("=== PROGRAM KONVERSI SUHU ===");
console.log("Masukkan suhu (angka):");

let temp = 0;
let tempSource = "";
let converTo = "";

process.stdin.once("data", function (dataTemp) {
  let inputTemp = dataTemp.toString().trim();

  if (isNaN(inputTemp)) {
    console.log('temp "harus angka"');
    process.exit();
  }

  temp = Number(inputTemp);
  console.log("Masukkan satuan asal (celcius / fahrenheit / kelvin / reamur):");

  process.stdin.once("data", function (dataSource) {
    tempSource = dataSource.toString().trim();

    console.log(
      "Masukkan satuan tujuan (celcius / fahrenheit / kelvin / reamur):"
    );

    process.stdin.once("data", function (dataTarget) {
      converTo = dataTarget.toString().trim();

      // ===== CELCIUS =====
      if (tempSource === "celcius") {
        if (converTo === "fahrenheit") {
          console.log("Hasil:", temp * (9 / 5) + 32);
        } else if (converTo === "kelvin") {
          console.log("Hasil:", temp + 273.15);
        } else if (converTo === "reamur") {
          console.log("Hasil:", (4 / 5) * temp);
        }
      }

      // ===== FAHRENHEIT =====
      else if (tempSource === "fahrenheit") {
        if (converTo === "celcius") {
          console.log("Hasil:", (temp - 32) * (5 / 9));
        } else if (converTo === "reamur") {
          console.log("Hasil:", (temp - 32) * (4 / 9));
        } else if (converTo === "kelvin") {
          console.log("Hasil:", (temp - 32) * (5 / 9) + 273.15);
        }
      }

      // ===== KELVIN =====
      else if (tempSource === "kelvin") {
        if (converTo === "celcius") {
          console.log("Hasil:", temp - 273.15);
        } else if (converTo === "fahrenheit") {
          console.log("Hasil:", (temp - 273.15) * (9 / 5) + 32);
        } else if (converTo === "reamur") {
          console.log("Hasil:", (4 / 5) * (temp - 273.15));
        }
      }

      // ===== REAMUR =====
      else if (tempSource === "reamur") {
        if (converTo === "celcius") {
          console.log("Hasil:", (5 / 4) * temp);
        } else if (converTo === "fahrenheit") {
          console.log("Hasil:", (temp * 9) / 4 + 32);
        } else if (converTo === "kelvin") {
          console.log("Hasil:", (temp * 5) / 4 + 273.15);
        }
      }

      process.exit();
    });
  });
});
