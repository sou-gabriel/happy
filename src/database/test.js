const Database = require("./db");
const saveOrphanage = require("./save-orphanage");

Database.then(async (db) => {
  // // Inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-27.222633",
  //   lng: "-49.6455874",
  //   name: "Lar dos meninos",
  //   about:
  //     "Presta assistência a crianças de 06 a 15 anos de idade que se encontre em situação de vulnerabilidade social.",
  //   whatsapp: "98989898",
  //   images: [
  //     "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //     "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar",
  //   opening_hours: "Horário de visitas Das 18h até 8h",
  //   open_on_weekends: "0",
  // });

  // // Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // Consultar somente um orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  // Deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id='6'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id='7'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id='8'"))

});
