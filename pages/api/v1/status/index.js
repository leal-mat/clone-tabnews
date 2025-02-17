import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as SUM;");
  console.log(result.rows);
  return response.status(200).json({ response: "200" });
}

export default status;
