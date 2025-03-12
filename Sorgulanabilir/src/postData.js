export default {
  comments: [
    {
      id: crypto.randomUUID(),
      userName: 'TomTheTechEnthusiast',
      isAnonymous: false,
      commentText:
        'ChatGPT gibi yapay zekanın ekonomide, toplumda ve hayatlarımızda daha iyi bir dönüşüm yaratacağını düşünüyorum. Bilimsel araştırmaları hızlandıracak, yaratıcı güçlerimizi artıracak ve emeğimizi daha üretken hale getirecektir.',
    },
    {
      id: crypto.randomUUID(),
      userName: 'SallyTheTechSkeptic',
      isAnonymous: true,
      commentText:
        'Tüm bu şeylerde devrim yaratacaklarına katılıyorum ama daha iyisi için değil. Onları kontrol eden şirketleri güçlendirecek ve işsiz bıraktıkları insanları güçsüzleştirecekler',
    },
    {
      id: crypto.randomUUID(),
      userName: 'AnnaTheTechAgnostic',
      isAnonymous: false,
      commentText:
        "Nerede durduğumdan emin değilim, çünkü şu anda teknoloji hala geçici bir hile gibi görünüyor. Bence hem savunucularının hem de eleştirmenlerinin aklındaki 'devrimsel' değişikliklerden çok uzaktayız.",
    },
  ],

  image1: './images/robot.jpg',
  image2: './images/code.jpg',
  mainQuestion: 'ChatGPT: İyi mi Kötü mü?',
  metaData: {
    userName: 'SamTheTechThinker',
    profilePic: '/images/profilePic.jpg',
    timeOfPost: new Date().toLocaleString([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    filedUnder: 'Toplum ve Teknoloji',
    views: 1132,
  },
  subQuestions: [
    {
      text: "Her şey için Moore Yasası'na ulaşma yolunda bir adım mı?",
      link: 'https://moores.samaltman.com/',
    },
    {
      text: 'Yapay zeka araştırmaları için çıkmaz sokak mı??',
      link: 'https://nautil.us/deep-learning-is-hitting-a-wall-238440/',
    },
    {
      text: 'Gelecek şeylerin şekli mi?',
      link: 'https://english.elpais.com/science-tech/2023-01-31/chatgpt-is-just-the-beginning-artificial-intelligence-is-ready-to-transform-the-world.html',
    },
    {
      text: 'Stokastik bir papağan mı?',
      link: 'https://dl.acm.org/doi/pdf/10.1145/3442188.3445922',
    },
    {
      text: 'İşsizliğe yol açacak mı?',
      link: 'https://www.cnet.com/science/chatgpt-is-a-stunning-ai-but-human-jobs-are-safe-for-now/',
    },
    {
      text: "Stack Overflow'un yaptığı gibi kuruluşlar bunu yasaklamalı mı?",
      link: 'https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned',
    },
  ],
}
