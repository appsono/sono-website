const repo = "appsono/sono-website";
const short = (sha) => sha.slice(0, 7);

export async function logVersion() {
  console.log(`sono-website running ${short(__COMMIT__)}`);

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/commits/main`,
      { headers: { Accept: "application/vnd.github.sha" } },
    );
    if (!response.ok) return;

    const latest = await response.text();
    const status = latest === __COMMIT__ ? "up to date" : "update pending";
    console.log(`sono-website latest ${short(latest)} (${status})`);
  } catch {}
}
