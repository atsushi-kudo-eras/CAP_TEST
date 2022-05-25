let serialNumber = 1;

module.exports = (service) => {
  const { Users } = cds.entities("my.application");

  service.before("CREATE", "Users", async (req) => {
    // const tx = cds.transaction(req);
    // const data = tx.read("Users");

    // let db = await cds.connect.to("db");
    // let tx = db.tx();

    // await tx.run(SELECT.from(Users));
    // const data = await tx.read(Users);

    // console.log(data[0]);
    const { SELECT, INSERT } = cds.ql; //> gets local variables
    const q = SELECT.from("Users");
    // const data = SELECT.from(Users, 201);
    const data = SELECT.one
      .from(Users)
      .where({ ID: "6db6ac39-abb4-4eea-aa27-383452a2aef2" });
    console.log("data", data);

    // const one = await SELECT.one.from(Users);
    // console.log("one", one);

    // SELECT.from`Users`.columns((user) => {
    //   console.log("user", user);
    // });

    req.data.id = `SVP-${("00000" + serialNumber).slice(-5)}`;

    serialNumber += 1;
  });

  service.after("CREATE", "Users", (user) => {
    console.log("CREATE : user", user);
  });

  //  GET : /test/Users
  service.after("READ", "Users", (users) => {
    console.log(users);
    users[0].name = "test-test";
  });
};
