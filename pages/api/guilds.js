import withSession from "../../utils/session";

async function handler(req, res) {
  const userData = req.session.get("user");

  if (!userData?.headers) {
    res
      .status(403)
      .json({ message: "You must be authenticated to GET this endpoint" });
  } else {
    const rawGuildData = await fetch(
      "https://discordapp.com/api/v8/users/@me/guilds",
      {
        headers: userData.headers,
      }
    );
    const guildData = await rawGuildData.json();
    res.status(200).json({ data: guildData });
  }
}

export default withSession(handler);
