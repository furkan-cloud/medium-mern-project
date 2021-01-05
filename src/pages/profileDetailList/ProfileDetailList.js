import ArticleDetailCard from "../../components/articleDetailCard/ArticleDetailCard";
import "./ProfileDetailList.css";

const articleContent = [
  {
    profileImage: "https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg",
    username: "Faruk Cihan",
    imageUrl: "https://miro.medium.com/max/700/0*SDNcALTIIkdxaBfe",
    title: "Don’t Choose Your Main Programming Language Before Reading This",
    description:
      "Hello everyone! In this article, with my teammate Betül Çetinkaya, we are going to write about why we need to use Debezium",
    date: "Dec 8 · 4 min read",
    articleText:
      "Herkese Merhaba React ile uygulama geliştirirken farkettiğim birşey oldu, bu konu ile ilgili neredeyse hiç türkçe kaynak yok. İngilizce kaynaklar ise ,biliyorum ki -ingilizceyi çok iyi bilen insanlar için bile sıkıntı, çünkü aynı hızda ilerleyemiyorsun. Bu yüzden, React-Redux-Redux Saga-Redux-Thunk gibi react konularını, Webpack, Babel, Es6, Node.js gibi konulara değinecek bir yazı dizisi yapmaya karar verdim.Bu yazı dizinin ilk parçası, umarım birilerine faydalı olur diyerek lafı fazla uzatmadan konuya afilli bir girizgah yapalım. Interactive UI tasarımlarını acısız bir şekilde yapmanızı sağlar. React’ın resmi sitesindeki tanımı bu. Aslında hiç fena bir tanımlama değil. Herkes galiba Facebookun web sitesinden mesajlaşırken yaptığı refreshleri hatırlıyordur. Bu mesaj niye hala gelmedi yaaa!!!Hala mesaj atmadımı bana o??? F5-F5-F5 Facebook’da sağ tarafta sürekli bir hareketlilik vardır. Birşeyleri beğenenler ve online arkadaşlar anında güncellenir sağ kısımda. Hatırlayın hoşlandığınız kız acaba ‘online oldumu’ diye merak ederken yaptığınız refreshleri. Gerçek zamanlı güncellenen web siteleri geliştirmek bukadar zor olmamalı…   Bunlara çözüm olarak birçok javascript frameworkleri var. Angular, Ember gibi birçok gelişmiş faremwork var. .net icin durum biraz vahim.   Facebook’un ise bu problemleri cozmek için gelistirdigi sistem React.    İlginçde bir öyküsü var. Facebook şirketi React’ı geliştiriyor ve web sitesinde bolca kullanıyor. Sonra Zuckerberg iyi para dökerek instagramı satın alıyor. İnstagramı satan eleman şimdilerde köşe, keyfini sürüyor o paraların, ama İnstagram çalışanları için çok fazla birşey değişmiyor. Aynı işi yapmaya devam ediyorlar. O zamanlar instagramın mobil uygulamaları var ama Web sitesi yok. Zuckerberg bir web sitesi istiyor, bu arada İnstagram çalışanları Facebook çalışanları ile kaynaşmış kodları bile incelemiş.",
  },
  {
    profileImage: "https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg",
    username: "Faruk Cihan",
    imageUrl: "https://miro.medium.com/max/700/0*SDNcALTIIkdxaBfe",
    title: "Don’t Choose Your Main Programming Language Before Reading This",
    description:
      "Hello everyone! In this article, with my teammate Betül Çetinkaya, we are going to write about why we need to use Debezium",
    date: "Dec 8 ",
    readTime: "Read more · 4 min read",
    articleText:
      "Herkese Merhaba React ile uygulama geliştirirken farkettiğim birşey oldu, bu konu ile ilgili neredeyse hiç türkçe kaynak yok. İngilizce kaynaklar ise ,biliyorum ki -ingilizceyi çok iyi bilen insanlar için bile sıkıntı, çünkü aynı hızda ilerleyemiyorsun. Bu yüzden, React-Redux-Redux Saga-Redux-Thunk gibi react konularını, Webpack, Babel, Es6, Node.js gibi konulara değinecek bir yazı dizisi yapmaya karar verdim.Bu yazı dizinin ilk parçası, umarım birilerine faydalı olur diyerek lafı fazla uzatmadan konuya afilli bir girizgah yapalım. Interactive UI tasarımlarını acısız bir şekilde yapmanızı sağlar. React’ın resmi sitesindeki tanımı bu. Aslında hiç fena bir tanımlama değil. Herkes galiba Facebookun web sitesinden mesajlaşırken yaptığı refreshleri hatırlıyordur. Bu mesaj niye hala gelmedi yaaa!!!Hala mesaj atmadımı bana o??? F5-F5-F5 Facebook’da sağ tarafta sürekli bir hareketlilik vardır. Birşeyleri beğenenler ve online arkadaşlar anında güncellenir sağ kısımda. Hatırlayın hoşlandığınız kız acaba ‘online oldumu’ diye merak ederken yaptığınız refreshleri. Gerçek zamanlı güncellenen web siteleri geliştirmek bukadar zor olmamalı…   Bunlara çözüm olarak birçok javascript frameworkleri var. Angular, Ember gibi birçok gelişmiş faremwork var. .net icin durum biraz vahim.   Facebook’un ise bu problemleri cozmek için gelistirdigi sistem React.    İlginçde bir öyküsü var. Facebook şirketi React’ı geliştiriyor ve web sitesinde bolca kullanıyor. Sonra Zuckerberg iyi para dökerek instagramı satın alıyor. İnstagramı satan eleman şimdilerde köşe, keyfini sürüyor o paraların, ama İnstagram çalışanları için çok fazla birşey değişmiyor. Aynı işi yapmaya devam ediyorlar. O zamanlar instagramın mobil uygulamaları var ama Web sitesi yok. Zuckerberg bir web sitesi istiyor, bu arada İnstagram çalışanları Facebook çalışanları ile kaynaşmış kodları bile incelemiş.",
  },
];

const ProfileDetailList = () => {
  return (
    <div className="profileDetailListContainer">
      <div className="profileDetailImageContainer">
        <img
          className="profileDetailImage"
          src={articleContent[0].profileImage}
          alt=""
        />
      </div>

      <div className="profileDetailArticleContainer">
        {articleContent.map((content, index) => (
          <ArticleDetailCard
            date={content.date}
            title={content.title}
            articleText={content.articleText}
            imageUrl={content.imageUrl}
            readTime={content.readTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileDetailList;
