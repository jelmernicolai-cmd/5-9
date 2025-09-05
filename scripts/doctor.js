/**
 * Simple non-fatal preflight check. Run: npm run doctor
 */
const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXTAUTH_SECRET",
  "NEXTAUTH_URL",
];
const optional = [
  "GOOGLE_ID","GOOGLE_SECRET",
  "GITHUB_ID","GITHUB_SECRET",
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_ENABLE_GOOGLE",
  "NEXT_PUBLIC_ENABLE_GITHUB",
];

function check(keys) {
  let ok = true;
  for (const k of keys) {
    if (!process.env[k] || String(process.env[k]).trim() === "") {
      console.log(`[-] Missing ${k}`);
      ok = false;
    } else {
      console.log(`[+] ${k} OK`);
    }
  }
  return ok;
}

console.log("== PharmaGtN Doctor ==");
const reqOk = check(required);
console.log("\nOptional:");
check(optional);

if (!reqOk) {
  console.log("\nSome required env vars are missing. The app will still build, but runtime auth may not work as expected.");
  process.exit(0); // non-fatal
} else {
  console.log("\nAll required env vars present.");
  process.exit(0);
}
