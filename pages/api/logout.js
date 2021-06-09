import { withSession } from "next-session";

function handler(req, res) {
  req.session.userData = null;
  res.redirect("/", 302);
}

export default withSession(handler);
