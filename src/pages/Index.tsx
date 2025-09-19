import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      title: "Строительство объектов связи «под ключ»",
      description: "Подбор лучшего места для объекта с точки зрения безопасности, радиопокрытия, требуемой категории энергоснабжения в самые короткие сроки",
      icon: "Building"
    },
    {
      title: "Проектирование и производство металлических конструкций",
      description: "Под цели самого прихотливого заказчика",
      icon: "Hammer"
    },
    {
      title: "Обеспечение юридического сопровождения",
      description: "В случае возникновения внимания со стороны надзорных органов или жителей",
      icon: "Scale"
    },
    {
      title: "Расчет радиопокрытия или трассы радиомоста",
      description: "Профессиональный расчет для оптимального покрытия сети",
      icon: "Radio"
    },
    {
      title: "Оформление земельных участков",
      description: "Под размещение объектов связи",
      icon: "Map"
    },
    {
      title: "Подключение оптоволоконного канала связи",
      description: "К вашему объекту",
      icon: "Cable"
    }
  ];

  const regions = [
    "Свердловская область",
    "Челябинская область", 
    "Тюменская область",
    "Курганская область"
  ];

  const partners = [
    "МТС",
    "Билайн", 
    "МегаФон",
    "Tele2"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-itower-dark via-slate-800 to-itower-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-itower-dark/95 backdrop-blur-sm border-b border-itower-blue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-itower-blue">
              ITower
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#home" className="text-white hover:text-itower-blue transition-colors">Главная</a>
              <a href="#services" className="text-white hover:text-itower-blue transition-colors">Услуги</a>
              <a href="#projects" className="text-white hover:text-itower-blue transition-colors">Проекты</a>
              <a href="#geography" className="text-white hover:text-itower-blue transition-colors">География</a>
              <a href="#about" className="text-white hover:text-itower-blue transition-colors">О компании</a>
              <a href="#partners" className="text-white hover:text-itower-blue transition-colors">Партнеры</a>
              <a href="#contacts" className="text-white hover:text-itower-blue transition-colors">Контакты</a>
            </div>
            <Button className="bg-itower-blue hover:bg-itower-blue/90">
              <Icon name="Phone" className="mr-2" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-itower-dark/90 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/img/b5f00429-25bf-4e83-bdec-514490f5afd6.jpg)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl pt-20">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
              Независимый<br />
              <span className="text-itower-blue">инфраструктурный</span><br />
              оператор
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Проектируем, строим и обслуживаем телекоммуникационную инфраструктуру 
              (ОДН, АМС, крышные позиции) для всех операторов мобильной связи
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-itower-blue hover:bg-itower-blue/90 text-white px-8 py-4 text-lg">
                <Icon name="Building" className="mr-2" size={20} />
                Наши услуги
              </Button>
              <Button variant="outline" size="lg" className="border-itower-blue text-itower-blue hover:bg-itower-blue hover:text-white px-8 py-4 text-lg">
                <Icon name="MapPin" className="mr-2" size={20} />
                География работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный спектр решений для создания надежной телекоммуникационной инфраструктуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border-itower-blue/20 hover:border-itower-blue/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-itower-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-itower-blue" size={24} />
                  </div>
                  <CardTitle className="text-white text-xl font-montserrat">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-itower-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Наши проекты
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Успешно реализованные объекты телекоммуникационной инфраструктуры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-itower-blue/20 to-itower-blue/5 border-itower-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-montserrat">150+</CardTitle>
                <CardDescription className="text-itower-gray">Объектов построено</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-itower-blue/20 to-itower-blue/5 border-itower-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-montserrat">4</CardTitle>
                <CardDescription className="text-itower-gray">Региона покрытия</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-itower-blue/20 to-itower-blue/5 border-itower-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-montserrat">99.9%</CardTitle>
                <CardDescription className="text-itower-gray">Надежность сети</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-20 bg-itower-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              География работы
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Обеспечиваем надежную связь в ключевых регионах Уральского федерального округа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-primary/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-white font-montserrat text-lg">
                    {region}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-itower-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-8">
              О компании ITower
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
                  Наша миссия
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Компания активно развивается, инвестируя собственные средства в создание 
                  надежной, безрисковой инфраструктуры.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Являясь социально ответственной компанией, мы выходим за рамки установленных 
                  законом обязательств и заботимся о благополучии общества и окружающей нас среды.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
                  Наши принципы
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Мы руководствуемся принципами взаимной выгоды для всех сторон нашей 
                  профессиональной сферы, при котором все участники достигают своей цели 
                  и остаются в выигрыше, не причиняя ущерба другим.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-itower-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              С кем сотрудничаем
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Работаем со всеми ведущими операторами мобильной связи России
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-card/40 backdrop-blur-sm border-primary/20 text-center p-8 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-montserrat">
                    {partner}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-itower-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Телефон</CardTitle>
                <CardDescription className="text-gray-300">+7 (xxx) xxx-xx-xx</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Email</CardTitle>
                <CardDescription className="text-gray-300">info@itower.ru</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Офис</CardTitle>
                <CardDescription className="text-gray-300">г. Екатеринбург</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Начать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-itower-dark border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-primary mb-4">
              ITower
            </div>
            <p className="text-gray-400 mb-6">
              Независимый инфраструктурный оператор телекоммуникационной связи
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>© 2024 ITower. Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;