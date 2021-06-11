import withSession from "../../utils/session";

function handler(req, res) {
  const data = req.session.get("profile");
  if (data) {
    res.json({ isLoggedIn: true, ...data });
  } else {
    res.json({ isLoggedIn: false });
  }
}

export default withSession(handler);
