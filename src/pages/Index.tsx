
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Users, Database, Star, ArrowRight, CheckCircle, Download, Smartphone, Shield, Zap, Clock, BarChart3, Settings, Home, Wifi, Upload, FileText, Tags, Bell } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import PhoneMockup from "@/components/PhoneMockup";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

const Index = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage(content);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-xl">Memocall</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">{t.nav.home}</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">{t.nav.features}</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">{t.nav.pricing}</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">{t.nav.contact}</a>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={changeLanguage} />
          <Button className="bg-blue-600 hover:bg-blue-700">
            {t.nav.freeTrial}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t.hero.title}
          <br />
          <span className="text-blue-600">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center">
            {t.hero.cta1}
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg flex items-center justify-center">
            {t.hero.cta2}
          </Button>
        </div>

        {/* Phone Mockups */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-end space-x-8">
            <PhoneMockup 
              className="transform rotate-3 -translate-y-4"
              defaultContent={
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=600&fit=crop" 
                  alt="Interface de contacts" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              }
            />
            
            <PhoneMockup 
              className="z-10"
              backgroundColor="bg-blue-600"
              defaultContent={
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=600&fit=crop" 
                  alt="Écran d'historique d'appels" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              }
            />
            
            <PhoneMockup 
              className="transform -rotate-3 -translate-y-4"
              defaultContent={
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=600&fit=crop" 
                  alt="Statistiques et gestion" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              }
            />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-8">{t.hero.compatibility}</p>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-4">{t.features.security.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.security.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Labélisation des contacts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Import CSV, vCard</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Recherche multicritères</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-4">{t.features.connection.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.connection.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Notes Alerts par notification</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Templates SMS personnalisés</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Appels en un clic</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl mb-4">{t.features.management.title}</h3>
              <p className="text-gray-600 mb-6">{t.features.management.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Historisation des appels</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Notes d'appels</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Exportation personnalisée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">{t.howItWorks.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold text-lg mb-4">{t.howItWorks.step1.title}</h3>
              <p className="text-gray-600">{t.howItWorks.step1.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold text-lg mb-4">{t.howItWorks.step2.title}</h3>
              <p className="text-gray-600">{t.howItWorks.step2.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold text-lg mb-4">{t.howItWorks.step3.title}</h3>
              <p className="text-gray-600">{t.howItWorks.step3.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold text-lg mb-4">{t.howItWorks.step4.title}</h3>
              <p className="text-gray-600">{t.howItWorks.step4.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' ? 'Tarifs' : 'Pricing'}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLanguage === 'fr' ? 'Choisissez le plan qui vous convient' : 'Choose the plan that fits your needs'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="relative bg-white rounded-2xl shadow-sm border border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                  <p className="text-gray-600 mb-6">
                    {currentLanguage === 'fr' ? 'Testez l\'application' : 'Test the application'}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">0€</span>
                    <span className="text-gray-600">/{currentLanguage === 'fr' ? 'mois' : 'month'}</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Fonctionnalités de base' : 'Basic features'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Limité à 50 contacts' : 'Limited to 50 contacts'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Support communautaire' : 'Community support'}
                      </span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    {currentLanguage === 'fr' ? 'Commencer gratuitement' : 'Start for free'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Essential Plan */}
            <Card className="relative bg-white rounded-2xl shadow-lg border-2 border-blue-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">
                  {currentLanguage === 'fr' ? 'Populaire' : 'Popular'}
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
                  <p className="text-gray-600 mb-6">
                    {currentLanguage === 'fr' ? 'Toutes les fonctionnalités' : 'All features included'}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">1,5€</span>
                    <span className="text-gray-600">/{currentLanguage === 'fr' ? 'mois' : 'month'}</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Toutes les fonctionnalités' : 'All features'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Contacts illimités' : 'Unlimited contacts'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Support prioritaire' : 'Priority support'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Exportation de données' : 'Data export'}
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {currentLanguage === 'fr' ? 'Choisir Essential' : 'Choose Essential'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative bg-white rounded-2xl shadow-sm border border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                  <p className="text-gray-600 mb-6">
                    {currentLanguage === 'fr' ? 'Pour des besoins spécifiques' : 'For specific needs'}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {currentLanguage === 'fr' ? 'Sur mesure' : 'Custom'}
                    </span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Toutes les fonctionnalités Essential' : 'All Essential features'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Intégrations personnalisées' : 'Custom integrations'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Support dédié' : 'Dedicated support'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">
                        {currentLanguage === 'fr' ? 'Formation incluse' : 'Training included'}
                      </span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    {currentLanguage === 'fr' ? 'Nous contacter' : 'Contact us'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tally Form Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'fr' ? 'Rejoignez la liste d\'attente' : 'Join the waitlist'}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLanguage === 'fr' ? 'Soyez les premiers informés du lancement de Memocall' : 'Be the first to know when Memocall launches'}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <iframe 
              data-tally-src="https://tally.so/embed/wdGxGy?dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height={272} 
              frameBorder={0} 
              marginHeight={0} 
              marginWidth={0} 
              title="Join the waitlist"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Tally Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
          `
        }}
      />
    </div>
  );
};

export default Index;
