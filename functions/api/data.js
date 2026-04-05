// Cloudflare Pages Function — 綁定 D1 資料庫範例
// 環境變數 env.DB 對應到你在 Cloudflare Dashboard 設定的 D1 binding

export async function onRequestGet(context) {
  const { env } = context;

  try {
    // 範例：查詢 D1 資料庫
    // const { results } = await env.DB.prepare("SELECT * FROM records LIMIT 10").all();

    return new Response(JSON.stringify({
      ok: true,
      message: "Eco Tracker API is running",
      timestamp: new Date().toISOString()
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
