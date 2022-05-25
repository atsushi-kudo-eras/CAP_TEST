module.exports = (service) => {
  const { Users } = cds.entities("my.application");

  service.before("CREATE", "Users", async (req) => {
    console.log(req.data);
  });

  //  GET : /test/Users
  service.after("READ", "Users", (users) => {
    console.log(users);
    users[0].name = "test-test";
  });
};
