import { rest } from 'msw';

export const getMock = rest.get(
    '/mock', (req, res, ctx) => res(ctx.json({ data: 'hello world' }))
);