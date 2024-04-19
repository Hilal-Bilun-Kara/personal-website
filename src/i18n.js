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
      abouttext:"I possess technical skills such as website creation, updating, CRM, and database management, along with soft skills competencies like effective communication, teamwork, adaptability and motivation.",
      abouttext1:"In addition to the technical skills I acquired in the Department of Mathematics, I also value the social skills I acquired throughout my business life and seek out opportunities that can contribute to my development.",
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
abouttext:"Web sitesi oluşturma, güncelleme, CRM ve veritabanı yönetimi gibi teknik becerilerimle birlikte etkili iletişim, takım çalışması, uyum ve motivasyon gibi soft skills yeterliliklere de sahibim.",
abouttext1:"Matematik Bölümü'nde edindiğim teknik yeteneklerin yanı sıra çalışma yaşamının getirdiği soft skills becerilerine de önem veriyor ve gelişimime katkı sunabilecek fırsatları araştırıyorum.",
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

