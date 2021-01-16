import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  //connect to DB
  const orm = await MikroORM.init(mikroConfig);
  // run table migrations
  await orm.getMigrator().up();

  // .em is enitity manager
  //generates SQL query to find all posts,
  //To select all entities, use em.find(Entity, {}) as value i.e return all posts
  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

main();
