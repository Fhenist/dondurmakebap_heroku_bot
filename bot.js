const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
//const kufurler = require('./kufurler.json');
//const kufurKontrol = require('./kufurkontrol.js');
var prefix = ayarlar.prefix ;

function kufurKontrol(msg)
{
  var  kufurIcerenler = ["amk", "orospu",'sikik',"adam ol","aq"];
  var  kufurEsitler = ["oç", "göt"];
  var str = msg.content.toLowerCase();
  for (var i = 0; i < kufurIcerenler.length; i++)
  {
      if (str.includes(kufurIcerenler[i]))
        mesajSil(msg);
  }
  for (var i = 0; i < kufurEsitler.length; i++)
  {
    if (str === (kufurEsitler[i]))
      mesajSil(msg);
  }
}

function mesajSil(msg)
{
  msg.delete()
    .then(msgt =>
      console.log(`${msgt.author.username} Mesaj...: ${msg.content} silindi.`))
    .catch(console.error);
}

function panelYardim(msg)
{
  var str = msg.content.toLowerCase();
    if ( str === 'sa')
      msg.reply('Aleyküm Selam Hoşgeldin');
    else if (!str.startsWith(prefix))
      return;
    else if (str === prefix + 'panel')
      msg.reply('Panelimiz sadece Sunucu Sorumluları Ve Sunucu sahibimzde vardır')
    else if (str === prefix + 'youtube')
      msg.reply('https://www.youtube.com/channel/UCYzxidqS-hJni8gV1NHDnNA?view_as=subscriber')
    else if (str === prefix + 'toplantı')
      msg.reply('Cuma saat 8 de toplantımız var Yönetici üstü yetkililerin gelmesi zorunludur gelmeyenlerin özelden sunucu sahibine veya sorumlulara yazması rica ile belirtilir')
    else if (str === prefix + 'yetki')
      msg.reply('Yönetici :sınırsız 40Tl, 3Aylık:10TL,1Aylık:4Tl,1Yıllık:20TL,Kaptan sınırsız:25Tl,2Aylık 10Tl,1Aylık 3 Tl,Sınırsız  VİP :20 tl  3 Aylık::8TL  1Aylık: 3Tl,Reklamcı Rolü bedava ama sizin sayenizde servera 10 kişi gelip de sizin isminizi @ leyerek yazması lazım mesela ahmet isimli biri servera 10 kişi çağırdı ve geldi  bu kişilerin @ahmet den geliyoruz yazmaları lazım')
    else if (str === prefix + 'dk')
      msg.reply('Efendim kanka ben her zaman hizmet halindeyim,beni kullanmak için !..... yaz yeter')
    else if (str === prefix + 'kurallar')
      msg.reply('Kurallar:Küfür edersen uyarı 1 rolünü verirler aslan parçası,ailevi değerlerle dalga geçmek direk BAN hemde sınırsız,Sohbet dışında başka bir odada boş yapmak uyarı 1 sebebi Ben Dondurma Kebap Emrinizdeyim')
    else if (str === prefix + 'isim')
      msg.reply('Herkesin sadece bir kere server ismini değiştirme hakkı var')
    else if (str === prefix + 'kedi')
      msg.reply('https://www.google.com.tr/search?q=kedi&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiwo4ft263jAhXRJpoKHbDBDNcQ_AUIECgB&biw=889&bih=455#imgrc=Zutf2W9PC2RcGM:')
    else if (str === prefix + 'köpek')
      msg.reply('https://www.google.com.tr/search?biw=889&bih=455&tbm=isch&sa=1&ei=rZ0nXaf_MPHUgwf035noCQ&q=k%C3%B6pek&oq=k%C3%B6pek&gs_l=img.3..0i67j0l2j0i67l3j0l4.44763.52353..52523...14.0..0.159.1159.1j8......0....1..gws-wiz-img.....0..35i39j0i19j0i5i30i19j0i30i19.mGIp_dtEovs#imgrc=NRhEkwRyjeL5GM:')
    else if (str === prefix + 'p***n**')
      msg.reply('https://www.google.com.tr/search?q=pencil&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiX-cXM3K3jAhUoxaYKHWhNCWgQ_AUIECgB&biw=889&bih=455#imgrc=Wpe3DXNyNFursM:')
    else if (str === prefix + 'sorumlu')
      msg.reply('SonRotorBukucu ve Phoyraz bizim Discord sorumlularımızdır yetki gibi şeyler için olnlarla iletişime geçin')
    else if (str === prefix + 'whogay')
      msg.reply('SonRotorBukucu ve Efe sirduncan %100 gay ama arda 2601,Fhenist ve phoyraz %5 gay')
    else if (str === prefix + 'yapımcılar')
      msg.reply('Dondurma Kebapın paneli sadece @Fhenist de var ama Mee6 ve Diğer botların paneli @sorumlu larda var')
    else if (str === prefix + 'help')
      msg.reply('Selam Kardeşim Ben Dondurma Kebap öncellikle !help yazdığın için eyvallah şimdi bak:Kurallar için !kurallar,kimin gay olduğunu görmek isyosan !whogay,yapımcılar için !yapımcılar,yetki fiyatları veya beleş yetkiler için !yetki,toplantının ne zaman olduğunu öğrenmek için !toplantı,youtube kanalım içinde !youtube')
}
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
client.on('ready', () => {
  console.log(`Ben emrinizdeyim ${client.user.tag} emrinizde!`);
});

client.on('message', msg => {
  kufurKontrol(msg);
  panelYardim(msg);
});
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

client.login(process.env.BOT_TOKEN);
//client.login('6l4IhH1Jj3JkSxklWlpH9OKO2Mzoj-C9');
