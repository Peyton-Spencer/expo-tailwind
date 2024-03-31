export async function GET(req: Request, { id }: Record<string, string>) {
  return Response.json({
    price: 19.99,
    id: id,
  });
}
