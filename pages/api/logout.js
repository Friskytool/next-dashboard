import withSession from "../../utils/session";

function handler(req, res) {
  req.session.destroy();
  res.redirect("/", 302);
}

export default withSession(handler);
