function printBox(width, height) {
  for (let i = 1; i <= width; i++) {
    process.stdout.write("*");
  }
  console.log();

  for (let i = 1; i <= height - 2; i++) {
    process.stdout.write("*");

    for (let j = 1; j <= width - 2; j++) {
      process.stdout.write(" ");
    }
    console.log("*");
  }

  for (let i = 1; i <= width; i++) {
    process.stdout.write("*");
  }
  console.log();
}
printBox(5,4);