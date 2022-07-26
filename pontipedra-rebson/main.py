from twitchio.ext import commands
from requests import get

class Bot(commands.Bot):

    def __init__(self):
        super().__init__(token='oauth:mo8jlbqumw6f4oxmid5yuu5d63fmyk', prefix='!', initial_channels=['Soyaamilk'])

    async def event_ready(self):
        print(f'Logged in as | {self.nick}')
        print(f'User id is | {self.user_id}')

    async def event_message(self, message):
        if message.echo:
            return

        print(message.content)

        await self.handle_commands(message)

    @commands.command()
    async def hello(self, ctx: commands.Context):
        await ctx.send(f'Hello {ctx.author.name}!')

    @commands.command()
    async def followage(self, ctx: commands.Context):
        followage = get("https://api.crunchprank.net/twitch/followage/soyaamilk/" + ctx.author.name + "?precision=3").text
        await ctx.send(f'{followage}')

    @commands.command()
    async def facebook(self, ctx: commands.Context):
        await ctx.send("like us on facebook! --> https://www.facebook.com/sisutrash")

    @commands.command()
    async def instagram(self, ctx: commands.Context):
        await ctx.send("follow us on istagram! --> https://www.instagram.com/sisutrash_")

    @commands.command()
    async def discord(self, ctx: commands.Context):
        await ctx.send("join us on discord! --> https://discord.gg/WnAzDbPA2t")

    @commands.command()
    async def faq(self, ctx: commands.Context):
        await ctx.send("frequently asked questions: https://sisu.gg/faq")

    @commands.command()
    async def commandlist(self, ctx: commands.Context):
        await ctx.send("get the list of commands in our website: https://sisu.gg/bot/commands")


bot = Bot()
bot.run()