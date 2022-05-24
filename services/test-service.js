module.exports = (service) => {
  const { Users } = cds.entities("my.application");

  service.before("CREATE", "Users", async (req) => {
    console.log(req.data);
  });

  service.after("READ", "Users", (users, test) => {});
};
