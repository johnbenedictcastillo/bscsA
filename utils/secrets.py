async def is_mod(ctx):
    return ctx.author.is_mod


async def is_sub(ctx):
    return ctx.author.is_subscriber


async def is_moehre(ctx):
    return ctx.author.id == 87252610