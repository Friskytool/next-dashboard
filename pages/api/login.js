// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSession } from "next-session";

function handler(req, res) {
  const data = req.session.userData;
  if (data) {
    if (req.session.location) {
      res.redirect(req.session.location, 301);
      req.session.location = null;
    } else {
      res.redirect("/", 302);
    }
  } else {
    let h;
    if (req.headers.host.startsWith("localhost:")) {
      h = "http://";
    } else {
      h = "https://";
    }

    let uri = `https://discord.com/api/oauth2/authorize?client_id=${
      process.env.CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
      `${h}${req.headers.host}`
    )}%2fapi%2fcallback&response_type=code&scope=guilds%20identify&prompt=consent`;
    console.log(uri);
    res.redirect(uri, 302);
  }
}

export default withSession(handler);
