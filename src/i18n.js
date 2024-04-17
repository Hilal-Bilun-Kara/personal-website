import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      lang:"Türkçe",
      greeting: "Hi! 👋",
      mainText: "I’m Bilun. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
      freelancingText: "Currently",
      freelancingText1:"Freelancing",
      freelancingText2:"for",
      freelancingText3:"UX, UI, & Web Design",
      freelancingText4:"Project. Invite me to join your team->",
      email:"bilunkara@gmail.com",
      skills:"SKİLLS",
      profile:"PROFİLE",
      project:"PROJECTS",
      information:"Basic Information",
      date:"Date of birth",
      residence:"Residence",
      education:"Education",
      role:"Preferred Role",
      about:"About me",
      ViewonGithub:"View on Github",
      goToApp:"Go to App",
      footer:"Let’s work together on your next product."


    }
  },
  tr: {
    translation: {
      lang:"İngilizce",
      greeting: "Merhaba! 👋",
      mainText: "Ben Bilun. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünleri oluşturabilirim. Tanışalım!",
      freelancingText: "Şu anda",
      freelancingText1: "serbest çalışıyorum",
      freelancingText2: "",
      freelancingText3: "UX, UI ve Web Tasarımı",
      freelancingText4: "Ekibinize katılmak için davet edin ->",
      email: "bilunkara@gmail.com",
      skills:"YETENEKLER",
      profile:"PROFİLİM",
      project:"PROJELERİM",
      information: "Temel Bilgiler",
date: "Doğum Tarihi",
residence: "İkamet",
education: "Eğitim",
role: "Tercih Edilen Rol",
about:"Hakkımda",
ViewonGithub:"Github'da Görüntüle",
goToApp:"Uygulamaya Git",
footer:"Bir sonraki ürününüz üzerinde birlikte çalışalım."

    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;

