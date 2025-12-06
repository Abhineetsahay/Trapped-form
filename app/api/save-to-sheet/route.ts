// app/api/save-to-sheet/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("https://script.google.com/macros/s/AKfycbzyIPoDERJeF7tEknb_pCstD7_mNoOhD1NJV2yHgelva-dWkgTJz4Ko9N44KocTY_uNsg/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.text();
  return new Response(data, { status: 200 });
}
