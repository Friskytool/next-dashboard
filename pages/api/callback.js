import withSession from "../../utils/session";

const { URLSearchParams } = require("url");

const data = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  grant_type: "authorization_code",
};

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};
async function handler(req, res) {
  const code = req.query?.code;
  const payload = new URLSearchParams();
  payload.append("code", code);

  let h;
  if (req.headers.host.startsWith("localhost:")) {
    h = "http://";
  } else {
    h = "https://";
  }
  payload.append("redirect_uri", `${h}${req.headers.host}/api/callback`);
  Object.keys(data).forEach((key) => {
    payload.append(key, data[key]);
  });
  const fetchResp = await fetch("https://discord.com/api/v8/oauth2/token", {
    method: "POST",
    headers: headers,
    body: payload,
  });
  const userData = await fetchResp.json();
  if (!("error" in userData) && userData["scope"] == "guilds identify") {
    let d = new Date();
    userData["expires_at"] = d.setTime(d.getTime() + userData["expires_in"]);
    userData["headers"] = {
      Authorization: `Bearer ${userData["access_token"]}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const rawProfileData = await fetch("https://discord.com/api/v8/users/@me", {
      headers: userData.headers,
    });
    const profileData = await rawProfileData.json();

    req.session.set("profile", profileData);
    req.session.set("user", userData);
    await req.session.save();
  }
  const loc = req.session.get("location");

  if (loc?.url) {
    req.session.unset("location");
    await req.session.save();
    res.redirect(loc.url, 301);
  } else {
    res.redirect("/dashboard", 302);
  }
}

export default withSession(handler);
