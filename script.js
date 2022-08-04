const Id = '1004513972856295575';

const DiscordRPC = require("discord-rpc");

DiscordRPC.register(Id)

const RPC  = new DiscordRPC.Client({ transport: 'ipc' });

const setActivity = {
    details: 'Test presemce',
    state: 'plating with RPC',
    large_imageKey: 'escape_from_tarkov_png21',
    large_text: "Escape From Tarkov NL/BE!",
    // small_imageKey: '',
    // small_textKey: 'EFT!',
    instance: false,
    buttons:[
        {label: 'Join our server'},
        {url: 'https://discord.gg/JutPDPJd72'},
    ]}

RPC.on("ready", async () =>
{
    RPC.request("SET_ACTIVITY", {pid: process.pid, activity: setActivity});
    console.log("Done.")
});

RPC.login({ clientId: Id }) //.catch(err => console.error(err))
