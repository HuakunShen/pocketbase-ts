// src/app.pb.ts
routerAdd("GET", "/hello/{name}", (e) => {
  let name = e.request?.pathValue("name");
  return e.json(200, {
    message: "Hello " + name,
  });
});

routerAdd("GET", "/ip", (e) => {
  const lib = require(`${__hooks}/lib.cjs`);
  return e.json(200, {
    message: lib.getIp(),
  });
});

routerAdd("GET", "/lorem", (e) => {
  const lib = require(`${__hooks}/lib.cjs`);
  return e.json(200, {
    message: lib.lorem(),
  });
});
